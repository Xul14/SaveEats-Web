//Import dependências React
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

//Import do axios
import axios from 'axios'

//Import css e components
import "./HomePage.css"
import greenImg from "./img/verde.png"
import { CardsInformativos } from "../../components/HomeComponents/CardsInformativos/CardsInformativos";
import { CardsDesempenho } from "../../components/CardsDesempenho/CardsDesempenho";
import { MenuNavigation } from "../../components/MenuNavigation/MenuNavigation";
import { CurrentDate } from '../../components/CurrentDate/CurrentDate';
import { Cards } from "../../components/HomeComponents/Cards/Cards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export function HomePage() {

    // const location = useLocation();
    // const restaurante = location.state?.restaurante;
    const nomeRestaurante = localStorage.getItem("nome_fantasia");
    const idRestaurante = localStorage.getItem("id");
    const [pedidosCancelados, setPedidosCancelados] = useState(0);
    const [pedidosAtrasados, setPedidosAtrasados] = useState(0);
    const [produtosPausados, setProdutosPausados] = useState(0);
    const [desempenho, setDesempenho] = useState([])
    const [lojaAberta, setLojaAberta] = useState(true);

    const toggleLoja = () => {
        setLojaAberta(!lojaAberta);
    };

    useEffect(() => {
        const getProdutosPausados = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/produtos-pausados/idRestaurante/${idRestaurante}`);
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
                const response = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/pedidos-cancelados/idRestaurante/${idRestaurante}`);
                const responseData = response.data.quantidade_pedidos_cancelados;
                console.log(response);
                console.log(responseData);
                setPedidosCancelados(responseData);
            } catch {
                console.log('Erro ao obter dados da API');
            }
        };

        getPedidosCancelados();
    }, [idRestaurante]);


    useEffect(() => {
        const getPedidosAtrasados = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/pedidos-atrasados/idRestaurante/${idRestaurante}`);
                const responseData = response.data.quantidade_pedidos_atrasados;
                console.log(response);
                console.log(responseData);
                setPedidosAtrasados(responseData);
            } catch {
                console.log('Erro ao obter dados da API');
            }
        };

        getPedidosAtrasados();
    }, [idRestaurante]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3000/v1/saveeats/acompanhamento-desempenho-data-atual/restaurante/idRestaurante/${idRestaurante}`);
                const responseData = response.data.acompanhamento_desempenho_data_atual
                setDesempenho(responseData)
            } catch (error) {
                console.error('Erro ao obter dados da API:', error)
            }
        }
        fetchData()
    }, [])

    const [horarioFuncionamento, setHorarioFuncionamento] = useState(null);

    useEffect(() => {
        const getHorarioFuncionamento = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/dia-horario-funcionamento/idRestaurante/${idRestaurante}`);
                const diasHorariosFuncionamento = response.data.dias_horarios_funcionamento;

                const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
                const hoje = new Date().getDay();
                const diaSemanaAtual = diasSemana[hoje];

                const horario = diasHorariosFuncionamento.find(item => item.dia_semana === diaSemanaAtual);
                setHorarioFuncionamento(horario);
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        };

        getHorarioFuncionamento();
    }, []);


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
                            <FontAwesomeIcon
                                icon={faCircle}
                                className={`circle-icon ${lojaAberta ? "open" : "closed"}`}
                            />
                            <span className="statusAbertura">{lojaAberta ? "Loja aberta" : "Loja fechada"}</span>
                        </div>
                    </div>

                    <div className="container-button">
                        <button className={`btnHome ${lojaAberta ? "btn-open" : "btn-closed"}`} onClick={toggleLoja}>
                            {lojaAberta ? "Fechar Loja" : "Abrir Loja"}
                        </button>
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
                            {horarioFuncionamento ? (
                                <span className="text">{`${horarioFuncionamento.horario_inicio} - ${horarioFuncionamento.horario_final}`}</span>
                            ) : (
                                <span className="text">Não abre</span>
                            )}
                        </div>

                        <Link className="text-alterar-horario" to='/menu/horario-funcionamento'>Alterar horário</Link>

                    </div>

                    <Cards titleCard="Itens pausados no cardápio" numberCard={produtosPausados}></Cards>

                </div>

                <div className="container-desempenho">
                    <CardsDesempenho
                        titleCard="Acompanhamento de desempenho"
                        firstColumn="Pedidos hoje"
                        firstData={desempenho.length > 0 ? desempenho[0].quantidade_pedidos_data_atual : 0}
                        secondColumn="Valor vendido"
                        secondData={`R$ ${desempenho.length > 0 ? desempenho[0].valor_total_pedidos_data_atual : "0,00"}`}
                        thirdColumn="Pedidos concluídos"
                        thirdData={desempenho.length > 0 ? desempenho[0].quantidade_pedidos_concluido_data_atual : 0}
                    />
                </div>

                <div className="container-atrasos-pedidos">

                    <Cards titleCard="Pedidos cancelados" numberCard={pedidosCancelados}></Cards>
                    <Cards titleCard="Pedidos em atraso" numberCard={pedidosAtrasados}></Cards>

                </div>

            </div>
        </main>
    )
}