
//JSON - javascript object notacion
//nos permite crear objetos de forma rapida

var alumno = {
    nombre: "juan lopez", 
    correo: "juanpi@gmail.com",
    telefono:"555.555.555",
}

// var alumnodos ={
//     nombre: "jose garcia", 
//     correo: "jose@gmail.com",
//     telefono:"555.555.777",
// }
// //para cambiar algun dato
// alumno.nombre = "juan lopez lopez"

// //para agrupar en un array
// var alumnos= [alumno, alumnodos];
// console.log(alumnos);

//  var total_alumnos = document.querySelector("#totalalumnos");

//  var indice;
//  for(indice in alumnos){
//     var p=document.createElement("p");
//  p.append(alumnos[indice].nombre + "......");
//  p.append(alumnos[indice].correo + "......");
//  p.append(alumnos[indice].telefono + "......");

//  total_alumnos.append(p);
// }


//localstorage, 
//memoria en el navegador

//para comprobar que tenemos capacidad de memoria

if(typeof(Storage) !== "undefined"){
    console.log("disponible");

}else {
    console.log("no disponible");
}
//para grabar datos
localStorage.setItem("listado", "listado de alumnos");

//para recuperar datos
localStorage.getItem("listado");

//guardar objetos JSON
// hay que hacer un string como cadena de caracteres

localStorage.setItem("alumno", JSON.stringify(alumno));

//para recuperar el objeto anterior

var alumnojs = JSON.parse(localStorage.getItem("alumno"));
document.querySelector("#totalalumnos").append(alumnojs. nombre
    + "-----"+alumnojs.correo+"-----"+alumnojs.telefono);


//para borrar un elemento
// localStorage.removeItem("listado");

//para borrar todo
// localStorage.clear();