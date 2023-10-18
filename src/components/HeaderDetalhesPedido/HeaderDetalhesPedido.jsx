//Import React
import React from "react";

//Import css e components
import "./HeaderDetalhesPedido.css"

export function HeaderDetalhesPedido() {
    return (
        <>

            <div className="container-informacoes-pedido">

                <div className="container-informacoes-cliente">

                    <h2>Caroline Portela</h2>

                    <div className="container-informacoes">

                        <span className="text-pedido">Pedido:</span>

                        <span className="numero-pedido">#12345</span>

                    </div>

                    <div className="container-informacoes">

                        <span className="text-entrega">Entrega em:</span>

                        <span className="endereco-pedido">Rua Elton Silva 95, Jandira - SP</span>

                    </div>

                </div>

                <div className="container-horario-pedido">

                    <div className="container-horario">

                        <i class="fa-solid fa-clock"></i>

                        <span className="horario-inicial">18:00</span>

                        <i class="fa-solid fa-minus"></i>

                        <span className="horario-final">19:00</span>

                    </div>

                    <span className="text-previsao">Previsão de entrega</span>

                </div>

            </div>

        </>
    )
}