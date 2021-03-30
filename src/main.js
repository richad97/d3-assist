import { initLineChart } from "./line_chart/line_chart_main.js";
import { initBarChart } from "./bar_chart/bar_chart_main.js";

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

function showLine() {
  $(".bar_title_col_row").hide();
  $(".bar_slider_col_row").hide();
  $(".bar_checkbox_col_row").hide();
  $(".bar_color_col_row").hide();
  $("#bar_chart_template").hide();
  $("#bar_dimension_div").hide();
  $("#bar_div").hide();

  $(".line_title_col_row").show();
  $(".line_slider_col_row").show();
  $(".line_checkbox_col_row").show();
  $(".line_color_col_row").show();
  $("#line_chart_template").show();
  $("#line_dimension_div").show();
  $("#line_div").show();
}

function showBar() {
  $(".bar_title_col_row").show();
  $(".bar_slider_col_row").show();
  $(".bar_checkbox_col_row").show();
  $(".bar_color_col_row").show();
  $("#bar_chart_template").show();
  $("#bar_dimension_div").show();
  $("#bar_div").show();

  $(".line_title_col_row").hide();
  $(".line_slider_col_row").hide();
  $(".line_checkbox_col_row").hide();
  $(".line_color_col_row").hide();
  $("#line_chart_template").hide();
  $("#line_dimension_div").hide();
  $("#line_div").hide();
}

$("#test_line").click(function (e) {
  e.preventDefault();
  showLine();
});

$("#test_bar").click(function (e) {
  e.preventDefault();
  showBar();
});

initBarChart();
initLineChart();
showLine();
