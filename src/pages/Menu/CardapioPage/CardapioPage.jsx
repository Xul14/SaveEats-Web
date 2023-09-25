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
import { ModalDelete } from "../../../components/ModalDelete/ModalDelete";

//Images
import primeiroProduto from "./img/bolo-branco.jpg"
import segundoProduto from "./img/bolo-frutas-vermelhas.jpg"
import terceiroProduto from "./img/bolo-chocolate.jpg"
import quartoProduto from "./img/bolo-frutas.jpg"

export function CardapioPage() {

    const [openModal, setOpenModal] = useState(false)
    const [openModalDelete, setOpenModalDelete] = useState(false)

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
                            <option>teste</option>
                            <option>teste</option>
                        </select>

                    </div>

                    <div className="container-adicionar">

                        <ButtonAdicionar background='#90AE6E' text="Adicionar categoria" onClick={() => setOpenModalDelete(true)}></ButtonAdicionar>
                        <ModalDelete isOpenModal={openModalDelete} setModalOpenDelete={() => setOpenModalDelete(!openModalDelete)}></ModalDelete>

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