var button = document.querySelector("#set-color");
var colorField = document.querySelector("#color-field");
var brush = document.querySelector(".brush");
var color = "#1B4370";

startPixart();

function startPixart() {
  button.addEventListener("click", setBrushColor);
  makeCanvas();
}

function setBrushColor(event) {
      event.preventDefault();
      var newColor = colorField.value;
      brush.style.backgroundColor = newColor;
      color = newColor;
}

function makeCanvas() {
  for(var i = 0; i < 8000; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.addEventListener("mouseover", paintSquare);
    document.querySelector("body").appendChild(newDiv);
  }
}

function paintSquare() {
  this.style.backgroundColor = color;
}
