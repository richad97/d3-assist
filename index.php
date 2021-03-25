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
        <p id="overlay_close_button">X</p>

        <div class="row" id="overlay_title_container">
          <div class="col-12 text-center">
            <p id="overlay_header">Enjoy!</p>
            <p id="overlay_subheader">Please review your code before copying.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div id="overlay_code_container">
              <?php require "./view/{$page_requested}/{$page_requested}_template.html";?>
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

    <?php require "./view/nav.html";?>

    <body>
      <div class="container" id="main_container">
        <?php require "./view/{$page_requested}/{$page_requested}_body.html";?>
      </div>
    </body>

    <script src="./dist/bundle.js"></script>
    
</html>