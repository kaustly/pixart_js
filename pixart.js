// When I click the "Set Color" button, it should change the color of the
// "brush" box to the color I specify in the input field.

var button = document.querySelector("#set-color");
var colorField = document.querySelector("#color-field");
var brush = document.querySelector(".brush");

function setBrushColor(event) {
      event.preventDefault();
      var newColor = colorField.value;
      brush.style.backgroundColor = newColor;
}

button.addEventListener("click", setBrushColor);
