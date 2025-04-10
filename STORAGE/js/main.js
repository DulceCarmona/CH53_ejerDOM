const producto = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}};

console.log(producto.title)
console.log(producto.price)
console.log(producto.id)
console.log(producto.description)


//Objeto - Cadena
let strProd = JSON.stringify(producto);
console.log("strProd", strProd)

//Cadena - Objeto
let prod = JSON.parse(strProd);
console.log("prod", prod);