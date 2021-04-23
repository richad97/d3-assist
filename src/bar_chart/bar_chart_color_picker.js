import { barValues } from "./bar_chart_values.js";
import { select, selectAll } from "d3-selection";

const d3 = { select, selectAll };

$("#bar_background_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    barValues.backgroudCP = color.toRgbString();

    d3.select("#bar_chart").style("background-color", barValues.backgroudCP);

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
    barValues.barsCP = color.toRgbString();

    d3.selectAll(".bars").style("fill", barValues.barsCP);

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
    barValues.tickCP = color.toRgbString();

    d3.selectAll("#bar_chart > g > g > .tick > text").style(
      "fill",
      barValues.tickCP
    );

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
    barValues.titleCP = color.toRgbString();

    d3.select("#bar_title").style("fill", barValues.titleCP);

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
    barValues.xAxisTitleCP = color.toRgbString();

    d3.select("#bar_xaxis_title").style("fill", barValues.xAxisTitleCP);

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
    barValues.yAxisTitleCP = color.toRgbString();

    d3.select("#bar_yaxis_title").style("fill", barValues.yAxisTitleCP);

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
    barValues.gridCP = color.toRgbString();

    d3.selectAll(".bar_grid").style("color", barValues.gridCP);

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
    barValues.xAxisLineCP = color.toRgbString();

    d3.select("#bar_x_axis > path").style("stroke", barValues.xAxisLineCP);

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
    barValues.yAxisLineCP = color.toRgbString();

    d3.select("#bar_y_axis > path").style("stroke", barValues.yAxisLineCP);

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
    barValues.borderCP = color.toRgbString();

    d3.selectAll(".bars").style("stroke", barValues.borderCP);

    document.getElementById("bar_border_cp_span").innerHTML =
      barValues.borderCP;
  },
});
