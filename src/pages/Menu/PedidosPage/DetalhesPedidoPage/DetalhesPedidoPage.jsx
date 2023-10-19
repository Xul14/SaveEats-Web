//Import React
import React from "react";

//Import css e components
import "./DetalhesPedidoPage.css"
import { MenuNavigation } from "../../../../components/MenuNavigation/MenuNavigation";
import { HeaderDetalhesPedido } from "../../../../components/HeaderDetalhesPedido/HeaderDetalhesPedido";
import { StatusPedido } from "../../../../components/StatusPedido/StatusPedido";

export function DetalhesPedidoPage() {
    return (
        <div>

            <div className="container-detalhes-pedido">

                <div className="container-left-detalhes-pedido">

                    <MenuNavigation></MenuNavigation>

                </div>

                <div className="container-rigth-detalhes-pedido">

                    <HeaderDetalhesPedido></HeaderDetalhesPedido>

                    <StatusPedido></StatusPedido>

                </div>

            </div>

        </div>
    )
}