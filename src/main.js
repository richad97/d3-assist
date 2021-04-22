const d3 = require("d3");

import { initLineChart } from "./line_chart/line_chart_main.js";
import { initBarChart } from "./bar_chart/bar_chart_main.js";
import { initPieChart } from "./pie_chart/pie_chart_main.js";
import { selectAll } from "d3";

const overlayCloseButton = document.querySelector("#overlay_close_button");
const overlayCopyButton = document.querySelector("#overlay_button_copy");
const formSubmitButton = document.querySelector("#form_submit_button");
const navLineButton = document.querySelector("#test_line");
const navBarButton = document.querySelector("#test_bar");
const navPieButton = document.querySelector("#test_pie");
const navMapButton = document.querySelector("#test_map");

let selected = "bar_chart";

(function rowButtons() {
  $("#title_arrow_right_icon").hide();
  $("#slider_arrow_right_icon").hide();
  $("#checkbox_arrow_right_icon").hide();
  $("#color_arrow_right_icon").hide();

  $("#title_arrow_down_icon").click(function () {
    $("#title_row_group").slideToggle("slow");

    $(this).hide();
    $("#title_arrow_right_icon").show();
  });
  $("#title_arrow_right_icon").click(function () {
    $("#title_row_group").slideToggle("slow");

    $(this).hide();
    $("#title_arrow_down_icon").show();
  });

  $("#slider_arrow_down_icon").click(function () {
    $("#slider_row_group").slideToggle("slow");

    $(this).hide();
    $("#slider_arrow_right_icon").show();
  });
  $("#slider_arrow_right_icon").click(function () {
    $("#slider_row_group").slideToggle("slow");

    $(this).hide();
    $("#slider_arrow_down_icon").show();
  });

  $("#checkbox_arrow_down_icon").click(function () {
    $("#checkbox_row_group").slideToggle("slow");

    $(this).hide();
    $("#checkbox_arrow_right_icon").show();
  });
  $("#checkbox_arrow_right_icon").click(function () {
    $("#checkbox_row_group").slideToggle("slow");

    $(this).hide();
    $("#checkbox_arrow_down_icon").show();
  });

  $("#color_arrow_down_icon").click(function () {
    $("#color_row_group").slideToggle("slow");

    $(this).hide();
    $("#color_arrow_right_icon").show();
  });
  $("#color_arrow_right_icon").click(function () {
    $("#color_row_group").slideToggle("slow");

    $(this).hide();
    $("#color_arrow_down_icon").show();
  });
})();

function copyChartToClipboard(chart) {
  var range = document.createRange();
  range.selectNode(document.getElementById(`${chart}_template`));

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  document.execCommand("copy");

  window.getSelection().removeAllRanges();
  window.alert("Code has been copied to your clipboard.");
}

function copyChartToValue(chart) {
  $("#overlay").fadeIn(600);

  var range = document.createRange();

  range.selectNode(document.getElementById(`${chart}_template`));

  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text

  let formHiddenLine = document.querySelector(`#${chart}_form_input`);

  formHiddenLine.setAttribute("value", window.getSelection().toString());
  window.getSelection().removeAllRanges(); // clear current selection
}

function showLine() {
  selected = "line_chart";

  $("#main_row").show();

  $(".line_title_col_row").show();
  $(".line_slider_col_row").show();
  $(".line_checkbox_col_row").show();
  $(".line_color_col_row").show();
  $("#line_chart_template").show();
  $("#line_dimension_div").show();
  $("#line_div").show();
  $("#line_form_button").show();

  $(".bar_title_col_row").hide();
  $(".bar_slider_col_row").hide();
  $(".bar_checkbox_col_row").hide();
  $(".bar_color_col_row").hide();
  $("#bar_chart_template").hide();
  $("#bar_dimension_div").hide();
  $("#bar_div").hide();
  $("#bar_form_button").hide();

  $(".pie_title_col_row").hide();
  $(".pie_slider_col_row").hide();
  $(".pie_checkbox_col_row").hide();
  $(".pie_color_col_row").hide();
  $("#pie_chart_template").hide();
  $("#pie_dimension_div").hide();
  $("#pie_div").hide();
  $("#pie_form_button").hide();
}

function showBar() {
  selected = "bar_chart";

  $("#main_row").show();

  $(".bar_title_col_row").show();
  $(".bar_slider_col_row").show();
  $(".bar_checkbox_col_row").show();
  $(".bar_color_col_row").show();
  $("#bar_chart_template").show();
  $("#bar_dimension_div").show();
  $("#bar_div").show();
  $("#bar_form_button").show();

  $(".line_title_col_row").hide();
  $(".line_slider_col_row").hide();
  $(".line_checkbox_col_row").hide();
  $(".line_color_col_row").hide();
  $("#line_chart_template").hide();
  $("#line_dimension_div").hide();
  $("#line_div").hide();
  $("#line_form_button").hide();

  $(".pie_title_col_row").hide();
  $(".pie_slider_col_row").hide();
  $(".pie_checkbox_col_row").hide();
  $(".pie_color_col_row").hide();
  $("#pie_chart_template").hide();
  $("#pie_dimension_div").hide();
  $("#pie_div").hide();
  $("#pie_form_button").hide();
}

function showPie() {
  selected = "pie_chart";

  $("#main_row").show();

  $(".pie_title_col_row").show();
  $(".pie_slider_col_row").show();
  $(".pie_checkbox_col_row").show();
  $(".pie_color_col_row").show();
  $("#pie_chart_template").show();
  $("#pie_dimension_div").show();
  $("#pie_div").show();
  $("#pie_form_button").show();

  $(".bar_title_col_row").hide();
  $(".bar_slider_col_row").hide();
  $(".bar_checkbox_col_row").hide();
  $(".bar_color_col_row").hide();
  $("#bar_chart_template").hide();
  $("#bar_dimension_div").hide();
  $("#bar_div").hide();
  $("#bar_form_button").hide();

  $(".line_title_col_row").hide();
  $(".line_slider_col_row").hide();
  $(".line_checkbox_col_row").hide();
  $(".line_color_col_row").hide();
  $("#line_chart_template").hide();
  $("#line_dimension_div").hide();
  $("#line_div").hide();
  $("#line_form_button").hide();
}

function showMap() {
  selected = "map";

  $("#main_row").hide();
}

formSubmitButton.addEventListener("click", function () {
  if (selected == "line_chart") {
    copyChartToValue("line_chart");
  }
  if (selected == "bar_chart") {
    copyChartToValue("bar_chart");
  }
  if (selected == "pie_chart") {
    copyChartToValue("pie_chart");
  }
});

overlayCloseButton.addEventListener("click", function () {
  $("#overlay").fadeOut();
});

overlayCopyButton.addEventListener("click", function () {
  if (selected == "line_chart") {
    copyChartToClipboard("line_chart");
  }
  if (selected == "bar_chart") {
    copyChartToClipboard("bar_chart");
  }
  if (selected == "pie_chart") {
    copyChartToClipboard("pie_chart");
  }
});

$(document).keyup(function (e) {
  if (e.key === "Escape") {
    // escape key maps to keycode `27`
    $("#overlay").fadeOut();
  }
});

$(navLineButton).click(function (e) {
  e.preventDefault();

  if (selected != "line_chart") {
    $("#form_container").fadeOut(850);
    $("#graph_container").fadeOut(850);

    setTimeout(function () {
      showLine();

      $("#form_container").fadeIn(850);
      $("#graph_container").fadeIn(850);
    }, 850);
  }

  d3.select(this).classed("selected", true);
  d3.select(navBarButton).classed("selected", false);
  d3.select(navPieButton).classed("selected", false);
  d3.select(navMapButton).classed("selected", false);
});

$(navBarButton).click(function (e) {
  e.preventDefault();

  if (selected != "bar_chart") {
    $("#form_container").fadeOut(850);
    $("#graph_container").fadeOut(850);

    setTimeout(function () {
      showBar();

      $("#form_container").fadeIn(850);
      $("#graph_container").fadeIn(850);
    }, 850);
  }

  d3.select(this).classed("selected", true);
  d3.select(navLineButton).classed("selected", false);
  d3.select(navPieButton).classed("selected", false);
  d3.select(navMapButton).classed("selected", false);
});

$(navPieButton).click(function (e) {
  e.preventDefault();

  if (selected != "pie_chart") {
    $("#form_container").fadeOut(850);
    $("#graph_container").fadeOut(850);

    setTimeout(function () {
      showPie();

      $("#form_container").fadeIn(850);
      $("#graph_container").fadeIn(850);
    }, 850);
  }

  d3.select(this).classed("selected", true);
  d3.select(navLineButton).classed("selected", false);
  d3.select(navBarButton).classed("selected", false);
  d3.select(navMapButton).classed("selected", false);
});

$(navMapButton).click(function (e) {
  e.preventDefault();

  if (selected != "map") {
    $("#form_container").fadeOut(850);
    $("#graph_container").fadeOut(850);

    setTimeout(function () {
      showMap();
    }, 850);
  }

  d3.select(this).classed("selected", true);
  d3.select(navLineButton).classed("selected", false);
  d3.select(navBarButton).classed("selected", false);
  d3.select(navPieButton).classed("selected", false);
});

initBarChart();
initLineChart();
initPieChart();

showBar();
//showLine();
//showPie();

d3.select(navBarButton).classed("selected", true);
