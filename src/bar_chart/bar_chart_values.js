import {
  barTitleInput,
  barXAxisTitleInput,
  barYAxisTitleInput,
  barTitleSlider,
  barXAxisTitleSlider,
  barYAxisTitleSlider,
  barTooltipCheckbox,
  barHorizontalCheckbox,
  barVerticalCheckbox,
  barXAxisGridCheckbox,
  barYAxisGridCheckbox,
  barXAxisLineCheckbox,
  barYAxisLineCheckbox,
  barHoverCheckbox,
} from "./bar_chart_inputs.js";

export let barValues = {
  titleInput: barTitleInput.value,
  xAxisTitleInput: barXAxisTitleInput.value,
  yAxisTitleInput: barYAxisTitleInput.value,

  titleSlider: barTitleSlider.value,
  xAxisTitleSlider: barXAxisTitleSlider.value,
  yAxisTitleSlider: barYAxisTitleSlider.value,

  tooltipCheckbox: "unchecked",
  xAxisGridCheckbox: "checked",
  yAxisGridCheckbox: "checked",
  hoverCheckbox: "unchecked",
  xAxisLineCheckbox: "unchecked",
  yAxisLineCheckbox: "checked",

  backgroudCP: "rgba(255,255,255,1)",
  barsCP: "rgba(249, 203, 156, 0.46)",
  tickCP: "rgb(130, 130, 130)",
  titleCP: "rgb(103, 103, 103)",
  xAxisTitleCP: "rgb(103, 103, 103)",
  yAxisTitleCP: "rgb(103, 103, 103)",
  gridCP: "rgba(0, 0, 0, 0.108)",
  xAxisLineCP: "rgb(211, 211, 211)",
  yAxisLineCP: "rgb(211, 211, 211)",
  borderCP: "rgba(42, 42, 42, 0.187)",
};
