const funcionPrueba = (a,b, cb)=>{
  return console.log(cb(a,b))
}

funcionPrueba(3,4, function(a, b){
  return a + b
})

funcionPrueba(3,4, function(a, b){
  return a - b
})
funcionPrueba(3,4, function(a, b){
  return a * b
})
funcionPrueba(3,4, function(a, b){
  return a / b
})

funcionPrueba(4,3, function(a, b){
  return a % b
})
