import { pieValues } from "./pie_chart_values.js";
import { pieRadii } from "./pie_chart_graph.js";
import {
  pieInnerRadiusSlider,
  pieOuterRadiusSlider,
} from "./pie_chart_inputs.js";

pieInnerRadiusSlider.addEventListener("input", function () {
  pieValues.innerRadiusSlider = pieInnerRadiusSlider.value;
  pieRadii(pieValues.innerRadiusSlider, pieValues.outerRadiusSlider);
});

pieOuterRadiusSlider.addEventListener("input", function () {
  pieValues.outerRadiusSlider = pieOuterRadiusSlider.value;
  pieRadii(pieValues.innerRadiusSlider, pieValues.outerRadiusSlider);
});
