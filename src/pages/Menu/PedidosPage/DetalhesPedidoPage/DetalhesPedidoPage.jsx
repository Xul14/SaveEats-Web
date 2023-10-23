//Import React
import React from "react";

//Import css e components
import "./DetalhesPedidoPage.css"
import { MenuNavigation } from "../../../../components/MenuNavigation/MenuNavigation";
import { HeaderDetalhesPedido } from "../../../../components/HeaderDetalhesPedido/HeaderDetalhesPedido";
import { StatusPedido } from "../../../../components/StatusPedido/StatusPedido";
import { ProdutosPedido } from "../../../../components/ProdutosPedidos/ProdutosPedido";
import { ButtonDetalhesPedido } from "../../../../components/ButtonDetalhesPedido/ButtonDetalhesPedido";
import chat from "../DetalhesPedidoPage/img/chat.png"

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

                    <ProdutosPedido></ProdutosPedido>

                    <div className="container-botoes-chat">

                        <div className="container-botoes-detalhes-pedido">

                            <ButtonDetalhesPedido text={"Cancelar pedido"} background={"#FE9112"}></ButtonDetalhesPedido>

                            <ButtonDetalhesPedido text={"Atualizar status"} background={"#276D15"}></ButtonDetalhesPedido>

                            <ButtonDetalhesPedido text={"Confirmar pedido"} background={"#276D15"}></ButtonDetalhesPedido>

                        </div>


                        <div className="container-chat">

                            <img src={chat} alt="Imagem Chat" className="chat" />

                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}