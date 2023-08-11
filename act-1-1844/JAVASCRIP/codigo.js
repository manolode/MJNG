
$(document)
.ready(function (){

    

    $("#formulario").submit(function(e){

        e.preventDefault();
        var usuario = {
            codigo:$('input[name="codigo"]').val(),
            nombre:$('input[name="nombre"]').val(),
            apellidos:$('input[name="apellidos"]').val(),
            correo:$('input[name="correo"]').val(),
            edad:$('input[name="edad"]').val(),
            foto:$('input[name="foto"]').val(),
        };

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
   

 