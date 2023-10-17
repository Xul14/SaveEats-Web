//Import React
import React from "react";

//Import css
import './CardPedidos.css'

export function CardPedidos() {
    return (
        <>
            <div className="card-pedido">

                <span className="nomeCliente">Julia Soares de Almeida</span>
                <span className="num_pedido">Pedido #12390</span>
                <span className="endereco_cliente">Entrega em: Rua Elton Silva 95, Jandira - SP</span>

                {/* <div className="container-status-pedido"> */}
                <span className="text-status-pedido">Status Pedido</span>
                <span className="status-atual-pedido">Despachado</span>
                {/* </div> */}

                <p>Time Line aqui</p>

                <div className="btns-card-pedido">
                <button className="btn-detalhes">Detalhes Pedido</button>
                <button className="btn-att-status">Atualizar status</button>
                </div>
            </div>

        </>
    )
}