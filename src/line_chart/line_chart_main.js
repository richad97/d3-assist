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
let lineXAxisGridCheckboxValue = "checked";
let lineYAxisGridCheckboxValue = "checked";
let lineXAxisLineCheckboxValue = "checked";
let lineYAxisLineCheckboxValue = "checked";
let lineHoverCheckboxValue = "unchecked";

let lineBackgroudCPValue = "rgba(255,255,255,1)";
let lineCPValue = "rgba(249, 203, 156, 0.46)";
let lineTickCPValue = "rgba(42, 42, 42, 0.187)";
let lineTitleCPValue = "rgb(103, 103, 103)";
let lineXAxisTitleCPValue = "rgb(103, 103, 103)";
let lineYAxisTitleCPValue = "rgb(103, 103, 103)";
let lineGridCPValue = "rgba(0, 0, 0, 0.108)";
let lineXAxisLineCPValue = "rgb(211, 211, 211)";
let lineYAxisLineCPValue = "rgb(211, 211, 211)";
let lineDatapointCPValue = "rgb(130, 130, 130)";
let lineDatapointBorderCPValue = "rgb(130, 130, 130)";

lineTitleInput.addEventListener("keyup", function () {
  d3.select("#line_title").text(lineTitleInput.value);
  lineTitleInputValue = lineTitleInput.value;
});

lineXAxisTitleInput.addEventListener("keyup", function () {
  d3.select("#line_xaxis_title").text(lineXAxisTitleInput.value);
  lineXAxisTitleInputValue = lineXAxisTitleInput.value;
});

lineYAxisTitleInput.addEventListener("keyup", function () {
  d3.select("#line_yaxis_title").text(lineYAxisTitleInput.value);
  lineYAxisTitleInputValue = lineYAxisTitleInput.value;
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

//  Color Picker Input - Spectrum
$("#line_background_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.select("svg").style("background-color", color.toRgbString());

    lineBackgroudCPValue = color.toRgbString();
  },
});

$("#line_color_cp").spectrum({
  type: "color",
  preferredFormat: "rgb",
  showInput: true,
  showButtons: false,
  allowEmpty: false,
  move: function (color) {
    d3.selectAll(".line").style("stroke", color.toRgbString());

    lineCPValue = color.toRgbString();
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

responsiveLineChart();
