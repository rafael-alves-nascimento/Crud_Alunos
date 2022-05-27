import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import api from "../../Componentes/Api/api";
import "./ModalEditar.css";

const ModalEditar = () => {
  const [modal, setModal] = useState(false);

  const [values, setValues] = useState("");

  const dadosInputs = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const EditarAluno = () => {
    api
      .put(values.Matricula_edit, {
        Nome: values.nome,
        matricula: values.matricula,
        Turma: values.turma,
        Nota: values.nota,
      })
      .then(({ data }) => {
        console.log(data);
        alert("Informações alteradas no banco");
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
          <Modal.Title>Editar Dados do aluno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="containerEditar">
            <div className="input-style">
              <label>Nº da matricula:</label>
              <br />
              <input
                className="input-editar"
                type="text"
                placeholder="Informe o N da matricula"
                name="Matricula_edit"
                onChange={dadosInputs}
              />
            </div>

            <div className="input-style">
              <label>Nome</label>
              <br />
              <input
                type="text"
                placeholder="Informe o nome"
                name="nome"
                onChange={dadosInputs}
              />
            </div>

            <div className="input-style">
              <label>Turma</label>
              <br />
              <input
                type="text"
                placeholder="informe a Turma"
                name="turma"
                onChange={dadosInputs}
              />
            </div>
            <div className="input-style">
              <label>Nota</label>
              <br />
              <input
                name="nota"
                type="text"
                placeholder="informe a Nota do aluno"
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
          <Button variant="primary" onClick={() => EditarAluno()}>
            Editar
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="dark" onClick={abrirModal}>
        {" "}
        Editar Aluno{" "}
      </Button>
    </div>
  );
};

export default ModalEditar;
