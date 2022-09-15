const express = require ('express');
const Product = require('../../controller/product.controller');
const productsAdminRouter = express.Router()
//const pageProducts= require("../pageProducts")

productsAdminRouter.post("/", (req, res)=>{
    try {
        const {timestamp, name ,descripcion,codigo, price, stock, img} = req.body
        const product = Product.create(timestamp, name ,descripcion,codigo, price, stock, img)
        res.send(product)
    }catch (error) {
        res.status(500).json({error: error})
    }
});

productsAdminRouter.delete("/:id",(req, res)=>{
    try {
        const {id}= req.params
        const product = Product.remove(parseInt(id))
        res.send(product)
    }catch (error) {
        res.status(500).json({error: error})
    }    
});

productsAdminRouter.put("/:id", (req, res)=>{
    const newProduct = req.body;
    const id = req.params.id;
    const product = Product.update(id, newProduct)    
    res.json(product)
})

module.exports = productsAdminRouter;