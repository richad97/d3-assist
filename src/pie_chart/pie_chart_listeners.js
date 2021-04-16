const d3 = require("d3");

import { pieCalc } from "./pie_chart_graph.js";
import {
  pieTitleInput,
  pieTitleSlider,
  pieBorderSlider,
  pieInnerRadiusSlider,
  pieOuterRadiusSlider,
  pieLabelRadiusSlider,
  pieTooltipCheckbox,
  pieLegendCheckbox,
  pieHoverCheckbox,
  pieValuesCheckbox,
  pieSortedCheckbox,
} from "./pie_chart_inputs.js";
import { pieValues } from "./pie_chart_values.js";

pieTitleInput.addEventListener("keyup", function () {
  pieValues.titleInput = pieTitleInput.value;
  d3.select("#pie_title").text(pieValues.titleInput);
  document.querySelector("#pie_title_span").innerHTML = pieValues.titleInput;
});

pieTitleSlider.addEventListener("input", function () {
  pieValues.titleSlider = pieTitleSlider.value;
  d3.select("#pie_title").attr("x", pieValues.titleSlider);
  document.querySelector("#pie_title_slider_span").innerHTML =
    pieValues.titleSlider;
});

pieBorderSlider.addEventListener("input", function () {
  pieValues.borderSlider = pieBorderSlider.value;
  d3.selectAll(".pie_stroke").attr(
    "stroke-width",
    `${pieValues.borderSlider}px`
  );
  document.querySelector("#pie_stroke_span").innerHTML = pieValues.borderSlider;
});

pieInnerRadiusSlider.addEventListener("input", function () {
  pieValues.innerRadiusSlider = pieInnerRadiusSlider.value;
  pieCalc(
    pieValues.innerRadiusSlider,
    pieValues.outerRadiusSlider,
    pieValues.borderSlider,
    pieValues.labelRadiusSlider,
    pieValues.tooltipCheckbox,
    pieValues.colorScaleArray
  );
  document.querySelector("#pie_inner_radius_span").innerHTML =
    pieValues.innerRadiusSlider;
});

pieOuterRadiusSlider.addEventListener("input", function () {
  pieValues.outerRadiusSlider = pieOuterRadiusSlider.value;
  pieCalc(
    pieValues.innerRadiusSlider,
    pieValues.outerRadiusSlider,
    pieValues.borderSlider,
    pieValues.labelRadiusSlider,
    pieValues.tooltipCheckbox,
    pieValues.colorScaleArray
  );
  document.querySelector("#pie_outer_radius_span").innerHTML =
    pieValues.outerRadiusSlider;
});

pieLabelRadiusSlider.addEventListener("input", function () {
  pieValues.labelRadiusSlider = pieLabelRadiusSlider.value;
  pieCalc(
    pieValues.innerRadiusSlider,
    pieValues.outerRadiusSlider,
    pieValues.borderSlider,
    pieValues.labelRadiusSlider,
    pieValues.tooltipCheckbox,
    pieValues.colorScaleArray
  );
  document.querySelector("#pie_label_radius_span").innerHTML =
    pieValues.labelRadiusSlider;
});

pieTooltipCheckbox.addEventListener("change", function () {
  if (this.checked) {
    pieValues.tooltipCheckbox = "checked";
    pieCalc(
      pieValues.innerRadiusSlider,
      pieValues.outerRadiusSlider,
      pieValues.borderSlider,
      pieValues.labelRadiusSlider,
      pieValues.tooltipCheckbox,
      pieValues.colorScaleArray
    );
    d3.select("#pie_tooltip_checkbox_span").classed("hide", false);
  }

  if (this.checked == false) {
    pieValues.tooltipCheckbox = "unchecked";
    if (document.querySelector(".pie_tooltip")) {
      d3.select(".pie_tooltip").remove();
    }
    d3.select("#pie_tooltip_checkbox_span").classed("hide", true);
  }
});

pieLegendCheckbox.addEventListener("change", function () {
  if (this.checked) {
    pieValues.legendCheckbox = "checked";
    d3.selectAll(".pairs").style("display", "flex");
    d3.select("#pie_legend_checkbox_span").classed("hide", false);
    d3.select("#pie_tran_x_span").html("175");

    d3.select("#pie_chart_g").attr("transform", `translate(175, 230)`);
  }
  if (this.checked == false) {
    pieValues.legendCheckbox = "unchecked";
    d3.selectAll(".pairs").style("display", "none");
    d3.select("#pie_legend_checkbox_span").classed("hide", true);
    d3.select("#pie_tran_x_span").html("310");

    d3.select("#pie_chart_g").attr("transform", `translate(300, 230)`);
  }
});

pieHoverCheckbox.addEventListener("change", function () {
  if (this.checked) {
    pieValues.hoverCheckbox = "checked";
    d3.selectAll(".arc > path").classed("hovered", true);
    d3.select("#pie_hover_checkbox_span").classed("hide", false);
  }
  if (this.checked == false) {
    pieValues.hoverCheckbox = "unchecked";
    d3.selectAll(".arc > path").classed("hovered", false);
    d3.select("#pie_hover_checkbox_span").classed("hide", true);
  }
});

pieValuesCheckbox.addEventListener("change", function () {
  if (this.checked) {
    pieValues.valuesCheckbox = "checked";
    d3.selectAll(".slice-labels").attr("display", "");
    d3.select("#pie_values_checkbox_span").classed("hide", false);
  }
  if (this.checked == false) {
    pieValues.valuesCheckbox = "unchecked";
    d3.selectAll(".slice-labels").attr("display", "none");
    d3.select("#pie_values_checkbox_span").classed("hide", true);
  }
});

pieSortedCheckbox.addEventListener("change", function () {
  if (this.checked) {
    //
  }
  if (this.checked == false) {
    //
  }
});
