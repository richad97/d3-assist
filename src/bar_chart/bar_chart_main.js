import { barChart } from "./bar_chart_graph.js";
import "../overlay_nav.js";

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

//  Declaring input values to use them in functions
//  Default Values
let barTitleInputValue = barTitleInput.value;
let barXAxisTitleInputValue = barXAxisTitleInput.value;
let barYAxisTitleInputValue = barYAxisTitleInput.value;

let barTitleSliderValue = barTitleSlider.value;
let barXAxisTitleSliderValue = barXAxisTitleSlider.value;
let barYAxisTitleSliderValue = barYAxisTitleSlider.value;

// if you change these, you have to change the input value in the html as
// this is how ive gotten the check values/review
// for the colors spectrum doesn't change input value dynamically for input preview
let barTooltipCheckboxValue = "unchecked";
let barXAxisGridCheckboxValue = "checked";
let barYAxisGridCheckboxValue = "checked";
let barHoverCheckboxValue = "unchecked";
let barXAxisLineCheckboxValue = "unchecked";
let barYAxisLineCheckboxValue = "checked";

let barBackgroudCPValue = "rgba(255,255,255,1)";
let barBarsCPValue = "rgba(249, 203, 156, 0.46)";
let barTickCPValue = "rgb(130, 130, 130)";
let barTitleCPValue = "rgb(103, 103, 103)";
let barXAxisTitleCPValue = "rgb(103, 103, 103)";
let barYAxisTitleCPValue = "rgb(103, 103, 103)";
let barGridCPValue = "rgba(0, 0, 0, 0.108)";
let barXAxisLineCPValue = "rgb(211, 211, 211)";
let barYAxisLineCPValue = "rgb(211, 211, 211)";
let barBorderCPValue = "rgba(42, 42, 42, 0.187)";

//  --  NOT FULL CONNECTED  --
const barResponsiveCheckbox = document.querySelector(
  "#bar_responsive_checkbox"
);
let barResponsiveCheckboxValue = "unchecked";
/*
const barHeightDimensionInput = document.querySelector(
  "#bar_height_dimension_input"
);

let barHeightDimensionInputValue = barHeightDimensionInput.value;

const barWidthDimensionInput = document.querySelector(
  "#bar_width_dimension_input"
);

let barWidthDimensionInputValue = barWidthDimensionInput.value;
*/
//  Init
////  Passing default values from above to function
////  When adding functionality make sure you change the params in bar_chart.js
////  Both orders must match
barChart(
  "horizontal",
  barTitleInputValue,
  barXAxisTitleInputValue,
  barYAxisTitleInputValue,
  barTitleSliderValue,
  barXAxisTitleSliderValue,
  barYAxisTitleSliderValue,
  barXAxisGridCheckboxValue,
  barYAxisGridCheckboxValue,
  barHoverCheckboxValue,
  barXAxisLineCheckboxValue,
  barYAxisLineCheckboxValue,
  barTooltipCheckboxValue,
  barBackgroudCPValue,
  barBarsCPValue,
  barTickCPValue,
  barTitleCPValue,
  barXAxisTitleCPValue,
  barYAxisTitleCPValue,
  barGridCPValue,
  barXAxisLineCPValue,
  barYAxisLineCPValue,
  barBorderCPValue
);

//  Sets default code in container before listeners
//  Hides code in container on init

// #bar_gnth_child_span_x is 2 and #bar_gnth_child_span_y is 1 on horizontal.
////  On vertical then numbers switch

d3.select("#bar_horizontal_scale_span").classed("hide", false);
d3.select("#bar_horizontal_bar_logic_span").classed("hide", false);
document.getElementById("bar_gnth_child_span_x").innerHTML = "2";
document.getElementById("bar_gnth_child_span_y").innerHTML = "1";

d3.select("#bar_vertical_scale_span").classed("hide", true);
d3.select("#bar_vertical_bar_logic_span").classed("hide", true);

//  Loads default code from above into popup container
document.getElementById("bar_title_span").innerHTML = barTitleInputValue;
document.getElementById("bar_x_title_span").innerHTML = barXAxisTitleInputValue;
document.getElementById("bar_y_title_span").innerHTML = barYAxisTitleInputValue;
document.getElementById(
  "bar_title_slider_span"
).innerHTML = barTitleSliderValue;
document.getElementById(
  "bar_x_title_slider_span"
).innerHTML = barXAxisTitleSliderValue;
document.getElementById(
  "bar_y_title_slider_span"
).innerHTML = barYAxisTitleSliderValue;
document.getElementById(
  "bar_background_cp_span"
).innerHTML = barBackgroudCPValue;
document.getElementById("bar_cp_span").innerHTML = barBarsCPValue;
document.getElementById("bar_border_cp_span").innerHTML = barBorderCPValue;
document.getElementById("bar_title_cp_span").innerHTML = barTitleCPValue;
document.getElementById("bar_x_title_cp_span").innerHTML = barXAxisTitleCPValue;
document.getElementById("bar_y_title_cp_span").innerHTML = barYAxisTitleCPValue;
document.getElementById("bar_grid_cp_span").innerHTML = barGridCPValue;
document.getElementById("bar_x_line_cp_span").innerHTML = barXAxisLineCPValue;
document.getElementById("bar_y_line_cp_span").innerHTML = barYAxisLineCPValue;
document.getElementById("bar_tick_cp_span").innerHTML = barTickCPValue;

////  Event Listeners
//  Text Inputs
//  Common way for most my listeners, even color picker
barTitleInput.addEventListener("keyup", () => {
  //  Changing graph title dynamically for users to see
  d3.select("#bar_title").text(barTitleInput.value);

  //  Changing input value that is pushed into function on vertical/horiz change
  barTitleInputValue = barTitleInput.value;

  //  Push users code into popup container
  document.getElementById("bar_title_span").innerHTML = barTitleInputValue;
});

barXAxisTitleInput.addEventListener("keyup", () => {
  d3.select("#bar_xaxis_title").text(barXAxisTitleInput.value);
  barXAxisTitleInputValue = barXAxisTitleInput.value;
  document.getElementById(
    "bar_x_title_span"
  ).innerHTML = barXAxisTitleInputValue;
});

barYAxisTitleInput.addEventListener("keyup", () => {
  d3.select("#bar_yaxis_title").text(barYAxisTitleInput.value);
  barYAxisTitleInputValue = barYAxisTitleInput.value;
  document.getElementById(
    "bar_y_title_span"
  ).innerHTML = barYAxisTitleInputValue;
});

//  Slider Inputs
barTitleSlider.addEventListener("mousedown", function () {
  barTitleSlider.addEventListener("mousemove", function () {
    d3.select("#bar_title").attr("x", barTitleSlider.value * 20);
    barTitleSliderValue = barTitleSlider.value;
    document.getElementById(
      "bar_title_slider_span"
    ).innerHTML = barTitleSliderValue;
  });
});

barXAxisTitleSlider.addEventListener("mousedown", function () {
  barXAxisTitleSlider.addEventListener("mousemove", function () {
    d3.select("#bar_xaxis_title").attr("x", barXAxisTitleSlider.value * 20);
    barXAxisTitleSliderValue = barXAxisTitleSlider.value;
    document.getElementById(
      "bar_x_title_slider_span"
    ).innerHTML = barXAxisTitleSliderValue;
  });
});

barYAxisTitleSlider.addEventListener("mousedown", function () {
  barYAxisTitleSlider.addEventListener("mousemove", function () {
    d3.select("#bar_yaxis_title").attr("x", barYAxisTitleSlider.value * 20);
    barYAxisTitleSliderValue = barYAxisTitleSlider.value;
    document.getElementById(
      "bar_y_title_slider_span"
    ).innerHTML = barYAxisTitleSliderValue;
  });
});

//  Checkbox Inputs
barTooltipCheckbox.addEventListener("change", function () {
  if (this.checked) {
    let tooltip = d3.select("body").append("div").attr("class", "bar_tooltip");
    d3.select(".bar_tooltip").style("background-color", "white");
    d3.select(".bar_tooltip").style("border", "1px solid rgba(0,0,0,0.2)");
    let bars = d3.selectAll(".bars");
    bars
      .on("mousemove", function (d) {
        tooltip
          .style("left", d3.event.pageX + 10 + "px")
          .style("top", d3.event.pageY + 10 + "px")
          .style("display", "inline-block");
      })
      .on("mouseout", function (d) {
        tooltip.style("display", "none");
      });
    barTooltipCheckboxValue = "checked";
    d3.select("#bar_tooltip_logic_span").classed("hide", false);
  } else if (this.checked === false) {
    document.querySelector("body > div.bar_tooltip").remove();
    barTooltipCheckboxValue = "unchecked";
    d3.select("#bar_tooltip_logic_span").classed("hide", true);
  }
});

barHorizontalCheckbox.addEventListener("change", function () {
  if (this.checked) {
    barTooltipCheckboxValue = "unchecked";
    barTooltipCheckbox.checked = false;
    d3.select("#bar_tooltip_logic_span").classed("hide", true);

    barChart(
      "horizontal",
      barTitleInputValue,
      barXAxisTitleInputValue,
      barYAxisTitleInputValue,
      barTitleSliderValue,
      barXAxisTitleSliderValue,
      barYAxisTitleSliderValue,
      barXAxisGridCheckboxValue,
      barYAxisGridCheckboxValue,
      barHoverCheckboxValue,
      barXAxisLineCheckboxValue,
      barYAxisLineCheckboxValue,
      barTooltipCheckboxValue,
      barBackgroudCPValue,
      barBarsCPValue,
      barTickCPValue,
      barTitleCPValue,
      barXAxisTitleCPValue,
      barYAxisTitleCPValue,
      barGridCPValue,
      barXAxisLineCPValue,
      barYAxisLineCPValue,
      barBorderCPValue
    );

    d3.select("#bar_horizontal_scale_span").classed("hide", false);
    d3.select("#bar_horizontal_bar_logic_span").classed("hide", false);
    document.getElementById("bar_gnth_child_span_x").innerHTML = "2";
    document.getElementById("bar_gnth_child_span_y").innerHTML = "1";

    barVerticalCheckbox.checked = false;
    d3.select("#bar_vertical_scale_span").classed("hide", true);
    d3.select("#bar_vertical_bar_logic_span").classed("hide", true);
  } else if (this.checked === false) {
    barTooltipCheckboxValue = "unchecked";
    barTooltipCheckbox.checked = false;
    d3.select("#bar_tooltip_logic_span").classed("hide", true);

    barChart(
      "vertical",
      barTitleInputValue,
      barXAxisTitleInputValue,
      barYAxisTitleInputValue,
      barTitleSliderValue,
      barXAxisTitleSliderValue,
      barYAxisTitleSliderValue,
      barXAxisGridCheckboxValue,
      barYAxisGridCheckboxValue,
      barHoverCheckboxValue,
      barXAxisLineCheckboxValue,
      barYAxisLineCheckboxValue,
      barTooltipCheckboxValue,
      barBackgroudCPValue,
      barBarsCPValue,
      barTickCPValue,
      barTitleCPValue,
      barXAxisTitleCPValue,
      barYAxisTitleCPValue,
      barGridCPValue,
      barXAxisLineCPValue,
      barYAxisLineCPValue,
      barBorderCPValue
    );

    d3.select("#bar_horizontal_scale_span").classed("hide", true);
    d3.select("#bar_horizontal_bar_logic_span").classed("hide", true);

    barVerticalCheckbox.checked = true;
    d3.select("#bar_vertical_scale_span").classed("hide", false);
    d3.select("#bar_vertical_bar_logic_span").classed("hide", false);
    document.getElementById("bar_gnth_child_span_x").innerHTML = "1";
    document.getElementById("bar_gnth_child_span_y").innerHTML = "2";
  }
});

barVerticalCheckbox.addEventListener("change", function () {
  if (this.checked) {
    barTooltipCheckboxValue = "unchecked";
    barTooltipCheckbox.checked = false;
    d3.select("#bar_tooltip_logic_span").classed("hide", true);

    barChart(
      "vertical",
      barTitleInputValue,
      barXAxisTitleInputValue,
      barYAxisTitleInputValue,
      barTitleSliderValue,
      barXAxisTitleSliderValue,
      barYAxisTitleSliderValue,
      barXAxisGridCheckboxValue,
      barYAxisGridCheckboxValue,
      barHoverCheckboxValue,
      barXAxisLineCheckboxValue,
      barYAxisLineCheckboxValue,
      barTooltipCheckboxValue,
      barBackgroudCPValue,
      barBarsCPValue,
      barTickCPValue,
      barTitleCPValue,
      barXAxisTitleCPValue,
      barYAxisTitleCPValue,
      barGridCPValue,
      barXAxisLineCPValue,
      barYAxisLineCPValue,
      barBorderCPValue
    );

    barHorizontalCheckbox.checked = false;
    d3.select("#bar_horizontal_scale_span").classed("hide", true);
    d3.select("#bar_horizontal_bar_logic_span").classed("hide", true);

    d3.select("#bar_vertical_scale_span").classed("hide", false);
    d3.select("#bar_vertical_bar_logic_span").classed("hide", false);
    document.getElementById("bar_gnth_child_span_x").innerHTML = "1";
    document.getElementById("bar_gnth_child_span_y").innerHTML = "2";
  } else if (this.checked === false) {
    barTooltipCheckboxValue = "unchecked";
    barTooltipCheckbox.checked = false;
    d3.select("#bar_tooltip_logic_span").classed("hide", true);

    barChart(
      "horizontal",
      barTitleInputValue,
      barXAxisTitleInputValue,
      barYAxisTitleInputValue,
      barTitleSliderValue,
      barXAxisTitleSliderValue,
      barYAxisTitleSliderValue,
      barXAxisGridCheckboxValue,
      barYAxisGridCheckboxValue,
      barHoverCheckboxValue,
      barXAxisLineCheckboxValue,
      barYAxisLineCheckboxValue,
      barTooltipCheckboxValue,
      barBackgroudCPValue,
      barBarsCPValue,
      barTickCPValue,
      barTitleCPValue,
      barXAxisTitleCPValue,
      barYAxisTitleCPValue,
      barGridCPValue,
      barXAxisLineCPValue,
      barYAxisLineCPValue,
      barBorderCPValue
    );

    barHorizontalCheckbox.checked = true;
    d3.select("#bar_horizontal_scale_span").classed("hide", false);
    d3.select("#bar_horizontal_bar_logic_span").classed("hide", false);
    document.getElementById("bar_gnth_child_span_x").innerHTML = "2";
    document.getElementById("bar_gnth_child_span_y").innerHTML = "1";

    d3.select("#bar_vertical_scale_span").classed("hide", true);
    d3.select("#bar_vertical_bar_logic_span").classed("hide", true);
  }
});

barXAxisGridCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#x_grid").attr("display", "");
    barXAxisGridCheckboxValue = "checked";
    d3.select("#bar_x_grid_span").classed("hide", false);
  } else if (this.checked === false) {
    d3.select("#x_grid").attr("display", "none");
    barXAxisGridCheckboxValue = "unchecked";
    d3.select("#bar_x_grid_span").classed("hide", true);
  }
});

barYAxisGridCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#y_grid").attr("display", "");
    barYAxisGridCheckboxValue = "checked";
    d3.select("#bar_y_grid_span").classed("hide", false);
  } else if (this.checked === false) {
    d3.select("#y_grid").attr("display", "none");
    barYAxisGridCheckboxValue = "unchecked";
    d3.select("#bar_y_grid_span").classed("hide", true);
  }
});

barHoverCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.selectAll("rect").classed("hovered", true);
    barHoverCheckboxValue = "checked";
    d3.select("#bar_hover_span").classed("hide", false);
  } else if (this.checked === false) {
    d3.selectAll("rect").classed("hovered", false);
    barHoverCheckboxValue = "unchecked";
    d3.select("#bar_hover_span").classed("hide", true);
  }
});

barXAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#x_axis > path").attr("display", "");
    barXAxisLineCheckboxValue = "checked";
    d3.select("#bar_x_line_span").classed("hide", true);
  } else if (this.checked === false) {
    d3.select("#x_axis > path").attr("display", "none");
    barXAxisLineCheckboxValue = "unchecked";
    d3.select("#bar_x_line_span").classed("hide", false);
  }
});

barYAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#y_axis > path").attr("display", "");
    barYAxisLineCheckboxValue = "checked";
    d3.select("#bar_y_line_span").classed("hide", true);
  } else if (this.checked === false) {
    d3.select("#y_axis > path").attr("display", "none");
    barYAxisLineCheckboxValue = "unchecked";
    d3.select("#bar_y_line_span").classed("hide", false);
  }
});

barResponsiveCheckbox.addEventListener("change", function () {
  if (this.checked) {
    barHeightDimensionInput.disabled = true;
    barWidthDimensionInput.disabled = true;
  } else if (this.checked === false) {
    barHeightDimensionInput.disabled = false;
    barWidthDimensionInput.disabled = false;
  }
});

//  Color Picker Input - Spectrum
$("#bar_background_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("svg").style("background-color", color.toRgbString());

    barBackgroudCPValue = color.toRgbString();

    document.getElementById(
      "bar_background_cp_span"
    ).innerHTML = barBackgroudCPValue;
  },
});
$("#bars_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".bars").style("fill", color.toRgbString());

    barBarsCPValue = color.toRgbString();

    document.getElementById("bar_cp_span").innerHTML = barBarsCPValue;
  },
});
$("#bar_tick_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".tick > text").style("fill", color.toRgbString());

    barTickCPValue = color.toRgbString();

    document.getElementById("bar_tick_cp_span").innerHTML = barTickCPValue;
  },
});
$("#bar_title_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#bar_title").style("fill", color.toRgbString());

    barTitleCPValue = color.toRgbString();

    document.getElementById("bar_title_cp_span").innerHTML = barTitleCPValue;
  },
});
$("#bar_xaxis_title_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#bar_xaxis_title").style("fill", color.toRgbString());

    barXAxisTitleCPValue = color.toRgbString();

    document.getElementById(
      "bar_x_title_cp_span"
    ).innerHTML = barXAxisTitleCPValue;
  },
});
$("#bar_yaxis_title_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#bar_yaxis_title").style("fill", color.toRgbString());

    barYAxisTitleCPValue = color.toRgbString();

    document.getElementById(
      "bar_y_title_cp_span"
    ).innerHTML = barYAxisTitleCPValue;
  },
});
$("#bar_grid_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".grid").style("color", color.toRgbString());

    barGridCPValue = color.toRgbString();

    document.getElementById("bar_grid_cp_span").innerHTML = barGridCPValue;
  },
});
$("#bar_xaxis_line_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#x_axis > path").style("stroke", color.toRgbString());

    barXAxisLineCPValue = color.toRgbString();

    document.getElementById(
      "bar_x_line_cp_span"
    ).innerHTML = barXAxisLineCPValue;
  },
});
$("#bar_yaxis_line_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#y_axis > path").style("stroke", color.toRgbString());

    barYAxisLineCPValue = color.toRgbString();

    document.getElementById(
      "bar_y_line_cp_span"
    ).innerHTML = barYAxisLineCPValue;
  },
});
$("#bar_border_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".bars").style("stroke", color.toRgbString());

    barBorderCPValue = color.toRgbString();

    document.getElementById("bar_border_cp_span").innerHTML = barBorderCPValue;
  },
});