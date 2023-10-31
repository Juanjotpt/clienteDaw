/*Escribir las siguientes funciones que admitan el string "en un lugar de la mancha" 
como parámetro (sin utilizar expresiones regulares): 
-Una funcion "f4" que devuelve un string similar pero sin espacios en "CamelCase".
-Una funcion "f6" que devuelve un array con la longitud de cada una de las palabras.
-una funciones f6 que devuelve un array con la longitud de cada una de las palabras 
que contenga la letra "a"*/

let frase = "en un lugar de la mancha";

//const f4= a => a.split(" ").map(a => a.replace(a[0],a[0].toUpperCase())).toString().replaceAll(",","");
//console.log(f4(frase));

const f4 = frase.split(" "); //lo convertimos en un array separando la cadena.

/*con .map(a => a.replace(a[0],a[0].toUppercase ) iteramos sobre cada elemento
 y reemplazamos la primera letra a mayuscula.
to string lo convertimos a una cadena y con replace  eliminamos las ""*/

const f5 = a => a.split(' ').map(a => a.length).reduce((acc,valor,i,arr) => acc + valor)/a.split(' ').length;
console.log(f5(cadena));

// console.log(f5(cadena));

