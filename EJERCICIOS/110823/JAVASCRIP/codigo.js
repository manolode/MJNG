

$(document).ready(function (){

$( function() {
    $( "#acordeon" ).accordion();
  } );

  
  $('#acceso').click(function(){
     $("#acciones").css("background-image", "url('MEDIA/Recurso 1.png')")
    // .append('<input type="text" name="nombre" id="nombre">')

  });

  $('#registro').click(function(){
    $("#acciones1").css("backgdround-image", "url('MEDIA/Recurso 2.png')")
   .append('background-color', 'black')

 });





});
   

 