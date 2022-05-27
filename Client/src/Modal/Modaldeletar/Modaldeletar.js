import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import api from "../../Componentes/Api/api";
import "./ModalDeletar.css";
const ModalDeletar = () => {
  const [modal, setModal] = useState(false);
  const fecharModal = () => {
    setModal(false);
  };
  const abrirModal = () => {
    setModal(true);
  };
  const [matricula, setMatricula] = useState("");

  const dadosInputs = (value) => {
    setMatricula((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const DeletarAluno = () => {
    api.delete(matricula.deletar_matricula).then(({ data }) => {
      console.log(data);
      alert("Aluno deletado do banco");
    });
  };

  return (
    <div className="modalCad">
      <Modal show={modal} onHide={fecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Deletar Aluno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="containerDeletar">
            <div className="input-style">
              <label>
                Informe o N da matricula do aluno que voce deseja Deletar
              </label>
              <br />
              <input
                className="input-deletar"
                type="text"
                placeholder="Informe o N da matricula"
                name="deletar_matricula"
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
          <Button variant="primary" onClick={() => DeletarAluno()}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="dark" onClick={abrirModal}>
        {" "}
        Deletar Aluno{" "}
      </Button>
    </div>
  );
};

export default ModalDeletar;
