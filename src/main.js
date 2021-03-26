import { initLineChart } from "./line_chart/line_chart_main.js";
//import { initBarChart } from "./bar_chart/bar_chart_main.js";

$(document).ready(function () {
  initLineChart();

  $("#title_arrow_right_icon").hide();
  $("#slider_arrow_right_icon").hide();
  $("#checkbox_arrow_right_icon").hide();
  $("#color_arrow_right_icon").hide();

  $("#title_arrow_down_icon").click(function () {
    $(".line_title_col_row").slideToggle("slow");

    $(this).hide();
    $("#title_arrow_right_icon").show();
  });
  $("#title_arrow_right_icon").click(function () {
    $(".line_title_col_row").slideToggle("slow");

    $(this).hide();
    $("#title_arrow_down_icon").show();
  });

  $("#slider_arrow_down_icon").click(function () {
    $(".line_slider_col_row").slideToggle("slow");

    $(this).hide();
    $("#slider_arrow_right_icon").show();
  });
  $("#slider_arrow_right_icon").click(function () {
    $(".line_slider_col_row").slideToggle("slow");

    $(this).hide();
    $("#slider_arrow_down_icon").show();
  });

  $("#checkbox_arrow_down_icon").click(function () {
    $(".line_checkbox_col_row").slideToggle("slow");

    $(this).hide();
    $("#checkbox_arrow_right_icon").show();
  });
  $("#checkbox_arrow_right_icon").click(function () {
    $(".line_checkbox_col_row").slideToggle("slow");

    $(this).hide();
    $("#checkbox_arrow_down_icon").show();
  });

  $("#color_arrow_down_icon").click(function () {
    $(".line_color_col_row").slideToggle("slow");

    $(this).hide();
    $("#color_arrow_right_icon").show();
  });
  $("#color_arrow_right_icon").click(function () {
    $(".line_color_col_row").slideToggle("slow");

    $(this).hide();
    $("#color_arrow_down_icon").show();
  });
});
