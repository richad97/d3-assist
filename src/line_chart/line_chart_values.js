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

  backgroundCP: "rgb(255, 255, 255)",
  lineCP1: "rgb(167, 78, 78)",
  lineCP2: "rgb(204, 149, 41)",
  lineCP3: "rgb(41, 134, 204)",
  tickCP: "rgb(153, 153, 153)",
  titleCP: "rgb(68, 68, 68)",
  xAxisTitleCP: "rgb(68, 68, 68)",
  yAxisTitleCP: "rgb(68, 68, 68)",
  gridCP: "rgba(0, 0, 0, 0.1)",
  xAxisLineCP: "rgb(153, 153, 153)",
  yAxisLineCP: "rgb(153, 153, 153)",
  datapointCP: "rgba(255, 255, 255, 0)",
  datapointBorderCP: "rgba(0, 0, 0, 0.3)",
  areaCP: "rgba(105, 105, 105, 0.25)",

  areaCheckbox: "unchecked",
  amountInput: lineAmountInput.value,
};
