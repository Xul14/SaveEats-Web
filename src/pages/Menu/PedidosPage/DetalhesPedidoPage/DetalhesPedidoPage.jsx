//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./DetalhesPedidoPage.css"
import { MenuNavigation } from "../../../../components/MenuNavigation/MenuNavigation";
import { HeaderDetalhesPedido } from "../../../../components/HeaderDetalhesPedido/HeaderDetalhesPedido";
import { StatusPedido } from "../../../../components/StatusPedido/StatusPedido";
import { ProdutosPedido } from "../../../../components/ProdutosPedidos/ProdutosPedido";
import { ButtonDetalhesPedido } from "../../../../components/ButtonDetalhesPedido/ButtonDetalhesPedido";
import chat from "../DetalhesPedidoPage/img/chat.png"

export function DetalhesPedidoPage() {

    const idPedido = localStorage.getItem("idPedido");

    const [pedido, setPedido] = useState([]);
    // const statusPedido = pedido.status_pedido.replace(";", " ")

    useEffect(() => {
        async function getDetailsPedido() {
            try {
                const response = await axios.get(`http://localhost:8080/v1/saveeats/detalhes/pedido/id/${idPedido}`)
                const responsePedido = response.data.detalhes_do_pedido;
                setPedido(responsePedido);
                console.log(responsePedido);
            } catch (error) {
                console.log('Erro ao pegar os dados:', error);
            }
        }
        getDetailsPedido()
    }, [idPedido])

    const [produto, setProduto] = useState([]);

    useEffect(() => {
        async function getDetailsProduto() {
            try {
                const response = await axios.get(`http://localhost:8080/v1/saveeats/detalhes/pedido/id/${idPedido}`)
                const responsePedido = response.data.detalhes_do_pedido.produtos;
                setProduto(responsePedido);
                console.log(responsePedido);
            } catch (error) {
                console.log('Erro ao pegar os dados:', error);
            }
        }
        getDetailsProduto()
    }, [idPedido])

    // const formatPrice = (precoTotal) => {
    //     return `R$ ${precoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`.replace('.', ',');
    // };

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

                        <span className="title-despachado">{pedido.status_pedido}</span>

                        <div className="container-total-pedido">

                            <span className="text-total-pedido">Total</span>

                            <span className="text-preco-total">{`R$ ${pedido.valor_total}`}</span>

                        </div>

                        <div className="container-pagamento-entrega">

                            <span className="text-pagamento-entrega">Pagamento na entrega</span>

                            <span className="text-forma-pagamento-entrega">Débito Mastercard</span>

                        </div>

                    </div>

                    <div className="container-produto-pedido">
                        {produto.map((produto, index) => (
                            <ProdutosPedido
                                key={index}
                                idProduto={produto.id_produto}
                                imgPedido={produto.imagem_produto}
                                nomeProduto={produto.nome_produto}
                                precoPedido={produto.preco_produto}
                            />
                        ))}
                    </div>


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