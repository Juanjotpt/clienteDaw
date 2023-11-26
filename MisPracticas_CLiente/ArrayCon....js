let numeros = [1, 2, 3];
console.log(numeros); //podemos pintar por un array.

let copia = [...numeros];
console.log(copia);

let masNumeros = [5, 6];
numeros.push(...masNumeros); //Aumentamos el array numeros con los valores de otro array.
console.log(numeros);

let nombres = [`paco`, `pepe`, `antonio`];
let masNombres = [`luis`, `jose`]; //Con strings.
nombres.push(...masNombres);
console.log(nombres);

let sumaNombre = ["ruben", ...nombres]; //añadimos un valor al principio.
console.log(sumaNombre);

let apellidos = [`toledo`, `coloma`, `perez`];
function añadir(...etc) {
  let resultado = [];
  for (const i in etc) {
    resultado = apellidos += etc[i];
  }
  return resultado;
}
console.log(añadir(` ,portas `));

let numeros1 = [1, 4, 10, 2];
function añadir1(...etc) {
  let resultado = 0;        //Así podemos sumar todos los elementos del array gracias a ...etc
  for (const i in etc) {
    resultado += etc[i];
  }
  return resultado;
}
console.log(añadir1(...numeros1));
