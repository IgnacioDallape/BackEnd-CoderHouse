
const fs = require('fs')
const crypto = require('crypto')

class UserManager{
    constructor(path){
        this.path = path
    }

    async crearUsuario(user){
        try{
            const cipher = crypto.createCipher('aes192', 'password 1');
            let encrypted = cipher.update(user.password, 'utf-8', 'hex')
            let credentials = {
                username : user.username,
                password : encrypted
            }
            await fs.promises.writeFile(this.path, JSON.stringify(credentials, null, 2), 'utf-8')
            console.log('usuario creado con exito')
        }catch(err){
            console.log('error al cargar los datos ', err)
        }
        
    }

    async validarUsuario(user){

try{

    let data = await fs.promises.readFile(this.path, 'utf-8')
    let pass = JSON.parse(data)                 //hay que parsarlo si o si para acceder a la password o el user porque viene como string, la pasamos asi a objeto
    console.log(pass.password)
    let descipher = crypto.createDecipher('aes192', 'password 1')
    let encrypted = pass.password
    let descrypted = descipher.update(encrypted, 'hex','utf8')
    descrypted += descipher.final('utf8')
    
}catch(err){
    console.log(err)
}


}
}

async function encriptado(){
    let usuarioNuevo = new UserManager('./usuarios.json')
    usuario1 = {username:'Nacho', password:'Dallape'}
    await usuarioNuevo.crearUsuario(usuario1)
    await usuarioNuevo.validarUsuario(usuario1, 'password 1')
}

encriptado()


    //     if(user.name === data.name){
    //         console.log('usuario correcto')
    //         if(data.password === user.password){
    //             console.log('contraseña correcta, entraste')
    //         } else{
    //             console.log('contraseña incorrecta, no entraste')

    //         }
    //     }else{
    //         console.log('usuario incorrecto')
    //     }