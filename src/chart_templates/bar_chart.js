export function barChart(
  pDir,
  pTitle,
  pXTitle,
  pYTitle,
  pTitleSlider,
  pXTitleSlider,
  pYTitleSlider,
  pXGridCheckbox,
  pYGridCheckbox,
  pHoverCheckbox,
  pXLineCheckbox,
  pYLineCheckbox,
  pTooltipCheckbox,
  pBackgroundCP,
  pBarsCP,
  pTickCP,
  pTitleCP,
  pXTitleCP,
  pYTitleCP,
  pGridCP,
  pXLineCP,
  pYLineCP
) {
  var chart = document.getElementById("bar_chart");

  if (chart) {
    chart.remove();
  }

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

  const margin = { top: 80, right: 50, bottom: 100, left: 70 };
  // width = 600 - margin.left - margin.right,
  // height = 528 - margin.top - margin.bottom;

  const svg = d3
    .select("#bar_chart_div")
    .append("svg")
    .attr("id", "bar_chart")
    .attr("width", "100%")
    .attr("height", "530px");
  // .attr("width", width + margin.left + margin.right)
  // .attr("height", height + margin.top + margin.bottom);

  const g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // const title = g
  //   .append("text")
  //   .attr("id", "bar_title")
  //   .text("title")
  //   .attr("x", 0)
  //   .attr("y", -20);

  // const xAxisTitle = g
  //   .append("text")
  //   .attr("id", "bar_xaxis_title")
  //   .text("x axis")
  //   .attr("x", 0)
  //   .attr("y", 450);

  // const yAxisTitle = g
  //   .append("text")
  //   .attr("id", "bar_yaxis_title")
  //   .text("y axis")
  //   .attr("x", -60)
  //   .attr("y", 15);

  const title = g.append("text").attr("id", "bar_title").text("Weather");

  const xAxisTitle = g
    .append("text")
    .attr("id", "bar_xaxis_title")
    .text("Days");

  const yAxisTitle = g
    .append("text")
    .attr("id", "bar_yaxis_title")
    .text("Temperature");

  const xAxis = g.append("g").attr("id", "x_axis");

  const yAxis = g.append("g").attr("id", "y_axis");

  const xGrid = g.append("g").attr("class", "grid");

  const yGrid = g.append("g").attr("class", "grid");

  if (pDir == "horizontal") {
    const xScale = d3.scaleLinear();

    const yScale = d3.scaleBand().padding(0.3);

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
        .attr("x", width / 2)
        .attr("y", -40)
        .attr("font-size", "1.1em")
        .attr("text-anchor", "middle");

      xAxisTitle
        .attr("y", height + margin.top - 30)
        .attr("x", width / 2)
        .attr("font-size", "0.9em")
        .attr("text-anchor", "middle");

      yAxisTitle
        .attr("y", -40)
        .attr("x", 5 * -28)
        .attr("font-size", "0.9em")
        .attr("text-anchor", "middle")
        .style("transform", "rotate(270deg)");

      const bars = g.selectAll("rect").data(data);

      bars.exit().remove();

      bars
        .enter()
        .append("rect")
        .attr("class", "bars")

        .attr("width", function (d, i) {
          return xScale(d.x);
        })
        .attr("y", function (d, i) {
          return yScale(i);
        })
        .attr("height", yScale.bandwidth())
        .attr("transform", "translate(" + 0 * 1 + ",0)");

      bars
        .attr("width", function (d, i) {
          return xScale(d.x);
        })
        .attr("y", function (d, i) {
          return yScale(i);
        })
        .attr("height", yScale.bandwidth())
        .attr("transform", "translate(" + 0 * 1 + ",0)");
    }

    function loadData() {
      yScale.domain(d3.range(0, data.length));
      xScale.domain([
        0,
        d3.max(data, function (d) {
          return d.x;
        }),
      ]);

      draw();
    }

    window.addEventListener("resize", draw);
    loadData();
  } else if (pDir == "vertical") {
    const xScale = d3.scaleBand().padding(0.3);

    const yScale = d3.scaleLinear();

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
        .attr("x", width / 2)
        .attr("y", -40)
        .attr("text-anchor", "middle")
        .attr("font-size", "1.1em");

      xAxisTitle
        .attr("y", height + margin.top - 30)
        .attr("x", width / 2)
        .attr("font-size", "0.9em")
        .attr("text-anchor", "middle");

      yAxisTitle
        .attr("y", -40)
        .attr("x", 5 * -28)
        .attr("font-size", "0.9em")
        .attr("text-anchor", "middle")
        .style("transform", "rotate(270deg)");

      const bars = g.selectAll("rect").data(data);

      bars.exit().remove();

      bars
        .enter()
        .append("rect")
        .attr("class", "bars")
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
        .attr("transform", "translate(" + 0 + ",0)");

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
        .attr("transform", "translate(" + 0 + ",0)");
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
  }

  if (pTitle != undefined) {
    if (pTitle != "") {
      d3.select("#bar_title").text(pTitle);
    }
  }

  if (pXTitle != undefined) {
    if (pXTitle != "") {
      d3.select("#bar_xaxis_title").text(pXTitle);
    }
  }

  if (pYTitle != undefined) {
    if (pYTitle != "") {
      d3.select("#bar_yaxis_title").text(pYTitle);
    }
  }

  if (pTitleSlider != undefined) {
    d3.select("#bar_title").attr("x", pTitleSlider * 20);
  }

  if (pXTitleSlider != undefined) {
    d3.select("#bar_xaxis_title").attr("x", pXTitleSlider * 20);
  }

  if (pYTitleSlider != undefined) {
    d3.select("#bar_yaxis_title").attr("x", pYTitleSlider * 20);
  }

  if (pXGridCheckbox != undefined) {
    if (pXGridCheckbox == "checked") {
      d3.select("#x_grid").attr("display", "");
    } else if (pXGridCheckbox == "unchecked") {
      d3.select("#x_grid").attr("display", "none");
    }
  }
  if (pYGridCheckbox != undefined) {
    if (pYGridCheckbox == "checked") {
      d3.select("#y_grid").attr("display", "");
    } else if (pYGridCheckbox == "unchecked") {
      d3.select("#y_grid").attr("display", "none");
    }
  }
  if (pHoverCheckbox != undefined) {
    if (pHoverCheckbox == "checked") {
      d3.selectAll("rect").classed("hovered", true);
    } else if (pHoverCheckbox == "unchecked") {
      d3.selectAll("rect").classed("hovered", false);
    }
  }
  if (pXLineCheckbox != undefined) {
    if (pXLineCheckbox == "checked") {
      d3.select("#x_axis > path").attr("display", "");
    } else if (pXLineCheckbox == "unchecked") {
      d3.select("#x_axis > path").attr("display", "none");
    }
  }
  if (pYLineCheckbox != undefined) {
    if (pYLineCheckbox == "checked") {
      d3.select("#y_axis > path").attr("display", "");
    } else if (pYLineCheckbox == "unchecked") {
      d3.select("#y_axis > path").attr("display", "none");
    }
  }
  if (pTooltipCheckbox != undefined) {
    if (pTooltipCheckbox == "checked") {
      let tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "bar_tooltip");
      d3.select(".bar_tooltip").style("background-color", "white");
      d3.select(".bar_tooltip").style("border", "1px solid rgba(0,0,0,0.2)");
      let bars = d3.selectAll(".bars");
      bars
        .on("mousemove", function (d) {
          tooltip
            .style("left", d3.event.pageX + 10 + "px")
            .style("top", d3.event.pageY + 10 + "px")
            .style("display", "inline-block");
        })
        .on("mouseout", function (d) {
          tooltip.style("display", "none");
        });
    } else if (pTooltipCheckbox == "unchecked") {
      d3.select(".bar_tooltip").remove();
    }
  }

  if (pBackgroundCP != undefined) {
    if (pBackgroundCP != "") {
      d3.select("svg").style("background-color", pBackgroundCP);
    }
  }
  if (pBarsCP != undefined) {
    if (pBarsCP != "") {
      d3.selectAll(".bars").style("fill", pBarsCP);
    }
  }
  if (pTickCP != undefined) {
    if (pTickCP != "") {
      d3.selectAll(".tick > text").style("fill", pTickCP);
    }
  }
  if (pTitleCP != undefined) {
    if (pTitleCP != "") {
      d3.select("#bar_title").style("fill", pTitleCP);
    }
  }
  if (pXTitleCP != undefined) {
    if (pXTitleCP != "") {
      d3.select("#bar_xaxis_title").style("fill", pXTitleCP);
    }
  }
  if (pYTitleCP != undefined) {
    if (pYTitleCP != "") {
      d3.select("#bar_yaxis_title").style("fill", pYTitleCP);
    }
  }
  if (pGridCP != undefined) {
    if (pGridCP != "") {
      d3.selectAll(".grid").style("color", pGridCP);
    }
  }
  if (pXLineCP != undefined) {
    if (pXLineCP != "") {
      d3.select("#x_axis > path").style("stroke", pXLineCP);
    }
  }
  if (pYLineCP != undefined) {
    if (pYLineCP != "") {
      d3.select("#y_axis > path").style("stroke", pYLineCP);
    }
  }
}
