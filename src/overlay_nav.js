//  Form and overlay function
let formSubmitButton = document.querySelector("#form_submit_button");
let overlayCloseButton = document.querySelector("#overlay_close_button");
let navPieChartButton = document.querySelector("#nav_pie_chart_button");
let overlay = document.querySelector("#overlay");

formSubmitButton.addEventListener("click", function () {
  $("#overlay").fadeIn(600);
});

overlayCloseButton.addEventListener("click", function () {
  $("#overlay").fadeOut();
});

overlay.addEventListener("click", function () {
  $("#overlay").fadeOut();
});

$(document).keyup(function (e) {
  if (e.key === "Escape") {
    // escape key maps to keycode `27`
    $("#overlay").fadeOut();
  }
});

document
  .getElementById("overlay_button_copy")
  .addEventListener("click", function () {
    copyDivToClipboard();
  });
