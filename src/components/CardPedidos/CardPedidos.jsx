//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css, imgs, components e outros
import './CardPedidos.css'
import relogio from './img/clock.png'
import check_cinza from './img/check-cinza.png'
import check_verde from './img/check-verde.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export function CardPedidos({ idPedido, idCliente, nomeCliente, numPedido, statusPedido, previsaoEntrega }) {

    const statuses = [
        "Aguardando Confirmação",
        "Preparando Pedido",
        "Pedido a Caminho",
        "Pedido Entregue"
    ];

    const [enderecoFormatado, setEnderecoFormatado] = useState("");
    const allowedStatusSequence = [1, 2, 3, 5];
    const [currentStatus, setCurrentStatus] = useState(statusPedido);
    const [checkColor, setCheckColor] = useState(localStorage.getItem(`pedido_atualizado_${idPedido}`) ? "green" : "gray");

    const updateStatus = async () => {
        const currentIndex = allowedStatusSequence.indexOf(currentStatus);
        const newStatus = allowedStatusSequence[currentIndex + 1];

        try {
            console.log("entrou 2");
            console.log(newStatus);

            const response = await axios.put('http://localhost:8080/v1/saveeats/status-pedido', {
                id_pedido: idPedido,
                id_novo_status_pedido: newStatus,
            });

            if (response.status === 200) {
                setCurrentStatus(newStatus);
                setCheckColor("green");
                localStorage.setItem(`pedido_atualizado_${idPedido}`, true);

                console.log("atualizou");
            } else {
                console.log("error");
            }
        } catch (error) {
            console.error("Erro ao atualizar o status: ", error);
            // Lógica de tratamento de erro, se necessário.
        }
    };

    //GET endereço cliente
    useEffect(() => {
        async function getEnderecoCliente() {
            try {
                const response = await axios.get(`http://localhost:8080/v1/saveeats/endereco/cliente/idcliente/${idCliente}`)
                const responseEndereco = response.data.endereco_cliente;
                console.log(responseEndereco);

                if (responseEndereco && responseEndereco.length > 0) {
                    const endereco = responseEndereco[0];
                    const enderecoFormatado = `Entrega em: ${endereco.rua_cliente} ${endereco.numero_endereco_cliente}, ${endereco.bairro_cliente}, ${endereco.nome_cidade} - ${endereco.nome_estado}`;
                    setEnderecoFormatado(enderecoFormatado);
                }

            } catch (error) {
                console.log('Erro ao pegar os dados:', error);
            }
        }
        getEnderecoCliente()
    }, [idCliente])


    // const updateStatus = () => {
    //     const currentIndex = statuses.indexOf(status);

    //     if (currentIndex === statuses.length - 1) {
    //         setStatus(statuses[0]);
    //         // console.log("Pedido Entregue");
    //     } else {
    //         setStatus(statuses[currentIndex + 1]);
    //     }
    // };

    const onClickDetalhesPedido = () => {
        console.log(idPedido);
        localStorage.setItem("idPedido", idPedido)
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

                <span className="status-atual-pedido">{statuses[currentStatus - 1]}</span>
                {/* <span className="status-atual-pedido">{status}</span> */}
                {/* <span className="status-atual-pedido">{statusPedido}</span> */}

                <div className="container-time-line">

                    <div className="icons-line">
                        {allowedStatusSequence.map((status, index) => (
                            <React.Fragment key={index}>
                                <FontAwesomeIcon icon={faCircleCheck} className="check-icon" style={{ color: index < currentStatus ? "green" : "gray" }} />
                                {index < allowedStatusSequence.length - 1 && <p className="linha">______________________________</p>}
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
                    <button className="btn-att-status" onClick={updateStatus} disabled={currentStatus === 4}>Atualizar status</button>
                </div>
            </div>

        </>
    )
}