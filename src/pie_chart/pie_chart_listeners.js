const d3 = require("d3");

import { pieValues } from "./pie_chart_values.js";
import { pieCalc } from "./pie_chart_graph.js";
import {
  pieTitleInput,
  pieTitleSlider,
  pieBorderSlider,
  pieInnerRadiusSlider,
  pieOuterRadiusSlider,
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
    pieValues.borderSlider
  );
});

pieOuterRadiusSlider.addEventListener("input", function () {
  pieValues.outerRadiusSlider = pieOuterRadiusSlider.value;
  pieCalc(
    pieValues.innerRadiusSlider,
    pieValues.outerRadiusSlider,
    pieValues.borderSlider
  );
});
