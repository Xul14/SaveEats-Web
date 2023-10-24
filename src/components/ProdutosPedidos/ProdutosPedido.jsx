//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./ProdutosPedido.css"
import produtos from "../ProdutosPedidos/img/coxinha.jpg"

export function ProdutosPedido({ idProduto, imgPedido, nomeProduto, precoPedido}) {

       // Função para formatar o preço substituindo '.' por ','
       const formatPrice = (precoPedido) => {
        return `R$ ${precoPedido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`.replace('.', ',');
    };

    return (
        <>
            <div className="container-detalhes-produtos">

                <img src={imgPedido} alt="Produtos" className="quantidade-produto" />

                <div className="container-nome-unidade-produto">

                    <span className="nome-produto-detalhes-pedido">{nomeProduto}</span>

                    <div className="container-unidade-produto-detalhes-pedido">

                        <span className="unidade-produto-detalhes-pedido">Unidade -</span>

                        <span className="unidade-produto-detalhes-pedido">{formatPrice(precoPedido)}</span>

                    </div>

                </div>

                <span className="quantiade-produto">1x</span>

            </div>

        </>
    )
}