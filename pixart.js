$(document).ready(function(){
  $("#set-color").click(function(evt){
    evt.preventDefault();
    console.log("I was clicked");
    $("#color-field").val();
    $(".brush").css("background-color", $("#color-field").val());

  })

})

// var Pixart = {
//   elements: {
//     var setColor = ('set-color')
//     ;
//     var draw =
//   }
//   $("body")[0].addEventListener("click",)
// }
