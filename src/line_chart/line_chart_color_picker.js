const d3 = require("d3");

import { lineValues } from "./line_chart_values.js";

$("#line_background_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("svg").style("background-color", color.toRgbString());

    lineValues.backgroundCP = color.toRgbString();

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
    d3.select("#line1").style("stroke", color.toRgbString());

    lineValues.lineCP1 = color.toRgbString();

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
    d3.select("#line2").style("stroke", color.toRgbString());

    lineValues.lineCP2 = color.toRgbString();

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
    d3.select("#line3").style("stroke", color.toRgbString());

    lineValues.lineCP3 = color.toRgbString();

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
    d3.selectAll(".tick > text").style("fill", color.toRgbString());

    lineValues.tickCP = color.toRgbString();

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
    d3.select("#line_title").style("fill", color.toRgbString());

    lineValues.titleCP = color.toRgbString();

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
    d3.select("#line_xaxis_title").style("fill", color.toRgbString());

    lineValues.xAxisTitleCP = color.toRgbString();

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
    d3.select("#line_yaxis_title").style("fill", color.toRgbString());

    lineValues.yAxisTitleCP = color.toRgbString();

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
    d3.selectAll(".grid").style("color", color.toRgbString());

    lineValues.gridCP = color.toRgbString();

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
    d3.select("#x_axis > path").style("stroke", color.toRgbString());

    lineValues.xAxisLineCP = color.toRgbString();

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
    d3.select("#y_axis > path").style("stroke", color.toRgbString());

    lineValues.yAxisLineCP = color.toRgbString();

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
    d3.selectAll(".circles").style("fill", color.toRgbString());

    lineValues.datapointCP = color.toRgbString();

    document.getElementById(
      "line_datapoint_cp_span"
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
    d3.selectAll(".circles").style("stroke", color.toRgbString());

    lineValues.datapointBorderCP = color.toRgbString();

    document.getElementById(
      "line_datapoint_border_cp_span"
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
    d3.select("#line_area").style("fill", color.toRgbString());

    lineValues.areaCP = color.toRgbString();

    document.getElementById(
      "line_area_cp_span"
    ).innerHTML = color.toRgbString();
  },
});
