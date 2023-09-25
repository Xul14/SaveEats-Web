//Import React
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

//Import css e components
import "./CardapioPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { ButtonAdicionar } from "../../../components/ButtonAdicionar/ButtonAdicionar";
import { ButtonPausadoAtivo } from "../../../components/ButtonPausadoAtivo/ButtonPausadoAtivo";
import { TresPontos } from "../../../components/TresPontos/TresPontos"
import { CardapioItem } from "../../../components/CardapioItem/CardapioItem";
import { ModalCardapio } from "../../../components/ModalCardapio/ModalCardapio";

//Images
import primeiroProduto from "./img/bolo-branco.jpg"
import segundoProduto from "./img/bolo-frutas-vermelhas.jpg"
import terceiroProduto from "./img/bolo-chocolate.jpg"
import quartoProduto from "./img/bolo-frutas.jpg"


//Import Axios para integração
import axios from 'axios'

export function CardapioPage() {

    //Modal para adicionar um produto
    const [openModal, setOpenModal] = useState(false)

    //Pegando dados do restaurante
    const nomeRestaurante = localStorage.getItem("nome_fantasia");

    const selectCategoria = axios.get('http://localhost:8080/v1/saveeats/categoria/produto')
    .then(Response => {
        const responseData = Response.data;
        const responseCategoria = responseData.categoria_produto;
        console.log(responseCategoria);
    })
    .catch(error => {
        console.log(error.response);
        console.log('deu ruim');
    })
 


    return (
        <div>

            <div className="container-cardapio">

                <div className="container-left-cardapio">

                    <MenuNavigation></MenuNavigation>

                </div>

                <div className="container-rigth-cardapio">

                    <HeaderPages title="Cardápio" text="Este é o seu cardápio. Aqui você define quais produtos os clientes poderão pedir"></HeaderPages>

                    <div className="container-busca-categoria">

                        <input className="input-busca" type="search" placeholder="Buscar produto" />

                        <select name="Categoria" className="input-categoria">
                            <option>Categoria</option>
                            <option>Bolos</option>
                            <option>teste</option>
                        </select>

                    </div>

                    <div className="container-adicionar">

                        <ButtonAdicionar background='#90AE6E' text="Adicionar categoria"></ButtonAdicionar>

                        <ButtonAdicionar background='#E3E9DD' text="Adicionar produto" onClick={() => setOpenModal(true)}></ButtonAdicionar>
                        <ModalCardapio isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}></ModalCardapio>

                    </div>

                    <div className="container-produtos">

                        <div className="container-lista-produtos">

                            <div className="header-lista-produtos">

                                <h2>Bolos</h2>

                                <div className="container-button-adicionar">

                                    <ButtonAdicionar background="#E3E9DD" text="Adicionar produto" ></ButtonAdicionar>

                                </div>

                                <div className="container-button-pausado-ativo">

                                    <ButtonPausadoAtivo background="#E3E9DD" text="Pausado"></ButtonPausadoAtivo>

                                    <ButtonPausadoAtivo background="#90AE6E" text="Ativo"></ButtonPausadoAtivo>

                                </div>

                                <TresPontos></TresPontos>

                            </div>

                            <div className="container-produtos-preco-status">

                                <h3>Produtos</h3>

                                <span className="text-preco">Preço</span>

                                <span className="text-status">Status</span>

                            </div>

                            <div className="container-produtos-preco-status-options">

                                <CardapioItem imgProduto={primeiroProduto} nomeProduto="Bolo de Chocolate Branco" precoProduto="29,90"></CardapioItem>
                                <CardapioItem imgProduto={segundoProduto} nomeProduto="Bolo de Frutas Vermelhas" precoProduto="29,90"></CardapioItem>
                                <CardapioItem imgProduto={terceiroProduto} nomeProduto="Bolo de Chocolate" precoProduto="29,90"></CardapioItem>
                                <CardapioItem imgProduto={quartoProduto} nomeProduto="Bolo de Frutas Vermalhas" precoProduto="29,90"></CardapioItem>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}