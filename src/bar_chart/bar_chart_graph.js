const d3 = require("d3");

export function barChart(
  direction,
  barTitleInputValue,
  barXAxisTitleInputValue,
  barYAxisTitleInputValue,
  barTitleSliderValue,
  barXAxisTitleSliderValue,
  barYAxisTitleSliderValue,
  barXAxisGridCheckboxValue,
  barYAxisGridCheckboxValue,
  barHoverCheckboxValue,
  barXAxisLineCheckboxValue,
  barYAxisLineCheckboxValue,
  barTooltipCheckboxValue,
  barBackgroudCPValue,
  barBarsCPValue,
  barTickCPValue,
  barTitleCPValue,
  barXAxisTitleCPValue,
  barYAxisTitleCPValue,
  barGridCPValue,
  barXAxisLineCPValue,
  barYAxisLineCPValue,
  barBorderCPValue
) {
  let chart = document.getElementById("bar_chart");

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

  const margin = { top: 80, right: 50, bottom: 80, left: 70 };

  const svg = d3
    .select("#bar_div")
    .append("svg")
    .attr("id", "bar_chart")
    .attr("width", "100%")
    .attr("height", "100%");

  const g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const title = g.append("text").attr("id", "bar_title").text("Weather");

  const xAxisTitle = g
    .append("text")
    .attr("id", "bar_xaxis_title")
    .text("Days");

  const yAxisTitle = g
    .append("text")
    .attr("id", "bar_yaxis_title")
    .text("Temperature");

  const xAxis = g.append("g").attr("id", "bar_x_axis");

  const yAxis = g.append("g").attr("id", "bar_y_axis");

  const xGrid = g
    .append("g")
    .attr("class", "bar_grid")
    .attr("id", "bar_x_grid");
  const yGrid = g
    .append("g")
    .attr("class", "bar_grid")
    .attr("id", "bar_y_grid");

  if (direction == "horizontal") {
    const xScale = d3.scaleLinear();

    const yScale = d3.scaleBand().padding(0.3);

    function make_x_gridlines() {
      return d3.axisBottom(xScale).ticks();
    }

    function make_y_gridlines() {
      return d3.axisLeft(yScale).ticks();
    }

    function draw() {
      const bounds = svg.node().getBoundingClientRect(),
        width = bounds.width - margin.left - margin.right,
        height = bounds.height - margin.top - margin.bottom;

      xScale.rangeRound([0, width]);
      yScale.rangeRound([height, 0]);

      xAxis
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale).ticks());

      yAxis.call(d3.axisLeft(yScale).ticks());

      const xAxisLine = d3.select("#bar_chart > g > g.xAxis > path");
      const yAxisLine = d3.select("#bar_chart > g > g.yAxis > path");

      xAxisLine.attr("id", "bar_x_axis_line");
      yAxisLine.attr("id", "bar_y_axis_line");

      xGrid
        .attr("transform", "translate(0," + height + ")")
        .call(make_x_gridlines().tickSize(-height).tickFormat(""));

      yGrid.call(make_y_gridlines().tickSize(-width).tickFormat(""));

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
        .attr("y", -40)
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
        .attr("transform", "translate(" + 0 + ",0)");

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

    document.querySelector("#bar_x_grid > g:nth-child(2) > line").remove();
  } else if (direction == "vertical") {
    const xScale = d3.scaleBand().padding(0.3);

    const yScale = d3.scaleLinear();

    function make_x_gridlines() {
      return d3.axisBottom(xScale).ticks();
    }
    function make_y_gridlines() {
      return d3.axisLeft(yScale).ticks();
    }

    function draw() {
      const bounds = svg.node().getBoundingClientRect(),
        width = bounds.width - margin.left - margin.right,
        height = bounds.height - margin.top - margin.bottom;

      xScale.rangeRound([0, width]);
      yScale.rangeRound([height, 0]);

      xAxis
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale).ticks());

      yAxis.call(d3.axisLeft(yScale).ticks());

      const xAxisLine = d3.select("#bar_chart > g > g.xAxis > path");
      const yAxisLine = d3.select("#bar_chart > g > g.yAxis > path");

      xAxisLine.attr("id", "bar_x_axis_line");
      yAxisLine.attr("id", "bar_y_axis_line");

      xGrid
        .attr("transform", "translate(0," + height + ")")
        .call(make_x_gridlines().tickSize(-height).tickFormat(""));

      yGrid.call(make_y_gridlines().tickSize(-width).tickFormat(""));

      title
        .attr("x", width / 2 + 13)
        .attr("y", -40)
        .attr("text-anchor", "middle")
        .attr("font-size", "1.1em");

      xAxisTitle
        .attr("x", width / 2 + 13)
        .attr("y", height + margin.top - 30)
        .attr("font-size", "0.9em")
        .attr("text-anchor", "middle");

      yAxisTitle
        .attr("x", 5 * -28)
        .attr("y", -40)
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

    //document.querySelector("#x_grid > g:nth-child(2) > line").remove();
    document.querySelector("#bar_y_grid > g:nth-child(2) > line").remove();
  }

  if (barTitleInputValue != undefined) {
    if (barTitleInputValue != "") {
      d3.select("#bar_title").text(barTitleInputValue);
    }
  }

  if (barXAxisTitleInputValue != undefined) {
    if (barXAxisTitleInputValue != "") {
      d3.select("#bar_xaxis_title").text(barXAxisTitleInputValue);
    }
  }

  if (barYAxisTitleInputValue != undefined) {
    if (barYAxisTitleInputValue != "") {
      d3.select("#bar_yaxis_title").text(barYAxisTitleInputValue);
    }
  }

  if (barTitleSliderValue != undefined) {
    d3.select("#bar_title").attr("x", barTitleSliderValue * 20);
  }

  if (barXAxisTitleSliderValue != undefined) {
    d3.select("#bar_xaxis_title").attr("x", barXAxisTitleSliderValue * 20);
  }

  if (barYAxisTitleSliderValue != undefined) {
    d3.select("#bar_yaxis_title").attr("x", barYAxisTitleSliderValue * 20);
  }

  if (barXAxisGridCheckboxValue != undefined) {
    if (barXAxisGridCheckboxValue == "checked") {
      d3.select("#bar_x_grid").attr("display", "");
    } else if (barXAxisGridCheckboxValue == "unchecked") {
      d3.select("#bar_x_grid").attr("display", "none");
    }
  }
  if (barYAxisGridCheckboxValue != undefined) {
    if (barYAxisGridCheckboxValue == "checked") {
      d3.select("#bar_y_grid").attr("display", "");
    } else if (barYAxisGridCheckboxValue == "unchecked") {
      d3.select("#bar_y_grid").attr("display", "none");
    }
  }
  if (barHoverCheckboxValue != undefined) {
    if (barHoverCheckboxValue == "checked") {
      d3.selectAll("rect").classed("hovered", true);
    } else if (barHoverCheckboxValue == "unchecked") {
      d3.selectAll("rect").classed("hovered", false);
    }
  }
  if (barXAxisLineCheckboxValue != undefined) {
    if (barXAxisLineCheckboxValue == "checked") {
      d3.select("#bar_x_axis > path").attr("display", "");
    } else if (barXAxisLineCheckboxValue == "unchecked") {
      d3.select("#bar_x_axis > path").attr("display", "none");
    }
  }
  if (barYAxisLineCheckboxValue != undefined) {
    if (barYAxisLineCheckboxValue == "checked") {
      d3.select("#bar_y_axis > path").attr("display", "");
    } else if (barYAxisLineCheckboxValue == "unchecked") {
      d3.select("#bar_y_axis > path").attr("display", "none");
    }
  }
  if (barTooltipCheckboxValue != undefined) {
    if (barTooltipCheckboxValue == "checked") {
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
    } else if (barTooltipCheckboxValue == "unchecked") {
      d3.select(".bar_tooltip").remove();
    }
  }

  if (barBackgroudCPValue != undefined) {
    if (barBackgroudCPValue != "") {
      d3.select("#bar_chart").style("background-color", barBackgroudCPValue);
    }
  }
  if (barBarsCPValue != undefined) {
    if (barBarsCPValue != "") {
      d3.selectAll(".bars").style("fill", barBarsCPValue);
    }
  }
  if (barTickCPValue != undefined) {
    if (barTickCPValue != "") {
      d3.selectAll("#bar_chart > g > g > .tick > text").style(
        "fill",
        barTickCPValue
      );
    }
  }
  if (barTitleCPValue != undefined) {
    if (barTitleCPValue != "") {
      d3.select("#bar_title").style("fill", barTitleCPValue);
    }
  }
  if (barXAxisTitleCPValue != undefined) {
    if (barXAxisTitleCPValue != "") {
      d3.select("#bar_xaxis_title").style("fill", barXAxisTitleCPValue);
    }
  }
  if (barYAxisTitleCPValue != undefined) {
    if (barYAxisTitleCPValue != "") {
      d3.select("#bar_yaxis_title").style("fill", barYAxisTitleCPValue);
    }
  }
  if (barGridCPValue != undefined) {
    if (barGridCPValue != "") {
      d3.selectAll(".bar_grid").style("color", barGridCPValue);
    }
  }
  if (barXAxisLineCPValue != undefined) {
    if (barXAxisLineCPValue != "") {
      d3.select("#bar_x_axis > path").style("stroke", barXAxisLineCPValue);
    }
  }
  if (barYAxisLineCPValue != undefined) {
    if (barYAxisLineCPValue != "") {
      d3.select("#bar_y_axis > path").style("stroke", barYAxisLineCPValue);
    }
  }
  if (barBorderCPValue != undefined) {
    if (barBorderCPValue != "") {
      d3.selectAll("rect").attr("stroke", barBorderCPValue);
    }
  }
}
