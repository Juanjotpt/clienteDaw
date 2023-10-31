class Vehiculo {
  constructor(pasajeros) {
    this.pasajeros = pasajeros;
  }
  set pasajeros(pasajeros) {
    this._pasajeros = pasajeros;
  }
  get pasajeros() {
    return this._pasajeros;
  }
}

class Camion extends Vehiculo {
  constructor(pasajeros, tara) {
    super(pasajeros);
    this.tara = tara;
  }
  set tara(tara) {
    this._tara = tara;
  }
  get tara() {
    return this._tara;
  }
}

class Turismo extends Vehiculo {
  constructor(pasajeros, color) {
    super(pasajeros);
    this.color = color;
  }
  set color(color) {
    this._color = color;
  }
  get color() {
    return this._color;
  }
}
console.log(Turismo);

function capturaReloj() {
  let fecha = new Date();
  let hora = fecha.getHours();
  let minuto = fecha.getMinutes();
  let segundo = fecha.getSeconds();

  console.log(` Hora:" ${hora}:${minuto}:${segundo}`);
}

const misVehiculos = [];
const colores = ["rojo", "azul", "verde"];

function generarVehiculos() {
  //Sacar random(siempre sale 0, 0,9 ) multiplicamos por el maximo
  //y le sumamos 1 para llegar al 4
  let numero = Math.floor(Math.random() * 4) + 1;

  for (let i = 0; i < numero; i++) {
    let pasajeros = Math.floor(Math.random() * 7) + 1;
    let colorRandom = Math.floor(Math.random() * (colores.length - 1));
    let color = colores[colorRandom];

    let turismo = new Turismo(pasajeros, color);
    misVehiculos.push(turismo);

  }
     numero = Math.floor(Math.random() * 4) + 1;
  for (let i = 0; i < numero; i++) {
    let pasajeros = Math.floor(Math.random() * 7) + 1;
    let taraRandom = Math.floor(Math.random() * 10000);
    let camion= new Camion(pasajeros, taraRandom);
    misVehiculos.push(camion);
  }
  console.log(misVehiculos);
}

generarVehiculos();
