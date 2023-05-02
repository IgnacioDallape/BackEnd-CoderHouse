
const fs = require('fs')


class ProductManager {
    constructor(path) {
        this.path = path,
            this.lastId = 0,
            this.products = []
    }
    async creatingFile() {
        await fs.promises.writeFile('./entreganum2.txt', 'Productos \n', 'utf-8')
    }

    async addProduct(title, description, price, thumbnail, code, stock) {
        if (title != undefined && description != undefined && price != undefined && thumbnail != undefined && code != undefined && stock != undefined) {
            try {
                await this.getProducts()

                this.lastId = this.lastId + 1
                const newProduct = {
                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock,
                    id: this.lastId,

                }
                const existingProduct = await this.products.find(product => product.code === code)

                if (existingProduct) {
                    console.log('Producto repetido, no se guardo el producto')
                } else {
                    this.products.push(newProduct)
                    let write = await fs.promises.appendFile('./entreganum2.txt', JSON.stringify(this.products, null, 2), 'utf-8')
                    console.log('producto guardado')
                    return this.products
                }
            } catch (err) {
                console.log('error en escribir archivos', err)
            }
        } else {
            console.log('No se guardo el producto, complete todos los campos')
        }
    }

    async getProducts() {

        try {
            let data = await fs.promises.readFile(this.path, 'utf-8')
            return data
        } catch (err) {
            console.log('error al traer la data', err)
        }
    }

    async getProductById(id) {
        console.log(this.products.map(product => product))
        let product = await this.products.find(product => product.id === id)
        if (product) {
            return product
        } else {
            product = undefined
            return product
        }
    }

    async updateProduct(id, change, newItem) {
        if (id != undefined && change != undefined && newItem != undefined) {
            if (this.products.find((product) => product.id == id)) {
                let index = this.products.findIndex(product => product.id === id);
                console.log(index)
                let a = change;
                if (a == 'title') {
                    this.products[index].title = newItem;
                } else if (a == 'description') {
                    this.products[index].description = newItem;
                } else if (a == 'price') {
                    this.products[index].price = newItem;
                } else if (a == 'thumbnail') {
                    this.products[index].thumbnail = newItem;
                } else if (a == 'code') {
                    this.products[index].code = newItem;
                } else if (a == 'stock') {
                    this.products[index].stock = newItem;
                } else {
                    console.log('error al cambiar parametro');
                }

                await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2), 'utf-8');

                console.log(`El producto con id ${id} se actualizó correctamente`);
                return this.products[index];
            } else {
                console.log('no se encuentra un producto con ese id')
            }
        } else {
            console.log('complete todos los campos para actualizar')
        }
    }
    async deleteProduct(id) {
        try {
            let deletingproduct = await this.getProductById(id)
            if (!deletingproduct) {
                console.log('producto no encontrado')
            } else {
                this.products = await this.products.filter(product => product.id != id)
                await fs.promises.writeFile('./entreganum2.txt', JSON.stringify(this.products, null, 2), 'utf-8')
            }
            console.log('producto eliminado')
        } catch (err) {
            console.log(err)
        }
    }
}

let product = new ProductManager('./entreganum2.txt');

async function testing(name, title, price, thumbnail, code, stock) {
    await product.creatingFile()
    await product.addProduct(
        name = name,
        title = title,
        price = price,
        thumbnail = thumbnail,
        code = code,
        stock = stock,
    );
}

async function deleting(id) {
    await product.deleteProduct(id)

}

async function testing1() {
    await testing("producto prueba",
        "Este es un producto prueba",
        2004,
        "Sin imagen",
        "abc123",
        25),
        await testing("producto prueba",
            "Este es un producto prueba",
            2004,
            "Sin imagen",
            "abc1234",
            25),
        await testing("producto prueba",
            "Este es un producto prueba",
            2004,
            "Sin imagen",
            "abc12345",
            25)

}
async function run() {
    await testing1();
    await product.updateProduct(1, 'description', 'cambio en el producto')
    await product.updateProduct(3, 'description')
    await product.updateProduct(5, 'description', 'cambio en el producto')
    await deleting(2)
}

run();
