export function responsiveVBarChart() {
  function createData(x, y, num) {
    let arr = [];
    let objNum = num + 1;
    for (let i = 1; i < objNum; i++) {
      let obj = {
        [x]: Math.floor(Math.random() * 11 + 1),
        [y]: Math.floor(Math.random() * 11 + 1),
      };
      arr.push(obj);
    }
    return arr;
  }

  const data = createData("x", "y", 10);

  const margin = { top: 80, right: 50, bottom: 80, left: 70 };

  const svg = d3
    .select("#bar_chart_div")
    .append("svg")
    .attr("id", "bar_chart")
    .attr("width", "100%")
    .attr("height", "440px")
    .style("background-color", "rgba(255,255,255,1)");

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const xScale = d3.scaleBand().padding(0.3);

  const yScale = d3.scaleLinear();

  const xAxis = g.append("g").attr("class", "xAxis");

  const yAxis = g.append("g").attr("class", "yAxis");

  const xGrid = g.append("g").attr("class", "grid");

  const yGrid = g.append("g").attr("class", "grid");

  const title = g
    .append("text")
    .text("Weather")
    .style("fill", "rgba(0,0,0,0.42)");

  const xAxisLabel = g
    .append("text")
    .text("Days")
    .style("fill", "rgba(0,0,0,0.42)");

  const yAxisLabel = g
    .append("text")
    .text("Temperature")
    .style("fill", "rgba(0,0,0,0.42)");

  function make_x_gridlines() {
    return d3.axisBottom(xScale).ticks(5);
  }
  function make_y_gridlines() {
    return d3.axisLeft(yScale).ticks(5);
  }

  function draw() {
    const bounds = svg.node().getBoundingClientRect(),
      width = bounds.width - margin.left - margin.right,
      height = bounds.height - margin.top - margin.bottom;

    xScale.rangeRound([0, width]);
    yScale.rangeRound([height, 0]);

    xAxis
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale).ticks(5));

    yAxis.call(d3.axisLeft(yScale).ticks(5));

    const xAxisLine = d3.select("#bar_chart > g > g.xAxis > path");
    const yAxisLine = d3.select("#bar_chart > g > g.yAxis > path");

    xAxisLine.attr("id", "x_axis_line");
    yAxisLine.attr("id", "y_axis_line");

    xGrid
      .attr("id", "x_grid")
      .attr("transform", "translate(0," + height + ")")
      .call(make_x_gridlines().tickSize(-height).tickFormat(""));

    yGrid
      .attr("id", "y_grid")
      .call(make_y_gridlines().tickSize(-width).tickFormat(""));

    title
      .attr("class", "label_text")
      .attr("id", "chart_title")
      .attr("x", width / 2)
      .attr("y", -40)
      .attr("text-anchor", "middle")
      .attr("font-size", "1.1em");

    xAxisLabel
      .attr("class", "label_text")
      .attr("id", "x_axis_label")
      .attr("x", width / 2)
      .attr("y", height + margin.top - 30)
      .attr("font-size", "0.9em")
      .attr("text-anchor", "middle");

    yAxisLabel
      .attr("class", "label_text")
      .attr("id", "y_axis_label")
      .attr("y", -40)
      .attr("x", 5 * -28)
      .attr("font-size", "0.9em")
      .attr("text-anchor", "middle")
      .style("transform", "rotate(270deg)");

    const bars = g.selectAll("rect").attr("id", "all_bars").data(data);

    bars.exit().remove();

    bars
      .enter()
      .append("rect")
      .attr("x", function (d, i) {
        return xScale(i);
      })
      .attr("width", xScale.bandwidth() * (18 * 0.05))
      .attr("y", function (d) {
        return yScale(d.y);
      })
      .attr("height", function (d) {
        return height - yScale(d.y);
      })
      .attr("transform", "translate(" + 0 * 1 + ",0)")
      .attr("fill", "rgba(255,229,126,0.66)")
      .attr("stroke", "rgba(0,0,0,0.1)");

    bars
      .attr("x", function (d, i) {
        return xScale(i);
      })
      .attr("width", xScale.bandwidth() * (18 * 0.05))
      .attr("y", function (d) {
        return yScale(d.y);
      })
      .attr("height", function (d) {
        return height - yScale(d.y);
      })
      .attr("transform", "translate(" + 0 * 1 + ",0)")
      .attr("fill", "rgba(255,229,126,0.66)")
      .attr("stroke", "rgba(0,0,0,0.1)");
  }

  function loadData() {
    xScale.domain(d3.range(0, data.length));
    yScale.domain([
      0,
      d3.max(data, function (d) {
        return d.y;
      }),
    ]);

    draw();
  }

  window.addEventListener("resize", draw);
  loadData();

  /*

    d3.select("#y_grid > path").style("display", "none");
    d3.selectAll(".xAxis>.tick>line").style("display", "none");
    d3.selectAll(".yAxis>.tick>line").style("display", "none");
    d3.select("#y_axis_line").style("display","none")
    d3.select("#y_grid").style("display","")
    d3.select("#x_axis_line").style("display","")
    d3.select("#x_grid").style("display", "none")
    d3.select("#x_axis_line").style("stroke","rgba(0,0,0,0.1)")
    d3.select("#y_axis_line").style("stroke", "rgba(0,0,0,1)")
    d3.selectAll(".tick>text").style("fill","rgba(0,0,0,0.29)")
    d3.selectAll("rect").classed("test bar",true)
    svg.selectAll(".grid>.tick>line").style("stroke", "rgba(192,192,192,0.15)")

    let tooltip = d3.select("body")
        .append("div")
        .attr("class", "bar_tooltip");

    d3.select(".bar_tooltip").style("background-color", "rgba(255,255,255,1)");
    d3.select(".bar_tooltip").style("border", "1px solid rgba(0,0,0,0.2)");

    bars = d3.selectAll(".bar");
    bars.on("mousemove", function(d){
        tooltip
            .style("left", d3.event.pageX + 10 + "px")
            .style("top", d3.event.pageY + 10 + "px")
            .style("display", "inline-block")
        })
        .on("mouseout", function(d){ tooltip.style("display", "none");});

    //  Tooltip and Hover Styling
    /*
    .bar_tooltip {
        position: absolute;
        display: none;
        min-width: 80px;
        height: auto;
        background: none repeat scroll;
        border: 1px solid #6F257F;
        padding: 14px;
        text-align: center;
        background-color: white;
        z-index: 1;
    }
    .test:hover {
        fill-opacity: 0.7;
    }
    */
}
