import {
  pieTitleInput,
  pieTitleSlider,
  pieBorderSlider,
  pieCenterRadiusSlider,
  pieLabelArcSlider,
} from "./pie_chart_inputs.js";

export let pieValues = {
  titleInput: pieTitleInput.value,
  titleSlider: pieTitleSlider.value,
  borderSlider: pieBorderSlider.value,
  centerRadiusSlider: pieCenterRadiusSlider.value,
  labelArcSlider: pieLabelArcSlider,
  tooltipCheckbox: "unchecked",
  donutCheckbox: "unchecked",
  hoverCheckbox: "unchecked",
};
