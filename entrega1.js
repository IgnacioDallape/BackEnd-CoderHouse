class ProductManager {
    constructor(){
        this.products = []
    }

    addProduct() {
        const newProduct = {
            title: "producto prueba",
            description: "Este es un producto prueba",
            price: 200,
            thumbnail: "Sin imagen",
            code: "abc123",
            stock: 25,
            id: ""
            };
            newProduct.id = this.generateId()
            this.products.push(newProduct);
        }
        


    getProducts(){
            console.log(this.products)
    }

    searchingId(id){
        console.log(id)
        let search = this.products.map((items) => items.id != id)
        if(search != undefined){
            console.log('correcto')
        } else {
            console.log('incorrecto')
        }
    
    }

    generateId(){
            let newId = "";
            for (let i = 0; i < 3; i++) {
                newId += Math.floor(Math.random() * 10);
            }
            return newId;
        }          
    

}

let a  = new ProductManager()
a.searchingId('abc123')
a.addProduct();
a.getProducts()
