export function responsiveLineChart() {
  function createData() {
    function makeDateArray() {
      let arr = [];
      let startDate = new Date("2020-01-02"); //YYYY-MM-DD
      let endDate = new Date("2020-01-22"); //YYYY-MM-DD

      while (startDate <= endDate) {
        arr.push(new Date(startDate));
        startDate.setDate(startDate.getDate() + 1);
      }
      return arr;
    }
    let dates = makeDateArray();
    let i = 1;
    let data = dates.map(function (x) {
      i += 30;
      return {
        date: x,
        num: Math.floor(Math.random() * 101 + i++),
      };
    });
    return data;
  }

  const data = createData();

  console.log(data);

  const margin = { top: 80, right: 50, bottom: 80, left: 80 };

  const svg = d3
    .select("#line_chart_div")
    .append("svg")
    .attr("id", "line_chart")
    .attr("width", "100%")
    .attr("height", "100%");

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const title = g.append("text").attr("id", "line_title").text("Weather");

  const xAxisTitle = g
    .append("text")
    .attr("id", "line_xaxis_title")
    .text("Days");

  const yAxisTitle = g
    .append("text")
    .attr("id", "line_yaxis_title")
    .text("Temperature");

  const xScale = d3.scaleTime();
  const yScale = d3.scaleLinear();

  const xAxis = g.append("g").attr("id", "x_axis");
  const yAxis = g.append("g").attr("id", "y_axis");

  const xGrid = g.append("g").attr("class", "grid");
  const yGrid = g.append("g").attr("class", "grid");

  function make_x_gridlines() {
    return d3.axisBottom(xScale).ticks();
  }

  function make_y_gridlines() {
    return d3.axisLeft(yScale).ticks();
  }

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

    xGrid
      .attr("id", "x_grid")
      .attr("transform", "translate(0," + height + ")")
      .call(make_x_gridlines().tickSize(-height).tickFormat(""));

    yGrid
      .attr("id", "y_grid")
      .call(make_y_gridlines().tickSize(-width).tickFormat(""));

    title
      .attr("x", width / 2)
      .attr("y", -40)
      .attr("font-size", "1.1em")
      .attr("text-anchor", "middle");

    xAxisTitle
      .attr("x", width / 2)
      .attr("y", height + margin.top - 30)
      .attr("font-size", "0.9em")
      .attr("text-anchor", "middle");

    yAxisTitle
      .attr("x", 5 * -28)
      .attr("y", -50)
      .attr("font-size", "0.9em")
      .attr("text-anchor", "middle")
      .style("transform", "rotate(270deg)");

    linePath
      .data([data])
      .attr("class", "line")
      .attr("d", line)
      .attr("stroke", "red")
      .attr("stroke-width", "1px")
      .attr("fill", "none");

    // let tooltip = d3.select("body").append("div").attr("class", "line_tooltip");
    // d3.select(".line_tooltip").style("background-color", "white");
    // d3.select(".line_tooltip").style("border", "1px solid rgba(0,0,0,0.2)");

    const circles = g.selectAll("circles").data(data);

    circles.exit().remove();

    circles
      .enter()
      .append("circle")
      .attr("class", "circles")
      .attr("r", 3)
      .attr("cx", function (d, i) {
        return xScale(d.date);
      })
      .attr("cy", function (d, i) {
        return yScale(d.num);
      })
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("stroke-width", "1px");

    // .on("mousemove", function (d) {
    //   tooltip
    //     .style("left", d3.event.pageX + 10 + "px")
    //     .style("top", d3.event.pageY + 10 + "px")
    //     .style("display", "inline-block");
    // })
    // .on("mouseout", function (d) {
    //   tooltip.style("display", "none");
    // });

    // circles
    //   .attr("r", 2.5)
    //   .attr("cx", function (d, i) {
    //     return xScale(d.date);
    //   })
    //   .attr("cy", function (d, i) {
    //     return yScale(d.num);
    //   })
    //   .attr("fill", "black")
    //   .attr("stroke", "white")
    //   .attr("stroke-width", "2px");
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

  document.querySelector("#y_grid > g:nth-child(2) > line").remove();
}
