const d3 = require("d3");

const data = [40, 27, 13, 67, 88];

const width = 350,
  height = 390,
  radius = Math.min(width, height) / 2;

const svg = d3
  .select("#pie_div")
  .append("svg")
  .attr("id", "pie_chart")
  .attr("width", "100%")
  .attr("height", height);

const pieChart = svg
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2 + 30})`);

const title = svg.append("text").attr("class", "pie-font");

title
  .attr("id", "pie_title")
  .attr("x", "58%")
  .attr("y", 25)
  .attr("text-anchor", "middle")
  .style("font-size", "1.1em")
  .text("Title");

const pieScale = d3.scaleOrdinal().range(["#98abc5", "#8a89a6", "#7b6888"]);

function sortLegend() {
  data.sort(function (a, b) {
    return a - b;
  });
}
sortLegend();

const pie = d3.pie();

const arc = d3.arc();

const labelArc = d3.arc();

const slice = pieChart
  .selectAll(".arc")
  .data(pie(data))
  .enter()
  .append("g")
  .attr("class", "arc");

const slices = slice.append("path");

function checkPieTooltip() {
  if (document.querySelector(".pie_tooltip")) {
    document.querySelector(".pie_tooltip").remove();
  }
}

function initPieTooltip() {
  checkPieTooltip();

  const tooltip = d3.select("body").append("div").attr("class", "pie_tooltip");

  slices
    .on("mousemove", function (d) {
      tooltip
        .style("left", d3.event.pageX + 10 + "px")
        .style("top", d3.event.pageY + 10 + "px")
        .style("display", "inline-block")
        .html(d.value);
    })
    .on("mouseout", function (d) {
      tooltip.style("display", "none");
    });
}

export function pieCalc(
  innerRadius,
  outerRadius,
  borderWidth,
  labelRadius,
  tooltipCheckbox
) {
  if (document.querySelector(".slice-labels")) {
    d3.selectAll(".slice-labels").remove();
  }
  pie.value(function (d) {
    return d;
  });

  arc.outerRadius(radius - outerRadius).innerRadius(innerRadius);

  labelArc.outerRadius(radius - 70).innerRadius(radius - labelRadius);

  slices
    .attr("d", arc)
    .attr("class", "pie_stroke")
    .attr("stroke", "white")
    .attr("stroke-width", `${borderWidth}px`)
    .style("fill", function (d) {
      return pieScale(d.data);
    });

  // label arc
  slice
    .append("text")
    .attr("class", "slice-labels")
    .attr("transform", function (d) {
      return "translate(" + labelArc.centroid(d) + ")";
    })
    .attr("dy", ".35em")
    .text(function (d) {
      return d.data;
    });

  if (tooltipCheckbox == "checked") {
    initPieTooltip();
  }
  if (tooltipCheckbox == "unchecked") {
    checkPieTooltip();
  }
}

function createLegend() {
  let legend = d3.select("#pie_div").append("div").attr("id", "legend");

  let pairs = legend.selectAll(".pairs").data(data);

  pairs
    .enter()
    .append("div")
    .attr("class", "pairs")
    .html(function (d) {
      return `<span class="legend-colors" style="background-color:${pieScale(
        d
      )}"></span><span class="pie-font">${d}</span>`;
    });
}

createLegend();
