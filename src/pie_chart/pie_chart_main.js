import { pieRadii } from "./pie_chart_graph.js";
import { pieValues } from "./pie_chart_values.js";
import "./pie_chart_listeners";
import "./pie_chart_color_picker.js";

export function initPieChart() {
  pieRadii(pieValues.innerRadiusSlider, pieValues.outerRadiusSlider);
}
