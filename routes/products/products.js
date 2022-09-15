const express = require ('express');
const Product = require('../../controller/product.controller');
const productsRouter = express.Router()
const pageProducts= require("../../pageProducts")

productsRouter.get("/:id", (req, res)=>{
  try {
    const {id} = req.params
    res.send(pageProducts.findOne(parseInt(id)))
  }catch (error) {
    res.status(500).json({error: error})
  }   
})

module.exports = productsRouter;