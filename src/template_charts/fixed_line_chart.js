export function fixedLineChart() {
  function createData() {
    function makeDateArray() {
      let arr = [];
      let startDate = new Date("2020-01-01"); //YYYY-MM-DD
      let endDate = new Date("2020-03-01"); //YYYY-MM-DD

      while (startDate <= endDate) {
        arr.push(new Date(startDate));
        startDate.setDate(startDate.getDate() + 1);
      }
      return arr;
    }
    let dates = makeDateArray();

    let data = dates.map(function (x) {
      return {
        date: x,
        num: Math.floor(Math.random() * 101),
      };
    });
    return data;
  }

  const data = createData();

  console.log(data);

  const margin = { top: 30, left: 30, bottom: 30, right: 5 },
    width = 600 - margin.left - margin.right,
    height = 480 - margin.top - margin.bottom;

  const svg = d3
    .select("#line_chart_div")
    .append("svg")
    .attr("id", "line_chart")
    .attr("width", `${width + margin.left + margin.right}`)
    .attr("height", `${height + margin.top + margin.bottom}`);

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const xScale = d3
    .scaleTime()
    .domain(
      d3.extent(data, function (d) {
        return d.date;
      })
    )
    .range([0, width]);
  const yScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(data, function (d) {
        return d.num;
      }),
    ])
    .range([height, 0]);

  const xAxis = g
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));
  const yAxis = g.append("g").call(d3.axisLeft(yScale));

  const line = d3
    .line()
    .x(function (d) {
      return xScale(d.date);
    })
    .y(function (d) {
      return yScale(d.num);
    });

  g.append("path")
    .data([data])
    .attr("class", "line")
    .attr("d", line)
    .attr("stroke", "red")
    .attr("fill", "none");
}
