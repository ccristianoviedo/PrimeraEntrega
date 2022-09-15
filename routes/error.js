const express = require ('express');
const errorRouter = express.Router()

errorRouter.get("/404",(req,res)=>{
    res.send({error:"error pagina no encontrada"})
})

module.export= errorRouter;