
$(document).ready(function(){
//boton uno...........................................
    $("#uno").click(function(){
        $( ".textcont1" ).draggable();
    } );

//boton 2.............................................
    $("#dos").click(function(){
        $( ".cont2" ).resizable();
    } );

//boton 3................................................
    $("#tres").click(function(){
        $( ".cont3" ).tooltip();
    });
 //boton numero 4.....................................

    $( ".cont4" ).click( function() {
          $( ".cont4" ).toggle( "clip", 1000 );
     });
 //boton numero 5.................................

     $( function() {
        // run the currently selected effect
        function runEffect() {
          // get effect type from
          var selectedEffect = $( "" ).val();
     
          // Most effect types need no options passed by default
          var options = {};
          // some effects have required parameters
          if ( selectedEffect === "scale" ) {
            options = { percent: 50 };
          } else if ( selectedEffect === "size" ) {
            options = { to: { width: 200, height: 60 } };
          }
     
          // Run the effect
          $( "#effect1" ).hide( selectedEffect, options, 1000, callback );
        };
     
        // Callback function to bring a hidden box back
        function callback() {
          setTimeout(function() {
            $( "#effect1" ).removeAttr( "style" ).hide().fadeIn();
          }, 1000 );
        };
     
        // Set effect from select menu value
        $( "#cinco" ).on( "click", function() {
          runEffect();
        });
      } );

  //boton 6............................................

     $("#seis").click(function(){

         $(".cont6").toggle("fade",
         4000)
   
     });

 //boton 7...............................................


     $("#siete").click(function(){
        $( ".cont7" ).slider();
    } );


 //boton 8............................................

    $("#ocho").click(function(){
        $( ".cont8" ).toggle("bounce", 2000);
    } );


//boton 9.......................................

$("#nueve").click(function(){
    $( ".cont9" ).toggle("drop", 2000);
} );


//boton 10.....................................

$("#diez").click(function(){
    $( ".cont10" ).toggle("puff", 5000);
} );


//BOTON 11...............................

$("#once").click(function(){
    $( ".cont11" ).toggle("blind", 3000);
} );

//boton 12.........................
  
$("#doce").click(function(){
    $( ".cont12" ).toggle("pulsate", 4000);
} );
    

   

    // $("#cinco").click(function(){
    //  $(".cont5") .css("font-size", "5em");
   
  
    //  $("p")
    //  .css("font-size", "2.5em");



 

 
    
 



 




});





