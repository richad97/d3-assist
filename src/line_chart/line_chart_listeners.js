const d3 = require("d3");

import {
  lineTitleInput,
  lineXAxisTitleInput,
  lineYAxisTitleInput,
  lineTitleSlider,
  lineXAxisTitleSlider,
  lineYAxisTitleSlider,
  lineWidthSlider,
  linePointRadiusSlider,
  lineTooltipCheckbox,
  lineDatapointCheckbox,
  lineXAxisGridCheckbox,
  lineYAxisGridCheckbox,
  lineXAxisLineCheckbox,
  lineYAxisLineCheckbox,
  lineHoverCheckbox,
  lineAreaCheckbox,
  lineAmountInput,
} from "./line_chart_inputs.js";

import { lineValues } from "./line_chart_values.js";

lineTitleInput.addEventListener("input", function () {
  lineValues.titleInput = lineTitleInput.value;
  d3.select("#line_title").text(lineValues.titleInput);
  document.getElementById("line_title_span").innerHTML = lineValues.titleInput;
});

lineXAxisTitleInput.addEventListener("input", function () {
  lineValues.xAxisTitleInput = lineXAxisTitleInput.value;
  d3.select("#line_xaxis_title").text(lineValues.xAxisTitleInput);
  document.getElementById("line_x_title_span").innerHTML =
    lineValues.xAxisTitleInput;
});

lineYAxisTitleInput.addEventListener("input", function () {
  lineValues.yAxisTitleInput = lineYAxisTitleInput.value;
  d3.select("#line_yaxis_title").text(lineValues.yAxisTitleInput);
  document.getElementById("line_y_title_span").innerHTML =
    lineValues.yAxisTitleInput;
});

lineTitleSlider.addEventListener("input", function () {
  lineValues.titleSlider = lineTitleSlider.value;
  d3.select("#line_title").attr("x", lineValues.titleSlider * 20);
  document.getElementById("line_title_slider_span").innerHTML =
    lineValues.titleSlider;
});

lineXAxisTitleSlider.addEventListener("input", function () {
  lineValues.xAxisTitleSlider = lineXAxisTitleSlider.value;
  d3.select("#line_xaxis_title").attr("x", lineValues.xAxisTitleSlider * 20);
  document.getElementById("line_x_title_slider_span").innerHTML =
    lineValues.xAxisTitleSlider;
});

lineYAxisTitleSlider.addEventListener("input", function () {
  lineValues.yAxisTitleSlider = lineYAxisTitleSlider.value;
  d3.select("#line_yaxis_title").attr("x", lineValues.yAxisTitleSlider * 20);
  document.getElementById("line_y_title_slider_span").innerHTML =
    lineValues.yAxisTitleSlider;
});

lineWidthSlider.addEventListener("input", function () {
  lineValues.widthSlider = lineWidthSlider.value;

  d3.selectAll(".line").attr(
    "stroke-width",
    `${lineValues.widthSlider * 0.5}px`
  );
  document.getElementById("line_1_width_slider_span").innerHTML =
    lineValues.widthSlider;
  document.getElementById("line_2_width_slider_span").innerHTML =
    lineValues.widthSlider;
  document.getElementById("line_3_width_slider_span").innerHTML =
    lineValues.widthSlider;
});

linePointRadiusSlider.addEventListener("input", function () {
  lineValues.pointRadiusSlider = linePointRadiusSlider.value;
  d3.selectAll(".circles_line").attr("r", lineValues.pointRadiusSlider * 0.5);
  d3.selectAll(".circles_line2").attr("r", lineValues.pointRadiusSlider * 0.5);
  d3.selectAll(".circles_line3").attr("r", lineValues.pointRadiusSlider * 0.5);
  document.getElementById("line_point_radius_slider_span").innerHTML =
    lineValues.pointRadiusSlider;
  document.getElementById("line_point2_radius_slider_span").innerHTML =
    lineValues.pointRadiusSlider;
  document.getElementById("line_point3_radius_slider_span").innerHTML =
    lineValues.pointRadiusSlider;
});

lineXAxisGridCheckbox.addEventListener("change", function () {
  if (this.checked) {
    lineValues.xAxisGridCheckbox = "checked";
    d3.select("#line_x_grid").attr("display", "");
    d3.select("#line_x_grid_checkbox_span").classed("hide", false);
  } else if (this.checked === false) {
    d3.select("#line_x_grid").attr("display", "none");
    lineValues.xAxisGridCheckbox = "unchecked";
    d3.select("#line_x_grid_checkbox_span").classed("hide", true);
  }
});

lineYAxisGridCheckbox.addEventListener("change", function () {
  if (this.checked) {
    lineValues.yAxisGridCheckbox = "checked";
    d3.select("#line_y_grid").attr("display", "");
    d3.select("#line_y_grid_checkbox_span").classed("hide", false);
  } else if (this.checked === false) {
    lineValues.yAxisGridCheckbox = "unchecked";
    d3.select("#line_y_grid").attr("display", "none");
    d3.select("#line_y_grid_checkbox_span").classed("hide", true);
  }
});

lineXAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    lineValues.xAxisLineCheckbox = "checked";
    d3.select("#line_x_axis > path").attr("display", "");
    d3.select("#line_x_line_checkbox_span").classed("hide", true);
  } else if (this.checked === false) {
    lineValues.xAxisLineCheckbox = "unchecked";
    d3.select("#line_x_axis > path").attr("display", "none");
    d3.select("#line_x_line_checkbox_span").classed("hide", false);
  }
});

lineYAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    lineValues.yAxisLineCheckbox = "checked";
    d3.select("#line_y_axis > path").attr("display", "");
    d3.select("#line_y_line_checkbox_span").classed("hide", true);
  } else if (this.checked === false) {
    lineValues.yAxisLineCheckbox = "unchecked";
    d3.select("#line_y_axis > path").attr("display", "none");
    d3.select("#line_y_line_checkbox_span").classed("hide", false);
  }
});

lineHoverCheckbox.addEventListener("change", function () {
  if (this.checked) {
    lineValues.hoverCheckbox = "checked";
    d3.selectAll(".circles_line").classed("circle_hovered", true);
    d3.selectAll(".circles_line2").classed("circle_hovered", true);
    d3.selectAll(".circles_line3").classed("circle_hovered", true);
    d3.select("#line_hover_checkbox_span").classed("hide", false);
    d3.select("#line_template_hover_span1").classed("hide", false);
    d3.select("#line_template_hover_span2").classed("hide", false);
    d3.select("#line_template_hover_span2").classed("hide", false);
  } else if (this.checked === false) {
    lineValues.hoverCheckbox = "unchecked";
    d3.selectAll(".circles_line").classed("circle_hovered", false);
    d3.selectAll(".circles_line2").classed("circle_hovered", false);
    d3.selectAll(".circles_line3").classed("circle_hovered", false);
    d3.select("#line_hover_checkbox_span").classed("hide", true);
    d3.select("#line_template_hover_span1").classed("hide", true);
    d3.select("#line_template_hover_span2").classed("hide", true);
    d3.select("#line_template_hover_span3").classed("hide", true);
  }
});

lineAreaCheckbox.addEventListener("change", function () {
  if (this.checked) {
    lineValues.amountInput = 1;
    lineAmountInput.value = 1;
    lineAmountInput.disabled = true;

    d3.select("#line_obj_num2_span").classed("hide", true);
    d3.select("#line_obj_num3_span").classed("hide", true);

    d3.select("#line2").attr("display", "none");
    d3.select("#line3").attr("display", "none");

    d3.selectAll(".circles_line2").attr("display", "none");
    d3.selectAll(".circles_line3").attr("display", "none");

    d3.select("#line_1_select_span").classed("hide", false);
    d3.select("#line_2_select_span").classed("hide", true);
    d3.select("#line_3_select_span").classed("hide", true);

    d3.select("#line_datapoint_checkbox_span").classed("hide", false);
    d3.select("#line_datapoint2_checkbox_span").classed("hide", true);
    d3.select("#line_datapoint3_checkbox_span").classed("hide", true);

    d3.select("#line_area").attr("display", "");
    d3.select("#line_area_checkbox_span").classed("hide", false);
  }
  if (this.checked === false) {
    d3.select("#line_area").attr("display", "none");
    lineAmountInput.disabled = false;
    d3.select("#line_area_checkbox_span").classed("hide", true);
  }
});

lineTooltipCheckbox.addEventListener("change", function () {
  if (this.checked) {
    if (lineAmountInput.value == 1) {
      let tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "line_tooltip");
      d3.select(".line_tooltip").style("background-color", "white");
      d3.select(".line_tooltip").style("border", "1px solid rgba(0,0,0,0.2)");
      let circles = d3.selectAll(".circles_line");
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
      d3.select("#line_tooltip_circle_checkbox_span").classed("hide", false);
      d3.select("#line_tooltip2_circle_checkbox_span").classed("hide", true);
      d3.select("#line_tooltip3_circle_checkbox_span").classed("hide", true);
    }
    if (lineAmountInput.value == 2) {
      let tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "line_tooltip");
      d3.select(".line_tooltip").style("background-color", "white");
      d3.select(".line_tooltip").style("border", "1px solid rgba(0,0,0,0.2)");
      let circles = d3.selectAll(".circles_line");
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
      let circles2 = d3.selectAll(".circles_line2");
      circles2
        .on("mousemove", function (d) {
          tooltip
            .style("left", d3.event.pageX + 10 + "px")
            .style("top", d3.event.pageY + 10 + "px")
            .style("display", "inline-block");
        })
        .on("mouseout", function (d) {
          tooltip.style("display", "none");
        });
      d3.select("#line_tooltip_circle_checkbox_span").classed("hide", false);
      d3.select("#line_tooltip2_circle_checkbox_span").classed("hide", false);
      d3.select("#line_tooltip3_circle_checkbox_span").classed("hide", true);
    }
    if (lineAmountInput.value == 3) {
      let tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "line_tooltip");
      d3.select(".line_tooltip").style("background-color", "white");
      d3.select(".line_tooltip").style("border", "1px solid rgba(0,0,0,0.2)");
      let circles = d3.selectAll(".circles_line");
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
      let circles2 = d3.selectAll(".circles_line2");
      circles2
        .on("mousemove", function (d) {
          tooltip
            .style("left", d3.event.pageX + 10 + "px")
            .style("top", d3.event.pageY + 10 + "px")
            .style("display", "inline-block");
        })
        .on("mouseout", function (d) {
          tooltip.style("display", "none");
        });
      let circles3 = d3.selectAll(".circles_line3");
      circles3
        .on("mousemove", function (d) {
          tooltip
            .style("left", d3.event.pageX + 10 + "px")
            .style("top", d3.event.pageY + 10 + "px")
            .style("display", "inline-block");
        })
        .on("mouseout", function (d) {
          tooltip.style("display", "none");
        });
      d3.select("#line_tooltip_circle_checkbox_span").classed("hide", false);
      d3.select("#line_tooltip2_circle_checkbox_span").classed("hide", false);
      d3.select("#line_tooltip3_circle_checkbox_span").classed("hide", false);
    }

    d3.select("#line_tooltip_checkbox_span").classed("hide", false);

    lineValues.tooltipCheckbox = "checked";
  }
  if (this.checked === false) {
    document.querySelector("body > div.line_tooltip").remove();
    d3.select("#line_tooltip_checkbox_span").classed("hide", true);
    d3.select("#line_tooltip_circle_checkbox_span").classed("hide", true);
    d3.select("#line_tooltip2_circle_checkbox_span").classed("hide", true);
    d3.select("#line_tooltip3_circle_checkbox_span").classed("hide", true);
    lineValues.tooltipCheckbox = "unchecked";
  }
});

lineAmountInput.addEventListener("change", function () {
  if (lineAmountInput.value == 1) {
    if (lineDatapointCheckbox.checked) {
      d3.selectAll(".circles_line").attr("display", "");
      d3.selectAll(".circles_line2").attr("display", "none");
      d3.selectAll(".circles_line3").attr("display", "none");

      d3.select("#line_datapoint_checkbox_span").classed("hide", false);
      d3.select("#line_datapoint2_checkbox_span").classed("hide", true);
      d3.select("#line_datapoint3_checkbox_span").classed("hide", true);
    }
    if (lineTooltipCheckbox.checked) {
      let tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "line_tooltip");
      d3.select(".line_tooltip").style("background-color", "white");
      d3.select(".line_tooltip").style("border", "1px solid rgba(0,0,0,0.2)");
      let circles = d3.selectAll(".circles_line");
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
      d3.select("#line_tooltip_circle_checkbox_span").classed("hide", false);
      d3.select("#line_tooltip2_circle_checkbox_span").classed("hide", true);
      d3.select("#line_tooltip3_circle_checkbox_span").classed("hide", true);
    }
    d3.select("#line1").attr("display", "");
    d3.select("#line2").attr("display", "none");
    d3.select("#line3").attr("display", "none");

    d3.select("#line_1_select_span").classed("hide", false);
    d3.select("#line_2_select_span").classed("hide", true);
    d3.select("#line_3_select_span").classed("hide", true);

    d3.select("#line_obj_num2_span").classed("hide", true);
    d3.select("#line_obj_num3_span").classed("hide", true);

    lineValues.amountInput = lineAmountInput.value;
  }
  if (lineAmountInput.value == 2) {
    if (lineDatapointCheckbox.checked) {
      d3.selectAll(".circles_line").attr("display", "");
      d3.selectAll(".circles_line2").attr("display", "");
      d3.selectAll(".circles_line3").attr("display", "none");

      d3.select("#line_datapoint_checkbox_span").classed("hide", false);
      d3.select("#line_datapoint2_checkbox_span").classed("hide", false);
      d3.select("#line_datapoint3_checkbox_span").classed("hide", true);
    }
    if (lineTooltipCheckbox.checked) {
      let tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "line_tooltip");
      d3.select(".line_tooltip").style("background-color", "white");
      d3.select(".line_tooltip").style("border", "1px solid rgba(0,0,0,0.2)");
      let circles = d3.selectAll(".circles_line");
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
      let circles2 = d3.selectAll(".circles_line2");
      circles2
        .on("mousemove", function (d) {
          tooltip
            .style("left", d3.event.pageX + 10 + "px")
            .style("top", d3.event.pageY + 10 + "px")
            .style("display", "inline-block");
        })
        .on("mouseout", function (d) {
          tooltip.style("display", "none");
        });
      d3.select("#line_tooltip_circle_checkbox_span").classed("hide", false);
      d3.select("#line_tooltip2_circle_checkbox_span").classed("hide", false);
      d3.select("#line_tooltip3_circle_checkbox_span").classed("hide", true);
    }
    d3.select("#line1").attr("display", "");
    d3.select("#line2").attr("display", "");
    d3.select("#line3").attr("display", "none");

    d3.select("#line_1_select_span").classed("hide", false);
    d3.select("#line_2_select_span").classed("hide", false);
    d3.select("#line_3_select_span").classed("hide", true);

    d3.select("#line_obj_num2_span").classed("hide", false);
    d3.select("#line_obj_num3_span").classed("hide", true);

    lineValues.amountInput = lineAmountInput.value;
  }
  if (lineAmountInput.value == 3) {
    if (lineDatapointCheckbox.checked) {
      d3.selectAll(".circles_line").attr("display", "");
      d3.selectAll(".circles_line2").attr("display", "");
      d3.selectAll(".circles_line3").attr("display", "");

      d3.select("#line_datapoint_checkbox_span").classed("hide", false);
      d3.select("#line_datapoint2_checkbox_span").classed("hide", false);
      d3.select("#line_datapoint3_checkbox_span").classed("hide", false);
    }
    if (lineTooltipCheckbox.checked) {
      let tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "line_tooltip");
      d3.select(".line_tooltip").style("background-color", "white");
      d3.select(".line_tooltip").style("border", "1px solid rgba(0,0,0,0.2)");
      let circles = d3.selectAll(".circles_line");
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
      let circles2 = d3.selectAll(".circles_line2");
      circles2
        .on("mousemove", function (d) {
          tooltip
            .style("left", d3.event.pageX + 10 + "px")
            .style("top", d3.event.pageY + 10 + "px")
            .style("display", "inline-block");
        })
        .on("mouseout", function (d) {
          tooltip.style("display", "none");
        });
      let circles3 = d3.selectAll(".circles_line3");
      circles3
        .on("mousemove", function (d) {
          tooltip
            .style("left", d3.event.pageX + 10 + "px")
            .style("top", d3.event.pageY + 10 + "px")
            .style("display", "inline-block");
        })
        .on("mouseout", function (d) {
          tooltip.style("display", "none");
        });
      d3.select("#line_tooltip_circle_checkbox_span").classed("hide", false);
      d3.select("#line_tooltip2_circle_checkbox_span").classed("hide", false);
      d3.select("#line_tooltip3_circle_checkbox_span").classed("hide", false);
    }
    d3.select("#line1").attr("display", "");
    d3.select("#line2").attr("display", "");
    d3.select("#line3").attr("display", "");

    d3.select("#line_1_select_span").classed("hide", false);
    d3.select("#line_2_select_span").classed("hide", false);
    d3.select("#line_3_select_span").classed("hide", false);

    d3.select("#line_obj_num2_span").classed("hide", false);
    d3.select("#line_obj_num3_span").classed("hide", false);

    lineValues.amountInput = lineAmountInput.value;
  }
});

lineDatapointCheckbox.addEventListener("change", function () {
  if (this.checked == true) {
    if (lineAmountInput.value == 1) {
      d3.selectAll(".circles_line").attr("display", "");
      d3.selectAll(".circles_line2").attr("display", "none");
      d3.selectAll(".circles_line3").attr("display", "none");
      d3.select("#line_datapoint_checkbox_span").classed("hide", false);
      d3.select("#line_datapoint2_checkbox_span").classed("hide", true);
      d3.select("#line_datapoint3_checkbox_span").classed("hide", true);
      d3.select("#line1").attr("display", "");
      d3.select("#line2").attr("display", "none");
      d3.select("#line3").attr("display", "none");
      d3.select("#line_1_select_span").classed("hide", false);
      d3.select("#line_2_select_span").classed("hide", true);
      d3.select("#line_3_select_span").classed("hide", true);
    }
    if (lineAmountInput.value == 2) {
      d3.selectAll(".circles_line").attr("display", "");
      d3.selectAll(".circles_line2").attr("display", "");
      d3.selectAll(".circles_line3").attr("display", "none");
      d3.select("#line_datapoint_checkbox_span").classed("hide", false);
      d3.select("#line_datapoint2_checkbox_span").classed("hide", false);
      d3.select("#line_datapoint3_checkbox_span").classed("hide", true);
      d3.select("#line1").attr("display", "");
      d3.select("#line2").attr("display", "");
      d3.select("#line3").attr("display", "none");
      d3.select("#line_1_select_span").classed("hide", false);
      d3.select("#line_2_select_span").classed("hide", false);
      d3.select("#line_3_select_span").classed("hide", true);
    }
    if (lineAmountInput.value == 3) {
      d3.selectAll(".circles_line").attr("display", "");
      d3.selectAll(".circles_line2").attr("display", "");
      d3.selectAll(".circles_line3").attr("display", "");
      d3.select("#line_datapoint_checkbox_span").classed("hide", false);
      d3.select("#line_datapoint2_checkbox_span").classed("hide", false);
      d3.select("#line_datapoint3_checkbox_span").classed("hide", false);
      d3.select("#line1").attr("display", "");
      d3.select("#line2").attr("display", "");
      d3.select("#line3").attr("display", "");
      d3.select("#line_1_select_span").classed("hide", false);
      d3.select("#line_2_select_span").classed("hide", false);
      d3.select("#line_3_select_span").classed("hide", false);
    }
    lineValues.datapointCheckbox = "checked";
  }
  if (this.checked == false) {
    d3.selectAll(".circles_line").attr("display", "none");
    d3.selectAll(".circles_line2").attr("display", "none");
    d3.selectAll(".circles_line3").attr("display", "none");
    d3.select("#line_datapoint_checkbox_span").classed("hide", true);
    d3.select("#line_datapoint2_checkbox_span").classed("hide", true);
    d3.select("#line_datapoint3_checkbox_span").classed("hide", true);
    lineValues.datapointCheckbox = "unchecked";
    d3.select("#line_datapoint_checkbox_span").classed("hide", true);
  }
});
