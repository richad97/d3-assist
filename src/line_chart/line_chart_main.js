import { lineChart } from "./line_chart_graph.js";
import { lineValues } from "./line_chart_values.js";
import "./line_chart_listeners.js";
import "./line_chart_color_picker.js";
import { select, selectAll } from "d3-selection";

const d3 = { select, selectAll };

export function initLineChart() {
  lineChart(
    lineValues.titleInput,
    lineValues.xAxisTitleInput,
    lineValues.yAxisTitleInput,
    lineValues.titleSlider,
    lineValues.xAxisTitleSlider,
    lineValues.yAxisTitleSlider,
    lineValues.widthSlider,
    lineValues.pointRadiusSlider,
    lineValues.tooltipCheckbox,
    lineValues.datapointCheckbox,
    lineValues.xAxisGridCheckbox,
    lineValues.yAxisGridCheckbox,
    lineValues.xAxisLineCheckbox,
    lineValues.yAxisLineCheckbox,
    lineValues.hoverCheckbox,
    lineValues.backgroundCP,
    lineValues.lineCP1,
    lineValues.lineCP2,
    lineValues.lineCP3,
    lineValues.tickCP,
    lineValues.titleCP,
    lineValues.xAxisTitleCP,
    lineValues.yAxisTitleCP,
    lineValues.gridCP,
    lineValues.xAxisLineCP,
    lineValues.yAxisLineCP,
    lineValues.datapointCP,
    lineValues.datapointBorderCP,
    lineValues.areaCP
  );

  document.getElementById("line_title_span").innerHTML = lineValues.titleInput;
  document.getElementById("line_x_title_span").innerHTML =
    lineValues.xAxisTitleInput;
  document.getElementById("line_y_title_span").innerHTML =
    lineValues.yAxisTitleInput;
  document.getElementById("line_title_slider_span").innerHTML =
    lineValues.titleSlider;
  document.getElementById("line_x_title_slider_span").innerHTML =
    lineValues.xAxisTitleSlider;
  document.getElementById("line_y_title_slider_span").innerHTML =
    lineValues.yAxisTitleSlider;
  document.getElementById("line_1_width_slider_span").innerHTML =
    lineValues.widthSlider;
  document.getElementById("line_2_width_slider_span").innerHTML =
    lineValues.widthSlider;
  document.getElementById("line_3_width_slider_span").innerHTML =
    lineValues.widthSlider;
  document.getElementById("line_point_radius_slider_span").innerHTML =
    lineValues.pointRadiusSlider;
  document.getElementById("line_point2_radius_slider_span").innerHTML =
    lineValues.pointRadiusSlider;
  document.getElementById("line_point3_radius_slider_span").innerHTML =
    lineValues.pointRadiusSlider;

  d3.select("#line_tooltip_checkbox_span").classed("hide", true);
  d3.select("#line_tooltip_circle_checkbox_span").classed("hide", true);
  d3.select("#line_tooltip2_circle_checkbox_span").classed("hide", true);
  d3.select("#line_tooltip3_circle_checkbox_span").classed("hide", true);
  d3.select("#line_datapoint_checkbox_span").classed("hide", false);
  d3.select("#line_datapoint2_checkbox_span").classed("hide", true);
  d3.select("#line_datapoint3_checkbox_span").classed("hide", true);
  d3.select("#line_x_grid_checkbox_span").classed("hide", true);
  d3.select("#line_y_grid_checkbox_span").classed("hide", false);
  d3.select("#line_x_line_checkbox_span").classed("hide", true);
  d3.select("#line_y_line_checkbox_span").classed("hide", false);
  d3.select("#line_hover_checkbox_span").classed("hide", true);
  d3.select("#line_template_hover_span1").classed("hide", true);
  d3.select("#line_template_hover_span2").classed("hide", true);
  d3.select("#line_template_hover_span3").classed("hide", true);

  document.getElementById("line_background_cp_span").innerHTML =
    lineValues.backgroundCP;
  document.getElementById("line_tick_cp_span").innerHTML = lineValues.tickCP;
  document.getElementById("line_title_cp_span").innerHTML = lineValues.titleCP;
  document.getElementById("line_x_title_cp_span").innerHTML =
    lineValues.xAxisTitleCP;
  document.getElementById("line_y_title_cp_span").innerHTML =
    lineValues.yAxisTitleCP;
  document.getElementById("line_grid_cp_span").innerHTML = lineValues.gridCP;
  document.getElementById("line_x_line_cp_span").innerHTML =
    lineValues.xAxisLineCP;
  document.getElementById("line_y_line_cp_span").innerHTML =
    lineValues.yAxisLineCP;
  document.getElementById("line_datapoint_cp_span").innerHTML =
    lineValues.datapointCP;
  document.getElementById("line_datapoint2_cp_span").innerHTML =
    lineValues.datapointCP;
  document.getElementById("line_datapoint3_cp_span").innerHTML =
    lineValues.datapointCP;
  document.getElementById("line_datapoint_border_cp_span").innerHTML =
    lineValues.datapointBorderCP;
  document.getElementById("line_datapoint2_border_cp_span").innerHTML =
    lineValues.datapointBorderCP;
  document.getElementById("line_datapoint3_border_cp_span").innerHTML =
    lineValues.datapointBorderCP;
  document.getElementById("line_area_cp_span").innerHTML = lineValues.areaCP;
  document.getElementById("line_1_cp_span").innerHTML = lineValues.lineCP1;
  document.getElementById("line_2_cp_span").innerHTML = lineValues.lineCP2;
  document.getElementById("line_3_cp_span").innerHTML = lineValues.lineCP3;

  d3.select("#line_area_checkbox_span").classed("hide", true);
  d3.select("#line_1_select_span").classed("hide", false);
  d3.select("#line_2_select_span").classed("hide", true);
  d3.select("#line_3_select_span").classed("hide", true);

  d3.select("#line_obj_num2_span").classed("hide", true);
  d3.select("#line_obj_num3_span").classed("hide", true);

  d3.select("#line_area").attr("display", "none");
  d3.select("#line1").attr("display", "");
  d3.select("#line2").attr("display", "none");
  d3.select("#line3").attr("display", "none");

  d3.selectAll(".circles_line").attr("display", "");
  d3.selectAll(".circles_line2").attr("display", "none");
  d3.selectAll(".circles_line3").attr("display", "none");
}
