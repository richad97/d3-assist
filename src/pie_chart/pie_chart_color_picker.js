import { pieCalc } from "./pie_chart_graph.js";
import { pieValues } from "./pie_chart_values.js";
import { select, selectAll } from "d3-selection";

const d3 = { select, selectAll };

$("#pie_background_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    pieValues.backgroundCP = color.toRgbString();
    d3.select("#pie_div").style("background-color", color.toRgbString());
    document.querySelector("#pie_backgroud_cp_span").innerHTML =
      pieValues.backgroundCP;
  },
});

$("#pie_border_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    pieValues.borderCP = color.toRgbString();
    d3.selectAll(".pie_stroke").style("stroke", color.toRgbString());
    document.querySelector("#pie_border_cp_span").innerHTML =
      pieValues.borderCP;
  },
});

$("#pie_font_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    pieValues.fontCP = color.toRgbString();
    d3.selectAll(".pie-font").style("fill", color.toRgbString());
    d3.selectAll(".pie-font").style("color", color.toRgbString());
    document.querySelector("#pie_title_cp_span").innerHTML = pieValues.fontCP;
    document.querySelector("#pie_legend_cp_span").innerHTML = pieValues.fontCP;
    document.querySelector("#pie_values_cp_span").innerHTML = pieValues.fontCP;
  },
});

$("#pie_color1_cp").spectrum({
  type: "color",
  preferredFormat: "hex",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    if (document.querySelector(".pie_tooltip")) {
      document.querySelector(".pie_tooltip").remove();
    }
    pieValues.colorScaleArray[0] = color.toString("hex");
    pieCalc(
      pieValues.innerRadiusSlider,
      pieValues.outerRadiusSlider,
      pieValues.borderSlider,
      pieValues.labelRadiusSlider,
      pieValues.tooltipCheckbox,
      pieValues.colorScaleArray
    );
    document.querySelector("#pie_color1_cp_span").innerHTML =
      pieValues.colorScaleArray[0];
  },
});

$("#pie_color2_cp").spectrum({
  type: "color",
  preferredFormat: "hex",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    if (document.querySelector(".pie_tooltip")) {
      document.querySelector(".pie_tooltip").remove();
    }
    pieValues.colorScaleArray[1] = color.toString("hex");
    pieCalc(
      pieValues.innerRadiusSlider,
      pieValues.outerRadiusSlider,
      pieValues.borderSlider,
      pieValues.labelRadiusSlider,
      pieValues.tooltipCheckbox,
      pieValues.colorScaleArray
    );
    document.querySelector("#pie_color2_cp_span").innerHTML =
      pieValues.colorScaleArray[1];
  },
});

$("#pie_color3_cp").spectrum({
  type: "color",
  preferredFormat: "hex",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    if (document.querySelector(".pie_tooltip")) {
      document.querySelector(".pie_tooltip").remove();
    }
    pieValues.colorScaleArray[2] = color.toString("hex");
    pieCalc(
      pieValues.innerRadiusSlider,
      pieValues.outerRadiusSlider,
      pieValues.borderSlider,
      pieValues.labelRadiusSlider,
      pieValues.tooltipCheckbox,
      pieValues.colorScaleArray
    );
    document.querySelector("#pie_color3_cp_span").innerHTML =
      pieValues.colorScaleArray[2];
  },
});
