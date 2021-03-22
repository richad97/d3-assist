  <body>
    <div class="container" id="main_container">
      <div class="row justify-content-around">
        <div class="col-lg-5 col-sm-12 mb-5" id="form_container">
          <form action="#" id="form">
            <div class="row">
              <h6>Titles</h6>
              <div class="col-4 col-c">
                <label id="line_title_input_label" for="line_title_input">
                  Title
                  <input
                    type="text"
                    name="line_title_input"
                    id="line_title_input"
                    class="text_inputs"
                    value="Total Reported Cases"
                    placeholder="Enter text..."
                  />
                </label>
              </div>
              <div class="col-4 col-c">
                <label for="line_xaxis_title_input">
                  x-Axis
                  <input
                    type="text"
                    name="line_xaxis_title_input"
                    id="line_xaxis_title_input"
                    class="text_inputs"
                    value="Days"
                    placeholder="Enter text..."
                  />
                </label>
              </div>
              <div class="col-4 col-c">
                <label for="line_yaxis_title_input">
                  y-Axis
                  <input
                    type="text"
                    name="line_yaxis_title_input"
                    id="line_yaxis_title_input"
                    class="text_inputs"
                    value="Cases"
                    placeholder="Enter text..."
                  />
                </label>
              </div>
            </div>
            <div class="row">
              <h6>Sliders</h6>
              <div class="col-4 col-c">
                <label for="line_title_slider">Title </label>
                <input
                  type="range"
                  min="0"
                  max="26"
                  value="13"
                  name="line_title_slider"
                  id="line_title_slider"
                  class="slider"
                />
              </div>
              <div class="col-4 col-c">
                <label for="line_xaxis_title_slider">x-Axis </label>
                <input
                  type="range"
                  min="0"
                  max="26"
                  value="13"
                  name="line_xaxis_title_slider"
                  id="line_xaxis_title_slider"
                  class="slider"
                />
              </div>
              <div class="col-4 col-c">
                <label for="line_yaxis_title_slider">y-Axis </label>
                <input
                  type="range"
                  min="-17"
                  max="-1"
                  value="-9Sw"
                  name="line_yaxis_title_slider"
                  id="line_yaxis_title_slider"
                  class="slider"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <label for="line_width_slider">Line Width </label>
                <input
                  type="range"
                  min="1"
                  max="11"
                  value="1"
                  name="line_width_slider"
                  id="line_width_slider"
                  class="slider"
                />
              </div>
              <div class="col-4 col-c">
                <label for="line_point_radius_slider">Point Radius </label>
                <input
                  type="range"
                  min="1"
                  max="11"
                  value="6"
                  name="line_point_radius_slider"
                  id="line_point_radius_slider"
                  class="slider"
                />
              </div>
              <div class="col-4 col-c"></div>
            </div>
            <div class="row">
              <h6>Checkboxes</h6>
              <div class="col-4 col-c">
                <label for="line_tooltip_checkbox"
                  >Tooltip
                  <input
                    type="checkbox"
                    name="line_tooltip_checkbox"
                    id="line_tooltip_checkbox"
                /></label>
              </div>
              <div class="col-4 col-c">
                <label for="line_xaxis_grid_checkbox"
                  >x-Axis Grid
                  <input
                    type="checkbox"
                    name="line_xaxis_grid_checkbox"
                    id="line_xaxis_grid_checkbox"
                  />
                </label>
              </div>
              <div class="col-4 col-c">
                <label for="line_yaxis_grid_checkbox"
                  >y-Axis Grid
                  <input
                    type="checkbox"
                    name="line_yaxis_grid_checkbox"
                    id="line_yaxis_grid_checkbox"
                    checked
                  />
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <label for="line_datapoint_checkbox"
                  >Datapoints
                  <input
                    type="checkbox"
                    name="line_datapoint_checkbox"
                    id="line_datapoint_checkbox"
                    checked
                /></label>
              </div>
              <div class="col-4 col-c">
                <label for="line_xaxis_line_checkbox"
                  >x-Axis Line
                  <input
                    type="checkbox"
                    name="line_xaxis_line_checkbox"
                    id="line_xaxis_line_checkbox"
                    checked
                  />
                </label>
              </div>
              <div class="col-4 col-c">
                <label for="line_yaxis_line_checkbox"
                  >y-Axis Line
                  <input
                    type="checkbox"
                    name="line_yaxis_line_checkbox"
                    id="line_yaxis_line_checkbox"
                  />
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <label for="line_hover_checkbox"
                  >Hover
                  <input
                    type="checkbox"
                    name="line_hover_checkbox"
                    id="line_hover_checkbox"
                  />
                </label>
              </div>
              <div class="col-4 col-c">
                <div class="pretty p-default">
                    <input type="checkbox" />
                    <div class="state">
                        <label>Check me</label>
                    </div>
                </div>
              </div>
              <div class="col-4 col-c"></div>
            </div>
            <div class="row">
              <h6>Colors</h6>

              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_background_cp">Background</label>
                </div>
                <input
                  name="line_background_cp"
                  id="line_background_cp"
                  value="rgba(0, 0, 0, 0.55)"
                />
              </div>
              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_tick_cp">Ticks</label>
                </div>
                <input
                  name="line_tick_cp"
                  id="line_tick_cp"
                  value="rgb(238, 238, 238)"
                />
              </div>
              <div class="col-4 col-c"></div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_title_cp">Title</label>
                </div>
                <input
                  name="line_title_cp"
                  id="line_title_cp"
                  value="rgb(255, 255, 255)"
                />
              </div>

              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_xaxis_title_cp">x-Axis Title</label>
                </div>
                <input
                  name="line_xaxis_title_cp"
                  id="line_xaxis_title_cp"
                  value="rgb(255, 255, 255)"
                />
              </div>
              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_yaxis_title_cp">y-Axis Title</label>
                </div>
                <input
                  name="line_yaxis_title_cp"
                  id="line_yaxis_title_cp"
                  value="rgb(255, 255, 255)"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_grid_cp">Grid</label>
                </div>
                <input
                  name="line_grid_cp"
                  id="line_grid_cp"
                  value="rgba(255, 255, 255, 0.337)"
                />
              </div>

              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_xaxis_line_cp">x-Axis Line</label>
                </div>
                <input
                  name="line_xaxis_line_cp"
                  id="line_xaxis_line_cp"
                  value="rgb(255, 255, 255)"
                />
              </div>
              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_yaxis_line_cp">y-Axis Line</label>
                </div>
                <input
                  name="line_yaxis_line_cp"
                  id="line_yaxis_line_cp"
                  value="rgb(211, 211, 211)"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_datapoint_cp">Datapoint</label>
                </div>
                <input
                  name="line_datapoint_cp"
                  id="line_datapoint_cp"
                  value="rgba(255, 255, 255, 0)"
                />
              </div>
              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_datapoint_border_cp">Datapoint Border</label>
                </div>
                <input
                  name="line_datapoint_border_cp"
                  id="line_datapoint_border_cp"
                  value="rgb(255, 255, 255)"
                />
              </div>
              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_area_cp">Line Area</label>
                </div>
                <input
                  name="line_area_cp"
                  id="line_area_cp"
                  value="rgb(245, 245, 245)"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_color_cp1">Line 1</label>
                </div>
                <input
                  name="line_color_cp1"
                  id="line_color_cp1"
                  value="rgb(250, 250, 250)"
                />
              </div>
              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_color_cp2">Line 2</label>
                </div>
                <input
                  name="line_color_cp2"
                  id="line_color_cp2"
                  value="rgb(250, 250, 250)"
                />
              </div>
              <div class="col-4 col-c">
                <div class="row">
                  <label for="line_color_cp3">Line 3</label>
                </div>
                <input
                  name="line_color_cp3"
                  id="line_color_cp3"
                  value="rgb(250, 250, 250)"
                />
              </div>
            </div>
          </form>
          <div class="row mt-2">
            <input type="submit" value="Preview" id="form_submit_button" />
          </div>
        </div>
        
        <div class="col-lg-5 col-sm-12 mb-5" id="graph_container">
          <div class="row">
            <div id="line_chart_div"></div>
          </div>
          <div class="row" id="graph_dimension_div">
            <div class="col-1">
              <label for="">Responsive</label>
            </div>
            <div class="col-2">
              <input type="checkbox" min="1" max="5" value="5" />
            </div>
            <div class="col-1">
              <label for="line_area_checkbox">Area</label>
            </div>
            <div class="col-2">
              <input
                type="checkbox"
                name="line_area_checkbox"
                id="line_area_checkbox"
              />
            </div>
            <div class="col-1">
              <label for="line_amount_input">Lines</label>
            </div>
            <div class="col-2">
              <input
                type="number"
                name="line_amount_input"
                id="line_amount_input"
                min="1"
                max="3"
                value="1"
              />
            </div>
            <div class="col-1">
              <label for="line_theme_input">Theme</label>
            </div>
            <div class="col-2">
              <input
                type="number"
                name="line_theme_input"
                id="line_theme_input"
                min="1"
                max="3"
                value="1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>