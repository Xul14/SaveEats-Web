//Import React
import React from "react";

//Import css e components
import "./ProdutosPedido.css"
import produtos from "../ProdutosPedidos/img/coxinha.jpg"

export function ProdutosPedido() {
    return (
        <>
            <div className="container-detalhes-produtos">

                <img src={produtos} alt="Produtos" className="quantidade-produto" />

                <div className="container-nome-unidade-produto">

                    <span className="nome-produto-detalhes-pedido">Coxinha de Frango C/ Catupiry</span>

                    <div className="container-unidade-produto-detalhes-pedido">

                        <span className="unidade-produto-detalhes-pedido">Unidade -</span>

                        <span className="unidade-produto-detalhes-pedido">R$ 3,99</span>

                    </div>

                </div>

                <span className="quantiade-produto">3x</span>

            </div>

        </>
    )
}