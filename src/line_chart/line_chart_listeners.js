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

lineTitleInput.addEventListener("keyup", function () {
  d3.select("#line_title").text(lineTitleInput.value);
  lineValues.titleInput = lineTitleInput.value;
  document.getElementById("line_title_span").innerHTML = lineValues.titleInput;
});

lineXAxisTitleInput.addEventListener("keyup", function () {
  d3.select("#line_xaxis_title").text(lineXAxisTitleInput.value);
  lineValues.xAxisTitleInput = lineXAxisTitleInput.value;
  document.getElementById("line_x_title_span").innerHTML =
    lineValues.xAxisTitleInput;
});

lineYAxisTitleInput.addEventListener("keyup", function () {
  d3.select("#line_yaxis_title").text(lineYAxisTitleInput.value);
  lineValues.yAxisTitleInput = lineYAxisTitleInput.value;
  document.getElementById("line_y_title_span").innerHTML =
    lineValues.yAxisTitleInput;
});

lineTitleSlider.addEventListener("mousedown", function () {
  lineTitleSlider.addEventListener("mousemove", function () {
    d3.select("#line_title").attr("x", lineTitleSlider.value * 20);
    lineValues.titleSlider = lineTitleSlider.value;
  });
});

lineXAxisTitleSlider.addEventListener("mousedown", function () {
  lineXAxisTitleSlider.addEventListener("mousemove", function () {
    d3.select("#line_xaxis_title").attr("x", lineXAxisTitleSlider.value * 20);
    lineValues.xAxisTitleSlider = lineXAxisTitleSlider.value;
  });
});

lineYAxisTitleSlider.addEventListener("mousedown", function () {
  lineYAxisTitleSlider.addEventListener("mousemove", function () {
    d3.select("#line_yaxis_title").attr("x", lineYAxisTitleSlider.value * 20);
    lineValues.yAxisTitleSlider = lineYAxisTitleSlider.value;
  });
});

lineWidthSlider.addEventListener("mousedown", function () {
  lineWidthSlider.addEventListener("mousemove", function () {
    d3.selectAll(".line").attr(
      "stroke-width",
      `${lineWidthSlider.value * 0.5}px`
    );
    lineValues.widthSlider = lineWidthSlider.value;
  });
});

linePointRadiusSlider.addEventListener("mousedown", function () {
  linePointRadiusSlider.addEventListener("mousemove", function () {
    d3.selectAll(".circles").attr("r", linePointRadiusSlider.value * 0.5);
    lineValues.pointRadiusSlider = linePointRadiusSlider.value;
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
    lineValues.tooltipCheckbox = "checked";
  } else if (this.checked === false) {
    document.querySelector("body > div.line_tooltip").remove();
    lineValues.tooltipCheckbox = "unchecked";
  }
});

lineDatapointCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.selectAll(".circles").attr("display", "");
    lineValues.datapointCheckbox = "checked";
  } else if (this.checked === false) {
    d3.selectAll(".circles").attr("display", "none");
    lineValues.datapointCheckbox = "unchecked";
  }
});

lineXAxisGridCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#x_grid").attr("display", "");
    lineValues.xAxisGridCheckbox = "checked";
  } else if (this.checked === false) {
    d3.select("#x_grid").attr("display", "none");
    lineValues.xAxisGridCheckbox = "unchecked";
  }
});

lineYAxisGridCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#y_grid").attr("display", "");
    lineValues.yAxisGridCheckbox = "checked";
  } else if (this.checked === false) {
    d3.select("#y_grid").attr("display", "none");
    lineValues.yAxisGridCheckbox = "unchecked";
  }
});

lineXAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#x_axis > path").attr("display", "");
    lineValues.xAxisLineCheckbox = "checked";
  } else if (this.checked === false) {
    d3.select("#x_axis > path").attr("display", "none");
    lineValues.xAxisLineCheckbox = "unchecked";
  }
});

lineYAxisLineCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.select("#y_axis > path").attr("display", "");
    lineValues.yAxisLineCheckbox = "checked";
  } else if (this.checked === false) {
    d3.select("#y_axis > path").attr("display", "none");
    lineValues.yAxisLineCheckbox = "unchecked";
  }
});

lineHoverCheckbox.addEventListener("change", function () {
  if (this.checked) {
    d3.selectAll(".circles").classed("circle_hovered", true);
    lineValues.hoverCheckbox = "checked";
  } else if (this.checked === false) {
    d3.selectAll(".circles").classed("circle_hovered", false);
    lineValues.hoverCheckbox = "unchecked";
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
    lineValues.amountInput = 1;
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
