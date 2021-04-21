<?php 
//print_r($_POST['finished_script']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview</title>
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <style>
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
        .line_tooltip {
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
        .pie_tooltip {
            position: absolute;
            display: none;
            min-width: 80px;
            height: auto;
            background: none repeat scroll;
            border: 1px solid #000000;
            padding: 14px;
            text-align: center;
            background-color: white;
            z-index: 1;
        }
        .hovered:hover {
        opacity: 0.7;
      }
    </style>
</head>
<body>
</body>
<script>
      <?php  echo $_POST["finished_script"]; ?>
</script>
</html>