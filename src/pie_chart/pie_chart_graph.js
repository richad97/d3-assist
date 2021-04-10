const d3 = require("d3");

const data = [20, 27, 43, 67, 88];

const width = 350,
  height = 380,
  radius = Math.min(width, height) / 2;

const svg = d3
  .select("#pie_div")
  .append("svg")
  .attr("id", "pie_chart")
  .attr("width", width)
  .attr("height", height);

const g = svg
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2 + 20})`);

const tooltip = d3.select("body").append("div").attr("class", "pie_tooltip");

const title = svg.append("text");

title
  .attr("x", width / 2)
  .attr("y", 20)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("Title")
  .style("fill", "black");

const pieScale = d3.scaleOrdinal().range(["#98abc5", "#8a89a6", "#7b6888"]);

const pie = d3.pie().sort(null);

const arc = d3.arc();

const labelArc = d3.arc();

const slice = g
  .selectAll(".arc")
  .data(pie(data))
  .enter()
  .append("g")
  .attr("class", "arc");

const slices = slice.append("path");

// Tooltip
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

// let innerRadius = document.querySelector("#pie_inner_radius_slider");
// let outerRadius = document.querySelector("#pie_outer_radius_slider");

// let sliderValues = {
//   innerRadius: innerRadius.value,
//   outerRadius: outerRadius.value,
// };

export function pieRadii(innerRadius, outerRadius) {
  pie.value(function (d) {
    return d;
  });

  arc.outerRadius(radius - outerRadius).innerRadius(innerRadius);

  //labelArc.outerRadius(radius - 70).innerRadius(radius - 40);

  slices
    .attr("d", arc)
    .attr("stroke", "white")
    .attr("stroke-width", "2px")
    .style("fill", function (d) {
      return pieScale(d.data);
    });
}
// pieRadii(sliderValues.innerRadius, sliderValues.outerRadius);

// innerRadius.addEventListener("input", function () {
//   sliderValues.innerRadius = innerRadius.value;
//   pieRadii(sliderValues.innerRadius, sliderValues.outerRadius);
// });

// outerRadius.addEventListener("input", function () {
//   sliderValues.outerRadius = outerRadius.value;
//   pieRadii(sliderValues.innerRadius, sliderValues.outerRadius);
// });

// slices
//   .append("text")
//   .attr("class", "h_text")
//   .attr("display", "none")
//   .attr("transform", function (d) {
//     return "translate(" + labelArc.centroid(d) + ")";
//   })
//   .attr("dy", ".35em")
//   .text(function (d) {
//     return d.data;
//   });
