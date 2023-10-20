//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css
import './CardPedidos.css'
import relogio from './img/clock.png'
import check_cinza from './img/check-cinza.png'
import check_verde from './img/check-verde.png'

export function CardPedidos({ idPedido, idCliente, nomeCliente, numPedido, statusPedido, previsaoEntrega }) {

    const statuses = ["Aguardando Confirmação", "Preparando Pedido", "Pedido a Caminho", "Pedido Entregue"];
    const [enderecoFormatado, setEnderecoFormatado] = useState("");
    const [status, setStatus] = useState(statusPedido);

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


    const updateStatus = () => {
        const currentIndex = statuses.indexOf(status);

        if (currentIndex === statuses.length - 1) {
            setStatus(statuses[0]);
            // console.log("Pedido Entregue");
        } else {
            setStatus(statuses[currentIndex + 1]);
        }
    };

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

                <span className="status-atual-pedido">{status}</span>
                {/* <span className="status-atual-pedido">{statusPedido}</span> */}

                <div className="container-time-line">
                    <div className="icons-line">
                        <img src={check_verde} alt="" className="img-check" />
                        <p className="linha">______________________________</p>

                        <img src={check_verde} alt="" className="img-check" />
                        <p className="linha">______________________________</p>

                        <img src={check_cinza} alt="" className="img-check" />
                        <p className="linha">______________________________</p>

                        <img src={check_cinza} alt="" className="img-check" />
                    </div>

                    <div className="status-hora">
                        <div className="status-hora-div">
                            <p>Pedido Confirmado</p>
                            <p className="hr">17:45</p>
                        </div>

                        <p></p>

                        <div className="status-hora-div">
                            <p>Pedido em preparo</p>
                            <p className="hr">17:45</p>
                        </div>

                        <p></p>

                        <div className="status-hora-div">
                            <p>Saiu para entrega</p>
                            <p className="hr">17:45</p>
                        </div>

                        <p></p>

                        <div className="status-hora-div">
                            <p>Pedido Entregue</p>
                            <p className="hr">17:45</p>
                        </div>

                    </div>
                </div>

                <div className="btns-card-pedido">
                    <button className="btn-detalhes" onClick={onClickDetalhesPedido}>Detalhes Pedido</button>
                    <button className="btn-att-status" onClick={updateStatus} disabled={status === "Pedido Entregue"}>Atualizar status</button>
                </div>
            </div>

        </>
    )
}