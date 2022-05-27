//Importar bibliotecas
const Sequelize = require('sequelize')
//const express

//Importar os módulos
const login_data = require("../Config/dbConect")
const alunos = require("../Models/alunosModels")

class alunosController{
    
    //Post -> Create
    static async inserirDado(req, res){
        console.log('teste')
        let novoDado = req.body
        await login_data.sync()
        await alunos.create(novoDado)
        res.status(201).send('Dado Criado')
    }

    //Get -> Read 
    static async listarDados(req, res){
        await login_data.sync()
        let dado = await alunos.findAll({raw : true})
        res.status(200).json(dado)
    }

    static async listarDado(req, res){
        let index = req.params.matricula
        await login_data.sync()
        let dado = await alunos.findByPk(index)
        res.status(200).json(dado)
    }

    //Put -> Update
    static async atualizarDado(req, res){
        let index = req.params.matricula
        let dadoAtualizado = req.body
        await login_data.sync()
        await alunos.update(dadoAtualizado, {where: {matricula : index}})
        res.status(200).send(dadoAtualizado)
    }

    //Delete -> Delete
    static async deletarDado(req, res){
        let index = req.params.matricula
        await login_data.sync()
        await alunos.destroy({where : {matricula : index}})
        res.status(200).send('Dado deletado')
    }
}

module.exports = alunosController
