<body>
    <div class="container" id="main_container">
      <div class="row justify-content-around">
        <div class="col-lg-5 col-sm-12 mb-5" id="form_container">
          <form action="#" id="form">
            <div class="row">
              <h6>Titles</h6>
              <div class="col-4 col-c">
                <label for="">
                  Title
                  <input type="text" class="text_inputs" name="" id="" />
                </label>
              </div>
              <div class="col-4 col-c"></div>
              <div class="col-4 col-c"></div>
            </div>
            <div class="row">
              <h6>Sliders</h6>
              <div class="col-4 col-c">
                <label for=""> Title </label>
                <input type="range" class="slider" name="" id="" />
              </div>
              <div class="col-4 col-c">
                <label for=""> Slice Border </label>
                <input type="range" class="slider" name="" id="" />
              </div>
              <div class="col-4 col-c">
                <label for=""> Center Radius </label>
                <input type="range" class="slider" name="" id="" />
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <label for=""> Label Arc </label>
                <input type="range" class="slider" name="" id="" />
              </div>
              <div class="col-4 col-c"></div>
              <div class="col-4 col-c"></div>
            </div>
            <div class="row">
              <h6>Checkboxes</h6>
              <div class="col-4 col-c">
                <label for=""
                  >Tooltip <input type="checkbox" name="" id=""
                /></label>
              </div>
              <div class="col-4 col-c">
                <label for=""
                  >Donut <input type="checkbox" name="" id=""
                /></label>
              </div>
              <div class="col-4 col-c">
                <label for=""
                  >Legend <input type="checkbox" name="" id=""
                /></label>
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <label for=""
                  >Hover <input type="checkbox" name="" id=""
                /></label>
              </div>
              <div class="col-4 col-c"></div>
              <div class="col-4 col-c"></div>
            </div>
            <div class="row">
              <div class="col-4 col-c"></div>
              <div class="col-4 col-c"></div>
              <div class="col-4 col-c"></div>
            </div>
            <div class="row">
              <h6>Colors</h6>

              <div class="col-4 col-c">
                <div class="row">
                  <label for="">Background</label>
                </div>
                <input name="" id="" value="rgba(245,245,245,1)" />
              </div>
              <div class="col-4 col-c">
                <div class="row">
                  <label for="">Border</label>
                </div>
                <input name="" id="" value="rgba(245,245,245,1)" />
              </div>
              <div class="col-4 col-c">
                <div class="row">
                  <label for="">Font </label>
                </div>
                <input name="" id="" value="rgba(245,245,245,1)" />
              </div>
            </div>
            <div class="row">
              <div class="col-4 col-c">
                <div class="row">
                  <label for="">Title </label>
                </div>
                <input name="" id="" value="rgba(245,245,245,1)" />
              </div>
              <div class="col-4 col-c"></div>
              <div class="col-4 col-c"></div>
            </div>
            <div class="row">
              <div class="col-4 col-c"></div>
              <div class="col-4 col-c"></div>
              <div class="col-4 col-c"></div>
            </div>
            <div class="row">
              <div class="col-4 col-c"></div>
            </div>
          </form>
          <div class="row mt-2">
            <input type="submit" value="Preview" id="form_submit_button" />
          </div>
        </div>

        <div class="col-lg-5 col-sm-12 mb-5" id="graph_container">
          <div class="row">
            <div id="pie_chart_div"></div>
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
                disabled
              />
            </div>
            <div class="col-1">
              <label for="">Sorted</label>
            </div>
            <div class="col-2">
              <input type="checkbox" />
            </div>
            <div class="col-1">
              <label for="">Slices</label>
            </div>
            <div class="col-2">
              <input type="number" min="1" max="5" value="5" />
            </div>
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