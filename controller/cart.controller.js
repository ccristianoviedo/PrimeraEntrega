const pageCart= require("../pageCart")

class Cart {
    static getAll(){
        const cart = pageCart.listCart()
        return cart
    }
    static create (timestamp, productos){
        const cart = pageCart.addCart(timestamp, productos)
        return cart
    }
    static findOne (id){
        const array = pageCart.findOneCart(id)
        return array
    }
    static add(idp, name, codigo, timestamp, descripcion, stock, price){
        const producto = pageCart.addItems(idp, name, codigo, timestamp, descripcion, stock, price)
        return producto
    }
    static remove (id){
        const cart = pageCart.remove(id)
        return cart
    }
    static updateCart (id, newPrice){
        const cart = pageCart.update(id, newPrice)
        return cart
    }
    /*static addprod(id, producto){
        const cart = pageCart.addProd(id, producto)
        return cart
    }  
    */
}
module.exports = Cart