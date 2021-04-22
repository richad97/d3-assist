import {
  barTitleInput,
  barXAxisTitleInput,
  barYAxisTitleInput,
  barTitleSlider,
  barXAxisTitleSlider,
  barYAxisTitleSlider,
} from "./bar_chart_inputs.js";

export let barValues = {
  titleInput: barTitleInput.value,
  xAxisTitleInput: barXAxisTitleInput.value,
  yAxisTitleInput: barYAxisTitleInput.value,

  titleSlider: barTitleSlider.value,
  xAxisTitleSlider: barXAxisTitleSlider.value,
  yAxisTitleSlider: barYAxisTitleSlider.value,

  tooltipCheckbox: "unchecked",
  xAxisGridCheckbox: "unchecked",
  yAxisGridCheckbox: "checked",
  hoverCheckbox: "unchecked",
  xAxisLineCheckbox: "checked",
  yAxisLineCheckbox: "unchecked",

  backgroudCP: "rgba(255,255,255,1)",
  barsCP: "rgba(226, 161, 28, 0.3)",
  tickCP: "rgb(153, 153, 153)",
  titleCP: "rgb(103, 103, 103)",
  xAxisTitleCP: "rgb(103, 103, 103)",
  yAxisTitleCP: "rgb(103, 103, 103)",
  gridCP: "rgba(0, 0, 0, 0.06)",
  xAxisLineCP: "rgb(153, 153, 153)",
  yAxisLineCP: "rgb(211, 211, 211)",
  borderCP: "rgba(0, 0, 0, 0.1)",

  direction: "vertical",
};
