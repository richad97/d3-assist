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
            <div id="template_container">
              <pre>
          <code id="bar_chart_template">function makeData (x,num) {
                let arr = [];
                let objNum = num + 1;
                for(let i=1; i&lt;objNum; i++) {
                    let obj = {
                        [x]   :   Math.floor(Math.random() * 11 + 1),
                    };
                    arr.push(obj);
                }
                return arr;
            };
            
            const data = makeData("x", 10);
            
            const margin = { top: 80, right: 50, bottom: 100, left: 70 },
                width = 630 - margin.left - margin.right,
                height = 528 - margin.top - margin.bottom;
            
            const svg = d3.select("body")
                .append("svg")
                .attr("id","bar_chart")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .style("background-color", "<span class="span-c" id="bar_background_cp_span"></span>");
                
            const g = svg.append("g")
                .attr("transform", 
                    "translate(" + margin.left + "," + margin.top + ")");
            <span id="bar_horizontal_scale_span">
            const xScale = d3.scaleLinear()
                .domain([0,d3.max(data, function(d) {return d.x;})])
                .range([0, width]);
            
            const yScale = d3.scaleBand()
                .domain(d3.range(0, data.length))
                .range([height, 0])
                .padding(0.4);
            </span>
            <span id="bar_vertical_scale_span">
            const xScale = d3
              .scaleBand()
              .domain(d3.range(0, data.length))
              .range([0, width])
              .padding(0.4);
          
            const yScale = d3
              .scaleLinear()
              .domain([
                0,
                d3.max(data, function (d) {
                  return d.x;
                }),
              ])
              .range([height, 0]);
              </span>
            const xAxis = g.append("g").attr("id","x_axis").attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(xScale));
            
            const yAxis = g.append("g").attr("id","y_axis").call(d3.axisLeft(yScale));
            
            const title = g
              .append("text")
              .attr("x", <span class="span-c" id="bar_title_slider_span"></span> * 20)
              .attr("y", 0 - margin.top / 2)
              .attr("text-anchor", "middle")
              .style("font-size", "16px")
              .attr("fill", "<span class="span-c" id="bar_title_cp_span"></span>")
              .text("<span class="span-c" id="bar_title_span"></span>");
        
            const xTitle = g
              .append("text")
              .attr("x", <span class="span-c" id="bar_x_title_slider_span"></span> * 20)
              .attr("y", height + margin.top - 30)
              .attr("text-anchor", "middle")
              .style("font-size", "16px")
              .attr("fill", "<span class="span-c" id="bar_x_title_cp_span"></span>")
              .text("<span class="span-c" id="bar_x_title_span"></span>");
        
            const yTitle = g
              .append("text")
              .attr("y", -40)
              .attr("x", <span class="span-c" id="bar_y_title_slider_span"></span> * 20)
              .style("transform", "rotate(270deg)")
              .attr("font-size", "0.9em")
              .attr("text-anchor", "middle")
              .attr("fill", "<span class="span-c" id="bar_y_title_cp_span"></span>")
              .text("<span class="span-c" id="bar_y_title_span"></span>");

          <span class="span-c span-c2" id="bar_x_grid_span">
            function make_x_gridlines() {
                return d3.axisBottom(xScale).ticks();
            }

            const xGrid = g.append("g").attr("class", "grid");

            xGrid
              .attr("id", "x_grid")
              .attr("class", "grid")
              .attr("transform", "translate(0," + height + ")")
              .call(make_x_gridlines().tickSize(-height).tickFormat(""));
            </span><span class="span-c span-c2" id="bar_y_grid_span">
            function make_y_gridlines() {
                return d3.axisLeft(yScale).ticks();
            }

            const yGrid = g.append("g").attr("class", "grid");
    
            yGrid
              .attr("id", "y_grid")
              .attr("class", "grid")
              .call(make_y_gridlines().tickSize(-width).tickFormat(""));  
            </span>
            const bars = g.selectAll("rect").data(data);
            
            bars.exit().remove();
            <span id="bar_horizontal_bar_logic_span">
            bars.enter().append("rect")
                .attr("class", "bars")
                .attr("height", yScale.bandwidth())
                .attr("width", function(d,i) {return xScale(d.x)})
                .attr("y", function(d,i) { return yScale(i)})</span>
          <span id="bar_vertical_bar_logic_span">
            bars.enter().append("rect")
                .attr("class", "bars")
                .attr("height", function (d, i) {
                  return height - yScale(d.x);
                })
                .attr("x", function (d, i) {
                  return xScale(i);
                })
                .attr("width", xScale.bandwidth())
                .attr("y", function (d) {
                  return yScale(d.x);
                })</span>
                .attr("stroke", "<span class="span-c" id="bar_border_cp_span"></span>")
                .attr("fill", "<span class="span-c" id="bar_cp_span"></span>")<span class="span-c span-c2 hide" id="bar_hover_span"> 
                .on("mouseover", function (d, i) {
                  d3.select(this).attr("opacity", "0.7");
                })
                .on("mouseout", function (d, i) {
                  d3.select(this).attr("opacity", "1");
                });</span>
            <span id="bar_tooltip_logic_span" class="hide">
            let tooltip = d3.select("body").append("div").attr("class", "bar_tooltip");

            d3.select(".bar_tooltip")
              .style("background-color", "white")
              .style("border", "1px solid rgba(0,0,0,0.2)");

            let tooltip_bars = d3.selectAll(".bars");

            tooltip_bars
              .on("mousemove", function (d) {
                tooltip
                  .style("left", d3.event.pageX + 10 + "px")
                  .style("top", d3.event.pageY + 10 + "px")
                  .style("display", "inline-block");
              })
              .on("mouseout", function (d) {
                tooltip.style("display", "none");
              });

            /*
            Copy this style for tooltip to work

            .bar_tooltip {
              position: absolute;
              display: none;
              min-width: 80px;
              height: auto;
              background: none repeat scroll;
              border: 1px solid #6f257f;
              padding: 14px;
              text-align: center;
              background-color: white;
              z-index: 1;
            }

            */
            </span>
            <span class="span-c span-c2" id="bar_x_line_span">
            d3.select("#x_axis > path").attr("display", "none");
            </span>
            <span class="span-c span-c2 hide" id="bar_y_line_span">
            d3.select("#y_axis > path").attr("display", "none");
            </span>
            d3.selectAll(".grid > g > line").attr("stroke", "<span class="span-c" id="bar_grid_cp_span"></span>");
            d3.selectAll(".tick > text").style("fill", "<span class="span-c" id="bar_tick_cp_span"></span>");
            d3.select("#x_axis > path").style("stroke", "<span class="span-c" id="bar_x_line_cp_span"></span>");
            d3.select("#y_axis > path").style("stroke", "<span class="span-c" id="bar_y_line_cp_span"></span>");
            d3.selectAll("#x_axis >.tick>line").style("display", "none");
            d3.selectAll("#y_axis >.tick>line").style("display", "none");
            d3.select("#x_grid > g:nth-child(<span class="span-c" id="bar_gnth_child_span_x"></span>) > line").attr("stroke", "rgba(0,0,0,0)");
            d3.select("#y_grid > g:nth-child(<span class="span-c" id="bar_gnth_child_span_y"></span>) > line").attr("stroke", "rgba(0,0,0,0)");
            d3.select("#x_grid > path").attr("stroke", "rgba(0,0,0,0)");
            d3.select("#y_grid > path").attr("stroke", "rgba(0,0,0,0)");  
              </code></pre>
            </div>
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
          <button class="overlay_buttons">Preview On New Tab</button>
        </div>
      </div>
    </div>
  </div>