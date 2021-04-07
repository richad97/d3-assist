const d3 = require("d3");

export function pieChart() {
  const data = [20, 27, 43, 67, 88];

  const width = 400,
    height = 400,
    radius = Math.min(width, height) / 2;

  const svg = d3
    .select("#pie_div")
    .append("svg")
    .attr("id", "pie_chart")
    .attr("width", width)
    .attr("height", height);

  const g = svg
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const pieScale = d3.scaleOrdinal().range(["#98abc5", "#8a89a6", "#7b6888"]);

  const pie = d3
    .pie()
    .sort(null)
    .value(function (d) {
      return d;
    });

  const arc = d3
    .arc()
    .outerRadius(radius - 10)
    .innerRadius(100);

  const labelArc = d3
    .arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

  const arcs = g
    .selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

  arcs
    .append("path")
    .attr("d", arc)
    .attr("stroke", "white")
    .attr("stroke-width", "2px")
    .style("fill", function (d) {
      return pieScale(d.data);
    });

  arcs
    .append("text")
    .attr("transform", function (d) {
      return "translate(" + labelArc.centroid(d) + ")";
    })
    .attr("dy", ".35em")
    .text(function (d) {
      return d.data;
    });
}
