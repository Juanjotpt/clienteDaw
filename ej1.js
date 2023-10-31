//Una funcion que devuelva un array con los numeros que sean el resultado de multiplicar cada elemento por 3,
//filtrando los resultantes no divisibles por 4.

const a = [1, 2, 3, 4];

arrayMap = a.map(function (a) {
  return a * 3;
});

// arrayMap = a.map( (a) => a * 3);

arrayFilter = arrayMap.filter((a) => a % 4 !== 0);

console.log(arrayFilter);

const f1 = (a) => {
  return a.map((e) => e * 3).filter((u) => u % 4 !== 0);
};
console.log(f1(a));










/*const f1 = x => {
    return x.map(y => y*3)
    .filter(z => z%4 !== 0);

};*/
//console.log(f1(a));
