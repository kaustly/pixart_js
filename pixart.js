// When I click the "Set Color" button, it should change the color of the
// "brush" box to the color I specify in the input field.
document.querySelector("#set-color").addEventListener("click", function(event) {
      event.preventDefault();
      var newColor = document.querySelector("#color-field").value;
      document.querySelector(".brush").style.backgroundColor = newColor;
});
