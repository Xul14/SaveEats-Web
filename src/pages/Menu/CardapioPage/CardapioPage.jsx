//Import React
import React from "react";

//Import css e components
import "./CardapioPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { ButtonAdicionar } from "../../../components/ButtonAdicionar/ButtonAdicionar";
import { ButtonPausadoAtivo } from "../../../components/ButtonPausadoAtivo/ButtonPausadoAtivo";
import { TresPontos } from "../../../components/TresPontos/TresPontos"

import primeiroProduto from "./img/bolo-branco.jpg"
import segundoProduto from "./img/bolo-frutas-vermelhas.jpg"
import terceiroProduto from "./img/bolo-chocolate.jpg"
import quartoProduto from "./img/bolo-frutas.jpg"

export function CardapioPage() {
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

                        <ButtonAdicionar background='#90AE6E' text="Adicionar categoria"></ButtonAdicionar>

                        <ButtonAdicionar background='#E3E9DD' text="Adicionar produto"></ButtonAdicionar>

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

                                <div className="container-imagem-produto">

                                    <img src={primeiroProduto} alt="" className="imagem-produto" />
                                    <img src={segundoProduto} alt="" className="imagem-produto" />
                                    <img src={terceiroProduto} alt="" className="imagem-produto" />
                                    <img src={quartoProduto} alt="" className="imagem-produto" />

                                </div>

                                <div className="container-nome-produto">

                                    <span className="nome-produto">Bolo de Chocolate Branco</span>
                                    <span className="nome-produto">Bolo de Frutas Vermelhas</span>
                                    <span className="nome-produto">Bolo de Chocolate</span>
                                    <span className="nome-produto">Bolo de Frutas Vermelhas</span>

                                </div>

                                <div className="container-preco-produto">

                                    <span className="preco-produto">R$ 34,99 </span>
                                    <span className="preco-produto">R$ 49,99 </span>
                                    <span className="preco-produto">R$ 7,80 </span>
                                    <span className="preco-produto">R$ 82,75</span>

                                </div>

                                <div className="container-status-produto">

                                    <div className="container-button-ativo-pausado">

                                        <ButtonPausadoAtivo background="#E3E9DD" text="Pausado"></ButtonPausadoAtivo>

                                        <ButtonPausadoAtivo background="#90AE6E" text="Ativo"></ButtonPausadoAtivo>

                                    </div>

                                    <div className="container-button-ativo-pausado">

                                        <ButtonPausadoAtivo background="#E3E9DD" text="Pausado"></ButtonPausadoAtivo>

                                        <ButtonPausadoAtivo background="#90AE6E" text="Ativo"></ButtonPausadoAtivo>

                                    </div>

                                    <div className="container-button-ativo-pausado">

                                        <ButtonPausadoAtivo background="#E3E9DD" text="Pausado"></ButtonPausadoAtivo>

                                        <ButtonPausadoAtivo background="#90AE6E" text="Ativo"></ButtonPausadoAtivo>

                                    </div>

                                    <div className="container-button-ativo-pausado">

                                        <ButtonPausadoAtivo background="#E3E9DD" text="Pausado"></ButtonPausadoAtivo>

                                        <ButtonPausadoAtivo background="#90AE6E" text="Ativo"></ButtonPausadoAtivo>

                                    </div>

                                </div>

                                <div className="container-options">

                                    <TresPontos></TresPontos>

                                    <TresPontos></TresPontos>

                                    <TresPontos></TresPontos>

                                    <TresPontos></TresPontos>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}