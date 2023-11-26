class Rio {
  constructor(nombre, cuenca) {
    this._nombre = nombre;
    this._cuenca = cuenca;
    this._caudal = 0;
    this._poblacion = [];
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(miNombre) {
    this._nombre = miNombre;
  }
  get cuenca() {
    return this._cuenca;
  }
  set cuenca(miCuenca) {
    this._cuenca = miCuenca;
  }
  agregarPoblacion(nuevaPoblacion) {
    this._poblacion.push(nuevaPoblacion);
    this._poblacion.join(",");
    console.log(
      `Poblaciones actuales del río ${this._nombre}: ${this._poblacion.join(
        ", "
      )}`
    );
  }
  eliminarPoblacion(eliminaPoblacion) {
    //Cuando encontramos nuevaPoblacion en poblacion la eliminamos con splice desde ese elemento 1 (porque es solo ese elmento)

    this._poblacion.forEach((valor,i)=> {
        if(valor === eliminaPoblacion){
          this._poblacion.splice(i,1);
        }

    })

    for (let i = 0; i < this._poblacion.length; i++) {
      if (this._poblacion[i] === eliminaPoblacion) {
        this._poblacion.splice(i, 1);

        break;
      }
    }
  }

  modificarCaudal(nuevoCaudal) {
    this._caudal = nuevoCaudal;
  }

  imprimeNombre() {
    console.log("El nombre del rio es " + this._nombre);
  }

  imprimeCuenca() {
    console.log(`La cuenca del ${this._nombre} es ` + this._cuenca);
  }
  imprimeCaudal() {
    if (this._caudal === undefined) {
      console.log("No consta el caudal");
    } else console.log(`El caudal del ${this._nombre} es ` + this._caudal);
  }
  imprimePoblaciones() {
    if (this._poblacion.length === 0) {
      console.log("No consta");
    } else {
      let misPoblaciones = this._poblacion.join(",");
      console.log(
        `Las poblaciones por las que pasa el rio ${this._nombre} son ${misPoblaciones}`
      );
    }
  }

  imprimeRio() {
    //Hacemos un join para conseguir en una cadena todas las poblaciones y sacarlas por consola
    const mispoblaciones = this._poblacion.join(",");
    if (this._caudal === undefined && this._poblacion.length === 0) {
      return console.log(
        `Nombre: ${this._nombre} Cuenca: ${this._cuenca} Caudal: no consta Poblacion: no consta`
      );
    } else {
      console.log(
        `Nombre: ${this._nombre} \n Cuenca: ${this._cuenca} \n Caudal: ${this._caudal} \n Poblaciones : ${mispoblaciones}`
      );
    }
  }
}

const rio1 = new Rio("pisuerga", "jucar");

rio1._caudal = 2300;

rio1.imprimeCaudal();
rio1.imprimeNombre();
rio1.imprimeCuenca();
rio1.agregarPoblacion("sevilla");
rio1.agregarPoblacion("palencia");
rio1.imprimePoblaciones();

rio1.eliminarPoblacion("sevilla");
rio1.imprimePoblaciones();
