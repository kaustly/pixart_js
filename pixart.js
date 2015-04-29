// When I click the "Set Color" button, it should change the color of the
// "brush" box to the color I specify in the input field.

var button = document.querySelector("#set-color");
var colorField = document.querySelector("#color-field");
var brush = document.querySelector(".brush");
var color = "#1B4370";

function setBrushColor(event) {
      event.preventDefault();
      var newColor = colorField.value;
      brush.style.backgroundColor = newColor;
      color = newColor;
}

button.addEventListener("click", setBrushColor);

for(var i = 0; i < 8000; i++) {
  var newDiv = document.createElement("div");
  newDiv.classList.add("square");
  newDiv.addEventListener("mouseover", function(){ this.style.backgroundColor = color; })
  document.querySelector("body").appendChild(newDiv);
}

// Change the event that changes your box colors from 'click' to 'mouseover'
// Paint a picture!
