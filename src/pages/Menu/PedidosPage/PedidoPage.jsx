//Import React
import React from "react";

//Import css e components
import "./PedidosPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { CardPedidos } from "../../../components/CardPedidos/CardPedidos";

export function PedidosPage() {
    return (
        <div>
            <div className="container-pedidos-page">

                <div className="container-left-pedidos">
                    <MenuNavigation></MenuNavigation>
                </div>

                <div className="container-rigth-pedidos">

                    <HeaderPages title="Pedidos" text="Veja aqui os pedidos que sua loja recebeu"></HeaderPages>

                    <div className="pesquisas-input-btn">

                        <div className="pesquisas-container">
                            <span className="span-inputs">Número do pedido</span>
                            <input className="input-buscar-pedido" type="search" />
                        </div>

                        <div className="pesquisas-container">
                            <span className="span-inputs">De</span>
                            <input className="input-buscar-pedido" type="date" />
                        </div>

                        <div className="pesquisas-container">
                            <span className="span-inputs">Até</span>
                            <input className="input-buscar-pedido" type="date" />
                        </div>

                        <div className="container-btn-consultar">
                            <button className="btn-consultar">Consultar</button>
                        </div>

                    </div>

                    <span className="text-pedidos-recentes">Pedidos Recentes</span>

                    <div className="container-cards-pedido">
                        <CardPedidos></CardPedidos>
                    </div>

                </div>
            </div>
        </div>
    )
}