
let nombre="kuanjo";

if (nombre == "Juanjo"){    //condicion si se cumple se ejecuta el bloque { }

    console.log("hola");


}
else if(nombre == "Juanjo" ){  //si es distinto de Juanjo ejecuta el bloque {}

    console.log("repite");


}
else{
        console.log(" nombre equivocado");

}

    let num=10;
    let num1=25;
    let contador=0;

    //While

    while(num < num1){

        num++
        console.log(num + " es menor que " + num1)

        if(num == 12){                              //cuando se ejecuta el if (break) se sale del while.

            break;
        }
    }

    //for

    let number=6;

    for(let i=0; i<= number; i++){

        console.log(i);

        if(i == 4){

            break;    // o continue

        }

    }

    //for in

        