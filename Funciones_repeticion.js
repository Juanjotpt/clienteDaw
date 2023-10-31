const array = [1, 2, 3, 4, 5];
//Otra forma de rrecoreer un array.
for (const a of array) {
  console.log(a);
}
console.log(`\n`);
//El for normal.
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log(`\n`);
//El foreach flecha.
array.forEach((a) => {
  console.log(a);
});
console.log(`\n`);
//El método forEach() es una función de alto orden que recorre cada elemento del array y aplica una función a cada elemento.
array.forEach(function (a) {
  console.log(a);
});
//Con map iteramos sobre el array pero devolviendo un nuevo array aplicando lo que queramos en la funcion.
arrayMap = array.map(function (a) {
  return a * 2;
});
console.log(arrayMap);

//Con filter iteramos sobre un array y devuelve un array con elementos que cumplan una funcion.

arrayFilter = array.filter(function (a) {
  return a > 3;
});

console.log(arrayFilter);
