const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const articulosModel = db.define ("articulos",{
    nombre:{type:DataTypes.STRING},
    detalles:{type:DataTypes.STRING},
    talle:{type:DataTypes.DECIMAL},
    stock:{type:DataTypes.INTEGER},
    precio:{type:DataTypes.DOUBLE}

})
module.exports = articulosModel