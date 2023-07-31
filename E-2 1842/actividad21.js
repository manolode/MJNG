

//APUNTE RECOGIDO DE PAGINAS WEB, APUNTES MM, VALIDACION
// function validarformulario() {

//     if(((validarCampoTexto() == false) && 
//     (validarDni() == false)
//      && 
//      (validarocupacion() == false)) ||
//      (validarcampotexto() == false ||
//      (validarDni() == false)||
//      (validarFecha() == false ||
//      (validarTelefono() == false ||
//      (validarEmail() == false) ||
//      (validarOcupacion() == false)))
//      {

//         return false;
//      }

//      else{
//         alert("Formulario enviado con exito.");
//         return true;
//      }
// }

// function validarCampoTexto(){
//     var abecedario = "abcdefghijklmnñopqrstuvwxyzáéíóú";
//     nombre = document.getElementById("nombre").value;

//     if(nombre == null || nombre.length == 0 ||/^\s+$/.test
//     (nombre)) {
//         $("#mensaje_nombre").removeClass("textoOK");
//         $("#mensaje_nombre").addClas("textoError");
//         $("#mensaje_nombre").html('Debe rellenar este campo.');
//         return false;

//     }

//     else{

//         nombre = nombre.toLowerCase();

//         for(var i=0; i<nombre.length;i++) {
//             if(abecedario.indexof(nombre.charAt(i),0) == -1) {
//                 $("#mensaje_nombre").removeClass("textoOK");
//                 $("#mensaje_nombre").addClas("textoError");
//                 $("#mensaje_nombre").html('valor no valido.
//                 Solamente puede introducir texto.');

//                 return false;
        
//             }
//         }
//         $("#mensaje_nombre").removeClass("textoError");
//         $("#mensaje_nombre").addClas("textoOk");
//         $("#mensaje_nombre").html('campo rellenado correctamente.');
//         return true;

//     }

// }
    

// function validarDni(){

//     dni = document.getElementById("dni").value;
    
//     var letrasDni = [ 'T', 'R' , 'W' , 'A' , 'G' , 'M' , 'Y', 'F' , 'P' , 'D' ,'X'
//                          , 'B' , 'N' , 'j' , 'Z' , 'S' , 'Q' , 'V' , 'H' , 'L' , 'C' , 'K' , 'E' , 'T'];
                        
//          dni= dni.toUpperCase();

//          if(dni == null || dni.length == 0 || /^\s+$/.test(dni)){
//             $("mensaje_dni").html('Debe rellenar este campo.');
//             return false;
//          }

//          else{

//             if(!(/^\d{8}[A-z]$/.test(dni))),{
//                 $("#mensaje_dni").removeClass("textoOK");
//                 $("#mensaje_dni").addClas("textoError");
//                 $("#mensaje_dni").html('Formato de D:N:I: no valido. recuerde: (XXXXXXXX).');

//                 return false;
    
//             }

//             if(dni.charAt(8) != letrasDni[dni.substring(0,8)%23]){
//                 $("#mensaje_dni").removeClass("textoOK");
//                 $("#mensaje_dni").addClas("textoError");
//                 $("#mensaje_dni").html('la letra del D:N:I: no es correcta.');

//                 return false;

//             }
//             $("#mensaje_dni").removeClass("textoError");
//             $("#mensaje_dni").addClas("textoOk");
//             $("#mensaje_dni").html('campo rellenado correctamente.');

//             return true;

//          }

// }

// function validarfecha(){
     
//     fecha = document.getElementById("fecha").value;

//     longitudFecha = fecha.length;

//     posBarrauno = fecha.indexOf("/");
//     posBarrados = fecha.lastIndexOf("/");

//     dia = fecha.substring(0,posBarrauno);
//     mes = fecha.substring(posBarraUno+1,posbarrados);
//     anyo = fecha.substring(posbarraDos+1,longitudfecha);

//     dia = parseInt(dia);
//     mes= parseInt(mes);
//     anyo = parseInt(anyo);

//     if(longitudFecha == 0){

//         return true;
//     }

//     else{
//         if(!(/^\d{1,2}\/\d{1,2\/\d{2,4}$/.test(fecha)))
//         {
//             $("#mensaje_fecha").removeClass("textoOK");
//             $("#mensaje_fecha").addClas("textoError");
//             $("#mensaje_fecha").html('la fecha introducida no tiene  formato valido.');

//             return false;

//         }

//         else{

//             if((dia < 0) || (dia > 31)){

//             $("#mensaje_fecha").removeClass("textoOK");
//             $("#mensaje_fecha").addClas("textoError");
//             $("#mensaje_fecha").html('El dia introducido no es valido.');

//             return false;
//         }
//             if((mes < 0) || (mes > 12)){

//             $("#mensaje_fecha").removeClass("textoOK");
//             $("#mensaje_fecha").addClas("textoError");
//             $("#mensaje_fecha").html('El mes introducido no es valido.');

//             return false;

//             }

//             else if((mes == 4) || (mes ==6) || (mes == 9) || (mes == 11)){
//                 if(dia > 30 ){

//                     $("#mensaje_fecha").removeClass("textoOK");
//                     $("#mensaje_fecha").addClas("textoError");
//                     $("#mensaje_fecha").html('El dia introducido no es valido.');
        
//                     return false;
//             }

//          }

//          else if(mes == 2){

//             if(bisiesto(anyo) == true){
//                 if(dia > 29){

//                     $("#mensaje_fecha").removeClass("textoOK");
//                     $("#mensaje_fecha").addClas("textoError");
//                     $("#mensaje_fecha").html('El dia introducido no es valido.');
        
//                     return false;



//                 }
//             }

//             else{
//                 if(dia > 28){

//                     $("#mensaje_fecha").removeClass("textoOK");
//                     $("#mensaje_fecha").addClas("textoError");
//                     $("#mensaje_fecha").html('El dia introducido no es valido.');
        
//                     return false;

//             }
//          }
//     }

//             if((anyo <1913) || (anyo > 1995)){
//                 $("#mensaje_fecha").removeClass("textoOK");
//                 $("#mensaje_fecha").addClas("textoError");
//                 $("#mensaje_fecha").html('El dia introducido no es valido.');
    
//                 return false;

//             }
//             $("#mensaje_fecha").removeClass("textoError");
//             $("#mensaje_fecha").addClas("textoOK");
//             $("#mensaje_fecha").html('campo rellenado correctamente.');

//             return true;
//         }
//     }

// }

// function validarTelefono(){

//     telefono = document.getElementById("telefono").value;

//     if(telefono.length == 0){
//         return true;

//     }
//     else { 

//         if(!(/^\d{9}$/.test(telefono))){

//             $("#mensaje_telefono").removeClass("textoOK");
//             $("#mensaje_telefono").addClas("textoError");
//             $("#mensaje_telefono").html('El telefono introducido no es valido.Recuerde su formato:(XXXXXXXXX).');

//             return false;

//         }
//         $("#mensaje_telefono").removeClass("textoError");
//         $("#mensaje_telefono").addClas("textoOK");
//         $("#mensaje_telefono").html('campo rellenado correctamente.');

//         return true;


//     }
// }

// function validarEmail(){

//     email = document.getElementById("correo").value;

//     if(email.length == 0){
//         return true;

//     }

//     else {

//         if(!(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.
//         test(email))){
//             $("#mensaje_correo").html('El email introducido no
//             es valido.Recuerde su formato: (nombre + @ + servidor + dominio).');

//             return false;

//         }
//         $("#mensaje_correo").removeClass("textoError");
//         $("#mensaje_correo").addClas("textoOK");
//         $("#mensaje_correo").html('campo rellenado correctamente.');

//         return true;


//     }
// }

// function validarOcupacion(){

//     opcion = document.getElementById("opciones").selectedindex;

//     if(opcion == null || opcion  == 0){

//         $("#mensaje_opciones").removeClass("textoOK");
//         $("#mensaje_opciones").addClas("textoerror");
//         $("#mensaje_opciones").html('Debe seleccionar una ocupacion.');

//         return false;
//     }
//     $("#mensaje_opciones").removeClass("textoError");
//     $("#mensaje_opciones").addClas("textoOK");
//     $("#mensaje_opciones").html('campo seleccionado correctamente.');

//     return true;
// }

//  recogido lo superior de los apuntes paginas web,apuntes mm, validacion


window.addEventListener("load", () =>{

    var formulario = document.querySelector("#formulario");
    var box_info = document.querySelector(".info");
    box_info.style.display= "none";

    formulario.addEventListener("submit", function(){

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim() == ""){
            document.querySelector("#error_nombre").innerHTML = "Nombre no valido";
            document.querySelector("#error_nombre").style.color = "red";
            return false
        } else{
            document.querySelector("error_nombre").innerHTML = "Nombre no valido";
            document.querySelector("#error_nombre").style.color = "green";
        }
        if(apellido.trim() == null || apellido.trim == ""){
            document.querySelector("#error_apellido").innerHTML = "Apellido no valido";
            document.querySelector("#error_apellido").style.color = "red";
            return false
        } else {
            document.querySelector("error_apellido").innerHTML = "Apellido no valido";
            document.querySelector("#error_apellido").style.color = "green";

        }
        if(edad == null || edad <=  0 || isNaN (edad)){
            document.querySelector("#error_edad").innerHTML = "Edad no valida";
            document.querySelector("#error_edad").style.color = "red";
            return false
        } else{
            document.querySelector("error_edad").innerHTML = "Edad no valida";
            document.querySelector("#error_edad").style.color = "green";
            
        }
        box_info.style.display = "block";

        var i_nombre = document.querySelector("#i_nombre span");
        var i_apellidos= document.querySelector("#i_apellidos span");
        var i_edad= document.querySelector("#i_edad span");

        i_nombre.innerHTML =nombre;
        i_apellidos.innerHTML = apellido;
        i_edad.innerHTML = edad;
    })

    });
