const d3 = require("d3");

const data = [40, 27, 13, 67, 88];

const width = 350,
  height = 400,
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
  .attr("x", "50%")
  .attr("y", 25)
  .attr("text-anchor", "middle")
  .style("font-size", "1.1em")
  .text("Client Demographic");

const pieScale = d3.scaleOrdinal();

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

const slices = slice.append("path").attr("class", "pie_stroke hovered");

function initPieTooltip() {
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
const labelSlices = slice.append("text").attr("class", "slice-labels");

// ["#98abc5", "#8a89a6", "#7b6888"] color array

let legend = d3
  .select("#pie_chart")
  .append("g")
  .attr("transform", `translate(${width + 100}, ${140})`)
  .attr("id", "legend");

let pairs = legend
  .selectAll(".pairs")
  .data(data)
  .enter()
  .append("g")
  .attr("class", "pairs");

let icon = d3.selectAll(".pairs").append("rect");

let num = d3
  .selectAll(".pairs")
  .append("text")
  .text(function (d) {
    return d;
  })
  .attr("x", 20)
  .attr("y", 10);

let i = 0;
let pair = d3.selectAll(".pairs");

pair.each(function (p, j) {
  d3.select(this).attr("transform", `translate(${0}, ${(i += 20)})`);
});

export function pieCalc(
  innerRadius,
  outerRadius,
  borderWidth,
  labelRadius,
  tooltipCheckbox,
  colorScaleArray
) {
  pieScale.range(colorScaleArray);

  // pairs.html(function (d) {
  //   return `<rect class="legend-colors" style="fill:${pieScale(
  //     d
  //   )}"></rect><text class="pie-font">${d}</text>`;
  // });

  icon
    .attr("height", "10px")
    .attr("width", "10px")
    .style("fill", function (d) {
      return pieScale(d);
    });

  pie.value(function (d) {
    return d;
  });

  arc.outerRadius(radius - outerRadius).innerRadius(innerRadius);

  labelArc.outerRadius(radius - 70).innerRadius(radius - labelRadius);

  slices
    .attr("d", arc)
    .attr("stroke", "white")
    .attr("stroke-width", `${borderWidth}px`)
    .style("fill", function (d) {
      return pieScale(d.data);
    });

  // label arc
  labelSlices
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
}
