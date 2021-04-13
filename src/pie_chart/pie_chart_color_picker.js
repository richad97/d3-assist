const d3 = require("d3");
import { pieCalc } from "./pie_chart_graph.js";
import { pieValues } from "./pie_chart_values.js";

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

$("#pie_color1_cp").spectrum({
  type: "color",
  preferredFormat: "hex",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    console.log(pieValues);
    pieValues.colorScaleArray[0] = color.toString("hex");
    pieCalc(
      pieValues.innerRadiusSlider,
      pieValues.outerRadiusSlider,
      pieValues.borderSlider,
      pieValues.labelRadiusSlider,
      pieValues.tooltipCheckbox,
      pieValues.colorScaleArray
    );
  },
});

$("#pie_color2_cp").spectrum({
  type: "color",
  preferredFormat: "hex",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    pieValues.colorScaleArray[1] = color.toString("hex");
    pieCalc(
      pieValues.innerRadiusSlider,
      pieValues.outerRadiusSlider,
      pieValues.borderSlider,
      pieValues.labelRadiusSlider,
      pieValues.tooltipCheckbox,
      pieValues.colorScaleArray
    );
  },
});

$("#pie_color3_cp").spectrum({
  type: "color",
  preferredFormat: "hex",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    pieValues.colorScaleArray[2] = color.toString("hex");
    pieCalc(
      pieValues.innerRadiusSlider,
      pieValues.outerRadiusSlider,
      pieValues.borderSlider,
      pieValues.labelRadiusSlider,
      pieValues.tooltipCheckbox,
      pieValues.colorScaleArray
    );
  },
});
