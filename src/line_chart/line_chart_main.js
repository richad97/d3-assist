import { responsiveLineChart } from "./line_chart_graph.js";
import { lineValues } from "./line_chart_values.js";
import "./line_chart_listeners.js";
import "./line_chart_color_picker.js";
import "../overlay_nav.js";

(function init() {
  responsiveLineChart(
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

  d3.select("#line_area").attr("display", "none");

  d3.select("#line1").attr("display", "");
  d3.select("#line2").attr("display", "none");
  d3.select("#line3").attr("display", "none");

  document.getElementById("line_title_span").innerHTML = lineValues.titleInput;
  document.getElementById("line_x_title_span").innerHTML =
    lineValues.xAxisTitleInput;
  document.getElementById("line_y_title_span").innerHTML =
    lineValues.yAxisTitleInput;
})();
