

      
const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'  // Array  meses
];


const tablaMeses = document.getElementById('tabla');    //obtenemos referencia al elemento div donde se mostrarán los meses


for (let i = 0; i < meses.length; i++) {                           //rrecorre el array de meses y crea una capa div para cada uno
  const Mes = document.createElement('div');

  Mes.classList.add('mes'); 

  Mes.textContent = meses[i]; 
                   


  Mes.style.top = `${Math.random() * window.innerHeight}px`;

  Mes.style.left = `${Math.random() * window.innerWidth}px`;

  Mes.style.backgroundColor = `rgb(${Math.random() * 200}, ${Math.random() * 160}, ${Math.random() * 255})`; //añadimos colores aleatorios.


  tablaMeses.appendChild(Mes);  
}







