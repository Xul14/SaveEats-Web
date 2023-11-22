//React
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

//Import Axios para integração e Yup para validação dos campos
import axios from 'axios'
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';


//Components
import { ContainerLeft } from '../../components/ContainerLeft/ContainerLeft.jsx'

//Images and style
import hamburger from './img/hamburguer.png'
import prato from './img/prato.png'
import logo from './img/logo.png'
import pao from './img/pao.png'
import "./LoginPage.css"

export function LoginPage() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const validationPost = yup.object().shape({
        email: yup.string().required("Preencha o campo de Email").max(255, "O Email deve ter até 255 caracteres").email("Email inválido"),
        senha: yup.string().required("Preencha o campo de Senha").max(150, "A senha precisa ter até 150 caracteres").min(8, "A senha tem que ter mais de 8 caracteres")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost = data => {
        setLoading(true);
        axios.post('http://localhost:3000/v1/saveeats/restaurante/login/autenticar', data)
            .then(Response => {
                const responseData = Response.data;
                const restaurante = responseData.restaurante[0];

                localStorage.setItem("id", restaurante.id)
                localStorage.setItem("email", restaurante.email)
                localStorage.setItem("senha", restaurante.senha)
                localStorage.setItem("nome_fantasia", restaurante.nome_fantasia)
                localStorage.setItem("id_endereco_restaurante", restaurante.id_endereco_restaurante)

                navigate("/menu/home", { state: { restaurante } })
                console.log(responseData);

                setTimeout(() => {
                    setLoading(false);
                }, 20000);
            })
            .catch(error => {

                if (error.response) {

                    if (error.response.status === 404) {
                        alert('Usuário não encontrado. Verifique o email e a senha.');

                    } else if (error.response.status === 400) {
                        alert('Campos obrigatórios não foram preenchidos');

                    }
                    else if (error.response.status === 500) {
                        alert('Devido a um erro interno do servidor, não foi possivel processar a requisição.');
                    }

                } else {
                    console.error(error);
                    alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
                }

                console.log("Deu errado");
                console.log(data);

                setLoading(false);
            });
    };

    // const addPost = data => axios.post('https://save-eats.cyclic.cloud/v1/saveeats/restaurante/login/autenticar', data)
    // const addPost = data => axios.post('http://localhost:3000/v1/saveeats/restaurante/login/autenticar', data)
    // .then(Response => {

    //     const responseData = Response.data;
    //     const restaurante = responseData.restaurante[0];

    //     localStorage.setItem("id", restaurante.id)
    //     localStorage.setItem("email", restaurante.email)
    //     localStorage.setItem("senha", restaurante.senha)
    //     localStorage.setItem("nome_fantasia", restaurante.nome_fantasia)
    //     localStorage.setItem("id_endereco_restaurante", restaurante.id_endereco_restaurante)

    //     navigate("/menu/home", { state: { restaurante } })
    //     console.log(responseData);
    // })
    // .catch(error => {

    //     if (error.response) {

    //         if (error.response.status === 404) {
    //             alert('Usuário não encontrado. Verifique o email e a senha.');

    //         }else if(error.response.status === 400) {
    //             alert('Campos obrigatórios não foram preenchidos');

    //         } 
    //         else if(error.response.status === 500) {
    //             alert('Devido a um erro interno do servidor, não foi possivel processar a requisição.');
    //         }

    //     } else {
    //         console.error(error);
    //         alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
    //     }

    //     console.log("Deu errado");
    //     console.log(data);
    // })

    return (

        // <div className="loginContent">

        //     <header>
        //         <img src={hamburger} alt="Hamburguer" className="hamburguer" />
        //         <img src={prato} alt="Prato feito" className="prato" />
        //     </header>
        //     <main className='main-login'>
        //         <div className="container-login">

        //             <ContainerLeft></ContainerLeft>

        //             <div className="container-rigth-login">
        //                 <img src={logo} alt="Logo" />
        //                 <h1 className='bem-vindo'>bem-vindo</h1>
        //                 <h2 className='subtitlee'>Entre em sua conta</h2>

        //                 <form className="inputs-login">

        //                     <span className="span-input">E-mail</span>
        //                     <input className='input' type="email" name="email" {...register("email")} />
        //                     <p className="error">{errors.email?.message}</p>

        //                     <span className="span-input">Senha</span>
        //                     <input className='input' type="password" name="senha" {...register("senha")} />
        //                     <p className="error">{errors.senha?.message}</p>

        //                     <span className="esqueceu-senha">Esqueceu sua senha?</span>

        //                 </form>

        //                 <button className='btnLogin' onClick={handleSubmit(addPost)}>Entrar</button>

        //                 <div className="cadastra-se">
        //                     <span className="nao-possui-conta">Não possui uma conta?</span>
        //                     <Link className='cadastrar' to='./cadastro'> Cadastre-se</Link>
        //                 </div>
        //             </div>
        //         </div>

        //     </main>
        //     <footer>
        //         <img src={pao} alt="Pão" className="pao" />
        //     </footer>

        // </div>

        <div className="loginContent">
            {loading ? (
                <div className="loading-screen">
                    <h2 className='loading-screen'>Carregando...</h2>
                </div>
            ) : (
                <>
                    <header>
                        <img src={hamburger} alt="Hamburguer" className="hamburguer" />
                        <img src={prato} alt="Prato feito" className="prato" />
                    </header>
                    <main className='main-login'>
                        <div className="container-login">

                            <ContainerLeft></ContainerLeft>

                            <div className="container-rigth-login">
                                <img src={logo} alt="Logo" />
                                <h1 className='bem-vindo'>bem-vindo</h1>
                                <h2 className='subtitlee'>Entre em sua conta</h2>

                                <form className="inputs-login">

                                    <span className="span-input">E-mail</span>
                                    <input className='input' type="email" name="email" {...register("email")} />
                                    <p className="error">{errors.email?.message}</p>

                                    <span className="span-input">Senha</span>
                                    <input className='input' type="password" name="senha" {...register("senha")} />
                                    <p className="error">{errors.senha?.message}</p>

                                    <span className="esqueceu-senha">Esqueceu sua senha?</span>

                                </form>

                                <button className='btnLogin' onClick={handleSubmit(addPost)}>Entrar</button>

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

                </>
            )}
        </div>

    )
}