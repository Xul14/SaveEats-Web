//Import React
import React from "react";

//Import css e components
import './CardapioItem.css'
import { ButtonPausadoAtivo } from "../ButtonPausadoAtivo/ButtonPausadoAtivo";
import { TresPontos } from "../TresPontos/TresPontos";

export function CardapioItem({ imgProduto, nomeProduto, precoProduto }) {
    return (
        <div className="container-produto-item">

            <div className="container-imagem-produto">
                <img src={imgProduto} alt="" className="imagem-produto" />
            </div>

            <div className="container-nome-produto">
                <span className="nome-produto">{nomeProduto}</span>
            </div>

            <div className="container-preco-produto">
                <span className="preco-produto">R${precoProduto}</span>
            </div>

            <div className="container-status-produto">
                <div className="container-button-ativo-pausado">
                    <ButtonPausadoAtivo background="#E3E9DD" text="Pausado"></ButtonPausadoAtivo>
                    <ButtonPausadoAtivo background="#90AE6E" text="Ativo"></ButtonPausadoAtivo>
                </div>
            </div>

            <div className="container-options">
                <TresPontos></TresPontos>
            </div>

        </div>
    )
}