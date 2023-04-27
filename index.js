// const funcionPrueba = (a,b, cb)=>{
//   return console.log(cb(a,b))
// }

// funcionPrueba(3,4, function(a, b){
//   return a + b
// })

// funcionPrueba(3,4, function(a, b){
//   return a - b
// })
// funcionPrueba(3,4, function(a, b){
//   return a * b
// })
// funcionPrueba(3,4, function(a, b){
//   return a / b
// })

// funcionPrueba(4,3, function(a, b){
//   return a % b
// })


const fs = require('fs');
const { DefaultDeserializer } = require("v8");

let date = new Date()

fs.writeFile('./actividad.txt', JSON.stringify(date),'utf-8', (err)=>{
  if(err){
    console.log('no se pudo escribir el archivo')
  }else{
    console.log('se escribio el archivo')
  }
})

fs.unlink('./actividad.txt', (err)=>{
  if(err){
    console.log('no se pudo eliminar el archivo')
  }else{
    console.log('se elimino el archivo')
  }
})

fs.promises.readFile('./actvidad.txt', 'utf-8')
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log('no se pudo leer la promesa')
  })

  const saveFile = async () => {
    let a = await fs.promises.writeFile('./actividad.txt', 'data nueva','utf-8')
      try{
        console.log('archivo creado exitosamente')
      }catch(err){
        console.log('error al escribir la promesa')
      }
  }

  saveFile()

// //clase 5

// const diasLaborales = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
// console.table(diasLaborales.map((item) => item.toUpperCase()))