//Una funcion f2 visualice en consola los elementos que no sean divisibles por 2.

const numeros = [1, 2, 3, 4];

const f2 = numeros.filter(function (a) {
  return a % 2 !== 0;
});
console.log(f2);

const f3 = (a) => {
  return a.filter((e) => e % 2 !== 0);
};

console.log(f3(a));
