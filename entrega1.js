    class ProductManager {
        constructor() {
        this.products = [];
        }
    
        addProduct(title, description, price, thumbnail, code, stock) {
        if (title && description && price && thumbnail && code && stock) {
            const newProduct = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: this.generateId(),
            };
            this.products.push(newProduct);
            console.log("Producto agregado:");
        } else {
            console.log("Es obligatorio completar todos los campos");
        }
        }
    
        getProducts() {
            return this.products;
        }
    
        getProductById(prod) {
            console.log(prod)
            let search = this.products.find((product) => product.id === prod);
            console.log(search)
            if (search != undefined) {
                return search
            } else {
                console.log("Not Found");
            }
        }
    
        generateId() {
            let newId = 1;
            if (this.products.length > 0) {
                newId = this.products[this.products.length - 1].id + 1;  //esto sirve para tomar el id del ultimo elemento, sin lo del corchete, me daria NaN
            }
            return newId;
            }

        
        }
    
    let a = new ProductManager();
    a.addProduct(
        "producto prueba",
        "Este es un producto prueba",
        200,
        "Sin imagen",
        "abc123",
        25
    );
    a.getProductById();
    
    a.getProducts();

    console.log(a.getProducts())
    