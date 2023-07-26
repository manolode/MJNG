// let array2 = [];
function array() {
    let form = [];
    form.push(document.getElementById("codigo").value);

    form.push(document.getElementById("nombre").value);

    form.push(document.getElementById("edad").value);

    form.push(document.getElementById("email").value);

    form.push(document.getElementById("movil").value);

    form.push(document.getElementById("tipos").value);

    // array2.push(form);
    // console.log (array2);

    document.getElementById("resultado").innerHTML= form.join("<br/>");
}