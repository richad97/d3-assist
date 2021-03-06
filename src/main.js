import { barChart } from "./chart_templates/bar_chart.js";
import { fixedLineChart } from "./chart_templates/fixed_line_chart.js";
import { fixedPieChart } from "./chart_templates/fixed_pie_chart.js";
import { responsiveHBarChart } from "./chart_templates/responsive_horizontal_bar_chart.js";
import { responsiveLineChart } from "./chart_templates/responsive_line_chart.js";
import { responsiveVBarChart } from "./chart_templates/responsive_vertical_bar_chart.js";

barChart("horizontal");
//fixedLineChart();
//fixedPieChart();
//responsiveHBarChart();
//responsiveLineChart();
//responsiveVBarChart();

$("#bar_title_cp").spectrum({
  type: "color",
  move: function (color) {
    d3.select("#bar_title").style("fill", color.toRgbString());
  },
});
$("#bar_xaxis_title_cp").spectrum({
  type: "color",
  move: function (color) {
    d3.select("#bar_xaxis_title").style("fill", color.toRgbString());
  },
});
$("#bar_yaxis_title_cp").spectrum({
  type: "color",
  move: function (color) {
    d3.select("#bar_yaxis_title").style("fill", color.toRgbString());
  },
});
$("#bar_background_cp").spectrum({
  type: "color",
  move: function (color) {
    d3.select("svg").style("background-color", color.toRgbString());
  },
});
$("#bar_xaxis_line_cp").spectrum({
  type: "color",
  move: function (color) {
    d3.select("#x_axis > path").style("stroke", color.toRgbString());
  },
});
$("#bar_yaxis_line_cp").spectrum({
  type: "color",
  move: function (color) {
    d3.select("#y_axis > path").style("stroke", color.toRgbString());
  },
});

$("#bars_cp").spectrum({
  type: "color",
  move: function (color) {
    d3.selectAll(".bars").style("fill", color.toRgbString());
  },
});

$("#bar_tick_cp").spectrum({
  type: "color",
  move: function (color) {
    d3.selectAll(".tick > text").style("fill", color.toRgbString());
  },
});
$("#bar_grid_cp").spectrum({
  type: "color",
  move: function (color) {
    d3.selectAll(".grid").style("color", color.toRgbString());
  },
});

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

let barTitleInputValue = barTitleInput.value;
let barXAxisTitleInputValue = barXAxisTitleInput.value;
let barYAxisTitleInputValue = barYAxisTitleInput.value;

let barTitleSliderValue = barTitleSlider.value;
let barXAxisTitleSliderValue = barXAxisTitleSlider.value;
let barYAxisTitleSliderValue = barYAxisTitleSlider.value;

//barsCP.addEventListener("change", () => {
//console.log($("#bars_cp").spectrum("get").toHexString());
//console.log("yes");
//d3.selectAll(".bars").style("fill", barsCP.value);
//d3.select(".bar_tooltip").text(barTooltipCP.value);
//});

function resetCheckboxes() {
  barTooltipCheckbox.checked = false;
  barXAxisGridCheckbox.checked = true;
  barYAxisGridCheckbox.checked = true;
  barXAxisLineCheckbox.checked = true;
  barYAxisLineCheckbox.checked = true;
  barHoverCheckbox.checked = true;
}

barTitleInput.addEventListener("keyup", () => {
  d3.select("#bar_title").text(barTitleInput.value);
  barTitleInputValue = barTitleInput.value;
});

barXAxisTitleInput.addEventListener("keyup", () => {
  d3.select("#bar_xaxis_title").text(barXAxisTitleInput.value);
  barXAxisTitleInputValue = barXAxisTitleInput.value;
});

barYAxisTitleInput.addEventListener("keyup", () => {
  d3.select("#bar_yaxis_title").text(barYAxisTitleInput.value);
  barYAxisTitleInputValue = barYAxisTitleInput.value;
});

barTitleSlider.addEventListener("mousedown", function () {
  barTitleSlider.addEventListener("mousemove", function () {
    d3.select("#bar_title").attr("x", barTitleSlider.value * 20);
    barTitleSliderValue = barTitleSlider.value;
  });
});

barXAxisTitleSlider.addEventListener("mousedown", function () {
  barXAxisTitleSlider.addEventListener("mousemove", function () {
    d3.select("#bar_xaxis_title").attr("x", barXAxisTitleSlider.value * 20);
    barXAxisTitleSliderValue = barXAxisTitleSlider.value;
  });
});

barYAxisTitleSlider.addEventListener("mousedown", function () {
  barYAxisTitleSlider.addEventListener("mousemove", function () {
    d3.select("#bar_yaxis_title").attr("x", barYAxisTitleSlider.value * 20);
    barYAxisTitleSliderValue = barYAxisTitleSlider.value;
  });
});

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
  } else {
    document.querySelector("body > div.bar_tooltip").remove();
  }
});

barHorizontalCheckbox.addEventListener("change", function () {
  if (this.checked) {
    barChart(
      "horizontal",
      barTitleInputValue,
      barXAxisTitleInputValue,
      barYAxisTitleInputValue,
      barTitleSliderValue,
      barXAxisTitleSliderValue,
      barYAxisTitleSliderValue
    );
    barVerticalCheckbox.checked = false;
    resetCheckboxes();
  } else if (this.checked === false) {
    barChart(
      "vertical",
      barTitleInputValue,
      barXAxisTitleInputValue,
      barYAxisTitleInputValue,
      barTitleSliderValue,
      barXAxisTitleSliderValue,
      barYAxisTitleSliderValue
    );
    barVerticalCheckbox.checked = true;
    resetCheckboxes();
  }
});

barVerticalCheckbox.addEventListener("change", function () {
  if (this.checked) {
    barChart(
      "vertical",
      barTitleInputValue,
      barXAxisTitleInputValue,
      barYAxisTitleInputValue,
      barTitleSliderValue,
      barXAxisTitleSliderValue,
      barYAxisTitleSliderValue
    );
    barHorizontalCheckbox.checked = false;
    resetCheckboxes();
  } else if (this.checked === false) {
    barChart(
      "horizontal",
      barTitleInputValue,
      barXAxisTitleInputValue,
      barYAxisTitleInputValue,
      barTitleSliderValue,
      barXAxisTitleSliderValue,
      barYAxisTitleSliderValue
    );
    barHorizontalCheckbox.checked = true;
    resetCheckboxes();
  }
});

barXAxisGridCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#x_grid").attr("display", "");
  } else {
    d3.select("#x_grid").attr("display", "none");
  }
});

barYAxisGridCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#y_grid").attr("display", "");
  } else {
    d3.select("#y_grid").attr("display", "none");
  }
});

barXAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#x_axis > path").attr("display", "");
  } else {
    d3.select("#x_axis > path").attr("display", "none");
  }
});

barYAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#y_axis > path").attr("display", "");
  } else {
    d3.select("#y_axis > path").attr("display", "none");
  }
});

barHoverCheckbox.addEventListener("change", function () {
  if (this.checked) {
    document.querySelector(".bars:hover").removeAttribute("opacity");
  } else {
    document.querySelector(".bars:hover").removeAttribute("opacity");
  }
});
