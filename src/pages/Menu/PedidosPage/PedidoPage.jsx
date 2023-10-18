//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./PedidosPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { CardPedidos } from "../../../components/CardPedidos/CardPedidos";

export function PedidosPage() {

    const [pedidos, setPedidos] = useState([]);

    //GET dos dados do pedido
    useEffect(() => {
        async function getDetailsPedido() {
            try {
                const response = await axios.get("http://localhost:8080/v1/saveeats/detalhes/pedido")
                const responsePedidos = response.data.detalhes_do_pedido;
                setPedidos(responsePedidos);
                console.log(responsePedidos);
            } catch (error) {
                console.log('Erro ao pegar os dados:', error);
            }
        }
        getDetailsPedido()
    }, [])

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
                        {pedidos.map((pedidos, index) => (
                            <CardPedidos
                                key={index}
                                id={pedidos.id_pedido}
                                nomeCliente={pedidos.nome_cliente}
                                numPedido={pedidos.numero_pedido}
                                statusPedido={pedidos.status_pedido}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}