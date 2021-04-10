import {
  pieTitleInput,
  pieTitleSlider,
  pieBorderSlider,
  pieInnerRadiusSlider,
  pieOuterRadiusSlider,
} from "./pie_chart_inputs.js";

export let pieValues = {
  titleInput: pieTitleInput.value,
  titleSlider: pieTitleSlider.value,
  borderSlider: pieBorderSlider.value,
  innerRadiusSlider: pieInnerRadiusSlider.value,
  outerRadiusSlider: pieOuterRadiusSlider.value,
  tooltipCheckbox: "unchecked",
  donutCheckbox: "unchecked",
  hoverCheckbox: "unchecked",
};
