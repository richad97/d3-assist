import { lineValues } from "./line_chart_values.js";
import { select, selectAll } from "d3-selection";
import { scaleTime, scaleLinear } from "d3-scale";
import { axisBottom, axisLeft } from "d3-axis";
import { range, max, extent } from "d3-array";
import { line, area } from "d3-shape";
import { timeFormat } from "d3-time-format";
import { event as currentEvent } from "d3-selection";

const d3 = {
  select,
  selectAll,
  scaleTime,
  scaleLinear,
  axisBottom,
  axisLeft,
  range,
  max,
  extent,
  line,
  area,
  timeFormat,
};

export function lineChart(
  lineTitleInputValue,
  lineXAxisTitleInputValue,
  lineYAxisTitleInputValue,
  lineTitleSliderValue,
  lineXAxisTitleSliderValue,
  lineYAxisTitleSliderValue,
  lineWidthSliderValue,
  linePointRadiusSliderValue,
  lineTooltipCheckboxValue,
  lineDatapointCheckboxValue,
  lineXAxisGridCheckboxValue,
  lineYAxisGridCheckboxValue,
  lineXAxisLineCheckboxValue,
  lineYAxisLineCheckboxValue,
  lineHoverCheckboxValue,
  lineBackgroundCPValue,
  lineCPValue1,
  lineCPValue2,
  lineCPValue3,
  lineTickCPValue,
  lineTitleCPValue,
  lineXAxisTitleCPValue,
  lineYAxisTitleCPValue,
  lineGridCPValue,
  lineXAxisLineCPValue,
  lineYAxisLineCPValue,
  lineDatapointCPValue,
  lineDatapointBorderCPValue,
  lineAreaCPValue
) {
  function makeDateArray() {
    let arr = [],
      startDate = new Date("01/02/2020"),
      endDate = new Date("01/22/2020");

    while (startDate <= endDate) {
      arr.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }
    return arr;
  }

  function createData() {
    let dates = makeDateArray();
    let i = 1;
    let data = dates.map(function (x) {
      i += 30;
      return {
        date: x,
        num1: Math.floor(Math.random() * 101 + i++),
        num2: Math.floor(Math.random() * 101 + i++),
        num3: Math.floor(Math.random() * 101 + i++),
      };
    });
    return data;
  }

  const data = createData();

  const margin = { top: 80, right: 40, bottom: 80, left: 80 };

  const svg = d3
    .select("#line_div")
    .append("svg")
    .attr("id", "line_chart")
    .attr("width", "100%")
    .attr("height", "100%");

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const usableBounds = svg.node().getBoundingClientRect(),
    usableBoundWidth = usableBounds.width - margin.left - margin.right;

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

  const xAxis = g.append("g").attr("id", "line_x_axis");
  const yAxis = g.append("g").attr("id", "line_y_axis");

  const xGrid = g
    .append("g")
    .attr("class", "line_grid")
    .attr("id", "line_x_grid");

  const yGrid = g
    .append("g")
    .attr("class", "line_grid")
    .attr("id", "line_y_grid");

  function make_x_gridlines() {
    return d3.axisBottom(xScale).ticks();
  }

  function make_y_gridlines() {
    return d3.axisLeft(yScale).ticks();
  }

  const line1 = d3
    .line()
    .x(function (d) {
      return xScale(d.date);
    })
    .y(function (d) {
      return yScale(d.num1);
    });

  const line2 = d3
    .line()
    .x(function (d) {
      return xScale(d.date);
    })
    .y(function (d) {
      return yScale(d.num2);
    });

  const line3 = d3
    .line()
    .x(function (d) {
      return xScale(d.date);
    })
    .y(function (d) {
      return yScale(d.num3);
    });

  const linePath1 = g.append("path");
  const linePath2 = g.append("path");
  const linePath3 = g.append("path");

  const lineArea = g.append("path");

  const area = d3.area();

  let lineTitleSlider = document.getElementById("line_title_slider");
  let lineXAxisTitleSlider = document.getElementById("line_xaxis_title_slider");
  let lineWidthSpan = document.getElementById("line_width_span");

  function draw() {
    const bounds = svg.node().getBoundingClientRect(),
      width = bounds.width - margin.left - margin.right,
      width2 = bounds.width,
      height = bounds.height - margin.top - margin.bottom;

    lineTitleSlider.max = width;
    lineXAxisTitleSlider.max = width;

    lineTitleSlider.value = width / 2;
    lineXAxisTitleSlider.value = width / 2;

    lineWidthSpan.innerHTML = width2 - 20;

    document.getElementById("line_title_slider_span").innerHTML = width / 2;
    document.getElementById("line_x_title_slider_span").innerHTML = width / 2;

    lineValues.titleSlider = width / 2;
    lineValues.xAxisTitleSlider = width / 2;

    xScale.range([0, width]);
    yScale.range([height, 0]);

    xAxis
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale).ticks().tickFormat(d3.timeFormat("%b %e")));

    yAxis.call(d3.axisLeft(yScale));

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
      //.attr("x", 5 * -28)
      .attr("y", -50)
      .attr("font-size", "0.9em")
      .attr("text-anchor", "middle")
      .style("transform", "rotate(270deg)");

    area
      .x((d) => xScale(d.date))
      .y0(yScale(0))
      .y1((d) => yScale(d.num1));

    lineArea
      .datum(data)
      .attr("id", "line_area")
      .attr("fill", "rgba(159, 197, 232, 0.222)")
      .attr("d", area);

    linePath1
      .data([data])
      .attr("class", "line")
      .attr("id", "line1")
      .attr("d", line1)
      .attr("stroke", "red")
      //.attr("stroke-width", "0.5px")
      .attr("fill", "none");

    linePath2
      .data([data])
      .attr("class", "line")
      .attr("id", "line2")
      .attr("d", line2)
      .attr("stroke", "blue")
      .attr("stroke-width", "0.5px")
      .attr("fill", "none");

    linePath3
      .data([data])
      .attr("class", "line")
      .attr("id", "line3")
      .attr("d", line3)
      .attr("stroke", "green")
      .attr("stroke-width", "0.5px")
      .attr("fill", "none");

    const circles = g.selectAll(".circles_line").data(data);
    const circles2 = g.selectAll(".circles_line2").data(data);
    const circles3 = g.selectAll(".circles_line3").data(data);

    circles.exit().remove();

    circles
      .enter()
      .append("circle")
      .attr("class", "circles_line")
      .attr("r", 3)
      .attr("cx", function (d, i) {
        return xScale(d.date);
      })
      .attr("cy", function (d, i) {
        return yScale(d.num1);
      })
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("stroke-width", "1px");

    circles2
      .enter()
      .append("circle")
      .attr("class", "circles_line2")
      .attr("r", 3)
      .attr("cx", function (d, i) {
        return xScale(d.date);
      })
      .attr("cy", function (d, i) {
        return yScale(d.num2);
      })
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("stroke-width", "1px");

    circles3
      .enter()
      .append("circle")
      .attr("class", "circles_line3")
      .attr("r", 3)
      .attr("cx", function (d, i) {
        return xScale(d.date);
      })
      .attr("cy", function (d, i) {
        return yScale(d.num3);
      })
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("stroke-width", "1px");

    circles
      .attr("r", 3)
      .attr("cx", function (d, i) {
        return xScale(d.date);
      })
      .attr("cy", function (d, i) {
        return yScale(d.num1);
      })
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("stroke-width", "1px");

    circles2
      .attr("r", 3)
      .attr("cx", function (d, i) {
        return xScale(d.date);
      })
      .attr("cy", function (d, i) {
        return yScale(d.num2);
      })
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("stroke-width", "1px");

    circles3
      .attr("r", 3)
      .attr("cx", function (d, i) {
        return xScale(d.date);
      })
      .attr("cy", function (d, i) {
        return yScale(d.num3);
      })
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("stroke-width", "1px");
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
        return d.num1;
      }),
    ]);

    draw();
  }

  window.addEventListener("resize", draw);
  loadData();

  d3.select("#line_y_grid > g:nth-child(2) > line").remove();

  if (lineTitleInputValue != undefined) {
    if (lineTitleInputValue != "") {
      d3.select("#line_title").text(lineTitleInputValue);
    }
  }

  if (lineXAxisTitleInputValue != undefined) {
    if (lineXAxisTitleInputValue != "") {
      d3.select("#line_xaxis_title").text(lineXAxisTitleInputValue);
    }
  }

  if (lineYAxisTitleInputValue != undefined) {
    if (lineYAxisTitleInputValue != "") {
      d3.select("#line_yaxis_title").text(lineYAxisTitleInputValue);
    }
  }

  if (lineTitleSliderValue != undefined) {
    d3.select("#line_title").attr("x", usableBoundWidth / 2);
  }

  if (lineXAxisTitleSliderValue != undefined) {
    d3.select("#line_xaxis_title").attr("x", usableBoundWidth / 2);
  }

  if (lineYAxisTitleSliderValue != undefined) {
    d3.select("#line_yaxis_title").attr("x", lineYAxisTitleSliderValue * 20);
  }

  if (lineWidthSliderValue != undefined) {
    d3.select("#line1").attr("stroke-width", lineWidthSliderValue * 0.5);
    d3.select("#line2").attr("stroke-width", lineWidthSliderValue * 0.5);
    d3.select("#line3").attr("stroke-width", lineWidthSliderValue * 0.5);
  }

  if (linePointRadiusSliderValue != undefined) {
    d3.select(".circles_line").attr("r", linePointRadiusSliderValue * 0.5);
    d3.select(".circles_line2").attr("r", linePointRadiusSliderValue * 0.5);
    d3.select(".circles_line3").attr("r", linePointRadiusSliderValue * 0.5);
  }

  if (lineTooltipCheckboxValue != undefined) {
    if (lineTooltipCheckboxValue == "checked") {
      let tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "line_tooltip");

      let circles = d3.selectAll(".circles_line");
      let circles2 = d3.selectAll(".circles_line2");
      let circles3 = d3.selectAll(".circles_line3");
      circles
        .on("mousemove", function (d) {
          tooltip
            .style("left", currentEvent.pageX + 10 + "px")
            .style("top", currentEvent.pageY + 10 + "px")
            .style("display", "inline-block");
        })
        .on("mouseout", function (d) {
          tooltip.style("display", "none");
        });

      circles2
        .on("mousemove", function (d) {
          tooltip
            .style("left", currentEvent.pageX + 10 + "px")
            .style("top", currentEvent.pageY + 10 + "px")
            .style("display", "inline-block");
        })
        .on("mouseout", function (d) {
          tooltip.style("display", "none");
        });

      circles3
        .on("mousemove", function (d) {
          tooltip
            .style("left", currentEvent.pageX + 10 + "px")
            .style("top", currentEvent.pageY + 10 + "px")
            .style("display", "inline-block");
        })
        .on("mouseout", function (d) {
          tooltip.style("display", "none");
        });
    } else if (lineTooltipCheckboxValue == "unchecked") {
      let i = document.querySelector("body > div.line_tooltip");
      if (i != null) {
        i.remove();
      }
    }
  }

  if (lineDatapointCheckboxValue != undefined) {
    if (lineDatapointCheckboxValue == "checked") {
      d3.selectAll(".circles_line").attr("display", "");
      d3.selectAll(".circles_line2").attr("display", "");
      d3.selectAll(".circles_line3").attr("display", "");
    } else if (lineDatapointCheckboxValue == "unchecked") {
      d3.selectAll(".circles_line").attr("display", "none");
      d3.selectAll(".circles_line2").attr("display", "none");
      d3.selectAll(".circles_line3").attr("display", "none");
    }
  }

  if (lineXAxisGridCheckboxValue != undefined) {
    if (lineXAxisGridCheckboxValue == "checked") {
      d3.select("#line_x_grid").attr("display", "");
    } else if (lineXAxisGridCheckboxValue == "unchecked") {
      d3.select("#line_x_grid").attr("display", "none");
    }
  }

  if (lineYAxisGridCheckboxValue != undefined) {
    if (lineYAxisGridCheckboxValue == "checked") {
      d3.select("#line_y_grid").attr("display", "");
    } else if (lineYAxisGridCheckboxValue == "unchecked") {
      d3.select("#line_y_grid").attr("display", "none");
    }
  }

  if (lineXAxisLineCheckboxValue != undefined) {
    if (lineXAxisLineCheckboxValue == "checked") {
      d3.select("#line_x_axis > path").attr("display", "");
    } else if (lineXAxisLineCheckboxValue == "unchecked") {
      d3.select("#line_x_axis > path").attr("display", "none");
    }
  }

  if (lineYAxisLineCheckboxValue != undefined) {
    if (lineYAxisLineCheckboxValue == "checked") {
      d3.select("#line_y_axis > path").attr("display", "");
    } else if (lineYAxisLineCheckboxValue == "unchecked") {
      d3.select("#line_y_axis > path").attr("display", "none");
    }
  }

  if (lineHoverCheckboxValue != undefined) {
    if (lineHoverCheckboxValue == "checked") {
      d3.selectAll(".circles_line").classed("circle_hovered", true);
      d3.selectAll(".circles_line2").classed("circle_hovered", true);
      d3.selectAll(".circles_line3").classed("circle_hovered", true);
    } else if (lineHoverCheckboxValue == "unchecked") {
      d3.selectAll(".circles_line").classed("circle_hovered", false);
      d3.selectAll(".circles_line2").classed("circle_hovered", false);
      d3.selectAll(".circles_line3").classed("circle_hovered", false);
    }
  }

  if (lineBackgroundCPValue != undefined) {
    if (lineBackgroundCPValue != "") {
      d3.select("#line_chart").style("background-color", lineBackgroundCPValue);
    }
  }

  if (lineCPValue1 != undefined) {
    if (lineCPValue1 != "") {
      d3.select("#line1").style("stroke", lineCPValue1);
    }
  }

  if (lineCPValue2 != undefined) {
    if (lineCPValue2 != "") {
      d3.select("#line2").style("stroke", lineCPValue2);
    }
  }

  if (lineCPValue3 != undefined) {
    if (lineCPValue3 != "") {
      d3.select("#line3").style("stroke", lineCPValue3);
    }
  }

  if (lineTickCPValue != undefined) {
    if (lineTickCPValue != "") {
      d3.selectAll("#line_chart > g > g > .tick > text").style(
        "fill",
        lineTickCPValue
      );
    }
  }

  if (lineTitleCPValue != undefined) {
    if (lineTitleCPValue != "") {
      d3.select("#line_title").style("fill", lineTitleCPValue);
    }
  }

  if (lineXAxisTitleCPValue != undefined) {
    if (lineXAxisTitleCPValue != "") {
      d3.select("#line_xaxis_title").style("fill", lineXAxisTitleCPValue);
    }
  }

  if (lineYAxisTitleCPValue != undefined) {
    if (lineYAxisTitleCPValue != "") {
      d3.select("#line_yaxis_title").style("fill", lineYAxisTitleCPValue);
    }
  }

  if (lineGridCPValue != undefined) {
    if (lineGridCPValue != "") {
      d3.selectAll(".line_grid").style("color", lineGridCPValue);
    }
  }

  if (lineXAxisLineCPValue != undefined) {
    if (lineXAxisLineCPValue != "") {
      d3.select("#line_x_axis > path").style("stroke", lineXAxisLineCPValue);
    }
  }

  if (lineYAxisLineCPValue != undefined) {
    if (lineYAxisLineCPValue != "") {
      d3.select("#line_y_axis > path").style("stroke", lineYAxisLineCPValue);
    }
  }

  if (lineDatapointCPValue != undefined) {
    if (lineDatapointCPValue != "") {
      d3.selectAll(".circles_line").style("fill", lineDatapointCPValue);
      d3.selectAll(".circles_line2").style("fill", lineDatapointCPValue);
      d3.selectAll(".circles_line3").style("fill", lineDatapointCPValue);
    }
  }

  if (lineDatapointBorderCPValue != undefined) {
    if (lineDatapointBorderCPValue != "") {
      d3.selectAll(".circles_line").style("stroke", lineDatapointBorderCPValue);
      d3.selectAll(".circles_line2").style(
        "stroke",
        lineDatapointBorderCPValue
      );
      d3.selectAll(".circles_line3").style(
        "stroke",
        lineDatapointBorderCPValue
      );
    }
  }

  if (lineAreaCPValue != undefined) {
    if (lineAreaCPValue != "") {
      d3.select("#line_area").style("fill", lineAreaCPValue);
    }
  }
}
