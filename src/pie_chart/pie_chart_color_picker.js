const d3 = require("d3");

$("#pie_background_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#pie_div").style("background-color", color.toRgbString());
  },
});

$("#pie_border_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".pie_stroke").style("stroke", color.toRgbString());
  },
});

$("#pie_font_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".pie-font").style("fill", color.toRgbString());
    d3.selectAll(".pie-font").style("color", color.toRgbString());
  },
});

$("#pie_title_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {},
});
