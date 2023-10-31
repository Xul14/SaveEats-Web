//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./PerfilPage.css"
import img from './img/padaria.png'
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";

export function PerfilPage() {

    //Pegando dados do restaurante
    const nomeRestaurante = localStorage.getItem("nome_fantasia");
    const idRestaurante = localStorage.getItem("id");
    const [dadosPerfil, setDadosPerfil] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/id/${idRestaurante}`);
                const responseData = response.data.restaurantes
                setDadosPerfil(responseData)
            } catch (error) {
                console.error('Erro ao obter dados da API:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <div className="container-perfil">

                <div className="container-left-perfil">
                    <MenuNavigation></MenuNavigation>
                </div>

                <div className="container-rigth-perfil">

                    <div>
                        <img src={dadosPerfil[0].foto} alt="" className="foto-restaurante" />
                    </div>

                    <div>
                        <h1 className="nome-restaurante">{nomeRestaurante}</h1>
                    </div>

                    <div className="container-editar-dados">

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Nome da estabelecimento</p>
                            <input type="text" className="input-editar"></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Telefone</p>
                            <input type="text" className="input-editar"></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Categoria</p>
                            <input type="text" className="input-editar"></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Nome da loja</p>
                            <input type="text" className="input-editar"></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Nome da loja</p>
                            <input type="text" className="input-editar"></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Nome da loja</p>
                            <input type="text" className="input-editar"></input>
                        </div>

                    </div>

                    <div className="btn-salvar-edicao">
                        <button className="btn-salvar-alteracoes">Salvar alterações</button>
                    </div>

                </div>
            </div>
        </div>
    )
}