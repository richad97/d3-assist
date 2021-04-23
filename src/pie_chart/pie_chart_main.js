import { pieCalc } from "./pie_chart_graph.js";
import { pieValues } from "./pie_chart_values.js";
import "./pie_chart_listeners";
import "./pie_chart_color_picker.js";
import { select, selectAll } from "d3-selection";
const d3 = { select, selectAll };

export function initPieChart() {
  pieCalc(
    pieValues.innerRadiusSlider,
    pieValues.outerRadiusSlider,
    pieValues.borderSlider,
    pieValues.labelRadiusSlider,
    pieValues.tooltipCheckbox,
    pieValues.colorScaleArray
  );
  document.querySelector("#pie_title_span").innerHTML = pieValues.titleInput;
  document.querySelector("#pie_title_slider_span").innerHTML =
    pieValues.titleSlider;
  document.querySelector("#pie_stroke_span").innerHTML = pieValues.borderSlider;
  document.querySelector("#pie_inner_radius_span").innerHTML =
    pieValues.innerRadiusSlider;
  document.querySelector("#pie_outer_radius_span").innerHTML =
    pieValues.outerRadiusSlider;
  document.querySelector("#pie_label_radius_span").innerHTML =
    pieValues.labelRadiusSlider;

  d3.select("#pie_tooltip_checkbox_span").classed("hide", false);
  d3.select("#pie_legend_checkbox_span").classed("hide", false);
  d3.select("#pie_hover_checkbox_span").classed("hide", false);
  d3.select("#pie_values_checkbox_span").classed("hide", false);

  document.querySelector("#pie_backgroud_cp_span").innerHTML =
    pieValues.backgroundCP;
  document.querySelector("#pie_border_cp_span").innerHTML = pieValues.borderCP;
  document.querySelector("#pie_title_cp_span").innerHTML = pieValues.fontCP;
  document.querySelector("#pie_legend_cp_span").innerHTML = pieValues.fontCP;
  document.querySelector("#pie_values_cp_span").innerHTML = pieValues.fontCP;
  document.querySelector("#pie_color1_cp_span").innerHTML =
    pieValues.colorScaleArray[0];
  document.querySelector("#pie_color2_cp_span").innerHTML =
    pieValues.colorScaleArray[1];
  document.querySelector("#pie_color3_cp_span").innerHTML =
    pieValues.colorScaleArray[2];

  d3.select("#pie_tran_x_span").html("175");
}
