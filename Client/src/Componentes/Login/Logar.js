import React from "react";
import "./Login.css";
import {Formik, Form,Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

// {}
const Logar = () => {

        const Navigate = useNavigate();

        function redCadastro () {
            localStorage.clear();
            Navigate("/Cadastro");
        }

        function redLogar () {
            localStorage.clear();
            Navigate("/Logar");
        }


    const handleClicklogin = (values) => {
        Axios.post("http://localhost:3010/login",{
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response)
            if (response.data.msg === "Usuário logado"){
                localStorage.clear();
                Navigate('/mostrar');
            }
        });
      };

  const validarLogin = yup.object().shape({
      email: yup.string().email("não é um email").required("este camp é obrigatório"),
      password: yup.string().min(8, "A senha deve ter 8 caracteres").required("este camp é obrigatório"),
  });

    
  return (
    <div className="login-container">
        <h1>login</h1>
        <br/>
      
            
        <Formik initialValues={{}} onSubmit={handleClicklogin} validationSchema={validarLogin} >
            <Form className="login-form">

                <div className="login-form-grop" >
                    <label className="label">Email: </label><br/>
                    <Field name='email' className='login-form-field' placeholder='Insira seu email' />
                    <ErrorMessage 
                        component='span'
                        name='email'
                        className="login-form-error"
                    />
                </div>

                <div className="login-form-grop" >
                    <label className="label">Senha: </label><br/>
                    <Field name='password' className='login-form-field' placeholder='insira sua senha' />
                    <ErrorMessage 
                        component='span'
                        name='password'
                        className="login-form-error"
                    />
                </div>
                <br/>

                <button className="login-button" type="submit" onClick={redLogar}>Logar</button> <br/>
                <br/>
            
                <a href="#"> <h1 onClick={redCadastro} className="label-link">Caso não tenha Cadastro Clique Aqui</h1> </a> 

            </Form>
        </Formik>
    </div>
  );
};

export default Logar;