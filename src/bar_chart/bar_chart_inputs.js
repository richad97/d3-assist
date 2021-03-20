// Declarations
////  Declare inputs for titles, sliders, and checkboxes
////  Colors have their own way cause of the spectrum library
const barTitleInput = document.querySelector("#bar_title_input");
const barXAxisTitleInput = document.querySelector("#bar_xaxis_title_input");
const barYAxisTitleInput = document.querySelector("#bar_yaxis_title_input");
const barTitleSlider = document.querySelector("#bar_title_slider");

const barXAxisTitleSlider = document.querySelector("#bar_xaxis_title_slider");
const barYAxisTitleSlider = document.querySelector("#bar_yaxis_title_slider");
const barTooltipCheckbox = document.querySelector("#bar_tooltip_checkbox");
const barHorizontalCheckbox = document.querySelector(
  "#bar_horizontal_checkbox"
);
const barVerticalCheckbox = document.querySelector("#bar_vertical_checkbox");
const barXAxisGridCheckbox = document.querySelector("#bar_xaxis_grid_checkbox");
const barYAxisGridCheckbox = document.querySelector("#bar_yaxis_grid_checkbox");
const barXAxisLineCheckbox = document.querySelector("#bar_xaxis_line_checkbox");
const barYAxisLineCheckbox = document.querySelector("#bar_yaxis_line_checkbox");

const barHoverCheckbox = document.querySelector("#bar_hover_checkbox");

export {
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
};
