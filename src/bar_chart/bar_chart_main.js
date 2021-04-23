import { barChart } from "./bar_chart_graph.js";
import { barValues } from "./bar_chart_values.js";
import "./bar_chart_listeners.js";
import "./bar_chart_color_picker.js";

import { select } from "d3-selection";

const d3 = { select };

export function initBarChart() {
  barChart(
    barValues.direction,
    barValues.titleInput,
    barValues.xAxisTitleInput,
    barValues.yAxisTitleInput,
    barValues.titleSlider,
    barValues.xAxisTitleSlider,
    barValues.yAxisTitleSlider,
    barValues.xAxisGridCheckbox,
    barValues.yAxisGridCheckbox,
    barValues.hoverCheckbox,
    barValues.xAxisLineCheckbox,
    barValues.yAxisLineCheckbox,
    barValues.tooltipCheckbox,
    barValues.backgroudCP,
    barValues.barsCP,
    barValues.tickCP,
    barValues.titleCP,
    barValues.xAxisTitleCP,
    barValues.yAxisTitleCP,
    barValues.gridCP,
    barValues.xAxisLineCP,
    barValues.yAxisLineCP,
    barValues.borderCP
  );

  //to set new default, set FALSE to TRUE, and "1" to "2" to work properly
  d3.select("#bar_vertical_scale_span").classed("hide", false);
  d3.select("#bar_vertical_bar_logic_span").classed("hide", false);
  document.getElementById("bar_gnth_child_span_x").innerHTML = "1";
  document.getElementById("bar_gnth_child_span_y").innerHTML = "2";
  d3.select("#bar_horizontal_scale_span").classed("hide", true);
  d3.select("#bar_horizontal_bar_logic_span").classed("hide", true);

  document.getElementById("bar_title_span").innerHTML = barValues.titleInput;
  document.getElementById("bar_x_title_span").innerHTML =
    barValues.xAxisTitleInput;
  document.getElementById("bar_y_title_span").innerHTML =
    barValues.yAxisTitleInput;
  document.getElementById("bar_title_slider_span").innerHTML =
    barValues.titleSlider;
  document.getElementById("bar_x_title_slider_span").innerHTML =
    barValues.xAxisTitleSlider;
  document.getElementById("bar_y_title_slider_span").innerHTML =
    barValues.yAxisTitleSlider;

  d3.select("#bar_x_axis > path").attr("display", "");
  d3.select("#bar_x_line_span").classed("hide", true);
  d3.select("#bar_y_axis > path").attr("display", "none");
  d3.select("#bar_y_line_span").classed("hide", false);
  d3.select("#bar_x_grid").attr("display", "none");
  d3.select("#bar_x_grid_span").classed("hide", true);
  d3.select("#bar_hover_span").classed("hide", true);
  d3.select("#bar_hover_span2").classed("hide", true);

  document.getElementById("bar_background_cp_span").innerHTML =
    barValues.backgroudCP;
  document.getElementById("bar_cp_span").innerHTML = barValues.barsCP;
  document.getElementById("bar_border_cp_span").innerHTML = barValues.borderCP;
  document.getElementById("bar_title_cp_span").innerHTML = barValues.titleCP;
  document.getElementById("bar_x_title_cp_span").innerHTML =
    barValues.xAxisTitleCP;
  document.getElementById("bar_y_title_cp_span").innerHTML =
    barValues.yAxisTitleCP;
  document.getElementById("bar_grid_cp_span").innerHTML = barValues.gridCP;
  document.getElementById("bar_x_line_cp_span").innerHTML =
    barValues.xAxisLineCP;
  document.getElementById("bar_y_line_cp_span").innerHTML =
    barValues.yAxisLineCP;
  document.getElementById("bar_tick_cp_span").innerHTML = barValues.tickCP;
}
