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

barTitleInput.addEventListener("keyup", () => {
  d3.select("#bar_title").text(barTitleInput.value);
  barValues.titleInput = barTitleInput.value;
  document.getElementById("bar_title_span").innerHTML = barValues.titleInput;
});

barXAxisTitleInput.addEventListener("keyup", () => {
  d3.select("#bar_xaxis_title").text(barXAxisTitleInput.value);
  barValues.xAxisTitleInput = barXAxisTitleInput.value;
  document.getElementById("bar_x_title_span").innerHTML =
    barValues.xAxisTitleInput;
});

barYAxisTitleInput.addEventListener("keyup", () => {
  d3.select("#bar_yaxis_title").text(barYAxisTitleInput.value);
  barValues.yAxisTitleInput = barYAxisTitleInput.value;
  document.getElementById("bar_y_title_span").innerHTML =
    barValues.yAxisTitleInput;
});

//  Slider Inputs
barTitleSlider.addEventListener("mousedown", function () {
  barTitleSlider.addEventListener("mousemove", function () {
    d3.select("#bar_title").attr("x", barTitleSlider.value * 20);
    barValues.titleSlider = barTitleSlider.value;
    document.getElementById("bar_title_slider_span").innerHTML =
      barValues.titleSlider;
  });
});

barXAxisTitleSlider.addEventListener("mousedown", function () {
  barXAxisTitleSlider.addEventListener("mousemove", function () {
    d3.select("#bar_xaxis_title").attr("x", barXAxisTitleSlider.value * 20);
    barValues.xAxisTitleSlider = barXAxisTitleSlider.value;
    document.getElementById("bar_x_title_slider_span").innerHTML =
      barValues.xAxisTitleSlider;
  });
});

barYAxisTitleSlider.addEventListener("mousedown", function () {
  barYAxisTitleSlider.addEventListener("mousemove", function () {
    d3.select("#bar_yaxis_title").attr("x", barYAxisTitleSlider.value * 20);
    barValues.yAxisTitleSlider = barYAxisTitleSlider.value;
    document.getElementById("bar_y_title_slider_span").innerHTML =
      barValues.yAxisTitleSlider;
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
    barValues.tooltipCheckbox = "checked";
    d3.select("#bar_tooltip_logic_span").classed("hide", false);
  } else if (this.checked === false) {
    document.querySelector("body > div.bar_tooltip").remove();
    barValues.tooltipCheckbox = "unchecked";
    d3.select("#bar_tooltip_logic_span").classed("hide", true);
  }
});

barHorizontalCheckbox.addEventListener("change", function () {
  if (this.checked) {
    barValues.tooltipCheckbox = "unchecked";
    barTooltipCheckbox.checked = false;
    d3.select("#bar_tooltip_logic_span").classed("hide", true);

    barChart(
      "horizontal",
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

    barVerticalCheckbox.checked = false;
    d3.select("#bar_vertical_scale_span").classed("hide", true);
    d3.select("#bar_vertical_bar_logic_span").classed("hide", true);
  } else if (this.checked === false) {
    barValues.tooltipCheckbox = "unchecked";
    barTooltipCheckbox.checked = false;
    d3.select("#bar_tooltip_logic_span").classed("hide", true);

    barChart(
      "vertical",
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

    barChart(
      "vertical",
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

    barChart(
      "horizontal",
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
    d3.select("#x_grid").attr("display", "");
    barValues.xAxisGridCheckbox = "checked";
    d3.select("#bar_x_grid_span").classed("hide", false);
  } else if (this.checked === false) {
    d3.select("#x_grid").attr("display", "none");
    barValues.xAxisGridCheckbox = "unchecked";
    d3.select("#bar_x_grid_span").classed("hide", true);
  }
});

barYAxisGridCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#y_grid").attr("display", "");
    barValues.yAxisGridCheckbox = "checked";
    d3.select("#bar_y_grid_span").classed("hide", false);
  } else if (this.checked === false) {
    d3.select("#y_grid").attr("display", "none");
    barValues.yAxisGridCheckbox = "unchecked";
    d3.select("#bar_y_grid_span").classed("hide", true);
  }
});

barHoverCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.selectAll("rect").classed("hovered", true);
    barValues.hoverCheckbox = "checked";
    d3.select("#bar_hover_span").classed("hide", false);
  } else if (this.checked === false) {
    d3.selectAll("rect").classed("hovered", false);
    barValues.hoverCheckbox = "unchecked";
    d3.select("#bar_hover_span").classed("hide", true);
  }
});

barXAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#x_axis > path").attr("display", "");
    barValues.xAxisLineCheckbox = "checked";
    d3.select("#bar_x_line_span").classed("hide", true);
  } else if (this.checked === false) {
    d3.select("#x_axis > path").attr("display", "none");
    barValues.xAxisLineCheckbox = "unchecked";
    d3.select("#bar_x_line_span").classed("hide", false);
  }
});

barYAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#y_axis > path").attr("display", "");
    barValues.yAxisLineCheckbox = "checked";
    d3.select("#bar_y_line_span").classed("hide", true);
  } else if (this.checked === false) {
    d3.select("#y_axis > path").attr("display", "none");
    barValues.yAxisLineCheckbox = "unchecked";
    d3.select("#bar_y_line_span").classed("hide", false);
  }
});

// barResponsiveCheckbox.addEventListener("change", function () {
//   if (this.checked) {
//     barHeightDimensionInput.disabled = true;
//     barWidthDimensionInput.disabled = true;
//   } else if (this.checked === false) {
//     barHeightDimensionInput.disabled = false;
//     barWidthDimensionInput.disabled = false;
//   }
// });
