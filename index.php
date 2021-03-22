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
    <link rel="stylesheet" type="text/css" href="./node_modules/spectrum-colorpicker2/dist/spectrum.css">
    <link rel="stylesheet" href="./scss/main.css" />

    <script type="text/javascript" src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
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
    <?php require "./view/{$page_requested}/{$page_requested}_template.php";?>
    <?php require "./view/nav.html";?>
    <?php require "./view/{$page_requested}/{$page_requested}_body.php";?>
    <script src="./bundle.js"></script>
</html>