export function responsiveLineChart() {
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

  const margin = { top: 30, left: 30, bottom: 30, right: 5 };

  const svg = d3
    .select("#line_chart_div")
    .append("svg")
    .attr("id", "line_chart")
    .attr("width", "100%")
    .attr("height", "400px");

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const xScale = d3.scaleTime();
  const yScale = d3.scaleLinear();

  const xAxis = g.append("g");
  const yAxis = g.append("g");

  const line = d3
    .line()
    .x(function (d) {
      return xScale(d.date);
    })
    .y(function (d) {
      return yScale(d.num);
    });

  let linePath = g.append("path");

  function draw() {
    const bounds = svg.node().getBoundingClientRect(),
      width = bounds.width - margin.left - margin.right,
      height = bounds.height - margin.top - margin.bottom;

    xScale.range([0, width]);
    yScale.range([height, 0]);

    xAxis
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));

    yAxis.call(d3.axisLeft(yScale));

    linePath
      .data([data])
      .attr("class", "line")
      .attr("d", line)
      .attr("stroke", "red")
      .attr("fill", "none");
  }

  function loadData() {
    xScale.domain(
      d3.extent(data, function (d) {
        return d.date;
      })
    );
    yScale.domain([
      0,
      d3.max(data, function (d) {
        return d.num;
      }),
    ]);

    draw();
  }

  window.addEventListener("resize", draw);
  loadData();
}
