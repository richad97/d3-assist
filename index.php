<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3 Assist</title>
    <link rel="stylesheet" type="text/css" href="./node_modules/spectrum-colorpicker2/dist/spectrum.css">
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./scss/main.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <script type="text/javascript" src="./node_modules/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="./node_modules/spectrum-colorpicker2/dist/spectrum.min.js"></script>
    <script type="text/javascript" src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
  </head>

    <div id="overlay">
      <div class="container" id="overlay_main_container">
        <div class="row" id="overlay_title_container">
          <span id="overlay_close_button">X</span>
            <div class="col-sm-12 col-12 text-center">
              <p id="overlay_header">Enjoy!</p>
              <p id="overlay_subheader">Please review your code before copying.</p>
            </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <div id="overlay_code_container">
              <?php require "./view/line_chart/line_chart_template.html";?>
              <?php require "./view/bar_chart/bar_chart_template.html";?>
              <?php require "./view/pie_chart/pie_chart_template.html";?>
            </div>
          </div>
        </div>
        <div class="row" id="overlay_button_container">
          <div class="col-6">
            <div class="col-lg-12 col-md-12 col-12">
              <button id="overlay_button_copy" class="overlay_buttons">
                Copy To Clipboard
              </button>
            </div>
          </div>

          <div class="col-6">
            <div class="col-lg-12 col-md-12 col-12">
              <!-- 

              <button id="overlay_button_tab" class="overlay_buttons">
                Preview On New Tab
              </button>

              -->
              <form action="./preview_tab.php" method="post" target="_blank" id="line_form_button">
                  <input type="hidden" id="line_chart_form_input" name="finished_script">  
                  <input type="submit" value="Preview On New Tab" class="overlay_buttons">
              </form>
              <form action="./preview_tab.php" method="post" target="_blank" id="bar_form_button">
                  <input type="hidden" id="bar_chart_form_input" name="finished_script">  
                  <input type="submit" value="Preview On New Tab" class="overlay_buttons">
              </form>
              <form action="./preview_tab.php" method="post" target="_blank" id="pie_form_button">
                  <input type="hidden" id="pie_chart_form_input" name="finished_script">  
                  <input type="submit" value="Preview On New Tab" class="overlay_buttons">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="overlay2">
      <div class="container" id="overlay_main_container2">
      <span id="overlay_close_button2">X</span>
        <span id="help_content_wrapper">
        <p id="help_title" class="text-center">D3 Assist (Made for v5)</p>
        <p class="text-center text-break">Ricardo Castillo</p>
        <p id="explanation" class="text-center">This project was made to help people understand D3.js quicker by offering the code of the customized graph. 
          The code offered by these three graphs could probably be done using more practical conventions, but should still be very useful
          to anyone unfamiliar with D3.js.
        </p>
        </span>
      </div>
    </div>

    <?php require "./view/nav.html";?>

    <body>
      <div class="container" id="main_container">
        <div class="row d-flex justify-content-center text-center">
          <p id="phone_warning">Please use app on a desktop or laptop for a better user expierience!</p>
        </div>
        <div class="row" id="main_row">
          <div class="col-lg-6">
            <div class="col-lg-12 col-md-12 col-12 mb-4" id="form_container">

                <form action="#" id="form" autocomplete="off">
                  <h6>
                    <i
                      class="fas fa-chevron-down sec_label_down_i"
                      id="title_arrow_down_icon"
                    ></i>
                    <i
                      class="fas fa-chevron-right sec_label_right_i"
                      id="title_arrow_right_icon"
                    ></i>
                    Titles
                  </h6>
                    <div id="title_row_group">
                      <?php require "./view/line_chart/form/line_chart_form_titles.html";?>
                      <?php require "./view/bar_chart/form/bar_chart_form_titles.html";?>
                      <?php require "./view/pie_chart/form/pie_chart_form_titles.html";?>
                    </div>

                  <h6>
                    <i
                      class="fas fa-chevron-down sec_label_down_i"
                      id="slider_arrow_down_icon"
                    ></i>
                    <i
                      class="fas fa-chevron-right sec_label_right_i"
                      id="slider_arrow_right_icon"
                    ></i>

                    Sliders
                  </h6>
                    <div id="slider_row_group">
                      <?php require "./view/line_chart/form/line_chart_form_sliders.html";?>
                      <?php require "./view/bar_chart/form/bar_chart_form_sliders.html";?>
                      <?php require "./view/pie_chart/form/pie_chart_form_sliders.html";?>
                    </div>

                  <h6>
                    <i
                      class="fas fa-chevron-down sec_label_down_i"
                      id="checkbox_arrow_down_icon"
                    ></i>
                    <i
                      class="fas fa-chevron-right sec_label_right_i"
                      id="checkbox_arrow_right_icon"
                    ></i>

                    Checkboxes
                  </h6>
                    <div id="checkbox_row_group">
                      <?php require "./view/line_chart/form/line_chart_form_checkboxes.html";?>
                      <?php require "./view/bar_chart/form/bar_chart_form_checkboxes.html";?>
                      <?php require "./view/pie_chart/form/pie_chart_form_checkboxes.html";?>
                    </div>

                  <h6>
                    <i
                      class="fas fa-chevron-down sec_label_down_i"
                      id="color_arrow_down_icon"
                    ></i>
                    <i
                      class="fas fa-chevron-right sec_label_right_i"
                      id="color_arrow_right_icon"
                    ></i>

                    Colors
                  </h6>
                    <div id="color_row_group">
                      <?php require "./view/line_chart/form/line_chart_form_colors.html";?>
                      <?php require "./view/bar_chart/form/bar_chart_form_colors.html";?>
                      <?php require "./view/pie_chart/form/pie_chart_form_colors.html";?>
                    </div>
                </form>
                
              <div class="row mt-2">
                <input type="submit" value="Preview" id="form_submit_button" />
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="col-lg-12 col-md-12 col-12 mb-4" id="graph_container">

              <div class="row">
                <div id="bar_div"></div>
              </div>
              <div class="row">
                <div id="line_div"></div>
              </div>
              <div class="row">
                <div id="pie_div"></div>
              </div>

              <div class="row" id="graph_dimension_div">
                <?php require "./view/line_chart/line_chart_dimension.html";?>
                <?php require "./view/bar_chart/bar_chart_dimension.html";?>
                <?php require "./view/pie_chart/pie_chart_dimension.html";?>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center">
          <p id="mwv5_span">Made with v5!</p>
        </div>
        <div id="bottom-button-row" class="row d-flex justify-content-center">
          <a href="https://github.com/richad97/d3-assist" class="fab fa-github-square fa-lg bottom-buttons"></a>
          <i id="question_mark_button" class="fas fa-question-circle fa-lg bottom-buttons"></i>
        </div>
      </div>
 
    </body>

    <script src="./dist/bundle.js"></script>
    
</html>