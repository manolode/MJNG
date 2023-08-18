

$(document).ready(function (){

$( function() {
    $( "#acordeon" ).accordion();
  } );

  
  $('#acceso').click(function(){
     $("#acciones")
    //  .css("background-image", "url('MEDIA/Recurso 1.png')")
    .append('<input type="text" name="nombre" id="nombre" placeholder= "su nombre">','<input type="number" name="number" id="number" placeholder= "su contraseña>')
    
  });


  $('#registro').click(function(){
    $("#acciones1")
    .css.append('background', 'black')

 });

 $('#informacion').click(function(){
  $("#acciones2").css("backgdround-image", "url('MEDIA/Recurso 2.png')")
 .append('background-color', 'black')

});

$('#curso').click(function(){
  $("#acciones3").css("backgdround-image", "url('MEDIA/Recurso 2.png')")
 .append('background-color', 'black')

});

$('#contacto').click(function(){
  $("#acciones4").css("backgdround-image", "url('MEDIA/Recurso 2.png')")
 .append('background-color', 'black')

});

});
   

 