//Importar as bibliotecas
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors());

//Importar módulos
const alunosRoutes = require("./routes/alunosRoutes")

//Variáveis
const port = 3005

//Rotas
app.use(express.json())
app.use('/alunos', alunosRoutes)


//Servidor
app.listen(port, ()=>{
    console.log('Servidor rodando ...')
})