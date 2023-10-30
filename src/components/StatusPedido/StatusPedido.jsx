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

    return (
        <>

            <div className="container-status-pedido">

                <div className="title-status-pedido">

                    <span className="text-status-detalhes-pedido">Status do pedido</span>

                    <span className="text-despachado">{pedido.status_pedido}</span>

                </div>

                <div className="container-icon-status">

                    <div className="icon-status-primeiro">
                        <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
                    </div>

                    <img src={teste} alt="" className="linha-status" />

                    <div className="icon-status-segundo">
                        <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
                    </div>

                    <img src={teste} alt="" className="linha-status" />

                    <div className="icon-status-terceiro">
                        <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
                    </div>

                    <img src={teste} alt="" className="linha-status" />

                    <div className="icon-status-quarto">
                        <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
                    </div>

                </div>

                <div className="container-detalhes-status-pedido">

                    <div className="container-passo-a-passo-status-pedido">

                        <span className="text-passo-a-passo-status">Pedido realizado</span>

                        {/* <span className="horario-pedido-realizado">18:25</span> */}

                    </div>

                    <div className="container-passo-a-passo-status-pedido">

                        <span className="text-passo-a-passo-status">Pedido sendo preparado</span>

                        {/* <span className="horario-sendo-preparado">18:26</span> */}

                    </div>

                    <div className="container-passo-a-passo-status-pedido">

                        <span className="text-passo-a-passo-status">Saiu para entrega</span>

                        {/* <span className="horario-saiu-para-entrega">18:40</span> */}

                    </div>

                    <div className="container-passo-a-passo-status-pedido">

                        <span className="text-passo-a-passo-status">Pedido entregue</span>

                        {/* <span className="horario-saiu-para-entrega">19:00</span> */}

                    </div>

                </div>

            </div>

        </>
    )
}