
//PAR JQUERY
$(document).ready(function (){
//muestra contendido externo load

    // $("#datos").load("https://reqres.in/");

 //recoger datos peticion AJAX, ENLACE EN LA PAGINA REQRES, LISTA DE USUARIOS
 //get y post

   $.get("https://reqres.in/api/users", {page:2}, function(respuesta){

        respuesta.data.forEach((element, index) => {
        $("#datos").append("<p>"+element.first_name+" " +element.last_name+"</p>");
        
        });


    });


    //enviar datos

    $("#formulario").submit(function(e){

        e.preventDefault();
        var usuario = {
            nombre:$('input[name="nombre"]').val(),
            web:$('input[name="web"]').val(),
        };

        // $.post($(this).attr("action"), usuario, function(respuesta){
        //     console.log(respuesta);

        // }).done(function(){

           // alert(" usuario añadido correctamente");
        // });

                          //enviando datos con AJAX.......................................
            $.ajax({
            type: "POST",
            url:$(this).attr("action"),
            data:usuario,
            
            beforeSend:function(){
                console.log("Enviando usuario");
            },

            success:function(respuesta){
                console.log(respuesta);
            },

            error:function(){
                console.log("Ha ocurrido un error")
            },
            timeout: 1000
        });
    });
});
   

 