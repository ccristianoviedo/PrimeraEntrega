const express = require ('express');
const router = express.Router();
const productsRouter = require("./products/products");
const productsAdminRouter = require('./products/admin');
const cartRouter = require('./cart/userCart')
const errorRouter = require('./error')

const logged = true;

if (!logged || logged) router.use("/productos", productsRouter);

if (logged) router.use("/admin/productos", productsAdminRouter);

if (!logged || logged) router.use("/cart", cartRouter)

module.exports = router;
