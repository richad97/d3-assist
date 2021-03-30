<?php
    //print_r($_GET);
    if(isset($_GET["page"])){
        $page_requested = $_GET["page"];
    }elseif (!isset($page_requested) || $page_requested == "") {
        $page_requested = "line_chart";
    }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3 Assist</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./node_modules/spectrum-colorpicker2/dist/spectrum.css">
    <link rel="stylesheet" href="./scss/main.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <!--<script type="text/javascript" src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>-->
    <script type="text/javascript" src="./node_modules/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="./node_modules/spectrum-colorpicker2/dist/spectrum.min.js"></script>
    <script>
      function copyDivToClipboard() {
        var range = document.createRange();
        range.selectNode(document.getElementById("<?php echo $page_requested; ?>_template"));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges(); // to deselect
        window.alert("Code has been copied to your clipboard.");
      }
    </script>
    <!--<script type="module" src="./src/<?php echo $page_requested; ?>/<?php echo $page_requested; ?>_main.js"></script>-->
  </head>

    <div id="overlay">
      <div class="container" id="overlay_main_container">

        <div class="row" id="overlay_title_container">
        <span id="overlay_close_button">X</span>
          <div class="col-12 text-center">
            <p id="overlay_header">Enjoy!</p>
            <p id="overlay_subheader">Please review your code before copying.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div id="overlay_code_container">
              <?php require "./view/line_chart/line_chart_template.html";?>
              <?php require "./view/bar_chart/bar_chart_template.html";?>
            </div>
          </div>
        </div>
        <div class="row" id="overlay_button_container">
          <div class="col-6">
            <div class="col-12">
              <button id="overlay_button_copy" class="overlay_buttons">
                Copy To Clipboard
              </button>
            </div>
          </div>

          <div class="col-6">
            <div class="col-12">
              <button id="overlay_button_tab" class="overlay_buttons">
                Preview On New Tab
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php require "./view/nav.html";?>

    <body>
      <div class="container" id="main_container">

        <div class="row">
          <div class="col-lg-6">
            <div class="col-lg-12 col-md-12 col-12 mb-5" id="form_container">
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
                    </div>
                </form>
              <div class="row mt-2">
                <input type="submit" value="Preview" id="form_submit_button" />
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="col-lg-12 col-md-12 col-12 mb-5" id="graph_container">

              <div class="row">
                <div id="bar_div"></div>
              </div>
              <div class="row">
                <div id="line_div"></div>
              </div>

              <div class="row" id="graph_dimension_div">
                <?php require "./view/line_chart/line_chart_dimension.html";?>
                <?php require "./view/bar_chart/bar_chart_dimension.html";?>
              </div>
            </div>
          </div>

        </div>
      </div>
    </body>

    <script src="./dist/bundle.js"></script>
    
</html>