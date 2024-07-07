
const express = require ("express")
const router= express.Router()

const {traerArticulos,traerUnArticulo,crearArticulo,actualizarArticulo,borrarArticulo } = require ("../controllers/articulosControllers.js")

router.get ("/",traerArticulos) 
router.get ("/:id",traerUnArticulo)
router.post ("/",crearArticulo) 
router.put ("/:id",actualizarArticulo ) 
router.delete ("/:id",borrarArticulo)
                    module.exports= router