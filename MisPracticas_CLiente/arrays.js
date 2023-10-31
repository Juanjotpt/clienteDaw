
// array

    let array= ["banana", "manzana", "pera", 5, 7 ]; // array normal nos permite incluir distintos tipos de datos
    
    console.log(array[0] + " " +  array[8]);

// Arrays asociativos 

    let coche= {                    //lo que hacemos  es crear un objeto

        modelo : "megane",
        marca : "opel",
        kilometros: 13000



    };

    console.log(coche.modelo);
    console.log("mi coche es de la marca " + coche.marca  );    //con ` ${} concatenamos la frase.

    let modelo= coche["modelo"];
    let marca= coche["marca"];
    let kilometros= coche["kilometros"];

    console.log(`mi coche es del modelo ${modelo} y tiene ${kilometros} kilometros `);