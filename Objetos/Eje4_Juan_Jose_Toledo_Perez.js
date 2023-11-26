const persona = {
  nombre: "Pepe",
  apellidos: ["García", "Pérez"],
  edad: 23,
};

const arr = ["lunes", "martes", "miércoles", "jueves", "viernes"];

//Ahora es eje1:"pepe" , eje2: "23";
const { nombre: eje1, edad: eje2 } = persona;
console.log(eje1);
console.log(eje2);
//con las comas saltamos el indice 1 y pasasmos a cambiar miercoles.
//lu y mi pasan a mostrar lunes y miercoles.
const [lu, , mi] = arr;

console.log(lu);

console.log(mi);
//Asignamos "garcia" a apellido 1 y "pérez" a apellido2.
const {
  apellidos: [apellido1, apellido2],
} = persona;

console.log(apellido1);
console.log(apellido2);
//Objetos persona vacios.
const persona1 = {};
const persona2 = {};
const persona3 = { nombre: "Paula" };
//Funcion que por defecto muestra como nombre "luis" con edad 20 en los objetos sin propiedad.
function verPersona(persona) {
  const { nombre = "Luis", edad = 20 } = persona;
  console.log(`nombre ${nombre} , edad: 25`);
}

console.log(verPersona(persona));
console.log(verPersona(persona1));
console.log(verPersona(persona2));
console.log(verPersona(persona3));
