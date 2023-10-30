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
import { ModalCancelPedido } from "../../../../components/ModalCancelPedido/ModalCancelPedido";
import chat from "../DetalhesPedidoPage/img/chat.png"

export function DetalhesPedidoPage() {

    const idPedido = localStorage.getItem("idPedido");

    const [pedido, setPedido] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        async function getDetailsPedido() {
            try {
                const response = await axios.get(`http://localhost:3000/v1/saveeats/detalhes/pedido/id/${idPedido}`)
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
                const response = await axios.get(`http://localhost:3000/v1/saveeats/detalhes/pedido/id/${idPedido}`)
                const responsePedido = response.data.detalhes_do_pedido.produtos;
                setProduto(responsePedido);
                console.log(responsePedido);
            } catch (error) {
                console.log('Erro ao pegar os dados:', error);
            }
        }
        getDetailsProduto()
    }, [idPedido])

    const handleCancelClick = async () => {
        try {
            const response = await axios.put('http://localhost:3000/v1/saveeats/status-pedido', {
                id_pedido: idPedido,
                id_novo_status_pedido: 7,
            });
            console.log(response);
            setOpenModal(false);

        } catch (error) {
            console.error("Erro ao atualizar o status: ", error);
        }
    };

    const handleButtonClick = async () => {
        if (!buttonClicked) {
            setButtonClicked(true);
            // Faça o que você deseja quando o botão é clicado pela primeira vez (Confirmar Pedido)
        } else {
            // Se o botão já foi clicado, faça outra ação (Atualizar Status)
            console.log("já clicado");
        }
    };

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

                        {/* <span className="title-despachado">{pedido.status_pedido}</span> */}
                        <span className="title-despachado">Detalhes do pedido</span>

                        <div className="container-total-pedido">

                            <span className="text-total-pedido">Total</span>

                            <span className="text-preco-total">{`R$ ${pedido.valor_total}`}</span>

                        </div>

                        <div className="container-pagamento-entrega">

                            <span className="text-pagamento-entrega">Forma de pagamento</span>

                            <span className="text-forma-pagamento-entrega">{pedido.nome_forma_pagamento}</span>

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

                            <ButtonDetalhesPedido text={"Cancelar pedido"} background={"#FE9112"} onClick={() => setOpenModal(true)}></ButtonDetalhesPedido>
                            <ModalCancelPedido isOpenModal={openModal} setModalOpen={() => setOpenModal(false)} onConfirm={handleCancelClick} />

                            <ButtonDetalhesPedido
                                text={buttonClicked ? "Atualizar status" : "Confirmar pedido"}
                                background={"#276D15"}
                                onClick={handleButtonClick}
                            />

                            {/* <ButtonDetalhesPedido text={"Atualizar status"} background={"#276D15"}></ButtonDetalhesPedido> */}

                            {/* <ButtonDetalhesPedido text={"Confirmar pedido"} background={"#276D15"}></ButtonDetalhesPedido> */}

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