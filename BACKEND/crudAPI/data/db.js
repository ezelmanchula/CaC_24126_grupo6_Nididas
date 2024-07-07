const {Sequelize} = require ("sequelize")


/* nombre de la base datos - user - contraseña - {donde esta alojada la bd?, lenguaje,puerto} */
const db = new Sequelize ("db_nididas","root","Admin123",{
    host: "localhost",
    dialect:"mysql",
    port:3306,
    define:{
        timestamps :false
    }
})
module.exports = db