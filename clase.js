
// mostrar alerta

// alert("hola");


// mostrar en
// console.log("hola");


// sustituir variable
// var variable=2;
// variable = 3;
// console.log(variable)



// multiplicar
// var variable=2;
// variable = 3*3;
// console.log(variable)

// cambiar el valor de la variable una por otra
// var a = 2;
// console.log(a);

// var b = 5;
// console.log(b)

//  c=a
//  a=b
//  b=c


// console.log(a) 
// console.log(b)




// aplicando una variable constante no puedo variar p
// const p = 3.14;
// var a = 2;
// console.log(a);

// var b = 5;
// console.log(b)
// // multiplico a por p
//  c=a*p
//  a=b
//  b=c

// console.log(a) 
// console.log(b)



// cambio de nombre con string
// var a = "juan";
// console.log( "A se llama " +a);

// var b = "jose";
// console.log("B se llama " + b)
// // multiplico a por p
//  c=a
//  a=b
//  b=c

// console.log(" ahora A se llama " +a) 
// console.log(" ahora B se llama " +b)


                                   // DIA 17/7/23
                                    // ACTIVIDAD 2

// parseint   asegura de que sea solo numeros enteros
// prompt     es como una alerta para que el ususario actue
                              

// var numero1= parseInt(prompt("Introduce el valor del numero1" , "0"));
// console.log("valor del numero1 " +  numero1);

// var numero2= parseInt( prompt("introduce el valor de numero2" , "0"));
// console.log("valor del numero2 "+  numero2);



// resultado=numero1+numero2;
// console.log(resultado)

// resultado=numero1-numero2
// console.log(resultado)

// resultado=numero1*numero2
// console.log(resultado)

// resultado=numero1/numero2
// console.log(resultado)


                              // ACTIVIDAD  3

// var numero1= parseInt(prompt("Introduce el valor del numero1" , "0"));
// console.log("valor del numero1 " +  numero1);

// var numero2= parseInt( prompt("introduce el valor de numero2" , "0"));
// console.log("valor del numero2 " +  numero2);



// if (numero1==numero2) {
//     console.log("los numeros son iguales ")
    
// }
// if (numero1>=numero2){
//     console.log("el numero 1 es superior")

// }

// else {
//    console.log("el numero2 es superior")
    
// }

                             //  ACTIVIDAD 4


// var niños= parseInt(prompt("Introduce numero de niños" , "0"));
// console.log("niños " );

// var niñas= parseInt( prompt("introduce numero de niñas" , "0"));
// console.log("niñas" );  

// var porcentajeniños =niños*100/(niños+niñas);
// var porcentajeniñas =100-porcentajeniños;



//     console.log("hay un " +porcentajeniños+" % de niños" );
//     console.log("hay un " +porcentajeniñas+" % de niñas");

                             // TERMINA LA PRACTICA DIA 17/07/23






                            //  clase 18/07 FUNCIONES

// function calcular() {

//     document.write("sumar:" + (10+12)+ "<br/>");
//     document.write("restar:" + (10-12)+ "<br/>");
//     document.write("multiplicacion:" + (10*12)+ "<br/>");
//     document.write("dividir:" + (10/12)+ "<br/>");
// }
// calcular();



// colocando parametros a la funcion
// function calcular(nro1, nro2) {

//     document.write("sumar:" + (nro1+nro2)+ "<br/>");
//     document.write("restar:" + (nro1-nro2)+ "<br/>");
//     document.write("multiplicacion:" + (nro1*nro2)+ "<br/>");
//     document.write("dividir:" + (nro1/nro2)+ "<br/>");
// }
// calcular(10, 12);
// calcular(5, 6);
// calcular(3, 9);
// calcular(34, 35);


// aplicando un for

// for (var n=1; n<=5; n++){

//     document.write (n + "<br/>")
//     calcular(n, 5);
// }

// parametros opcionales

// function calcular(nro1, nro2, ver = false) {

//     if(ver == false){ document.write("sumar:" + (nro1+nro2)+ "<br/>");
//     document.write("restar:" + (nro1-nro2)+ "<br/>");
//     document.write("multiplicacion:" + (nro1*nro2)+ "<br/>");
//     document.write("dividir:" + (nro1/nro2)+ "<br/>");

//     }else {

//         document.write("No tengo nada que mostrar !!!")
//     }
   
// }

// calcular(20, 5, false)



// ejercicio dia 18/7/23


// actividad 5

// InicioProceso
// Escribir “escribe el importe de la compra”
// Leer importe //Int
// Escribir “Introduce el mes”
// Leer mes // String
// //Si el mes es octubre, se aplicará el descuento
// Si (mes=”octubre”) Entonces
// total<-importe*0.85
// Sino
// total<-importe
// FinSi
// Escribir total
// FinProceso


// var importe= parseInt(prompt("importe de la compra" , "0"));
// console.log("importe " );

// var mes= prompt("introduce el mes" , "0");
// console.log("mes" );  

// if (mes=="octubre") {
//     document.write("el importe es " + (importe*0.85))
// }




// actividad 6

// 1.- Se desea validar una clave que sea 123456 hasta en tres oportunidades.
// Se propone la realización de:
// •	Escribir pseudocódigo.
// •	Realizar un Script basado en el pseudocódigo anterior.



// for (var n=1; n<=3; n++){

 
    
// var clave= parseInt(prompt("introduce la clave" , "0"));


// if (clave==123456){

// document.write("la clave es correcta")
// break;
// }
    
// else {

//     document.write( "la clave no es correcta vuelve a intentarlo")
// }

// }
// document.write(" fin del programa")


// EJERCICIO 7

// 1.- Convertir en funciones los script creados en las Actividades anteriores:
// •	Actividad 2
// •	Actividad 3
// •	Actividad 4
// •	Actividad 5
// •	Actividad 6



                              
// function act2(numero1, numero2){

// resultado=numero1+numero2;
// console.log(resultado)

// resultado=numero1-numero2
// console.log(resultado)

// resultado=numero1*numero2
// console.log(resultado)

// resultado=numero1/numero2
// console.log(resultado)
// }
// act2(2, 4)



// function act3(niños, niñas){

//  niños= parseInt(prompt("Introduce numero de niños" , "0"));
// console.log("niños " );

//   niñas= parseInt( prompt("introduce numero de niñas" , "0"));
// console.log("niñas" );    


// var porcentajeniños =niños*100/(niños+niñas);
// var porcentajeniñas =100-porcentajeniños;



//     console.log("hay un " +porcentajeniños+" % de niños" );
//     console.log("hay un " +porcentajeniñas+" % de niñas");

// }
// act3();

