//Imports React
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

//Import Axios e Yup
import axios from 'axios'
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

//Import Components
import { ContainerLeft } from '../../components/ContainerLeft/ContainerLeft'

//Import imagens
import hamburger from './img/hamburguer.png'
import prato from './img/prato.png'
import logo from './img/logo.png'
import pao from './img/pao.png'
import "./RegisterPage.css"

export function RegisterPage() {

    let navigate = useNavigate()

    const validationPost = yup.object().shape({
        nome_categoria: yup.string().required("Preencha o campo de Categoria").max(45, "A Categoria deve ter até 45 caracteres"),
        nome_estado: yup.string().required("Preencha o campo de Estado").max(45, "O Estado deve ter até 45 caracteres"),
        nome_cidade: yup.string().required("Preencha o campo de Cidade").max(45, "O Cidade deve ter até 45 caracteres"),
        rua: yup.string().required("Preencha o campo Rua").max(100, "O nome da rua deve ter até 100 caracteres"),
        cep: yup.string().required("Preencha o campo de Cep").max(10, "O Cep deve ter até 10 caracteres"),
        bairro: yup.string().required("Preencha o campo Bairro").max(45, "O nome do bairro deve ter até 45 caracteres"),
        numero: yup.string().required("Preencha o campo de Número").max(10, "O número deve ter até 10 caracteres"),
        complemento: yup.string().max(150, "O complemento deve ter até 150 caracteres"),
        nome_proprietario: yup.string().required("Preencha o Nome do proprietário").max(150, "O Nome do proprietário deve ter até 150 caracteres"),
        nome_fantasia: yup.string().required("Preencha o Nome fantasia").max(150, "O nome fantasia deve ter até 150 caracteres"),
        razao_social: yup.string().required("Preencha o campo de razão social").max(45, "A razão social deve ter até 45 caracteres"),
        email: yup.string().required("Preencha o campo de Email").max(255, "O Email deve ter até 255 caracteres").email("Email inválido"),
        senha: yup.string().required("Preencha o campo de Senha").max(150, "A senha precisa ter até 150 caracteres").min(8, "A senha tem que ter mais de 8 caracteres"),
        cnpj: yup.string().required("Preencha o CNPJ").max(20, "O CNPJ deve ter até 20 caracteres"),
        numero_telefone: yup.string().required("Preencha o número do telefone").max(45, "O número de telefone deve ter até 45 caracteres"),
    })


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost = data => axios.post('https://save-eats.cyclic.cloud/v1/saveeats/restaurante/procedore', data)
    .then(Response => {

        const responseData = Response.data;
        const restaurante = responseData.restaurante[0];
        navigate("/menu/home", { state: { restaurante } })
        console.log(responseData);


    })
    .catch(error => {

        if (error.response) {

            if (error.response.status === 401) {
                alert('Esse e-mail já está vinculado a uma conta.');

            }else if(error.response.status === 400) {
                alert('Campos obrigatórios não foram preenchidos');

            } 
            else if(error.response.status === 500) {
                alert('Devido a um erro interno do servidor, não foi possivel processar a requisição.');
            }

        } else {
            console.error(error);
            alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
        }

        console.log("Deu errado");
        console.log(data);
    })

    return (
        <div className='registerContent'>
            <header>
                <img src={hamburger} alt="Hamburguer" className="hamburguer" />
                <img src={prato} alt="Prato feito" className="prato" />
            </header>
            <main className="main-cadastro">

                <div className="container">

                    <ContainerLeft></ContainerLeft>

                    <div className="container-rigth">

                        <img className="logo" src={logo} alt="Logo" />

                        <h1 className='cadastro'>cadastro</h1>
                        <h2>Crie sua conta</h2>

                        <div className="inputs">

                            <div className='inputDiv'>
                                <span className="span-input">Categoria Estabelecimento</span>
                                <input type="text" name="nome_categoria" {...register("nome_categoria")} />
                                <p className="error">{errors.nome_categoria?.message}</p>
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Estado</span>
                                <input type="text" name="nome_estado" {...register("nome_estado")} />
                                <p className="error">{errors.nome_estado?.message}</p>
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Cidade</span>
                                <input type="text" name="nome_cidade" {...register("nome_cidade")} />
                                <p className="error">{errors.nome_cidade?.message}</p>
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Rua</span>
                                <input type="text" name="rua" {...register("rua")} />
                                <p className="error">{errors.rua?.message}</p>
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">CEP</span>
                                <input type="text" name="cep" {...register("cep")} />
                                <p className="error">{errors.cep?.message}</p>
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Bairro</span>
                                <input type="text" name="bairro" {...register("bairro")} />
                                <p className="error">{errors.bairro?.message}</p>
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Numero</span>
                                <input type="number" name="numero" {...register("numero")} />
                                <p className="error">{errors.numero?.message}</p>
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Complemento</span>
                                <input type="text" name="complemento" {...register("complemento")} />
                                <p className="error">{errors.complemento?.message}</p>
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Nome Proprietario</span>
                                <input type="text" name="nome_proprietario" {...register("nome_proprietario")} />
                                <p className="error">{errors.nome_proprietario?.message}</p>
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Nome Fantasia</span>
                                <input type="text" name="nome_fantasia" {...register("nome_fantasia")} />
                                <p className="error">{errors.nome_fantasia?.message}</p>
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Razão Social</span>
                                <input type="text" name="razao_social" {...register("razao_social")} />
                                <p className="error">{errors.razao_social?.message}</p>
                            </div>


                            <div className='inputDiv'>
                                <span className="span-input">Email</span>
                                <input type="email" name="email" {...register("email")} />
                                <p className="error">{errors.email?.message}</p>
                            </div>


                            <div className='inputDiv'>
                                <span className="span-input">Senha</span>
                                <input type="password" name="senha" {...register("senha")} />
                                <p className="error">{errors.senha?.message}</p>
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">CNPJ</span>
                                <input type="text" name="cnpj" {...register("cnpj")} />
                                <p className="error">{errors.cnpj?.message}</p>
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Foto</span>
                                <input type="text" name="foto" {...register("foto")} />
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Telefone</span>
                                <input type="text" name="numero_telefone" {...register("numero_telefone")} />
                                <p className="error">{errors.numero_telefone?.message}</p>
                            </div>

                        </div>
                            <div className="container-button">
                                <button className='btnCadastro'  onClick={handleSubmit(addPost)}>Criar conta</button>
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