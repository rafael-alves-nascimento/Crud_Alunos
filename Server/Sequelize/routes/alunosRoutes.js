//Importar bibliotecas
const express = require('express')
const router = express.Router()

//Importar módulos
const alunosController = require("../Controlers/alunosControlers")


//Definir as rotas
router
    .get('/', alunosController.listarDados)
    .get('/:matricula', alunosController.listarDado)
    .post('/', alunosController.inserirDado)
    .put('/:matricula', alunosController.atualizarDado)
    .delete('/:matricula', alunosController.deletarDado)

module.exports = router;