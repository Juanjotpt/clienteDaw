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
  constructor(color) {
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

  return console.log(` Hora:" ${hora}:${minuto}:${segundo}`);
}

console.log(capturaReloj());

function generarVehiculos() {
  let misVehiculos = [];
}

function mostrarVehiculos(){

    
}
