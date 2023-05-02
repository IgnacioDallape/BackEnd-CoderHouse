class ProductManager {
    constructor() {
        this.products = [];
        this.lastId = 0
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (title && description && price && thumbnail && code && stock) {
            if (this.products.find(product => product.code === code)) {
                console.log('El producto ya se encuentra agregado');
                return;
            } else {
                const newProduct = {
                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock,
                    id: this.generateId()
                };
                this.products.push(newProduct);
                console.log("Producto agregado");
            }
        } else {
            console.log("Es obligatorio completar todos los campos");
        }
    }

    getProducts() {
        console.log('tus productos son: ', this.products)
        return this.products;
    }

    getProductById(id) {
        let search = this.products.find((product) => product.id == id);
        if (search != undefined) {
            return search
        } else {
            console.log("Not Found");
        }
    }

    generateId() {
        this.lastId += 1;
        return this.lastId
    }

    updateProduct(id, newData) {
        let updateProducts = this.products.findIndex((item) => item.id === id);

        if (updateProducts !== -1) {              //por el metodo find index, si devuelve -1 quiere decir que no encontro ningun indice   
            this.products[updateProducts] = { ...this.products[updateProducts], ...newData };
            console.log("Producto actualizado: ", this.products[updateProducts]);
        } else {
            console.log("Producto no encontrado");
        }
    }

    deleteProduct(id) {
        let deleting = this.products.find((item) => item.id === id) ? true : false
        if (deleting) {
            console.log(this.products)
            console.log('eliminando producto...')
            this.products.splice(this.products.findIndex((item) => item.id === id), 1);
            setTimeout(() => {
                if (this.products.length > 0) {
                    console.log('producto eliminado, productos restantes:', this.products);
                } else {
                    console.log('producto eliminado, no tiene mas productos disponibles')
                }
            }, 1500);

        } else {
            console.log('producto no encontrado')
        }
    }
}

let product = new ProductManager();
product.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
);
product.addProduct(
    "producto prueba2",
    "Este es un producto prueba",
    500,
    "Sin imagen",
    "abd123",
    21
);
product.addProduct(
    "producto prueba3",
    "Este es un producto prueba",
    700,
    "Sin imagen",
    "abc123",
    23
);

product.getProductById(1);

product.getProducts();

product.deleteProduct(1)

product.updateProduct(2, { price: 250 })

