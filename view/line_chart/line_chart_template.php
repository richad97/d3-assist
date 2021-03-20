<div id="overlay">
    <div class="container" id="overlay_main_container">
      <p id="overlay_close_button">X</p>

      <div class="row">
        <div class="col-12 text-center">
          <p id="overlay_header">Enjoy!</p>
          <p id="overlay_subheader">Please review your code before copying.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div id="overlay_code_container">
            <pre><code id="line_chart_template">
              function createData() {
                function makeDateArray() {
                  let arr = [];
                  let startDate = new Date("2020-01-02"); //YYYY-MM-DD
                  let endDate = new Date("2020-01-22"); //YYYY-MM-DD
          
                  while (startDate &lt;= endDate) {
                    arr.push(new Date(startDate));
                    startDate.setDate(startDate.getDate() + 1);
                  }
                  return arr;
                }
                let dates = makeDateArray();
                let i = 1;
                let data = dates.map(function (x) {
                  i += 30;
                  return {
                    date: x,
                    num1: Math.floor(Math.random() * 101 + i++),
                    num2: Math.floor(Math.random() * 101 + i++),
                    num3: Math.floor(Math.random() * 101 + i++),
                  };
                });
                return data;
              }
            
              const data = createData();
                        
              const margin = { top: 80, right: 50, bottom: 80, left: 80 },
                width = 600 - margin.left - margin.right,
                height = 480 - margin.top - margin.bottom;
            
              const svg = d3
                .select("body")
                .append("svg")
                .attr("id", "line_chart")
                .attr("width", `${width + margin.left + margin.right}`)
                .attr("height", `${height + margin.top + margin.bottom}`)
                .style("background-color", "<span class="span-c" id="line_background_cp_span"></span>");

              const g = svg
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

              const title = g
                .append("text")
                .attr("x", <span class="span-c" id="line_title_slider_span"></span> * 20)
                .attr("y", 0 - margin.top / 2)
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .attr("fill", "<span class="span-c" id="line_title_cp_span"></span>")
                .text("<span class="span-c" id="line_title_span"></span>");
          
              const xTitle = g
                .append("text")
                .attr("x", <span class="span-c" id="line_x_title_slider_span"></span> * 20)
                .attr("y", height + margin.top - 30)
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .attr("fill", "<span class="span-c" id="line_x_title_cp_span"></span>")
                .text("<span class="span-c" id="line_x_title_span"></span>");
          
              const yTitle = g
                .append("text")
                .attr("y", -40)
                .attr("x", <span class="span-c" id="line_y_title_slider_span"></span> * 20)
                .style("transform", "rotate(270deg)")
                .attr("font-size", "0.9em")
                .attr("text-anchor", "middle")
                .attr("fill", "<span class="span-c" id="line_y_title_cp_span"></span>")
                .text("<span class="span-c" id="line_y_title_span"></span>");
            
              const xScale = d3
                .scaleTime()
                .domain(
                  d3.extent(data, function (d) {
                    return d.date;
                  })
                )
                .range([0, width]);
              const yScale = d3
                .scaleLinear()
                .domain([
                  0,
                  d3.max(data, function (d) {
                    return d.num1;
                  }),
                ])
                .range([height, 0]);
            
              const xAxis = g
                .append("g")
                .attr("id","x_axis")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(xScale));

              const yAxis = g
                .append("g")
                .attr("id","y_axis")
                .call(d3.axisLeft(yScale));
              <span class="span-c" id="line_x_grid_checkbox_span">
              function make_x_gridlines() {
                return d3.axisBottom(xScale).ticks();
              }
          
              const xGrid = g
                .append("g")
                .attr("class", "grid")
                .attr("id", "x_grid")
                .attr("transform", "translate(0," + height + ")")
                .call(make_x_gridlines().tickSize(-height).tickFormat(""));
              </span>
              <span class="span-c" id="line_y_grid_checkbox_span">
              function make_y_gridlines() {
                return d3.axisLeft(yScale).ticks();
              }

              const yGrid = g
                .append("g")
                .attr("class", "grid")
                .attr("id", "y_grid")
                .call(make_y_gridlines().tickSize(-width).tickFormat(""));
              </span>
              <span class="span-c" id="line_1_select_span">
              const line1 = d3
                .line()
                .x(function (d) {
                  return xScale(d.date);
                })
                .y(function (d) {
                  return yScale(d.num1);
                });

              g.append("path")
                .data([data])
                .attr("class", "line")
                .attr("d", line1)
                .attr("stroke", "<span class="span-c" id="line_1_cp_span"></span>")
                .attr("stroke-width", `${<span class="span-c" id="line_1_width_slider_span"></span> * 0.5 }px`)
                .attr("fill", "none");
              </span>
              <span class="span-c" id="line_2_select_span">
              const line2 = d3
                .line()
                .x(function (d) {
                  return xScale(d.date);
                })
                .y(function (d) {
                  return yScale(d.num2);
                });

              g.append("path")
                .data([data])
                .attr("class", "line")
                .attr("d", line2)
                .attr("stroke", "<span class="span-c" id="line_2_cp_span"></span>")
                .attr("stroke-width", `${<span class="span-c" id="line_2_width_slider_span"></span> * 0.5 }px`)
                .attr("fill", "none");
              </span>
              <span class="span-c" id="line_3_select_span">
              const line3 = d3
                .line()
                .x(function (d) {
                  return xScale(d.date);
                })
                .y(function (d) {
                  return yScale(d.num3);
                });

              g.append("path")
                .data([data])
                .attr("class", "line")
                .attr("d", line3)
                .attr("stroke", "<span class="span-c" id="line_3_cp_span"></span>")
                .attr("stroke-width", `${<span class="span-c" id="line_3_width_slider_span"></span> * 0.5 }px`)
                .attr("fill", "none");
              </span>
              <span class="span-c" id="line_area_checkbox_span">
              const area = d3
                .area()
                .x((d) => xScale(d.date))
                .y0(yScale(0))
                .y1((d) => yScale(d.num1));
          
              const lineArea = g
                .append("path")
                .datum(data)
                .attr("id", "line_area")
                .attr("fill", "<span class="span-c" id="line_area_cp_span"></span>")
                .attr("d", area);
              </span>
              <span class="span-c" id="line_datapoint_checkbox_span">
              const circles = g.selectAll(".circles").data(data);

              circles.exit().remove();
          
              circles
                .enter()
                .append("circle")
                .attr("class", "circles")
                .attr("display", "")
                .attr("r", <span class="span-c" id="line_point_radius_slider_span"></span> * 0.5 )
                .attr("cx", function (d, i) {
                  return xScale(d.date);
                })
                .attr("cy", function (d, i) {
                  return yScale(d.num1);
                })
                .attr("fill", "<span class="span-c" id="line_datapoint_cp_span"></span>")
                .attr("stroke", "<span class="span-c" id="line_datapoint_border_cp_span"></span>")
                .attr("stroke-width", "1px")<span class="span-c" id="line_hover_checkbox_span">
                .on("mouseover", function (d, i) {
                  d3.select(this).attr("opacity", "0.6");
                })
                .on("mouseout", function (d, i) {
                  d3.select(this).attr("opacity", "1");
                });</span>
              </span>
              <span class="span-c" id="line_tooltip_checkbox_span">
              let tooltip = d3.select("body").append("div").attr("class", "line_tooltip");

              d3.select(".line_tooltip").style("background-color", "white");
              d3.select(".line_tooltip").style("border", "1px solid rgba(0,0,0,0.2)");
          
              let circles2 = d3.selectAll(".circles");
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
              </span>

              <span class="span-c" id="line_x_line_checkbox_span">
              d3.select("#x_axis > path").attr("display", "none");
              </span>
              <span class="span-c" id="line_y_line_checkbox_span">
              d3.select("#y_axis > path").attr("display", "none");
              </span>
              d3.selectAll("#x_axis >.tick>line").style("display", "none");
              d3.selectAll("#y_axis >.tick>line").style("display", "none");
              d3.select("#x_grid > path").attr("stroke", "rgba(0,0,0,0)");
              d3.select("#y_grid > path").attr("stroke", "rgba(0,0,0,0)");  
              d3.select("#y_grid > g:nth-child(2) > line").remove();
              d3.selectAll(".tick > text").style("fill", "<span class="span-c" id="line_tick_cp_span"></span>");
              d3.selectAll(".grid > g > line").attr("stroke", "<span class="span-c" id="line_grid_cp_span"></span>");
              d3.select("#x_axis > path").style("stroke", "<span class="span-c" id="line_x_line_cp_span"></span>");
              d3.select("#y_axis > path").style("stroke", "<span class="span-c" id="line_y_line_cp_span"></span>");

            </code></pre>
          </div>
        </div>
      </div>
      <div class="row" id="overlay_button_container">
        <div class="col-6">
          <button id="overlay_button_copy" class="overlay_buttons">
            Copy To Clipboard
          </button>
        </div>
        <div class="col-6">
          <button id="overlay_button_tab" class="overlay_buttons">
            Preview On New Tab
          </button>
        </div>
      </div>
    </div>
  </div>