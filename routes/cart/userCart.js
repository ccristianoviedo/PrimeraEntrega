const express = require ('express');
const Cart = require('../../controller/cart.controller');
const cartRouter = express.Router()
const fs = require('fs')

class Contenedor {
    constructor(filename){
        this.filename = filename + ".txt"
    }
    async save(obj) {
        const DefaultState = "[]";
        console.log(obj)
        try {
            const content = await fs.promises.readFile(this.filename, "utf8")
            if(content == ""){
                fs.promises.writeFile(this.filename, DefaultState)
            }
            const array = JSON.parse(content);
            array.push(obj);
            await fs.promises.writeFile(this.filename, JSON.stringify(array, null,2));
                      
        } catch (error) {
            console.log("Ocurrio un Error")
        }
    }
}
const cartText = new Contenedor('cart')

const item =  Cart.getAll()

cartRouter.get("/", (req, res)=>{
    try {
        cartText.save(item)
        res.send(item)
    } catch (error) {
        res.status(500).json({error: error})
      }   
})

cartRouter.get("/:id/productos", (req, res)=>{
  try {
    const {id} = req.params
    res.send(Cart.findOne(parseInt(id)))
  }catch (error) {
    res.status(500).json({error: error})
  }   
})

cartRouter.delete("/:id",(req, res)=>{
  try {
      const {id}= req.params
      const product = Cart.remove(parseInt(id))
        res.send(product) 
    }catch (error) {
      res.status(500).json({error: error})
  }    
});

cartRouter.post("/", (req, res)=>{
  try {
      const {timestamp, productos} = req.body
      const cart = Cart.create(timestamp, productos)
      res.send(cart)
  }catch (error) {
      res.status(500).json({error: error})
  }
});
cartRouter.post("/:id/productos", (req, res)=>{
  try {
     const {id} = req.params
     const {idp, name, codigo, timestamp, descripcion, stock, price} = req.body
     const producto = Cart.add(idp, name, codigo, timestamp, descripcion, stock, price)
     const filterCart = Cart.findOne(parseInt(id))     
     filterCart.producto1 = producto         
     res.json(filterCart)
  }catch (error) {
      res.status(500).json({error: error})
  }    
});
module.exports = cartRouter;