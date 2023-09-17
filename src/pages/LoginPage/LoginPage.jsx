//React
import React from 'react'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


//Components
import { TextFieldPassword } from '../../components/TextFieldPassword/TextFieldPassword.jsx'
import { ContainerLeft } from '../../components/ContainerLeft/ContainerLeft.jsx'
import { ErrorMessages } from '../../components/ErrorMessages/ErrorMessages.jsx'
import { TextField } from '../../components/TextField/TextField.jsx'

//Images and style
import hamburger from './img/hamburguer.png'
import prato from './img/prato.png'
import logo from './img/logo.png'
import pao from './img/pao.png'
import './LoginPage.css'

export function LoginPage() {

    // const [email, setEmail] = useState(' ')
    // const [password, setPassword] = useState(' ')
    // const [statusInput, setStatusInput] = useState(' ')


    // const onChangeValueEmail = (e) => {
    //     const { value } = e.target
    //     setEmail(value)
    // }

    // const onChangeValuePassword = (e) => {
    //     const { value } = e.target
    //     setPassword(value)
    // }

    // const isValidEmail = (value) => {
    //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    // };

    // const validationErrors = {};

    // const loginRestaurant = () => {

    //     if (!email.trim()) {
    //         validationErrors.email = "Preencha o campo de email"
    //         return console.log(validationErrors);

    //     } else if (!isValidEmail(email)) {
    //         validationErrors.email = "Email Inválido"
    //         return console.log(validationErrors);

    //     }else if (!password.trim()) {
    //         validationErrors.password = "Preencha o campo de senha"
    //         return console.log(validationErrors);

    //     }else{

    //         if (Object.keys(validationErrors).length === 0) {
    //             console.log("Dados válidos", { email, password });
    //         } else {
    //             setStatusInput(validationErrors)
    //         }
    //     }

    // }

    const navigate = useNavigate()

    const validationPost = yup.object().shape({
        email: yup.string().required("Preencha o campo de Email").max(255, "O Email deve ter até 255 caracteres"),
        senha: yup.string().required("Preencha o campo de Senha").max(150, "A senha precisa ter até 150 caracteres").min(8, "A senha tem que ter mais de 8 caracteres")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost = data => axios.post('https://save-eats.cyclic.cloud/v1/saveeats/restaurante/login/autenticar', data)
        .then(() => {
            navigate("/home")
            console.log(data);
            console.log("DEU CERTO")
        })
        .catch(() => {

            console.log(data);
            console.log("Deu errado")
        })





    return (
        <div className="loginContent">
            <header>
                <img src={hamburger} alt="Hamburguer" className="hamburguer" />
                <img src={prato} alt="Prato feito" className="prato" />
            </header>
            <main>
                <div className="container">

                    <ContainerLeft></ContainerLeft>

                    <div className="container-rigth center">
                        <img src={logo} alt="Logo" />
                        <h1>bem vindo</h1>
                        <h2>Entre em sua conta</h2>

                        <form className="inputs" onSubmit={handleSubmit(addPost)}>

                            <span className="span-input">Email</span>
                            <input type="email" name="email" {...register("email")} />
                            <p className="error">{errors.email?.message}</p>

                            <span className="span-input">Senha</span>
                            <input type="password" name="senha" {...register("senha")} />
                            <p className="error">{errors.senha?.message}</p>
                            {/* <TextField spanInput="Email" type="text" value={email} status={statusInput} onChangeValue={onChangeValueEmail}></TextField> */}
                            {/* <ErrorMessages textMessage={validationErrors.email}></ErrorMessages> */}

                            {/* <TextField spanInput="Senha" type="password" value={password} status={statusInput} onChangeValue={onChangeValuePassword}></TextField> */}
                            {/* <ErrorMessages textMessage={validationErrors}></ErrorMessages> */}

                            <span className="esqueceu-senha">Esqueceu sua senha?</span>

                            <button>Entrar</button>
                        </form>


                        <div className="cadastra-se">
                            <span className="nao-possui-conta">Não possui uma conta?</span>
                            <Link className='cadastrar' to='./cadastro'> Cadastre-se</Link>
                        </div>
                    </div>
                </div>

            </main>
            <footer>
                <img src={pao} alt="Pão" className="pao" />
            </footer>

        </div>

    )
}