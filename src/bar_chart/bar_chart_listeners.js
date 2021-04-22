const d3 = require("d3");

import { barChart } from "./bar_chart_graph.js";

import {
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
} from "./bar_chart_inputs.js";

import { barValues } from "./bar_chart_values.js";

barTitleInput.addEventListener("input", () => {
  barValues.titleInput = barTitleInput.value;
  d3.select("#bar_title").text(barValues.titleInput);
  document.getElementById("bar_title_span").innerHTML = barValues.titleInput;
});

barXAxisTitleInput.addEventListener("input", () => {
  barValues.xAxisTitleInput = barXAxisTitleInput.value;
  d3.select("#bar_xaxis_title").text(barValues.xAxisTitleInput);
  document.getElementById("bar_x_title_span").innerHTML =
    barValues.xAxisTitleInput;
});

barYAxisTitleInput.addEventListener("input", () => {
  barValues.yAxisTitleInput = barYAxisTitleInput.value;
  d3.select("#bar_yaxis_title").text(barValues.yAxisTitleInput);
  document.getElementById("bar_y_title_span").innerHTML =
    barValues.yAxisTitleInput;
});

barTitleSlider.addEventListener("input", function () {
  barValues.titleSlider = barTitleSlider.value;
  d3.select("#bar_title").attr("x", barValues.titleSlider);
  document.getElementById("bar_title_slider_span").innerHTML =
    barValues.titleSlider;
});

barXAxisTitleSlider.addEventListener("input", function () {
  barValues.xAxisTitleSlider = barXAxisTitleSlider.value;
  d3.select("#bar_xaxis_title").attr("x", barValues.xAxisTitleSlider);
  document.getElementById("bar_x_title_slider_span").innerHTML =
    barValues.xAxisTitleSlider;
});

barYAxisTitleSlider.addEventListener("input", function () {
  barValues.yAxisTitleSlider = barYAxisTitleSlider.value;
  d3.select("#bar_yaxis_title").attr("x", barValues.yAxisTitleSlider * 20);
  document.getElementById("bar_y_title_slider_span").innerHTML =
    barValues.yAxisTitleSlider;
});

barTooltipCheckbox.addEventListener("change", function () {
  if (this.checked) {
    let tooltip = d3.select("body").append("div").attr("class", "bar_tooltip");

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

    barValues.tooltipCheckbox = "checked";
    d3.select("#bar_tooltip_logic_span").classed("hide", false);
  } else if (this.checked === false) {
    barValues.tooltipCheckbox = "unchecked";
    document.querySelector("body > div.bar_tooltip").remove();
    d3.select("#bar_tooltip_logic_span").classed("hide", true);
  }
});

barHorizontalCheckbox.addEventListener("change", function () {
  if (this.checked) {
    //  turns off tooltip
    barValues.tooltipCheckbox = "unchecked";
    barTooltipCheckbox.checked = false;
    d3.select("#bar_tooltip_logic_span").classed("hide", true);

    barValues.direction = "horizontal";

    //  calls function to horizontal / turns on necessary divs
    barChart(
      barValues.direction,
      barValues.titleInput,
      barValues.xAxisTitleInput,
      barValues.yAxisTitleInput,
      barValues.titleSlider,
      barValues.xAxisTitleSlider,
      barValues.yAxisTitleSlider,
      barValues.xAxisGridCheckbox,
      barValues.yAxisGridCheckbox,
      barValues.hoverCheckbox,
      barValues.xAxisLineCheckbox,
      barValues.yAxisLineCheckbox,
      barValues.tooltipCheckbox,
      barValues.backgroudCP,
      barValues.barsCP,
      barValues.tickCP,
      barValues.titleCP,
      barValues.xAxisTitleCP,
      barValues.yAxisTitleCP,
      barValues.gridCP,
      barValues.xAxisLineCP,
      barValues.yAxisLineCP,
      barValues.borderCP
    );
    d3.select("#bar_horizontal_scale_span").classed("hide", false);
    d3.select("#bar_horizontal_bar_logic_span").classed("hide", false);
    document.getElementById("bar_gnth_child_span_x").innerHTML = "2";
    document.getElementById("bar_gnth_child_span_y").innerHTML = "1";

    //  turns off vertical
    barVerticalCheckbox.checked = false;
    d3.select("#bar_vertical_scale_span").classed("hide", true);
    d3.select("#bar_vertical_bar_logic_span").classed("hide", true);
  } else if (this.checked === false) {
    barValues.tooltipCheckbox = "unchecked";
    barTooltipCheckbox.checked = false;
    d3.select("#bar_tooltip_logic_span").classed("hide", true);

    barValues.direction = "vertical";

    barChart(
      barValues.direction,
      barValues.titleInput,
      barValues.xAxisTitleInput,
      barValues.yAxisTitleInput,
      barValues.titleSlider,
      barValues.xAxisTitleSlider,
      barValues.yAxisTitleSlider,
      barValues.xAxisGridCheckbox,
      barValues.yAxisGridCheckbox,
      barValues.hoverCheckbox,
      barValues.xAxisLineCheckbox,
      barValues.yAxisLineCheckbox,
      barValues.tooltipCheckbox,
      barValues.backgroudCP,
      barValues.barsCP,
      barValues.tickCP,
      barValues.titleCP,
      barValues.xAxisTitleCP,
      barValues.yAxisTitleCP,
      barValues.gridCP,
      barValues.xAxisLineCP,
      barValues.yAxisLineCP,
      barValues.borderCP
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
    barValues.tooltipCheckbox = "unchecked";
    barTooltipCheckbox.checked = false;
    d3.select("#bar_tooltip_logic_span").classed("hide", true);

    barValues.direction = "vertical";

    barChart(
      barValues.direction,
      barValues.titleInput,
      barValues.xAxisTitleInput,
      barValues.yAxisTitleInput,
      barValues.titleSlider,
      barValues.xAxisTitleSlider,
      barValues.yAxisTitleSlider,
      barValues.xAxisGridCheckbox,
      barValues.yAxisGridCheckbox,
      barValues.hoverCheckbox,
      barValues.xAxisLineCheckbox,
      barValues.yAxisLineCheckbox,
      barValues.tooltipCheckbox,
      barValues.backgroudCP,
      barValues.barsCP,
      barValues.tickCP,
      barValues.titleCP,
      barValues.xAxisTitleCP,
      barValues.yAxisTitleCP,
      barValues.gridCP,
      barValues.xAxisLineCP,
      barValues.yAxisLineCP,
      barValues.borderCP
    );

    barHorizontalCheckbox.checked = false;
    d3.select("#bar_horizontal_scale_span").classed("hide", true);
    d3.select("#bar_horizontal_bar_logic_span").classed("hide", true);

    d3.select("#bar_vertical_scale_span").classed("hide", false);
    d3.select("#bar_vertical_bar_logic_span").classed("hide", false);
    document.getElementById("bar_gnth_child_span_x").innerHTML = "1";
    document.getElementById("bar_gnth_child_span_y").innerHTML = "2";
  } else if (this.checked === false) {
    barValues.tooltipCheckbox = "unchecked";
    barTooltipCheckbox.checked = false;
    d3.select("#bar_tooltip_logic_span").classed("hide", true);

    barValues.direction = "horizontal";

    barChart(
      barValues.direction,
      barValues.titleInput,
      barValues.xAxisTitleInput,
      barValues.yAxisTitleInput,
      barValues.titleSlider,
      barValues.xAxisTitleSlider,
      barValues.yAxisTitleSlider,
      barValues.xAxisGridCheckbox,
      barValues.yAxisGridCheckbox,
      barValues.hoverCheckbox,
      barValues.xAxisLineCheckbox,
      barValues.yAxisLineCheckbox,
      barValues.tooltipCheckbox,
      barValues.backgroudCP,
      barValues.barsCP,
      barValues.tickCP,
      barValues.titleCP,
      barValues.xAxisTitleCP,
      barValues.yAxisTitleCP,
      barValues.gridCP,
      barValues.xAxisLineCP,
      barValues.yAxisLineCP,
      barValues.borderCP
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
    barValues.xAxisGridCheckbox = "checked";
    d3.select("#bar_x_grid").attr("display", "");
    d3.select("#bar_x_grid_span").classed("hide", false);
  } else if (this.checked === false) {
    barValues.xAxisGridCheckbox = "unchecked";
    d3.select("#bar_x_grid").attr("display", "none");
    d3.select("#bar_x_grid_span").classed("hide", true);
  }
});

barYAxisGridCheckbox.addEventListener("change", function () {
  if (this.checked) {
    barValues.yAxisGridCheckbox = "checked";
    d3.select("#bar_y_grid").attr("display", "");
    d3.select("#bar_y_grid_span").classed("hide", false);
  } else if (this.checked === false) {
    barValues.yAxisGridCheckbox = "unchecked";
    d3.select("#bar_y_grid").attr("display", "none");
    d3.select("#bar_y_grid_span").classed("hide", true);
  }
});

barHoverCheckbox.addEventListener("change", function () {
  if (this.checked) {
    barValues.hoverCheckbox = "checked";
    d3.selectAll("rect").classed("hovered", true);
    d3.select("#bar_hover_span").classed("hide", false);
  } else if (this.checked === false) {
    barValues.hoverCheckbox = "unchecked";
    d3.selectAll("rect").classed("hovered", false);
    d3.select("#bar_hover_span").classed("hide", true);
  }
});

barXAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    barValues.xAxisLineCheckbox = "checked";
    d3.select("#bar_x_axis > path").attr("display", "");
    d3.select("#bar_x_line_span").classed("hide", true);
  } else if (this.checked === false) {
    barValues.xAxisLineCheckbox = "unchecked";
    d3.select("#bar_x_axis > path").attr("display", "none");
    d3.select("#bar_x_line_span").classed("hide", false);
  }
});

barYAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    barValues.yAxisLineCheckbox = "checked";
    d3.select("#bar_y_axis > path").attr("display", "");
    d3.select("#bar_y_line_span").classed("hide", true);
  } else if (this.checked === false) {
    barValues.yAxisLineCheckbox = "unchecked";
    d3.select("#bar_y_axis > path").attr("display", "none");
    d3.select("#bar_y_line_span").classed("hide", false);
  }
});
