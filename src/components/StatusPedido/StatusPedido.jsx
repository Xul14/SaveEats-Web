//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./StatusPedido.css"
import teste from "../StatusPedido/img/linha.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export function StatusPedido() {

    const idPedido = localStorage.getItem("idPedido");
    const [pedido, setPedido] = useState([]);

    useEffect(() => {
        async function getDetailsPedido() {
            try {
                const response = await axios.get(`https://save-eats.azurewebsites.net/v1/saveeats/detalhes/pedido/id/${idPedido}`)
                const responsePedido = response.data.detalhes_do_pedido;
                setPedido(responsePedido);
                console.log(responsePedido.status_pedido);
            } catch (error) {
                console.log('Erro ao pegar os dados:', error);
            }
        }
        getDetailsPedido()
    }, [idPedido])

    const getCheckColor = (index) => {
        const status = pedido.status_pedido;
        console.log('Status do pedido:', pedido.status_pedido);
        if (status === "Pedido Confirmado" && index === 0) {
            return "green";
        } else if (status === "Pedido sendo preparado" && index < 2) {
            return "green";
        } else if (status === "Pedido a caminho" && index < 3) {
            return "green";
        } else if (status === "Pedido entregue") {
            return "green";
        } else if (status === "Cancelado") {
            return "red";
        } else {
            return "gray";
        }
    };


    return (
        <>

            <div className="container-status-pedido">

                <div className="title-status-pedido">

                    <span className="text-status-detalhes-pedido">Status do pedido</span>

                    <span className="text-despachado">{pedido.status_pedido}</span>

                </div>

                <div className="container-icon-status">

                    {[...Array(4)].map((_, index) => (
                        <React.Fragment key={index}>
                            <div className={`icon-status-${index + 1}`}>
                                <FontAwesomeIcon icon={faCircleCheck} className="check-icon" style={{ color: getCheckColor(index) }} />
                            </div>
                            {index !== 3 && (
                                <>
                                    <img src={teste} alt="" className="linha-status" />
                                </>
                            )}
                        </React.Fragment>
                    ))}

                </div>

                <div className="container-detalhes-status-pedido">

                    <div className="container-passo-a-passo-status-pedido">

                        <span className="text-passo-a-passo-status">Pedido Confirmado</span>

                    </div>

                    <div className="container-passo-a-passo-status-pedido">

                        <span className="text-passo-a-passo-status">Pedido sendo preparado</span>

                    </div>

                    <div className="container-passo-a-passo-status-pedido">

                        <span className="text-passo-a-passo-status">Saiu para entrega</span>

                    </div>

                    <div className="container-passo-a-passo-status-pedido">

                        <span className="text-passo-a-passo-status">Pedido entregue</span>

                    </div>

                </div>

            </div>

        </>
    )
}