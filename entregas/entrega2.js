class ProductManager{
    constructor(path){
        this.fs = require('fs')
        this.path= path,
        this.lastId = 0,
        this.products = []
    } 

    async addProduct(title,description,price,thumbnail,code,stock) {
        try{
        const newProduct = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ++this.lastId
        }
            let a = await this.fs.promises.writeFile(this.path , JSON.stringify(newProduct,null,2), 'utf-8')
            console.log('correcto')
            this.products = await this.products.push(newProduct)
            return newProduct
        }catch(err){
            console.log('error en escribir archivos', err)
        }
    }

    async getProducts(){

        try{
        let data = await this.fs.promises.readFile(this.path, 'utf-8')
        
        console.log(data)
            }catch(err){
                console.log('error al traer la data')
            }
    }

    async getProductById(){
        
    }

    async updateProduct(){

    }

    async deleteProduct(){

    }
}


async function testing(name,title,price,thumbnail,code,stock){
    let product = await new ProductManager('./entreganum2.txt');
    await product.addProduct(
        name= name,
        title = title,
        price = price,
        thumbnail = thumbnail,
        code = code,
        stock = stock
        
        );
    await product.getProducts()
}

    testing("producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25)
    testing("producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25)
    testing("producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25)

    

