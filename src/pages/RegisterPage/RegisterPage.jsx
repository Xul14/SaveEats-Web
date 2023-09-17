//Imports React
import React from 'react'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'

//Import Components
import { ContainerLeft } from '../../components/ContainerLeft/ContainerLeft'
import { TextField } from '../../components/TextField/TextField'

//Import imagens
import hamburger from './img/hamburguer.png'
import prato from './img/prato.png'
import logo from './img/logo.png'
import pao from './img/pao.png'
import './RegisterPage.css'

export function RegisterPage() {

    // const [email, setEmail] = useState(' ')
    // const [password, setPassword] = useState(' ')
    // const [proprietario, setProprietario] = useState(' ')
    // const [categoriaRestaurante, setCategoriaRestaurante] = useState(' ')
    // const [razaoSocial, setRazaoSocial] = useState(' ')
    // const [nomeFantasia, setNomeFantasia] = useState(' ')
    // const [CNPJ, setCNPJ] = useState(' ')
    // const [telefone, setTelefone] = useState(' ')
    // const [estado, setEstado] = useState(' ')
    // const [cidade, setCidade] = useState(' ')
    // const [bairro, setBairro] = useState(' ')
    // const [rua, setRua] = useState(' ')
    // const [numero, setNumero] = useState(' ')
    // const [complemento, setComplemento] = useState(' ')
    // const [statusInput, setStatusInput] = useState(' ')

    // const onChangeValueEmail = (e) => {
    //     const { value } = e.target
    //     setEmail(value)
    // }

    // const isValidEmail = (value) => {
    //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    // };


    const { register, handleSubmit, formState: { errors } } = useForm({
    })

    const addPost = data => axios.post('https://save-eats.cyclic.cloud/v1/saveeats/restaurante/procedore', data)
        .then(() => {
            console.log(data);
            console.log("Deu tudo certo")
            // history.push("/")
        })
        .catch(() => {
            console.log(data);
            console.log("DEU ERRADO")
        })

    return (
        <div className='registerContent'>
            <header>
                <img src={hamburger} alt="Hamburguer" className="hamburguer" />
                <img src={prato} alt="Prato feito" className="prato" />
            </header>
            <main>
                <div className="container">

                    <ContainerLeft></ContainerLeft>

                    <div className="container-rigth">

                        <img className="logo" src={logo} alt="Logo" />

                        <h1>cadastro</h1>
                        <h2>Crie sua conta</h2>

                        <form className="inputs" onSubmit={handleSubmit(addPost)}>

                            <div className='inputDiv'>
                                <span className="span-input">Categoria Restaurante</span>
                                <input type="text" name="nome_categoria" {...register("nome_categoria")} />
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Estado</span>
                                <input type="text" name="nome_estado" {...register("nome_estado")} />
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Cidade</span>
                                <input type="text" name="nome_cidade" {...register("nome_cidade")} />
                            </div>

                             <div className='inputDiv'>
                                <span className="span-input">Rua</span>
                                <input type="text" name="rua" {...register("rua")} />
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">CEP</span>
                                <input type="text" name="cep" {...register("cep")} />
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Bairro</span>
                                <input type="text" name="bairro" {...register("bairro")} />
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Numero</span>
                                <input type="number" name="numero" {...register("numero")} />
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Complemento</span>
                                <input type="text" name="complemento" {...register("complemento")} />
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Nome Proprietario</span>
                                <input type="text" name="nome_proprietario" {...register("nome_proprietario")} />
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Nome Fantasia</span>
                                <input type="text" name="nome_fantasia" {...register("nome_fantasia")} />
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Razão Social</span>
                                <input type="text" name="razao_social" {...register("razao_social")} />
                            </div>


                            <div className='inputDiv'>
                                <span className="span-input">Email</span>
                                <input type="email" name="email" {...register("email")} />
                            </div>


                            <div className='inputDiv'>
                                <span className="span-input">senha</span>
                                <input type="password" name="senha" {...register("senha")} />
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">CNPJ</span>
                                <input type="text" name="cnpj" {...register("cnpj")} />
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Foto</span>
                                <input type="text" name="foto" {...register("foto")} />
                            </div>

                            <div className='inputDiv'>
                                <span className="span-input">Telefone</span>
                                <input type="text" name="numero_telefone" {...register("numero_telefone")} />
                            </div>  






                            {/* <div className="inputDiv">
                                <TextField spanInput="Nome Proprietário" type="text" name="nomeProprietario" {...register("nomeProprietario")}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Razão Social" type="text" name="razaoSocial" {...register("razaoSocial")}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Nome Fantasia" type="text" name="nomeFantasia" {...register("nomeFantasia")}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="CNPJ" type="text" name="cnpj" {...register("cnpj")}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Telefone" type="text" name="telefone" {...register("telefone")}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Categoria Restaurante" type="text" name="categoriaRestaurante"  {...register("categoriaRestaurante")}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Estado" type="text" name="estado" {...register("estado")}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Cidade" type="text" name="cidade" {...register("cidade")}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Bairro" type="text" name="bairro" {...register("bairro")}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Rua" type="text" name="rua" {...register("rua")}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Email" type="text" name="email" {...register("email")}></TextField>
                            </div>
                            <div className="inputDiv">
                                <TextField spanInput="Numero" type="number" name="numero" {...register("numero")}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Senha" type="password" name="senha" {...register("senha")}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Complemento" type="text" name="complemento" {...register("complemento")}></TextField>
                            </div> */}

                            {/* <div className="inputDiv">
                                <TextField spanInput="Nome Proprietário" type="text" value={proprietario} status={statusInput} onChangeValue={e => setProprietario(e.target.value)} onChange={handleInput}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Razão Social" type="text" value={razaoSocial} status={statusInput} onChangeValue={e => setRazaoSocial(e.target.value)} onChange={handleInput}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Nome Fantasia" type="text" value={nomeFantasia} status={statusInput} onChangeValue={e => setNomeFantasia(e.target.value)} onChange={handleInput}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="CNPJ" type="text" value={CNPJ} status={statusInput} onChangeValue={e => setCNPJ(e.target.value)} onChange={handleInput}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Telefone" type="text" value={telefone} status={statusInput} onChangeValue={e => setTelefone(e.target.value)} onChange={handleInput}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Categoria Restaurante" type="text" value={categoriaRestaurante} status={statusInput} onChangeValue={e => setCategoriaRestaurante(e.target.value)} onChange={handleInput}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Estado" type="text" value={estado} status={statusInput} onChangeValue={e => setEstado(e.target.value)} onChange={handleInput}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Cidade" type="text" value={cidade} status={statusInput} onChangeValue={e => setCidade(e.target.value)} onChange={handleInput}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Bairro" type="text" value={bairro} status={statusInput} onChangeValue={e => setBairro(e.target.value)} onChange={handleInput}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Rua" type="text" value={rua} status={statusInput} onChangeValue={e => setRua(e.target.value)} onChange={handleInput}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Email" type="text" value={email} status={statusInput} onChangeValue={onChangeValueEmail} onChange={handleInput}></TextField>
                            </div>
                            <div className="inputDiv">
                                <TextField spanInput="Numero" type="number" value={numero} status={statusInput} onChangeValue={e => setNumero(e.target.value)} onChange={handleInput}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Senha" type="password" value={password} status={statusInput} onChangeValue={e => setPassword(e.target.value)} onChange={handleInput}></TextField>
                            </div>

                            <div className="inputDiv">
                                <TextField spanInput="Complemento" type="text" value={complemento} status={statusInput} onChangeValue={e => setComplemento(e.target.value)} onChange={handleInput}></TextField>
                            </div> */}

                            <div className="container-button">
                                <button type='submit'>Criar conta</button>
                            </div>
                        </form>

                    </div>
                </div>

            </main>
            <footer>
                <img src={pao} alt="Pão" className="pao" />
            </footer>
        </div>

    )
}