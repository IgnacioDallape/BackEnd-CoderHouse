let productosA = {
  tomate: 3,
  lechuga: 2,
  pimiento: 5,
  zanahoria: 2,
  papa: 6,
  brocoli: 5
};

let productosB = {
  cebolla: 1,
  ajo: 2,
  espinaca: 4,
  choclo: 3
};


let results = Object.keys(productosA)
results = [...results,  ...Object.keys(productosB)]
let valorBuscado = results.includes('lechuga')
if(valorBuscado){
  console.log('existe el producto')
}else{
  console.log('no existe el producto')
}
console.log(results)
