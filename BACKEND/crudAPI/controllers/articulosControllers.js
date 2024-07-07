
const articulosModel = require ("../models/articulosModel.js")


/* C R U D */
/* create - read - update - delete */
// MOSTRAR TODOS LOS REGISTROS - READ - GET
const traerArticulos= async (req,res)=>{
    try {
        const articulos = await articulosModel.findAll() //  metodo de sequelize
        res.json (articulos)
    } catch (error) {
        res.json({message:error.message}) 
    }
}

/* MOSTRAR UN REGISTRO  - READ - GET */
const traerUnArticulo= async (req,res)=>{
try {                                             /*  /2 */
    const articulo = await articulosModel.findByPk(req.params.id)
    res.json(articulo)
} catch (error) {
    res.json({message:error.message}) 
}
}

/* CREAR UN REGISTRO - CREATE - POST */

const crearArticulo = async (req,res)=>{
    try {
        await articulosModel.create(req.body)
res.json({"message": "Registro creado correctamente"})
    } catch (error) {
        res.json({message:error.message}) 
    }
}

/* ACTUALIZAR UN REGISTRO - UPDATE - PUT */

const actualizarArticulo = async (req,res) =>{
    try {
        await articulosModel.update(req.body,{
            where :{id:req.params.id}
        })
        res.json({"message": "Registro actualizado correctamente"}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}

const borrarArticulo = async (req,res)=>{
    try {
        await articulosModel.destroy({where :{id:req.params.id}})
        res.json({"message": "Articulo Borrado correctamente"}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}


module.exports= {traerArticulos,traerUnArticulo,crearArticulo,actualizarArticulo,borrarArticulo }