//Import dependências React
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

//Import do axios
import axios from 'axios'

//Import css e components
import "./HomePage.css"
import greenImg from "./img/verde.png"
import { MenuNavigation } from "../../components/MenuNavigation/MenuNavigation";
import { CardsInformativos } from "../../components/HomeComponents/CardsInformativos/CardsInformativos";
import { Cards } from "../../components/HomeComponents/Cards/Cards";
import { CardsDesempenho } from "../../components/CardsDesempenho/CardsDesempenho";
import { CurrentDate } from '../../components/CurrentDate/CurrentDate';

export function HomePage() {

    // const location = useLocation();
    // const restaurante = location.state?.restaurante;
    const nomeRestaurante = localStorage.getItem("nome_fantasia");
    const idRestaurante = localStorage.getItem("id");
    const [pedidosCancelados, setPedidosCancelados] = useState(0);
    const [pedidosAtrasados, setPedidosAtrasados] = useState(0);
    const [produtosPausados, setProdutosPausados] = useState(0);

    useEffect(() => {
        const getProdutosPausados = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/v1/saveeats/restaurante/produtos-pausados/idRestaurante/${idRestaurante}`);
                const responseData = response.data.produtos_pausado_do_restaurante;
                console.log(response);
                console.log(responseData);
                setProdutosPausados(responseData);
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        };

        getProdutosPausados(); 
    }, [idRestaurante]); 

    useEffect(() => {
        const getPedidosCancelados = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/v1/saveeats/restaurante/pedidos-cancelados/idRestaurante/${idRestaurante}`);
                const responseData = response.data.quantidade_pedidos_cancelados;
                console.log(response);
                console.log(responseData);
                setPedidosCancelados(responseData);
            } catch{
                console.log('Erro ao obter dados da API');
            }
        };

        getPedidosCancelados(); 
    }, [idRestaurante]); 


    useEffect(() => {
        const getPedidosAtrasados = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/v1/saveeats/restaurante/pedidos-atrasados/idRestaurante/${idRestaurante}`);
                const responseData = response.data.quantidade_pedidos_atrasados;
                console.log(response);
                console.log(responseData);
                setPedidosAtrasados(responseData);
            } catch{
                console.log('Erro ao obter dados da API');
            }
        };

        getPedidosAtrasados(); 
    }, [idRestaurante]); 

    return (
        <main className="main-menu">

            <div className="container-left-menu">
                <MenuNavigation></MenuNavigation>
            </div>

            <div className="container-rigth-menu">
                <div className="header">

                    <div>
                        <h2 className="nome-estabelecimento">{nomeRestaurante}</h2>

                        <div className="loja">
                            <img className="img-state-open" src={greenImg} alt="Circulo verde" />
                            <span className="statusAbertura">Loja aberta</span>
                        </div>
                    </div>

                    <div className="container-button">
                        <button className="btnHome">Fechar Loja</button>
                    </div>

                </div>

                <div className="container-cards-infos">
                    <CardsInformativos></CardsInformativos>
                </div>

                <div className="container-horario-itens">

                    <div className="containers horario-funcionamento">

                        <div className="horario">

                            <span className="title-funcionamento">Horário de funcionamento</span>
                            <CurrentDate></CurrentDate>
                            <span className="text">18:00 - 23:00</span>

                        </div>

                        <Link className="text-alterar-horario" to='/menu/horario-funcionamento'>Alterar horário</Link>

                    </div>

                    <Cards titleCard="Itens pausados no cardápio" numberCard={produtosPausados}></Cards>

                </div>

                <div className="container-desempenho">
                    <CardsDesempenho titleCard="Acompanhamento de desempenho" firstColumn="Pedidos hoje" firstData="5" secondColumn="Valor vendido" secondData="R$ 211,12" thirdColumn="Pedidos concluídos" thirdData="3"></CardsDesempenho>
                </div>

                <div className="container-atrasos-pedidos">

                    <Cards titleCard="Pedidos cancelados" numberCard={pedidosCancelados}></Cards>
                    <Cards titleCard="Pedidos em atraso" numberCard={pedidosAtrasados}></Cards>

                </div>

            </div>
        </main>
    )
}