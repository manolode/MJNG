
// si coloco en el head el script esta funcion es necesaria 
$(document).ready(function (){



    $(".boton").click(function(){
        $(".informacion").css
        ("background-image", "url('imagenes/imagen-curso.jpg')");

        $(".informacion h1,p").css
        ("color", "#ffff00");
    
       
    })

    $(".alumno").click(function(){

        $(this).css
        ("background-color", "#ffff00");

    })

    $("h3").click(function (){
        $("#cuerpo").ccs
        ("color", "#ffff00");

    })

    $("h4").click(function (){
        $(".imagen h4").ccs
        ("color", "#ffff00");

    })

    $("h3").mouseenter(function (){
        $(".cuerpos h3").ccs
        ("color", "#ffff00");

    })

     $("p").click(function (){
        $(".pepe, p").ccs
        ("color", "#ffff00");

    })






    



})

