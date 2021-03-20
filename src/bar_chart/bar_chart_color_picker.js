import { barValues } from "./bar_chart_values.js";

$("#bar_background_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("svg").style("background-color", color.toRgbString());

    barValues.backgroudCP = color.toRgbString();

    document.getElementById("bar_background_cp_span").innerHTML =
      barValues.backgroudCP;
  },
});
$("#bars_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".bars").style("fill", color.toRgbString());

    barValues.barsCP = color.toRgbString();

    document.getElementById("bar_cp_span").innerHTML = barValues.barsCP;
  },
});
$("#bar_tick_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".tick > text").style("fill", color.toRgbString());

    barValues.tickCP = color.toRgbString();

    document.getElementById("bar_tick_cp_span").innerHTML = barValues.tickCP;
  },
});
$("#bar_title_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#bar_title").style("fill", color.toRgbString());

    barValues.titleCP = color.toRgbString();

    document.getElementById("bar_title_cp_span").innerHTML = barValues.titleCP;
  },
});
$("#bar_xaxis_title_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#bar_xaxis_title").style("fill", color.toRgbString());

    barValues.xAxisTitleCP = color.toRgbString();

    document.getElementById("bar_x_title_cp_span").innerHTML =
      barValues.xAxisTitleCP;
  },
});
$("#bar_yaxis_title_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#bar_yaxis_title").style("fill", color.toRgbString());

    barValues.yAxisTitleCP = color.toRgbString();

    document.getElementById("bar_y_title_cp_span").innerHTML =
      barValues.yAxisTitleCP;
  },
});
$("#bar_grid_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".grid").style("color", color.toRgbString());

    barValues.gridCP = color.toRgbString();

    document.getElementById("bar_grid_cp_span").innerHTML = barValues.gridCP;
  },
});
$("#bar_xaxis_line_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#x_axis > path").style("stroke", color.toRgbString());

    barValues.xAxisLineCP = color.toRgbString();

    document.getElementById("bar_x_line_cp_span").innerHTML =
      barValues.xAxisLineCP;
  },
});
$("#bar_yaxis_line_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#y_axis > path").style("stroke", color.toRgbString());

    barValues.yAxisLineCP = color.toRgbString();

    document.getElementById("bar_y_line_cp_span").innerHTML =
      barValues.yAxisLineCP;
  },
});
$("#bar_border_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".bars").style("stroke", color.toRgbString());

    barValues.borderCP = color.toRgbString();

    document.getElementById("bar_border_cp_span").innerHTML =
      barValues.borderCP;
  },
});
