import React from "react";
import "./Cadastro.css";
import {Formik, Form,Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';


// {}
const Cadastro = () => {

    const Navigate = useNavigate();

    function redLogar () {
        localStorage.clear();
        Navigate("/Logar");
    }

    const handleClickRegistro = (values) => {
        Axios.post("http://localhost:3010/register",{
            email: values.email,
            password: values.password,
            user_name: values.user_name,
        }).then((response) => {
            console.log(response);
            alert(response.data.msg)
        });
      };
    
      const validarCadastro = yup.object().shape({
          email: yup.string().email("não é um email").required("este camp é obrigatório"),
          password: yup.string().min(8, "A senha deve ter 8 caracteres").required("este camp é obrigatório"),
          confirmPassword: yup.string().oneOf([yup.ref("password"), null, "As senhas não são iguais" ])
      });

  return (
    <div className="cadastro-container">
        <h1>Cadastro</h1>
        <Formik initialValues={{}}  onSubmit={handleClickRegistro} validationSchema={validarCadastro}> 
            <Form className="cadastro-form">
                <div className="cadastro-form-grop" >

                    <label>Nome de usuário: </label><br/>
                    <Field name='user_name' className='cadastro-form-field' placeholder='insira um user name' />
                    <ErrorMessage 
                        component='span'
                        name='use_name'
                        className="cadastro-form-error"
                    />
                </div>

                <div className="cadastro-form-grop" >
                    <label>Email: </label><br/>
                    <Field name='email' className='cadastro-form-field' placeholder='Insira um email' /><br/>
                    <ErrorMessage 
                        component='span'
                        name='email'
                        className="cadastro-form-error"
                    />
                </div>

                <div className="cadastro-form-grop" >
                    <label>Senha: </label><br/>
                    <Field name='password' className='cadastro-form-field' placeholder='insira uma senha' type="password" /><br/>
                    <ErrorMessage 
                        component='span'
                        name='password'
                        className="cadastro-form-error"
                    />
                </div>

                <div className="cadastro-form-grop" >
                    <label>Confirmar senha:</label><br/>
                    <Field name='confirmPassword' className='cadastro-form-field' placeholder='insira sua senha' /><br/>
                    <ErrorMessage 
                        component='span'
                        name='confirmPassword'
                        className="cadastro-form-error"
                    />

                </div>

                <br/>

                <button className="login-button" type="submit">Logar</button> <br/>
                <br/>
                <a href="#"> <h1 onClick={redLogar} className="label-link"> Caso Ja tenha Conta</h1> </a>
            
            </Form>
        </Formik>
    </div>
  );
}

export default Cadastro;