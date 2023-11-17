//Import React
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

//Import Axios para integração
import axios from 'axios'

//Import css, imgs, components e outros
import './CardPedidos.css'
import relogio from './img/clock.png'
import check_cinza from './img/check-cinza.png'
import check_verde from './img/check-verde.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import linha from "../StatusPedido/img/linha.png";
import { ButtonDetalhesPedido } from "../ButtonDetalhesPedido/ButtonDetalhesPedido";

export function CardPedidos({ idPedido, idCliente, nomeCliente, numPedido, statusPedido, previsaoEntrega }) {

    const statuses = [
        "Pedido Confirmado",
        "Preparando Pedido",
        "Pedido a Caminho",
        "Pedido Entregue"
    ];

    const navigate = useNavigate()
    const allowedStatusSequence = [9, 2, 3, 5];
    const [enderecoFormatado, setEnderecoFormatado] = useState("");
    const [currentStatus, setCurrentStatus] = useState(statusPedido);
    const [checkColor, setCheckColor] = useState(localStorage.getItem(`pedido_atualizado_${idPedido}`) ? "green" : "gray");

    const updateStatus = async () => {
        const currentIndex = allowedStatusSequence.indexOf(currentStatus);
        const newStatus = allowedStatusSequence[currentIndex + 1];

        try {

            const response = await axios.put('http://localhost:3000/v1/saveeats/status-pedido', {
                id_pedido: idPedido,
                id_novo_status_pedido: newStatus,
            });

            if (response.status === 200) {
                setCurrentStatus(newStatus);
                setCheckColor("green");
                localStorage.setItem(`pedido_atualizado_${idPedido}`, true);

            } else {
                console.log("error");
            }
        } catch (error) {
            console.error("Erro ao atualizar o status: ", error);
        }
    };

    //GET endereço cliente
    useEffect(() => {
        async function getEnderecoCliente() {
            try {
                const response = await axios.get(`http://localhost:3000/v1/saveeats/endereco/cliente/idcliente/${idCliente}`)
                const responseEndereco = response.data.endereco_cliente;

                if (responseEndereco && responseEndereco.length > 0) {
                    const endereco = responseEndereco[0];
                    const enderecoFormatado = `Entrega em: ${endereco.logradouro_cliente} ${endereco.numero_endereco_cliente}, ${endereco.bairro_cliente}, ${endereco.localidade_cliente} - ${endereco.uf_cliente}`;
                    setEnderecoFormatado(enderecoFormatado);
                    // console.log(enderecoFormatado);
                }

            } catch (error) {
                console.log('Erro ao pegar os dados:', error);
            }
        }
        getEnderecoCliente()
    }, [idCliente])


    const onClickDetalhesPedido = () => {
        console.log(enderecoFormatado);
        localStorage.setItem("idPedido", idPedido)
        localStorage.setItem("statusPedido", statusPedido)
        localStorage.setItem("enderecoCliente", enderecoFormatado)
        navigate("/menu/detalhes/pedido")
    }

    const onclick = () => {
        console.log("foi");
    }

    return (
        <>
            <div className="card-pedido">

                <div className="container-cliente-tempo-entrega">
                    <span className="nomeCliente">{nomeCliente}</span>

                    <div className="previsao-entrega-img">
                        <img src={relogio} alt="Relógio" className="img-relogio" />
                        <span className="previsao-entrega">{previsaoEntrega}</span>
                    </div>
                </div>

                <div className="container-cliente-tempo-entrega">
                    <span className="num_pedido">Pedido #{numPedido}</span>
                    <span className="previsao-entrega-text">Previsão de entrega</span>
                </div>

                <span className="endereco_cliente">{enderecoFormatado}</span>

                <span className="text-status-pedido">Status Pedido</span>

                <span className="status-atual-pedido">{statuses[currentStatus - 1] || statusPedido.replace(";", "")}</span>

                <div className="container-time-line">

                    <div className="icons-line">
                        {allowedStatusSequence.map((status, index) => (
                            <React.Fragment key={index}>
                                <FontAwesomeIcon icon={faCircleCheck} className="check-icon" style={{ color: index < currentStatus ? "green" : "gray" }} />
                                {index < allowedStatusSequence.length - 1 && <img className="linha-status" src={linha} />}
                                {/* {index < allowedStatusSequence.length - 1 && <p className="linha">______________________________</p>}; */}
                            </React.Fragment>
                        ))}

                    </div>

                    <div className="status-hora">
                        {statuses.map((status, index) => (
                            <div key={index} className="status-hora-div">
                                <p>{status}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="btns-card-pedido">
                    <button className="btn-detalhes" onClick={onClickDetalhesPedido}>Detalhes Pedido</button>
                    <button className="btn-att-status" onClick={updateStatus} >Atualizar status</button>
                    {/* <button text={"Cancelar pedido"} background={"#FE9112"} onClick={onclick}></button> */}
                    {/* <button className="btn-att-status" onClick={updateStatus} disabled={currentStatus === 4}>Atualizar status</button> */}
                </div>
            </div>

        </>
    )
}