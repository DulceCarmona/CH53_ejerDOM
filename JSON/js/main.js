//guarda el correo electrónico en el navegador
//localStorage.setItem("email","jperez@hotmail.com");

let encabezado1 = document.getElementsByTagName("h1").item(0)

if (localStorage.getItem("email")!=null){
let email = localStorage.getItem("email");
encabezado1.innerText = `Bienvenido de nuevo ${email}`;

// Elimina el valor de la llave email
localStorage.removeItem("email");

//Limpia todos los conjuntos de clave/valor
localStorage.clear();

} else{
    //guarda el correo electronico en el navegador
    localStorage.setItem("email","jperez@gmail.com");
} // !=null
