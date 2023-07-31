//BOM-BROWSER OBJET MODEL

//consultar la medida de alto y ancho de la ventana
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// // este muestra que tipo de pantalla tenemos
// console.log(screen.width);
// console.log(screen.height);

// //para consultar la pagina que estamos visitando url

// console.log(window.location);
// //si quiero redireccionarla
// function redirect(url){
//     window.location.href ="https://www.google.es/" ;
// }
// function ventananueva(url){
//     window.open(url)
//     window.open(url, "", "width-400px" , "height 500px", "https://www.google.es/")
// }


//eventos
//para poder poner todos los script en el head
window.addEventListener("load", () =>{
    var boton=document.querySelector("#boton2");
    boton.addEventListener("click",
    function(){
        cambiarcolor();
        this.style.border ="10 px solid black"
    })

    })


//palabra clave this. seguimos aplicando sobre el mismo objeto
 

//focus te indica que estas dentro de ese input
var input=document.querySelector("#nombre");
input.addEventListener("focus",
function(event){
    console.log("estas dentro del input");
})
//nos dice keydown la tecla que ha pulsado en minuscula el keypress en mayuscula
input.addEventListener("keydown",
function(event){
    console.log("has presionado la tecla: " + String.fromCharCode
    (event.keycode));
})
