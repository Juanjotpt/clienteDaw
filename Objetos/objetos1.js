let empleado={
    nombre : "Ana",edad : 34, saldo : 1000, ciudad : " " ,
    
}

console.log(empleado.edad);
empleado.edad=25; 
console.log(empleado.edad);
delete empleado.edad;
console.log(empleado.edad);

console.log("apellido" in empleado);
console.log("ciudad" in empleado);

console.log(Object.prototype(Object.empleado));

let empleado1= Object.getPrototypeOf(empleado);

console.log(empleado1);
