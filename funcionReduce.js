const numeros = [10, 20, 30, 40, 50];
//reduce lo utilizamos para procesar todos los elementos de un array y combinarlos en un valor único.
let suma = numeros.reduce(function (acu, ele) {
  return acu + ele;
});
console.log(suma);

//Devolvemos la suma de todos los elementos en el acumulador.
let suma1 = numeros.reduce(function (acu, ele, ind) {
  return acu + ele;
});
console.log(suma1);
//devolvemos el indice.
let suma2 = numeros.reduce(function (acu, ele, ind) {
  return ind;
});
console.log(suma2);
//Devolvemos el elemento con el valor maximo.
let maximo = numeros.reduce(function (acu, ele) {
  return Math.max(acu, ele);
});
console.log(maximo);
//Aqui vemos como va acumulando y sumando cada elemento
let resultado = numeros.reduce(function (acu, ele, ind, array) {
  console.log(
    `Indice ${ind}: sumando acumulador ${acu} + elemento ${ele} en nuestro array  ${array} `
  );
  return acu + ele;
});
console.log(resultado);
