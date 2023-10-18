//Import React
import React from "react";

//Import css
import './CardPedidos.css'
import relogio from './img/clock.png'
import check_cinza from './img/check-cinza.png'
import check_verde from './img/check-verde.png'

export function CardPedidos() {
    return (
        <>
            <div className="card-pedido">

                <div className="container-cliente-tempo-entrega">
                    <span className="nomeCliente">Caroline Portela dos Santos</span>

                    <div className="previsao-entrega-img">
                        <img src={relogio} alt="Relógio" className="img-relogio" />
                        <span className="previsao-entrega">18:00 - 19:00</span>
                    </div>
                </div>

                <div className="container-cliente-tempo-entrega">
                    <span className="num_pedido">Pedido #12390</span>
                    <span className="previsao-entrega-text">Previsão de entrega</span>
                </div>

                <span className="endereco_cliente">Entrega em: Rua Elton Silva 95, Jandira - SP</span>

                <span className="text-status-pedido">Status Pedido</span>

                <span className="status-atual-pedido">Despachado</span>

                <div className="container-time-line">
                    <div className="icons-line">
                        <img src={check_verde} alt="" className="img-check" />
                        <p className="linha">______________________________</p>

                        <img src={check_verde} alt="" className="img-check" />
                        <p className="linha">______________________________</p>

                        <img src={check_cinza} alt="" className="img-check" />
                        <p className="linha">______________________________</p>

                        <img src={check_cinza} alt="" className="img-check" />
                    </div>

                    <div className="status-hora">
                        <div className="status-hora-div">
                            <p>Pedido Confirmado</p>
                            <p className="hr">17:45</p>
                        </div>

                        <div className="status-hora-div">
                            <p>Pedido em preparo</p>
                            <p className="hr">17:45</p>
                        </div>

                        <div className="status-hora-div">
                            <p>Saiu para entrega</p>
                            <p className="hr">17:45</p>
                        </div>

                        <div className="status-hora-div">
                            <p>Pedido Entregue</p>
                            <p className="hr">17:45</p>
                        </div>

                    </div>
                </div>

                <div className="btns-card-pedido">
                    <button className="btn-detalhes">Detalhes Pedido</button>
                    <button className="btn-att-status">Atualizar status</button>
                </div>
            </div>

        </>
    )
}