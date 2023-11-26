let saludo = function () {
  return `Hola Juanjo`;
};
function saludar() {
  return `Hola Juanjo`;
}

let saludo2 = () => "Hola Juanjo"; //No nos hace falta poner el return.
console.log(saludo());
console.log(saludar());
console.log(saludo2());

let saludo3 = function (nombre) {
  return `Hola ${nombre}`;
};

let saludar1 = (nombre) => `Hola ${nombre}`; //Parámetros => codigo.
let saludar3 = (nombre, apellido) => `Hola ${nombre}, ${apellido}`;

console.log(saludar3(`Juanjo`, `Toledo`));

let nombres = [`juan`, `jose`, `paco`];

let indices = nombres.keys();
for (const i of indices) {
  //Conseguimos los indices del array.
  console.log(i);
}

console.log(...indices);

let valores = nombres.values();
console.log(...valores);


