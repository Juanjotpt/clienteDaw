let tablero = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
];

let Figura = {
  x,
  y,

  moverA: function (x, y) {
    this.x = x;
    this.y = y;
  },

};

let miFigura = Object.create(Figura);

miFigura.tipo = ["K", "Q", "T", "A", "C", "P"];

miFigura.moverA(2, 4);
console.log(miFigura);

const arrayFiguras = [];
