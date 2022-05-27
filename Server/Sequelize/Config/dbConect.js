//Importar biblioteca
const Sequelize = require('sequelize')

//Conectar banco
const login_data = new Sequelize('login_data','root','',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})


module.exports = login_data