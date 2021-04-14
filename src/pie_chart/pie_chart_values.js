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
  backgroundCP: "rgba(255,255,255,1)",
  borderCP: "rgba(255,255,255,1)",
  fontCP: "rgba(70,70,70,1)",
  colorScaleArray: ["#98abc5", "#8a89a6", "#7b6888"],
};
