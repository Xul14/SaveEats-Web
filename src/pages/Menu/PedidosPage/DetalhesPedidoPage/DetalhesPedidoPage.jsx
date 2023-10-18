//Import React
import React from "react";

//Import css e components
import "./DetalhesPedidoPage.css"
import { MenuNavigation } from "../../../../components/MenuNavigation/MenuNavigation";
import { HeaderDetalhesPedido } from "../../../../components/HeaderDetalhesPedido/HeaderDetalhesPedido";

export function DetalhesPedidoPage() {
    return (
        <div>

            <div className="container-detalhes-pedido">

                <div className="container-left-detalhes-pedido">

                    <MenuNavigation></MenuNavigation>

                </div>

                <div className="container-rigth-detalhes-pedido">

                    <HeaderDetalhesPedido></HeaderDetalhesPedido>

                    <div className="container-status-pedido">

                        <div className="title-status-pedido">

                            <span className="text-status-detalhes-pedido">Status</span>

                            <span className="text-despachado">Despachado</span>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}