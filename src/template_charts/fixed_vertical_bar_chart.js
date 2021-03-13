export function fixedVBarChart() {
  function createData(x, num) {
    let arr = [];
    let objNum = num + 1;
    for (let i = 1; i < objNum; i++) {
      let obj = {
        [x]: Math.floor(Math.random() * 11 + 1),
      };
      arr.push(obj);
    }
    return arr;
  }

  const data = createData("x", 5);

  const margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  const svg = d3
    .select("#bar_chart_div")
    .append("svg")
    .attr("id", "bar_chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  const g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const xScale = d3
    .scaleBand()
    .domain(d3.range(0, data.length))
    .range([0, width])
    .padding(0.4);

  const yScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(data, function (d) {
        return d.x;
      }),
    ])
    .range([height, 0]);

  const xAxis = g
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

  const yAxis = g.append("g").call(d3.axisLeft(yScale));

  const bars = g.selectAll("rect").data(data);

  bars.exit().remove();

  bars
    .enter()
    .append("rect")
    .attr("height", function (d, i) {
      return height - yScale(d.x);
    })
    .attr("x", function (d, i) {
      return xScale(i);
    })
    .attr("width", xScale.bandwidth())
    .attr("y", function (d) {
      return yScale(d.x);
    })
    .attr("fill", "red");
}
