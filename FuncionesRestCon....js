function suma(a, b) {
  return a + b;
}
console.log(suma(1));
console.log(suma(2, 2));
console.log(suma(2, 4, 4));

function suma2(...etc) {
  let resultado = 0;
  for (let i = 0; i < etc.length; i++) {
    //Podemos pasar como parametro ... para poder insertar varios valores sin importar la cantidad.
    resultado += etc[i];
  }
  return resultado;
}
console.log(suma2(1));
console.log(suma2(2, 2));
console.log(suma2(2, 4, 40, 10));

function datos(nombre, ...apellidos) {    //con el for vamos añadiendo los apellidos.
  let resultado = nombre;
  for (const a in apellidos) {
    resultado += ` ` + apellidos[a];
  }
  return resultado;
}

console.log(datos(`Juanjo`, `toledo`, `ortega`, `merino`));
console.log(datos(`juanjo`));

function sumar(num, num1, ...etc) {
  let reultado = num + num1;
  for (const i in etc) {
    reultado += etc[i];                     //con el for vamos añadiendo numeros a la suma.
  }
  return reultado;
}
console.log(sumar(20, 10, 20, 50, 10));
