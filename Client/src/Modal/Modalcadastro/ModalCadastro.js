import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import api from "../../Componentes/Api/api";
import "./ModalCadastro.css";

const ModalCadastro = () => {
  const [values, setValues] = useState("");
  const [modal, setModal] = useState(false);

  const dadosInputs = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const CadastrarAluno = () => {
    api
      .post("", {
        Nome: values.nome,
        matricula: values.matricula,
        Turma: values.turma,
        Nota: values.nota,
      })
      .then((response) => {
        console.log(response);
        alert("Aluno cadastrado no banco");
      });
  };

  const fecharModal = () => {
    setModal(false);
  };
  const abrirModal = () => {
    setModal(true);
  };

  return (
    <div className="modalCad">
      <Modal show={modal} onHide={fecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Alunos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="containerCadastrar">
            <div className="input-style">
              <label>Nome</label>
              <br />
              <input
                className="input-cadastrar"
                name="nome"
                type="text"
                placeholder="Informe o nome"
                onChange={dadosInputs}
              />
            </div>
            <div className="input-style">
              <label>Matricula</label>
              <br />
              <input
                className="input-cadastrar"
                name="matricula"
                type="text"
                placeholder="Informe o N da matricula"
                onChange={dadosInputs}
              />
            </div>

            <div className="input-style">
              <label>Turma</label>
              <br />
              <input
                className="input-cadastrar"
                name="turma"
                type="text"
                placeholder="informe a Turma"
                onChange={dadosInputs}
              />
            </div>

            <div className="input-style">
              <label>Nota</label>
              <br />
              <input
                className="input-cadastrar"
                name="nota"
                type="text"
                placeholder="infome a nota do aluno"
                onChange={dadosInputs}
              />
            </div>
            <br />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={fecharModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => CadastrarAluno()}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="dark" onClick={abrirModal}>
        {" "}
        Cadastrar Aluno{" "}
      </Button>
    </div>
  );
};

export default ModalCadastro;
