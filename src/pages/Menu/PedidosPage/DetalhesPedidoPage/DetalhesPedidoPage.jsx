//Import React
import React from "react";

//Import css e components
import "./DetalhesPedidoPage.css"
import { MenuNavigation } from "../../../../components/MenuNavigation/MenuNavigation";
import { HeaderDetalhesPedido } from "../../../../components/HeaderDetalhesPedido/HeaderDetalhesPedido";
import { StatusPedido } from "../../../../components/StatusPedido/StatusPedido";
import produtos from "../DetalhesPedidoPage/img/coxinha.jpg"

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

                    <div className="container-detalhes-pedido-total-pagamento">

                        <span className="title-despachado">Despachado</span>

                        <div className="container-total-pedido">

                            <span className="text-total-pedido">Total</span>

                            <span className="text-preco-total">R$ 65,70</span>

                        </div>

                        <div className="container-pagamento-entrega">

                            <span className="text-pagamento-entrega">Pagamento na entrega</span>

                            <span className="text-forma-pagamento-entrega">Débito Mastercard</span>

                        </div>

                    </div>

                    <div className="container-detalhes-produtos">

                        <img src={produtos} alt="Produtos" className="quantidade-produto" />

                    </div>


                </div>

            </div>

        </div>
    )
}