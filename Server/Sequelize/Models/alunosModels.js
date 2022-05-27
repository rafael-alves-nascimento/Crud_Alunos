//Importar biblioteca
const Sequelize = require('sequelize')

//Importar módulos
const login_data = require("../Config/dbConect")

//Criar a tabela (Modelo/Model -> M(MODEL)VC)
const alunos = login_data.define('alunos',{
    matricula: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: Sequelize.STRING,
    Turma: Sequelize.STRING,
    Nota: Sequelize.INTEGER,
})

module.exports = alunos