import { responsiveLineChart } from "./line_chart_graph.js";
import "../overlay_nav.js";

const lineTitleInput = document.querySelector("#line_title_input");
const lineXAxisTitleInput = document.querySelector("#line_xaxis_title_input");
const lineYAxisTitleInput = document.querySelector("#line_yaxis_title_input");

const lineTitleSlider = document.querySelector("#line_title_slider");
const lineXAxisTitleSlider = document.querySelector("#line_xaxis_title_slider");
const lineYAxisTitleSlider = document.querySelector("#line_yaxis_title_slider");
const lineWidthSlider = document.querySelector("#line_width_slider");
const linePointRadiusSlider = document.querySelector(
  "#line_point_radius_slider"
);

const lineTooltipCheckbox = document.querySelector("#line_tooltip_checkbox");
const lineDatapointCheckbox = document.querySelector(
  "#line_datapoint_checkbox"
);
const lineXAxisGridCheckbox = document.querySelector(
  "#line_xaxis_grid_checkbox"
);
const lineYAxisGridCheckbox = document.querySelector(
  "#line_yaxis_grid_checkbox"
);
const lineXAxisLineCheckbox = document.querySelector(
  "#line_xaxis_line_checkbox"
);
const lineYAxisLineCheckbox = document.querySelector(
  "#line_yaxis_line_checkbox"
);
const lineHoverCheckbox = document.querySelector("#line_hover_checkbox");

const lineAreaCheckbox = document.querySelector("#line_area_checkbox");
const lineAmountInput = document.querySelector("#line_amount_input");

let lineTitleInputValue = lineTitleInput.value;
let lineXAxisTitleInputValue = lineXAxisTitleInput.value;
let lineYAxisTitleInputValue = lineYAxisTitleInput.value;

let lineTitleSliderValue = lineTitleSlider.value;
let lineXAxisTitleSliderValue = lineXAxisTitleSlider.value;
let lineYAxisTitleSliderValue = lineYAxisTitleSlider.value;
let lineWidthSliderValue = lineWidthSlider.value;
let linePointRadiusSliderValue = linePointRadiusSlider.value;

let lineTooltipCheckboxValue = "unchecked";
let lineDatapointCheckboxValue = "checked";
let lineXAxisGridCheckboxValue = "unchecked";
let lineYAxisGridCheckboxValue = "checked";
let lineXAxisLineCheckboxValue = "checked";
let lineYAxisLineCheckboxValue = "unchecked";
let lineHoverCheckboxValue = "unchecked";

let lineBackgroundCPValue = "rgb(84, 81, 93)";
let lineCPValue1 = "rgb(250, 250, 250)";
let lineCPValue2 = "rgb(250, 250, 250)";
let lineCPValue3 = "rgb(250, 250, 250)";
let lineTickCPValue = "rgb(238, 238, 238)";
let lineTitleCPValue = "rgb(255, 255, 255)";
let lineXAxisTitleCPValue = "rgb(255, 255, 255)";
let lineYAxisTitleCPValue = "rgb(255, 255, 255)";
let lineGridCPValue = "rgba(255, 255, 255, 0.337)";
let lineXAxisLineCPValue = "rgb(255, 255, 255)";
let lineYAxisLineCPValue = "rgb(211, 211, 211)";
let lineDatapointCPValue = "rgba(255, 255, 255, 0)";
let lineDatapointBorderCPValue = "rgba(255, 255, 255, 1)";
let lineAreaCPValue = "rgba(245, 245, 245, 0.2)";

let lineAreaCheckboxValue = "unchecked";
let lineAmountInputValue = lineAmountInput.value;

responsiveLineChart(
  lineTitleInputValue,
  lineXAxisTitleInputValue,
  lineYAxisTitleInputValue,
  lineTitleSliderValue,
  lineXAxisTitleSliderValue,
  lineYAxisTitleSliderValue,
  lineWidthSliderValue,
  linePointRadiusSliderValue,
  lineTooltipCheckboxValue,
  lineDatapointCheckboxValue,
  lineXAxisGridCheckboxValue,
  lineYAxisGridCheckboxValue,
  lineXAxisLineCheckboxValue,
  lineYAxisLineCheckboxValue,
  lineHoverCheckboxValue,
  lineBackgroundCPValue,
  lineCPValue1,
  lineCPValue2,
  lineCPValue3,
  lineTickCPValue,
  lineTitleCPValue,
  lineXAxisTitleCPValue,
  lineYAxisTitleCPValue,
  lineGridCPValue,
  lineXAxisLineCPValue,
  lineYAxisLineCPValue,
  lineDatapointCPValue,
  lineDatapointBorderCPValue,
  lineAreaCPValue
);

d3.select("#line_area").attr("display", "none");

d3.select("#line1").attr("display", "");
d3.select("#line2").attr("display", "none");
d3.select("#line3").attr("display", "none");

document.getElementById("line_title_span").innerHTML = lineTitleInputValue;
document.getElementById(
  "line_x_title_span"
).innerHTML = lineXAxisTitleInputValue;
document.getElementById(
  "line_y_title_span"
).innerHTML = lineYAxisTitleInputValue;

lineTitleInput.addEventListener("keyup", function () {
  d3.select("#line_title").text(lineTitleInput.value);
  lineTitleInputValue = lineTitleInput.value;
  document.getElementById("line_title_span").innerHTML = lineTitleInputValue;
});

lineXAxisTitleInput.addEventListener("keyup", function () {
  d3.select("#line_xaxis_title").text(lineXAxisTitleInput.value);
  lineXAxisTitleInputValue = lineXAxisTitleInput.value;
  document.getElementById(
    "line_x_title_span"
  ).innerHTML = lineXAxisTitleInputValue;
});

lineYAxisTitleInput.addEventListener("keyup", function () {
  d3.select("#line_yaxis_title").text(lineYAxisTitleInput.value);
  lineYAxisTitleInputValue = lineYAxisTitleInput.value;
  document.getElementById(
    "line_y_title_span"
  ).innerHTML = lineYAxisTitleInputValue;
});

lineTitleSlider.addEventListener("mousedown", function () {
  lineTitleSlider.addEventListener("mousemove", function () {
    d3.select("#line_title").attr("x", lineTitleSlider.value * 20);
    lineTitleSliderValue = lineTitleSlider.value;
  });
});

lineXAxisTitleSlider.addEventListener("mousedown", function () {
  lineXAxisTitleSlider.addEventListener("mousemove", function () {
    d3.select("#line_xaxis_title").attr("x", lineXAxisTitleSlider.value * 20);
    lineXAxisTitleSliderValue = lineXAxisTitleSlider.value;
  });
});

lineYAxisTitleSlider.addEventListener("mousedown", function () {
  lineYAxisTitleSlider.addEventListener("mousemove", function () {
    d3.select("#line_yaxis_title").attr("x", lineYAxisTitleSlider.value * 20);
    lineYAxisTitleSliderValue = lineYAxisTitleSlider.value;
  });
});

lineWidthSlider.addEventListener("mousedown", function () {
  lineWidthSlider.addEventListener("mousemove", function () {
    d3.selectAll(".line").attr(
      "stroke-width",
      `${lineWidthSlider.value * 0.5}px`
    );
    lineWidthSliderValue = lineWidthSlider.value;
  });
});

linePointRadiusSlider.addEventListener("mousedown", function () {
  linePointRadiusSlider.addEventListener("mousemove", function () {
    d3.selectAll(".circles").attr("r", linePointRadiusSlider.value * 0.5);
    linePointRadiusSliderValue = linePointRadiusSlider.value;
  });
});

lineTooltipCheckbox.addEventListener("change", function () {
  if (this.checked) {
    let tooltip = d3.select("body").append("div").attr("class", "line_tooltip");
    d3.select(".line_tooltip").style("background-color", "white");
    d3.select(".line_tooltip").style("border", "1px solid rgba(0,0,0,0.2)");
    let circles = d3.selectAll(".circles");
    circles
      .on("mousemove", function (d) {
        tooltip
          .style("left", d3.event.pageX + 10 + "px")
          .style("top", d3.event.pageY + 10 + "px")
          .style("display", "inline-block");
      })
      .on("mouseout", function (d) {
        tooltip.style("display", "none");
      });
    lineTooltipCheckboxValue = "checked";
  } else if (this.checked === false) {
    document.querySelector("body > div.line_tooltip").remove();
    lineTooltipCheckboxValue = "unchecked";
  }
});

lineDatapointCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.selectAll(".circles").attr("display", "");
  } else if (this.checked === false) {
    d3.selectAll(".circles").attr("display", "none");
  }
});

lineXAxisGridCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#x_grid").attr("display", "");
  } else if (this.checked === false) {
    d3.select("#x_grid").attr("display", "none");
  }
});

lineYAxisGridCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#y_grid").attr("display", "");
  } else if (this.checked === false) {
    d3.select("#y_grid").attr("display", "none");
  }
});

lineXAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#x_axis > path").attr("display", "");
    lineXAxisLineCheckboxValue = "checked";
  } else if (this.checked === false) {
    d3.select("#x_axis > path").attr("display", "none");
    lineXAxisLineCheckboxValue = "unchecked";
  }
});

lineYAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#y_axis > path").attr("display", "");
    lineYAxisLineCheckboxValue = "checked";
  } else if (this.checked === false) {
    d3.select("#y_axis > path").attr("display", "none");
    lineYAxisLineCheckboxValue = "unchecked";
  }
});

lineHoverCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.selectAll(".circles").classed("circle_hovered", true);
    lineHoverCheckboxValue = "checked";
  } else if (this.checked === false) {
    d3.selectAll(".circles").classed("circle_hovered", false);
    lineHoverCheckboxValue = "unchecked";
  }
});

lineAmountInput.addEventListener("change", function () {
  if (lineAmountInput.value == 1) {
    console.log(1);
    d3.select("#line1").attr("display", "");
    d3.select("#line2").attr("display", "none");
    d3.select("#line3").attr("display", "none");
  } else if (lineAmountInput.value == 2) {
    console.log(2);
    d3.select("#line1").attr("display", "");
    d3.select("#line2").attr("display", "");
    d3.select("#line3").attr("display", "none");
  } else if (lineAmountInput.value == 3) {
    console.log(3);
    d3.select("#line1").attr("display", "");
    d3.select("#line2").attr("display", "");
    d3.select("#line3").attr("display", "");
  }
});

lineAreaCheckbox.addEventListener("change", function () {
  if (this.checked) {
    lineAmountInputValue = 1;
    lineAmountInput.value = 1;
    lineAmountInput.disabled = true;
    d3.select("#line2").attr("display", "none");
    d3.select("#line3").attr("display", "none");
    d3.select("#line_area").attr("display", "");
  } else if (this.checked === false) {
    d3.select("#line_area").attr("display", "none");
    lineAmountInput.disabled = false;
  }
});
//  Color Picker Input - Spectrum
$("#line_background_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("svg").style("background-color", color.toRgbString());

    lineBackgroundCPValue = color.toRgbString();
  },
});

$("#line_color_cp1").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#line1").style("stroke", color.toRgbString());

    lineCPValue1 = color.toRgbString();
  },
});

$("#line_color_cp2").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#line2").style("stroke", color.toRgbString());

    lineCPValue2 = color.toRgbString();
  },
});

$("#line_color_cp3").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#line3").style("stroke", color.toRgbString());

    lineCPValue3 = color.toRgbString();
  },
});
$("#line_tick_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".tick > text").style("fill", color.toRgbString());

    lineTickCPValue = color.toRgbString();
  },
});
$("#line_title_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#line_title").style("fill", color.toRgbString());

    lineTitleCPValue = color.toRgbString();
  },
});
$("#line_xaxis_title_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#line_xaxis_title").style("fill", color.toRgbString());

    lineXAxisTitleCPValue = color.toRgbString();
  },
});
$("#line_yaxis_title_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#line_yaxis_title").style("fill", color.toRgbString());

    lineYAxisTitleCPValue = color.toRgbString();
  },
});
$("#line_grid_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".grid").style("color", color.toRgbString());

    lineGridCPValue = color.toRgbString();
  },
});
$("#line_xaxis_line_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#x_axis > path").style("stroke", color.toRgbString());

    lineXAxisLineCPValue = color.toRgbString();
  },
});
$("#line_yaxis_line_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#y_axis > path").style("stroke", color.toRgbString());

    lineYAxisLineCPValue = color.toRgbString();
  },
});
$("#line_datapoint_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".circles").style("fill", color.toRgbString());

    lineDatapointCPValue = color.toRgbString();
  },
});
$("#line_datapoint_border_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".circles").style("stroke", color.toRgbString());

    lineDatapointCPValue = color.toRgbString();
  },
});

$("#line_area_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("#line_area").style("fill", color.toRgbString());

    lineAreaCPValue = color.toRgbString();
  },
});
