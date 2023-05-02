// const http = require('http')

// const server = http.createServer((req,res) => {
//   console.log(req.url)
//   if(req.url == '/'){
//     res.end('hola mundo con http')
//   }
// })


// server.listen(8080, () => {
//   console.log('servidor http corriendo en el puerto 8080')
// })

//EXPRESS

const express = require('express')
const path = require('path')
const app = express()
const persona = {
  name: 'nacho',
  lastname: 'dallape'
}

app.get('/bienvenida', (req, res)=> {res.sendFile(path.join(__dirname,'/index.html')) })

app.get('/usuario', (req, res)=> {res.send(persona) })

app.listen(8080, () => {console.log('servidor corriendo')})