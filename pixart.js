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

// Using JavaScript, create 20 divs of the "square" class and append them to the body
for(var i = 0; i < 20; i++) {
  var newDiv = document.createElement("div");
  newDiv.classList.add("square");
  newDiv.addEventListener("click", function(){ this.style.backgroundColor = "green"; })
  document.querySelector("body").appendChild(newDiv);
}


// Add functionality so that when I click on each "square", it changes the
// color of that individual square to "green"
