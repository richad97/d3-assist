<body>
    <div class="container" id="main_container">
      <div class="row justify-content-around">
        <div class="col-lg-5 col-sm-12 mb-5" id="form_container">
          <form action="#" id="form">
            <div class="row">
              <h6>Titles</h6>
              <div class="col-4 col-c">
                <label for="bar_title_input">
                  Title
                  <input
                    type="text"
                    name="bar_title_input"
                    id="bar_title_input"
                    class="text_inputs"
                    value="Weather"
                    placeholder="Enter text..."
                  />
                </label>
              </div>
              <div class="col-4 col-c">
                <label for="bar_xaxis_title_input">
                  x-Axis
                  <input
                    type="text"
                    name="bar_xaxis_title_input"
                    id="bar_xaxis_title_input"
                    class="text_inputs"
                    value="Weeks"
                    placeholder="Enter text..."
                  />
                </label>
              </div>
              <div class="col-4 col-c">
                <label for="bar_yaxis_title_input">
                  y-Axis
                  <input
                    type="text"
                    name="bar_yaxis_title_input"
                    id="bar_yaxis_title_input"
                    class="text_inputs"
                    value="Temperature"
                    placeholder="Enter text..."
                  />
                </label>
              </div>
            </div>
            <div class="row">
              <h6>Sliders</h6>
              <div class="col-4 col-c">
                <label for="bar_title_slider">Title </label>
                <input
                  type="range"
                  min="0"
                  max="26"
                  value="13"
                  name="bar_title_slider"
                  id="bar_title_slider"
                  class="slider"
                />
              </div>
              <div class="col-4 col-c">
                <label for="bar_xaxis_title_slider">x-Axis </label>
                <input
                  type="range"
                  min="0"
                  max="26"
                  value="13"
                  name="bar_xaxis_title_slider"
                  id="bar_xaxis_title_slider"
                  class="slider"
                />
              </div>
              <div class="col-4 col-c">
                <label for="bar_yaxis_title_slider">y-Axis </label>
                <input
                  type="range"
                  min="-17"
                  max="-1"
                  value="-9"
                  name="bar_yaxis_title_slider"
                  id="bar_yaxis_title_slider"
                  class="slider"
                />
              </div>
            </div>
            <div class="row">
              <h6>Checkboxes</h6>
              <div class="col-4 col-c">
                <label for="bar_tooltip_checkbox"
                  >Tooltip
                  <input
                    type="checkbox"
                    name="bar_tooltip_checkbox"
                    id="bar_tooltip_checkbox"
                /></label>
              </div>
              <div class="col-4 col-c">
                <label for="bar_horizontal_checkbox"
                  >Horizontal
                  <input
                    type="checkbox"
                    name="bar_horizontal_checkbox"
                    id="bar_horizontal_checkbox"
                    checked
                  />
                </label>
              </div>
              <div class="col-4 col-c">
                <label for="bar_vertical_checkbox"
                  >Vertical
                  <input
                    type="checkbox"
                    name="bar_vertical_checkbox"
                    id="bar_vertical_checkbox"
                  />
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <label for="bar_grid_checkbox"
                  >Grid
                  <input
                    type="checkbox"
                    name="bar_grid_checkbox"
                    id="bar_grid_checkbox"
                    checked
                    disabled
                  />
                </label>
              </div>
              <div class="col-4 col-c">
                <label for="bar_xaxis_grid_checkbox"
                  >x-Axis Grid
                  <input
                    type="checkbox"
                    name="bar_xaxis_grid_checkbox"
                    id="bar_xaxis_grid_checkbox"
                    checked
                  />
                </label>
              </div>
              <div class="col-4 col-c">
                <label for="bar_yaxis_grid_checkbox"
                  >y-Axis Grid
                  <input
                    type="checkbox"
                    name="bar_yaxis_grid_checkbox"
                    id="bar_yaxis_grid_checkbox"
                    checked
                  />
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <label for="bar_hover_checkbox"
                  >Hover
                  <input
                    type="checkbox"
                    name="bar_hover_checkbox"
                    id="bar_hover_checkbox"
                  />
                </label>
              </div>
              <div class="col-4 col-c">
                <label for="bar_xaxis_line_checkbox"
                  >x-Axis Line
                  <input
                    type="checkbox"
                    name="bar_xaxis_line_checkbox"
                    id="bar_xaxis_line_checkbox"
                  />
                </label>
              </div>
              <div class="col-4 col-c">
                <label for="bar_yaxis_line_checkbox"
                  >y-Axis Line
                  <input
                    type="checkbox"
                    name="bar_yaxis_line_checkbox"
                    id="bar_yaxis_line_checkbox"
                    checked
                  />
                </label>
              </div>
            </div>
            <div class="row">
              <h6>Colors</h6>

              <div class="col-4 col-c">
                <div class="row">
                  <label for="bar_background_cp">Background</label>
                </div>
                <input
                  name="bar_background_cp"
                  id="bar_background_cp"
                  value="rgba(245,245,245,1)"
                />
              </div>
              <div class="col-4 col-c">
                <div class="row">
                  <label for="bars_cp">Bars</label>
                </div>
                <input
                  name="bars_cp"
                  id="bars_cp"
                  value="rgba(249, 203, 156, 0.46)"
                />
              </div>
              <div class="col-4 col-c">
                <div class="row">
                  <label for="bar_border_cp">Bar Border</label>
                </div>
                <input
                  name="bar_border_cp"
                  id="bar_border_cp"
                  value="rgba(42, 42, 42, 0.187)"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <div class="row">
                  <label for="bar_title_cp">Title</label>
                </div>
                <input
                  name="bar_title_cp"
                  id="bar_title_cp"
                  value="rgb(103, 103, 103)"
                />
              </div>

              <div class="col-4 col-c">
                <div class="row">
                  <label for="bar_xaxis_title_cp">x-Axis Title</label>
                </div>
                <input
                  name="bar_xaxis_title_cp"
                  id="bar_xaxis_title_cp"
                  value="rgb(103, 103, 103)"
                />
              </div>
              <div class="col-4 col-c">
                <div class="row">
                  <label for="bar_yaxis_title_cp">y-Axis Title</label>
                </div>
                <input
                  name="bar_yaxis_title_cp"
                  id="bar_yaxis_title_cp"
                  value="rgb(103, 103, 103)"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <div class="row">
                  <label for="bar_grid_cp">Grid</label>
                </div>
                <input
                  name="bar_grid_cp"
                  id="bar_grid_cp"
                  value="rgba(0, 0, 0, 0.108)"
                />
              </div>

              <div class="col-4 col-c">
                <div class="row">
                  <label for="bar_xaxis_line_cp">x-Axis Line</label>
                </div>
                <input
                  name="bar_xaxis_line_cp"
                  id="bar_xaxis_line_cp"
                  value="rgb(211, 211, 211)"
                />
              </div>
              <div class="col-4 col-c">
                <div class="row">
                  <label for="bar_yaxis_line_cp">y-Axis Line</label>
                </div>
                <input
                  name="bar_yaxis_line_cp"
                  id="bar_yaxis_line_cp"
                  value="rgb(211, 211, 211)"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <div class="row">
                  <label for="bar_tick_cp">Ticks</label>
                </div>
                <input
                  name="bar_tick_cp"
                  id="bar_tick_cp"
                  value="rgb(130, 130, 130)"
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
            <div id="bar_chart_div"></div>
          </div>
          <div class="row" id="graph_dimension_div">
            <div class="col-1">
              <label for="bar_responsive_checkbox">Responsive</label>
            </div>
            <div class="col-2">
              <input
                type="checkbox"
                name="bar_responsive_checkbox"
                id="bar_responsive_checkbox"
              />
            </div>
            <div class="col-1">
              <label for="">Sorted</label>
            </div>
            <div class="col-2">
              <input type="checkbox" />
            </div>
            <div class="col-1">
              <label for="">Bars</label>
            </div>
            <div class="col-2">
              <input type="number" min="1" max="20" value="10" />
            </div>
            <!--
            <div class="col-2"></div>
            <div class="col-1 d-flex justify-content-around">
              <label for="bar_height_dimension_input">Height </label>
            </div>
            <div class="col-2" id="my-input-container">
              <input
                type="number"
                id="bar_height_dimension_input"
                name="bar_height_dimension_input"
                placeholder="528px"
              />
            </div>
            <div class="col-1 d-flex justify-content-around">
              <label for="bar_width_dimension_input">Width </label>
            </div>
            <div class="col-2">
              <input
                type="number"
                id="bar_width_dimension_input"
                name="bar_width_dimension_input"
                placeholder="630px"
              />
            </div>
            -->
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.6.0.js"
      integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
      crossorigin="anonymous"
    ></script>
    <script src="https://cdn.jsdelivr.net/npm/spectrum-colorpicker2/dist/spectrum.min.js"></script>
  </body>