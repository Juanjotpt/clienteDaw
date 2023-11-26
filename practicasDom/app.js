//Creamos un elemento li, le añadimos texto y se lo agregamos al elemento ul.
const tomate = document.createElement("li");
tomate.innerText = "Cuarto ingrediente tomate";
const ul = document.getElementById("ul");
ul.appendChild(tomate);
tomate.id = "tomate";
const misTomates = document.getElementById("tomate");
console.log(misTomates.innerText);

//Asi vemos los elementos padre
console.log(ul.parentElement);
console.log(ul.parentElement.parentElement);

console.log(ul.children);
//Nos da texto porque sería el salto de linea
console.log(ul.firstChild);
//Así conseguimos el primero elemento hijo.
console.log(ul.firstElementChild);
//El hermano mayor
console.log(tomate.previousElementSibling);
