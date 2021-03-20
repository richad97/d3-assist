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
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/spectrum-colorpicker2/dist/spectrum.min.css"
    />
    <link rel="stylesheet" href="./scss/main.css" />
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
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <script type="module" src="./src/<?php echo $page_requested; ?>/<?php echo $page_requested; ?>_main.js"></script>
  </head>

    <?php require "./view/{$page_requested}/{$page_requested}_template.php";?>
    <?php require "./view/nav.html";?>
    <?php require "./view/{$page_requested}/{$page_requested}_body.php";?>


</html>