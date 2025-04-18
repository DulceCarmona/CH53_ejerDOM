
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

let txtRFC = document.getElementById("txtRFC");
let txtCURP = document.getElementById("txtCURP");
let txtTelefono = document.getElementById("txtTelefono");



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


///////////////////////////////////////////////////////////////////////////////////////////////////////

//.addEventListener - agregar "escuchador de eventos" como un click
btnMostrar.addEventListener("click", function(event){
    event.preventDefault();  // no hagas lo que haces por defecto.

    //.createElement permite crear cualquier elemento 
    let element = document.createElement("li");
    element.innerText="Another item"; // <li>Another item</li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true);

    // listas.item(0).before(element);
    // listas.item(0).prepend(element2);
//     listas.item(0).append(element);
//     listas.item(0).after(element2);


// listas.item(1).insertAdjacentElement("afterbegin", element);
// listas.item(1).insertAdjacentElement("beforeend", element2);

listas.item(1).insertAdjacentHTML("beforebegin",
    `<li class="list-group-item">Before Begin item</li>`);

listas.item(1).insertAdjacentHTML("afterend",
    `<li class="list-group-item">
        After End item
    </li>`);

listas.item(1).insertAdjacentHTML("afterbegin",
    `<li class="list-group-item">After Begin item</li>`);

listas.item(1).insertAdjacentHTML("beforeend",
    `<li class="list-group-item">Before End item</li>`);


    
});

// // Se ejecuta cuando se termina de cargar todos los elementos de la página
// window.addEventListener("load",function(event){
//     console.log("Se terminó de cargar la página");
// }) //load

// // blur - cuando sale del campo
// // toUpperCase - convierte valores tipo string a mayusculas
// txtRFC.addEventListener("blur", function(event){
//     txtRFC.value = txtRFC.value.toUpperCase();
// }); //txtRFC

// txtCURP.addEventListener("blur", function(event){
//     txtCURP.value = txtCURP.value.toUpperCase();
// }); //txtCURP

// // trim - ignora los espacios en blanco al inicio y al final
// // slice - extrae del numero indicado hasta antes del que se indique "(0,10)" (0123456789)
//            convierte el valor en un arreglo y toma los elementos que le indiques
// txtTelefono.addEventListener("blur",function(event){
//     txtTelefono.value = txtTelefono.value.trim().slice(0,10);
// }) // txtTelefono


//automatización de eventos aplicable en repeticiones
function txtToUpper(event){
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();
} //txtToUpper
    txtRFC.addEventListener("blur", txtToUpper); // txtRFC
    txtCURP.addEventListener("blur", txtToUpper); // txtCURP