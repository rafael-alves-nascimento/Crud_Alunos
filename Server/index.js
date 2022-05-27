const express = require("express");
const app = express();
const porta = 3010
const mysql = require("mysql");
const cors = require('cors')

app.use(express.json());
app.use(cors());

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "login_data",
    password: '',
});

// query
function select(){
    return "Select * from usuarios"
}

app.get('/', function(req, res){
    conection.query(select(), function(err, result){
        if (err) throw err
        res.status(200).json(result)
    })
})


// USUÁRIOS CRUD
app.get('/register', function(req, res){
    conection.query(select(), function(err, result){
        if (err) throw err
        const email = req.body.email;
        res.status(200).json(email)
    })
})


app.post("/register" , (req,res) => {
    const user_name = req.body.user_name;
    const email = req.body.email;
    const password = req.body.password;
    conection.query('Select * from usuarios where email = ?',[email], (err,result) => {
        if (err){
            res.send(err)
        }
        if(result.length == 0) {
            conection.query('insert into usuarios (user_name,email,senha,data_user) values (?,?,?, NOW())',[user_name,email,password], (err,response) => {
                if (err){
                    res.send(err)
                }
                res.send({msg: "Cadastrado com sucesso"})
            })
        }
        else {
            res.send({msg: "Usuário já cadastrado" })
        }        
    });
});

app.post("/login" ,(req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    conection.query("SELECT * FROM usuarios WHERE email = ? AND senha = ?",[email,password], (err,result) =>{
        if(err){
            res.send(err);
        }
        if(result.length > 0){
            res.send({msg : "Usuário logado"})
        }
        else{
            res.send({msg : "Usuário não cadastrado"})
        }
    })
});

// ALUNOS CRUD 
// Cadastro de alunos
app.post("/registrar_aluno" , (req,res) => {
    const { nome } = req.body;
    const { matricula } = req.body;
    const { turma } = req.body;
    const { nota } = req.body;

    conection.query('Select * from alunos where matricula = ?',[matricula], (err,result) => {
        if (err){
            res.send(err)
        }
        if(result.length == 0) {
            conection.query('insert into alunos (matricula,nomeAluno,turmaAluno,notaAluno,data_aluno) values (?,?,?,?, NOW())',[matricula,nome,turma,nota], (err,response) => {
                if (err){
                    res.send(err)
                }
                res.send({msg: "Aluno Cadastrado com sucesso"})
            })
        }
        else {
            res.send({msg: "Aluno já cadastrado" })
        }        
    });
});

// Deletar alunos
app.post("/Deletar_aluno" , (req,res) => {
    const { matricula } = req.body
    conection.query("delete from alunos where matricula = ?",[matricula], function (err, result) {
        if (err) throw err
        res.status(200).send("Deletado")
    })
});

app.listen(porta, () => {
    console.log('Servidor em operação')
});
