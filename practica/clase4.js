
//Normalmente los modulos de node se cargan al principio del archivo. 

//Esto es porque tu clase necesita utilizar este modulo en diferentes lugares

//Cargar el modulo en el constructor no es correcto, y tampoco es recomendable tener constructores asíncronos.

const fs = require('fs');

//Tene en cuenta que por la manera en que esta el codigo, el programa falla si no existe ningun archivo con el nombre entregasnum2.txt

//Podes intentar mejorarlo, si no te sale lo vemos. 

class ProductManager {

  constructor(path) {

    this.path = path,

      this.lastId = 0,

      this.products = []

  }

  async addProduct(title, description, price, thumbnail, code, stock) {

    try {

      //Esto actualiza la variable this.products, leyendo el archivo y cargando los productos.

      await this.getProducts();

      //Aca deberias controlar los parametros.

     //Despues controlar que el code no existe en otro producto.

     //Si esas validaciones son correctas, aumentamos el id y despues lo usamos

      this.lastId = this.lastId + 1;

      const newProduct = {

        title: title,

        description: description,

        price: price,

        thumbnail: thumbnail,

        code: code,

        stock: stock,

        id: this.lastId

      }

      //Aca el problema que tenias era que guardabas el objeto newProduct, y tenes que guardar todo el arreglo de productos

     //despues de haber agregado el nuevo producto.

      this.products.push(newProduct);

      await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2), 'utf-8')

      console.log(`New product added successfully: ${JSON.stringify(newProduct)}`);

      return newProduct;

    } catch (err) {

      console.log('error en escribir archivos', err);

    }

  }

  async getProducts() {

    try {

      const data = await fs.promises.readFile(this.path, 'utf8');

      this.products = JSON.parse(data);

      return this.products;

    } catch (err) {

      console.log(`Error getting products: ${err}`);

      this.products = [];

      return this.products;

    }

  }

  async getProductById() {

  }

  async updateProduct() {

  }

  async deleteProduct() {

  }

}

async function testing(name, title, price, thumbnail, code, stock) {

  let product = new ProductManager('./entreganum2.txt');

  await product.addProduct(

    name = name,

    title = title,

    price = price,

    thumbnail = thumbnail,

    code = code,

    stock = stock

  );

  await product.getProducts()

}

//Fijate que estas funciones testing son todas asíncronas, así que nada te asegura que se ejecuten en orden

/* testing("producto prueba",

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

 */

//Otra opcion que tenes es hacer esto. Te dejo un bloque a modo de ejemplo, vos despues agrega todo lo que quieras

let productManager = new ProductManager('./entreganum2.txt');

productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)

  .then(() => {

    return productManager.getProducts();

  })

  .then(products =>{

    console.log(`Products: ${JSON.stringify(products)}`);

    return productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)

  })

  .then(() =>{

    return productManager.getProducts();

  })

  .then(products =>{

    console.log(`Products: ${JSON.stringify(products)}`);

  })

  .catch(err =>{

    console.log(err);

  })