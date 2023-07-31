
//local storage

function guardar(llave, valor){
    localStorage.setItem(llave, JSON.stringify(valor))
}

function obtener(llave){
    const datos= JSON.parse(localStorage.getItem(llave))
    return datos;
}

let alumnos = obtener("alumnos") || [];
let mensaje = document.getElementById("mensaje");


var añadirAlumno = document.getElementById("alumnoAñadir");
var añadirApellido = document.getElementById("apellidoAñadir");
var añadirEmail = document.getElementById("emailAñadir");
var añadirImagen = document.getElementById("ImagenAñadir");

document.getElementById("botonAñadir").addEventListener("click", function(event){
    event.preventDefault()
    let alumnoAñadir = añadirAlumno.value;
    let apellidoAñadir = añadirApellido.value;
    let emailAñadir = añadirEmail.value;
    let ImagenAñadir = añadirImagen.value;

    let van = true;

    if(alumnoAñadir == "" || apellidoAñadir == "" || emailAñadir == "" || imagenAñadir == ""){
        mensaje.classList.add("llenarCampos");
        setTimeout(() => { mensaje.classList.remove("llenarCampos")

        }, 5000);
        van = false
    }
    else{
        for(let i =0; i<alumnos.length; i++){
            if(alumnos[i].nombre == alumnoAñadir){
                mensaje.classList.add("repetidoError");
                setTimeout(() => {
                    mensaje.classList.remove("repedidoError")
                }, 2500);
                van = false;
            }
        }
    }

    if (van == true){
        alumnos.push({
            nombre: alumnoAñadir,
            apellido: apellidoAñadir,
            email: emailAñadir,
            url: imagenAñadir

        })
        mensaje.classList.add("realizado");
        setTimeout(() => {
            mensaje.classList.remove("realizado");
            window.location.reload();
        }, 1500)
    }
    guardar("alumnos", alumnos);

})
