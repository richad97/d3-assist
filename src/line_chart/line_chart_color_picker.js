const d3 = require("d3");

import { lineValues } from "./line_chart_values.js";

$("#line_background_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.backgroundCP = color.toRgbString();

    d3.select("#line_chart").style("background-color", lineValues.backgroundCP);

    document.getElementById(
      "line_background_cp_span"
    ).innerHTML = color.toRgbString();
  },
});

$("#line_color_cp1").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.lineCP1 = color.toRgbString();

    d3.select("#line1").style("stroke", lineValues.lineCP1);

    document.getElementById("line_1_cp_span").innerHTML = color.toRgbString();
  },
});

$("#line_color_cp2").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.lineCP2 = color.toRgbString();

    d3.select("#line2").style("stroke", lineValues.lineCP2);

    document.getElementById("line_2_cp_span").innerHTML = color.toRgbString();
  },
});

$("#line_color_cp3").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.lineCP3 = color.toRgbString();

    d3.select("#line3").style("stroke", lineValues.lineCP3);

    document.getElementById("line_3_cp_span").innerHTML = color.toRgbString();
  },
});

$("#line_tick_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.tickCP = color.toRgbString();

    d3.selectAll("#line_chart > g > g > .tick > text").style(
      "fill",
      lineValues.tickCP
    );

    document.getElementById(
      "line_tick_cp_span"
    ).innerHTML = color.toRgbString();
  },
});

$("#line_title_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.titleCP = color.toRgbString();

    d3.select("#line_title").style("fill", lineValues.titleCP);

    document.getElementById(
      "line_title_cp_span"
    ).innerHTML = color.toRgbString();
  },
});

$("#line_xaxis_title_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.xAxisTitleCP = color.toRgbString();

    d3.select("#line_xaxis_title").style("fill", lineValues.xAxisTitleCP);

    document.getElementById(
      "line_x_title_cp_span"
    ).innerHTML = color.toRgbString();
  },
});

$("#line_yaxis_title_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.yAxisTitleCP = color.toRgbString();

    d3.select("#line_yaxis_title").style("fill", lineValues.yAxisTitleCP);

    document.getElementById(
      "line_y_title_cp_span"
    ).innerHTML = color.toRgbString();
  },
});

$("#line_grid_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.gridCP = color.toRgbString();

    d3.selectAll(".line_grid").style("color", lineValues.gridCP);

    document.getElementById(
      "line_grid_cp_span"
    ).innerHTML = color.toRgbString();
  },
});

$("#line_xaxis_line_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.xAxisLineCP = color.toRgbString();

    d3.select("#line_x_axis > path").style("stroke", lineValues.xAxisLineCP);

    document.getElementById(
      "line_x_line_cp_span"
    ).innerHTML = color.toRgbString();
  },
});

$("#line_yaxis_line_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.yAxisLineCP = color.toRgbString();

    d3.select("#line_y_axis > path").style("stroke", lineValues.yAxisLineCP);

    document.getElementById("line_y_line_cp_span").innerHTML =
      lineValues.yAxisLineCP;
  },
});

$("#line_datapoint_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.datapointCP = color.toRgbString();

    d3.selectAll(".circles_line").style("fill", lineValues.datapointCP);
    d3.selectAll(".circles_line2").style("fill", lineValues.datapointCP);
    d3.selectAll(".circles_line3").style("fill", lineValues.datapointCP);

    document.getElementById(
      "line_datapoint_cp_span"
    ).innerHTML = color.toRgbString();

    document.getElementById(
      "line_datapoint2_cp_span"
    ).innerHTML = color.toRgbString();
    document.getElementById(
      "line_datapoint3_cp_span"
    ).innerHTML = color.toRgbString();
  },
});

$("#line_datapoint_border_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.datapointBorderCP = color.toRgbString();

    d3.selectAll(".circles_line").style("stroke", lineValues.datapointBorderCP);
    d3.selectAll(".circles_line2").style(
      "stroke",
      lineValues.datapointBorderCP
    );
    d3.selectAll(".circles_line3").style(
      "stroke",
      lineValues.datapointBorderCP
    );

    document.getElementById(
      "line_datapoint_border_cp_span"
    ).innerHTML = color.toRgbString();
    document.getElementById(
      "line_datapoint2_border_cp_span"
    ).innerHTML = color.toRgbString();
    document.getElementById(
      "line_datapoint3_border_cp_span"
    ).innerHTML = color.toRgbString();
  },
});

$("#line_area_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    lineValues.areaCP = color.toRgbString();

    d3.select("#line_area").style("fill", lineValues.areaCP);

    document.getElementById(
      "line_area_cp_span"
    ).innerHTML = color.toRgbString();
  },
});
