//metodo fetch
//realizar peticiones ajax de una manera mas simple de
// como se hacia antes.

//sacar de una base de datos la informacion
var div_usuarios= document.
querySelector("#usuarios");
var usuarios = [];

fetch("https:reqres.in/api/users?page=2")
.then(data => data.json())
.then(user => {
    usuarios=user.data;
    console.log(usuarios);

    usuarios.map((user, i)=>{
        let nombre=document.
        createElement("h3");
        nombre.innerHTML = i + " "
        + user.first_name+ "" +
        user.last_name;

        div_usuarios.append(nombre);

        document.querySelector(".loading").style.display="none";

  })
});

try{
    var year = 2023;
    alert (year);

}catch(error){
    console.log(error);
    alert("A ocurrido un error en el codigo");
}




