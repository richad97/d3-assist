//  Form and overlay function
let formSubmitButton = document.querySelector("#form_submit_button");
let overlayCloseButton = document.querySelector("#overlay_close_button");
let navPieChartButton = document.querySelector("#nav_pie_chart_button");

formSubmitButton.addEventListener("click", function () {
  $("#overlay").fadeIn(600);
});

overlayCloseButton.addEventListener("click", function () {
  $("#overlay").fadeOut(400);
});

// navPieChartButton.addEventListener("click", function () {
//   $("#form").fadeOut();
// });

//  Closes overlay when escape key is pressed
$(document).keyup(function (e) {
  if (e.key === "Escape") {
    // escape key maps to keycode `27`
    $("#overlay").fadeOut();
  }
});

//  Copies code from popup container
document
  .getElementById("overlay_button_copy")
  .addEventListener("click", function () {
    copyDivToClipboard();
  });
