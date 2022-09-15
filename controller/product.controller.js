const pageProducts= require("../pageProducts")

class Product {
    static getAll(){
        const products = pageProducts.list()
        return products
    }
    static create (timestamp, name ,descripcion,codigo, price, stock, img){
        const product = pageProducts.add(timestamp, name ,descripcion,codigo, price, stock, img)
        return product
    }
    static remove (id){
        const product = pageProducts.remove(id)
        return product
    }
    static update (id, newPrice){
        const product = pageProducts.update(id, newPrice)
        return product
    }    
    
}
module.exports = Product;