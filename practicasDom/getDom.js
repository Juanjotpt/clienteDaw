/*const contenedor = document.getElementById("miParrafo");

console.log(contenedor);

const url = document.getElementById("url");
console.log(url.innerHTML);

let lista = document.getElementById("lista");
console.log(lista.tagName);

let lista1 = document.getElementsByClassName("lista1");
console.log(lista1);

for (let i = 0; i < lista1.length; i++) {
  console.log(lista1[i].textContent);
}
console.log(lista1[0].id);

let elementosLi = document.getElementsByTagName("li");

const mislistas = document.querySelectorAll("#aceitunas");
console.log(mislistas[0]);
console.log(mislistas[1]);
let aceituna = document.querySelector(".lisa1");
console.log(aceituna);*/

const listas = document.getElementById("ul");
console.log(listas);

const titulo= document.getElementById("titulo");
titulo.innerText="cambiando el texto";

const url=document.getElementsByTagName('a');
console.log(url[0].getAttribute('href'));
