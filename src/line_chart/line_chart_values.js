import {
  lineTitleInput,
  lineXAxisTitleInput,
  lineYAxisTitleInput,
  lineTitleSlider,
  lineXAxisTitleSlider,
  lineYAxisTitleSlider,
  lineWidthSlider,
  linePointRadiusSlider,
  lineAmountInput,
} from "./line_chart_inputs.js";

export let lineValues = {
  titleInput: lineTitleInput.value,
  xAxisTitleInput: lineXAxisTitleInput.value,
  yAxisTitleInput: lineYAxisTitleInput.value,

  titleSlider: lineTitleSlider.value,
  xAxisTitleSlider: lineXAxisTitleSlider.value,
  yAxisTitleSlider: lineYAxisTitleSlider.value,
  widthSlider: lineWidthSlider.value,
  pointRadiusSlider: linePointRadiusSlider.value,

  tooltipCheckbox: "unchecked",
  datapointCheckbox: "checked",
  xAxisGridCheckbox: "unchecked",
  yAxisGridCheckbox: "checked",
  xAxisLineCheckbox: "checked",
  yAxisLineCheckbox: "unchecked",
  hoverCheckbox: "unchecked",

  backgroundCP: "rgba(0, 0, 0, 0.55)",
  lineCP1: "rgb(250, 250, 250)",
  lineCP2: "rgb(250, 250, 250)",
  lineCP3: "rgb(250, 250, 250)",
  tickCP: "rgb(238, 238, 238)",
  titleCP: "rgb(255, 255, 255)",
  xAxisTitleCP: "rgb(255, 255, 255)",
  yAxisTitleCP: "rgb(255, 255, 255)",
  gridCP: "rgba(255, 255, 255, 0.337)",
  xAxisLineCP: "rgb(255, 255, 255)",
  yAxisLineCP: "rgb(211, 211, 211)",
  datapointCP: "rgba(255, 255, 255, 0)",
  datapointBorderCP: "rgba(255, 255, 255, 1)",
  areaCP: "rgba(245, 245, 245, 0.2)",

  areaCheckbox: "unchecked",
  amountInput: lineAmountInput.value,
};
