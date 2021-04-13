const d3 = require("d3");

import { pieValues } from "./pie_chart_values.js";
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

pieTitleInput.addEventListener("keyup", function () {
  pieValues.titleInput = pieTitleInput.value;
  d3.select("#pie_title").text(pieValues.titleInput);
});

pieTitleSlider.addEventListener("input", function () {
  pieValues.titleSlider = pieTitleSlider.value;
  d3.select("#pie_title").attr("x", pieValues.titleSlider * 20);
});

pieBorderSlider.addEventListener("input", function () {
  pieValues.borderSlider = pieBorderSlider.value;
  d3.selectAll(".pie_stroke").attr(
    "stroke-width",
    `${pieValues.borderSlider}px`
  );
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
});

pieTooltipCheckbox.addEventListener("change", function () {
  if (this.checked) {
    console.log("checked");
    pieValues.tooltipCheckbox = "checked";
    pieCalc(
      pieValues.innerRadiusSlider,
      pieValues.outerRadiusSlider,
      pieValues.borderSlider,
      pieValues.labelRadiusSlider,
      pieValues.tooltipCheckbox,
      pieValues.colorScaleArray
    );
  }

  if (this.checked == false) {
    console.log("unchecked");
    pieValues.tooltipCheckbox = "unchecked";
    if (document.querySelector(".pie_tooltip")) {
      d3.select(".pie_tooltip").remove();
    }
  }
});

pieLegendCheckbox.addEventListener("change", function () {
  if (this.checked) {
    pieValues.legendCheckbox = "checked";
    d3.selectAll(".pairs").style("display", "flex");
  }
  if (this.checked == false) {
    pieValues.legendCheckbox = "unchecked";
    d3.selectAll(".pairs").style("display", "none");
  }
});

pieHoverCheckbox.addEventListener("change", function () {
  if (this.checked) {
    pieValues.hoverCheckbox = "checked";
    d3.selectAll(".arc > path").classed("hovered", true);
  }
  if (this.checked == false) {
    pieValues.hoverCheckbox = "unchecked";
    d3.selectAll(".arc > path").classed("hovered", false);
  }
});

pieValuesCheckbox.addEventListener("change", function () {
  if (this.checked) {
    pieValues.valuesCheckbox = "checked";
    d3.selectAll(".slice-labels").attr("display", "");
  }
  if (this.checked == false) {
    pieValues.valuesCheckbox = "unchecked";
    d3.selectAll(".slice-labels").attr("display", "none");
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
