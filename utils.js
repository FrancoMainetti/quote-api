const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
};





//FÓRMULA DE OTRO PROYECTO QUE NO ESTOY USANDO
const getElementById = (id, elementList) => {
  return elementList.find((element) => {
    return element.id === Number(id);
  });
};

//FÓRMULA DE OTRO PROYECTO QUE NO ESTOY USANDO
const getIndexById = (id, elementList) => {
  return elementList.findIndex((element) => {
    return element.id === Number(id);
  });
};

//FÓRMULA QUE BUSCA UN ELEMENTO EN UN ARRAY, PERO NO LOGRO QUE EL NOMBRE DE LA PROPIEDAD SEA UN PARÁMETRO
var buscarValor = (array, value)  => {
  
  return array.find( arr => arr.person === value )
} ;




/* const findElement = (array, element, value) => {
  array.find(element => array.element === value)
};



const inventario = [
  {nombre: 'manzanas', cantidad: 2},
  {nombre: 'bananas', cantidad: 0},
  {nombre: 'cerezas', cantidad: 5}
];

const resultado = inventario.find( fruta => fruta.nombre === 'cerezas' );

console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }


const citaAutor = quotes.find( cita => cita.person === author );

console.log(resultado); // { nombre: 'cerezas', cantidad: 5 } */

module.exports = {
  getRandomElement: getRandomElement,
  buscarValor: buscarValor,
};