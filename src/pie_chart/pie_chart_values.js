import {
  pieTitleInput,
  pieTitleSlider,
  pieBorderSlider,
  pieInnerRadiusSlider,
  pieOuterRadiusSlider,
  pieLabelRadiusSlider,
} from "./pie_chart_inputs.js";

export let pieValues = {
  titleInput: pieTitleInput.value,
  titleSlider: pieTitleSlider.value,
  borderSlider: pieBorderSlider.value,
  innerRadiusSlider: pieInnerRadiusSlider.value,
  outerRadiusSlider: pieOuterRadiusSlider.value,
  labelRadiusSlider: pieLabelRadiusSlider.value,
  tooltipCheckbox: "checked",
  legendCheckbox: "checked",
  hoverCheckbox: "checked",
  valuesCheckbox: "checked",
  sortedCheckbox: "checked",
  colorScaleArray: ["#98abc5", "#8a89a6", "#7b6888"],
};
