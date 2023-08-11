//DOM  DOCUMENT OBJECT MODEL
// 1.-
var contenedor= document.getElementById("contenedor");

contenedor.innerHTML ="contendido en el contenedor";
contenedor.style.background ="blue";
contenedor.style.padding ="20px";
contenedor.style.color ="white";
//atributos al contenedor
contenedor.className ="contenedor";

//2.-
//crear funcion en el boton cambiar color
function cambiarcolor(){
    contenedor.style.background ="green";
}

// var contenedor = document.querySelector("#contenedor");


//para buscar varios elementos por sus etiquetas
var elementos = document.getElementsByTagName("div");
console.log(elementos);

//array facilitado por el inspector al transformar en array
var contenido_tres = elementos[2];
contenido_tres.innerHTML="contenido añadido";
contenido_tres.style.background ="yellow";
contenido_tres.style.color= "black";

//otra forma de hacer un bucle en el array

var valor;
for(valor in elementos);{

   
    if(typeof elementos[valor].textcontent =="string"){
     console.log(elementos[valor]);
     var parrafo = document.createElement("p");
     var texto =document.createtextNode (elementos[valor].
     textcontent);
     parrafo.append(texto);
     document.querySelector("#seccion_una").append(parrafo);
  }
}

//seleccion de elementos por su clase

var divcaja = document.getElementsByClassName
("caja");

var div;
for (div in divcaja){
    if (divcaja[div].className =="caja"){
        divcaja[div].style.color ="blue";
    }
}

//los dos metodos del queryselector uno o todos
var solouno = document.querySelector("#solo_uno");
console.log(solouno);

var varios = document.querySelectorAll("div");
console.log(varios);
