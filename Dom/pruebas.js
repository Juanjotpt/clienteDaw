function aleatorio(min, max) {
    let numeros = [];
   
    for (let i = 0; i <= 10; i++) {
       let  miNumero = Math.floor(Math.random(min,max));
      numeros.push(miNumero);
    }
    return numeros;
  }

  console.log(aleatorio(0,10));