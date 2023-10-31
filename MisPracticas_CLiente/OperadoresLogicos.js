

    let valor = true;
    let valor1= true;
    let valor2=false;

    let resultado= valor || valor1;  //
    console.log(resultado);


    let num=10;
    let num1=5;

    afirmacion= num > num1;
    afirmacion2= num != num1;
    afirmacion3= num < num1;

    console.log(afirmacion && afirmacion2);  // 10 es mayor que 5 y tienen un valor distinto

    console.log(afirmacion && afirmacion3);     // 10 es mayor que 5 pero no menor que 5

    let resultado2= valor && valor2; //&& si las dos condiciones se cumplen es true si una es falsa da false
    console.log(resultado2);

    let resultado3= valor && valor1;
    console.log(resultado2);

    let resultado4= !valor;
    console.log(resultado3);
                                // con or || con una opcion que sea verdadera es true.

            //podemos convertir algo verdadero en falso o viceversa con ! delante
            let numero=5;
            let numero1=10;
            
            let prueba= numero > numero1;
            console.log(prueba);            //false
            console.log(!prueba);           //true porque le cambiamos con !

