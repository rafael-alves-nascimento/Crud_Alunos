import React,{useState, useEffect} from "react";
import "./Mostrar.css";
import api from "../Api/api";
import { Table} from "react-bootstrap";
import ModalCadastro from "../../Modal/Modalcadastro/ModalCadastro";
import ModalDeletar from "../../Modal/Modaldeletar/Modaldeletar";
import ModalEditar from "../../Modal/Modaleditar/ModalEditar";

const MostrarAlunos = () => {
    const [dados,setDados] = useState([])

    useEffect(() => {
        api.get("").then(({data})=> {
            setDados(data)
        })
    },[]);

    console.log(dados)


  return (
    <div className="Get">
      <div className="Header-mostrar">
        <h5 className="Titulo">Alunos Cadastrados</h5>
      </div>
      <div className="Conteudo">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Matricula</th>
                <th>Nome</th>
                <th>Turma</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((aluno) => (
                <tr>
                  <td> {aluno.matricula} </td>
                  <td>{aluno.Nome}</td>
                  <td>{aluno.Turma}</td>
                  <td>{aluno.Nota}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="botoes" >
          <ModalCadastro/>
          <ModalDeletar/>
          <ModalEditar/>
        </div>

    </div>
  );
};

export default MostrarAlunos;
