//Import React
import React from "react";

//Import css e components
import "./StatusPedido.css"
import teste from "../StatusPedido/img/linha.png"

export function StatusPedido() {
    return (
        <>

            <div className="container-status-pedido">

                <div className="title-status-pedido">

                    <span className="text-status-detalhes-pedido">Status do pedido</span>

                    <span className="text-despachado">Despachado</span>

                </div>

                <div className="container-icon-status">

                    <div className="icon-status-primeiro">
                        <i class="fas fa-check-circle"></i>
                    </div>

                    <img src={teste} alt="" className="linha-status" />

                    <div className="icon-status-segundo">
                        <i class="fas fa-check-circle"></i>
                    </div>

                    <img src={teste} alt="" className="linha-status" />

                    <div className="icon-status-terceiro">
                        <i class="fas fa-check-circle"></i>
                    </div>

                    <img src={teste} alt="" className="linha-status" />

                    <div className="icon-status-quarto">
                        <i class="fas fa-check-circle"></i>
                    </div>

                </div>

                <div className="container-detalhes-status-pedido">

                    <div className="container-passo-a-passo-status-pedido">

                        <span className="text-passo-a-passo-status">Pedido realizado</span>

                        <span className="horario-pedido-realizado">18:25</span>

                    </div>

                    <div className="container-passo-a-passo-status-pedido">

                        <span className="text-passo-a-passo-status">Pedido sendo preparado</span>

                        <span className="horario-sendo-preparado">18:26</span>

                    </div>

                    <div className="container-passo-a-passo-status-pedido">

                        <span className="text-passo-a-passo-status">Saiu para entrega</span>

                        <span className="horario-saiu-para-entrega">18:40</span>

                    </div>

                    <div className="container-passo-a-passo-status-pedido">

                        <span className="text-passo-a-passo-status">Pedido entregue</span>

                        <span className="horario-saiu-para-entrega">19:00</span>

                    </div>

                </div>

            </div>

        </>
    )
}