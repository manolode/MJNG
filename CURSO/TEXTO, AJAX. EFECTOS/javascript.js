
$(document).ready(function(){
    // selectores
    var rojo =  $("#rojo");
    rojo
    .css("background-color", "red")
    .css("color"," white");

    $("#amarillo")
    .css("background-color", "yellow")
    .css("color"," black");

    $("#verde")
    .css("background-color", "green")
    .css("color", "white");


  // añadir una clase
    rojo.addClass("recuadro");

    // quitar la clase

    $("#amarillo").removeClass
    ("recuadro");


// variables en jquery 
    var elemento = $(".recuadro");
    elemento
    .css ("border", "2px solid black")
    .css("font-size", "1.5em")

    // buscar por su titulo

    $(`[title="Google"]`).css("color", "red")

    // EVENTOS..................................

    var contenedor= $("#contenedor");
    // contenedor.mouseover(function(){
    //    $(this)
    //    .css ("background",  "red");
    // });
    // contenedor.mouseout(function(){
    //     $(this)
    //     .css ("background",  "green");
    //  });


    // crear una funcion......................
       //hacer lo mismo que las lineas comentadas anteriores
    function cambiarojo(){
        $(this).css("background", "red");
    }
     
    function cambiaverde(){
        $(this).css("background", "green");
    }

    contenedor.hover(cambiarojo,cambiaverde);


  //EVENTO MOUSE mover el cursor con circulo............

    $(document).mousemove(function(){

       //que no aparezca el cursor...
        // $("body").css ("cursor", "none");

        //que solo aparezca el circulo en toda la pagina...
        $("html").css ("cursor", "none");


// que aparezca el cursor con el circulo...
        $("#sigueme")
        .css("left", event.clientX)
        .css("top", event.clientY)
    });

    //añadir atributos.............................
//cear nuevo enlace al rellenar el input...
    $("#add-button").click(function(){

        $("#menu").append('<li><a href="'+$("#add-link").val()+'">ir al nuevo enlace</a></li>');
        $("#add-link").val("");


    });
    //añadir diferentes enlaces
    function reloadlinks(){
        $("a").each(function(index){
            var esto = $(this);
            var enlace = esto.attr
                ("href");
                esto.attr("target", "_blank");
                esto.text(enlace);
        })

    }
//animacion del contenedor con movimiento

    // $("#animar").click(function(){
    //     var caja=$("#contenedor");
    //         caja.animate({
    //         marginLeft:"500px",
    //         fontSize:"40px",
    //         height:"120px"}, "slow")

    //         .animate({
    //             borderRadius: "25%",
    //             marginTop: "200px"
    //         },"fast")
        
    // })

    //mover las cajas o letras con el raton por la pantalla........
    $("#contenedor").draggable();

    // $("#animar").draggable();

    $("#verde").draggable();

  // drop
//me mueve el amarillo sobre el rojo
  $( function() {
    $( "#amarillo" ).draggable();
    $( "#rojo" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          //find me busca los elementos que le asigne en la pagina
          .find("p")
            .html("cambio");
      }
    });
  } );

});

