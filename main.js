// // console.log (document.getElementById("encabezado1"));


// let encabezado1 = document.getElementById("encabezado1");
// let encabezado2 = document.getElementById("encabezado2");
// let listas = document.getElementsByName("ul");

// let elementos = document.getElementsByClassName("list-group-item");

// console.log(listas.leght)

// let contador=0
// function modifica(){

//     // encabezado1.innerText = "<em>Ejercicio</em> DOM";
//     encabezado1.innerHTML += "<em>Ejercicio</em> DOM";
//     encabezado2.innerText = ++contador;
// } // modifica



// // console.log(encabezado1.innerText);

////////////////////////////////////////////////////////////////////////////////////////////////





//document palabra reservada que hace referencia al DOM de la pagina
//.getElementById para acceder al elemento por el identificador declarado en el HTML
console.log(document.getElementById("encabezado1"));
//Si el nombre del id esta mal escrito regresa un resultado de tipo null
//Buena practica: copiar y pegar los nombres de todo

//Guardando el resultado en una variable
let encabezado1 = document.getElementById("encabezado1");

//getElementById Regresa un elemento
let encabezado2= document.getElementById("encabezado2");

let listas = document.getElementsByTagName("ul"); //2
//getElementsByTagName regresa una colección viva con el orden en el que se agregan

let elementos = document.getElementsByClassName("list-group-item");
//getElementsByClassName también regresa una colección viva

let otroElemento = document.querySelector("ul>li");  //primero
//querySelector regresa el primer elemento encontrado coincidente con el selector escrito

let otrosElementos = document.querySelectorAll("ul>li"); //todos
//Regresa una coleccion estatica (no viva) de las coindidencias del selector escrito

let btnMostrar = document.getElementById("btnMostrar");



//console.log(listas[0]); //accediendo al elemento como si fuera un arreglo
console.log(listas.item(1)); // segunda forma de acceder al elemento

console.log(listas.length);//2

console.log(elementos.length);//10

console.log("otroElemento:",otroElemento); //Primera coincidencia

console.log(otrosElementos.length); //10



function modifica(){

    encabezado1.innerHTML = "<em>Ejercicio</em> DOM"
    //.innerHTML permite manipular la sintaxis del HTML

    encabezado2.innerText+="DOM Excercise";
    //innerText Propiedad de la etiqueta de lectura y escritura al contenido de la etiqueta

}





btnMostrar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("boton btnModificar presionado");
});
//.addEventListener - agregar "escuchador de eventos" como un click