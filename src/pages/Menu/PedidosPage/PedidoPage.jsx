//Import React
import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./PedidosPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { CardPedidos } from "../../../components/CardPedidos/CardPedidos";
import notificationSound from "./Olha_A_Mensagem_www.toquesengracadosmp3.com.mp3";

export function PedidosPage() {

    const [pedidos, setPedidos] = useState([]);
    const [termoPesquisa, setTermoPesquisa] = useState("");
    const idRestaurante = localStorage.getItem("id");
    const [playSound, setPlaySound] = useState(false);

    const getDetailsPedido = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/v1/saveeats/detalhes/pedido/idRestaurante/${idRestaurante}`)
            const responsePedidos = response.data.detalhes_do_pedido;
            setPedidos(responsePedidos);
            console.log(responsePedidos);
        } catch (error) {
            console.log('Erro ao pegar os dados:', error);
        }
    }

    // Função para realizar a consulta periódica
    const checkForNewPedidos = async () => {
        const previousPedidos = [...pedidos];
        await getDetailsPedido();

        if (pedidos.length > previousPedidos.length) {
            setPlaySound(true);
            setTimeout(() => setPlaySound(false), 5000);
            console.log("som");
        }
        
        console.log("sem som");
        setTimeout(checkForNewPedidos, 5000);
        setPlaySound(true); 
        setTimeout(() => setPlaySound(false), 5000);
    };

    useEffect(() => {
        checkForNewPedidos();
        console.log("Novo pedido");
        return () => clearTimeout(checkForNewPedidos);
    }, []);


    // Consumo da API para buscar produtos com base no termo de pesquisa
    const buscarPedido = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/v1/saveeats/detalhes/pedido/idRestaurante/${idRestaurante}/numeroPedido/${termoPesquisa}`);
            const data = response.data.detalhes_do_pedido;
            setPedidos(data);
        } catch (error) {
            console.error("Erro ao buscar pedidos:", error);
        }
    };

    const handlePesquisaChange = (e) => {
        setTermoPesquisa(e.target.value);
        buscarPedido();
    };

    useEffect(() => {
        buscarPedido();
    }, [termoPesquisa]);

    useEffect(() => {
        if (termoPesquisa.trim() === "") {
            getDetailsPedido();
        }
    }, [termoPesquisa]);

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
                            <input
                                className="input-buscar-pedido"
                                type="search"
                                value={termoPesquisa}
                                onChange={handlePesquisaChange}
                            />
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
                        {pedidos ? (
                            pedidos.map((pedidos, index) => (

                                <CardPedidos
                                    key={index}
                                    idPedido={pedidos.id_pedido}
                                    idCliente={pedidos.id_cliente}
                                    nomeCliente={pedidos.nome_cliente}
                                    numPedido={pedidos.numero_pedido}
                                    statusPedido={pedidos.status_pedido}
                                    previsaoEntrega={pedidos.previsao_entrega}
                                />
                            ))
                        ) : (
                            <div className="nenhuma-area-entrega">
                                <p>Você não tem nenhum pedido até o momento.</p>
                            </div>
                        )}
                    </div>
                    <audio id="newOrderAudio" src={notificationSound} preload="auto"></audio>
                </div>
            </div>
        </div>
    )
}