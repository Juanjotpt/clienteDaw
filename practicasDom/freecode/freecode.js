function multiplica(a) {
    let resul;
  for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
      }
  resul = a * i;
  console.log(resul);
  
  }
  return resul;
}

console.log(multiplica(2));