
// funcion mecanica para guardar en localstore
function guardar(llave, valor){
    localStorage.setItem(llave, JSON.stringify(valor))
}
// funcion mecanica para obterer los datos del localstore
function obtener(llave){
    const datos= JSON.parse(localStorage.getItem(llave))
    return datos;
}
// array
let alumnos = obtener("alumnos") || [];
let mensaje = document.getElementById("mensaje");

// variables para buscar en html
var añadirAlumno = document.getElementById("alumnoAñadir");
var añadirApellido = document.getElementById("emailAñadir");
var añadirEmail = document.getElementById("asuntoAñadir");
var añadirImagen = document.getElementById("mensajeAñadir");

// funcion para obtener el valor en variable local let
//  desde la variable de html
document.getElementById("botonAñadir").addEventListener("click", function(event){
    event.preventDefault()
    let alumnoAñadir = añadirAlumno.value;
    let apellidoAñadir = añadirApellido.value;
    let emailAñadir = añadirEmail.value;
    let ImagenAñadir = añadirImagen.value;

    let van = true;

    if(alumnoAñadir == "" || apellidoAñadir == "" || emailAñadir == "" || ImagenAñadir == ""){
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
            correo: apellidoAñadir,
            asunto: emailAñadir,
            mensaje: ImagenAñadir

        })
        mensaje.classList.add("realizado");
        setTimeout(() => {
            mensaje.classList.remove("realizado");
            window.location.reload();
        }, 1500)
    }
    guardar("alumnos", alumnos);
    
})

// window.addEventListener("load",  () =>{
//     let alumnoEd= document.getElementById("alumnoEditar");
//     let alumnoEl = document.getElementById("alumnoEliminar");
//     for (let i=0: i < alumnos.length; i++){
//         alumnoEd.innerHTML += `<option>${alumnos[i].nombre} </option>`
//         alumnoEl.innerHTML += `<option>${alumnos[i].nombre} </option>`
//     }
//     Object.keys(alumnos[0]).forEach(element => {
//         atributoed.innerHTML += `<option>${element}</option>`
//     });

//     let muestraalumnos = document.getElementById("mostraAlumnos");
//     muestraalumnos.innerHTML = "";
//     for (let i=0; i<alumnos.length; i++){
//         muestraalumnos.innerHTML += `
//         <div class="contenedorAlumnos">
//         <img src="${alumnos[i].urlImagen}">
//         <div class="informacion">
//         <p>${alumnos[i].nombre}</p>
//         <p class="apellido"><span>Apellido: ${alumnos[i].apellido}</span><p/>
//         email : ${alumnos[i].email}<p></p></div></div>`   

// }
// })
