
$(document).ready(function(){

$(".boton")
.click(function(){
    $("body")
    .css("background", "black");
    $("h1")
    .css("font-size", "5em");
    $("p")
    .css("font-size", "2.5em");
    
})
//colocar el title en html
$( function() {
    $( document ).tooltip();
  } );


$( function() {
    $( "#seccion3" ).accordion();

  });



});
