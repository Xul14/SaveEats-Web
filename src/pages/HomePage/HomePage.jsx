//Import dependências React
import React from "react";

//Import css e components
import "./HomePage.css"
import greenImg from "./img/verde.png"
import { MenuNavigation } from "../../components/MenuNavigation/MenuNavigation";
import { CardsInformativos } from "../../components/HomeComponents/CardsInformativos/CardsInformativos";
import { Cards } from "../../components/HomeComponents/Cards/Cards";
import { CardsDesempenho } from "../../components/CardsDesempenho/CardsDesempenho";
import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <main className="main-menu">

            <div className="container-left-menu">
                <MenuNavigation></MenuNavigation>
            </div>

            <div className="container-rigth-menu">
                <div className="header">

                    <div>
                        <h2 className="nome-estabelecimento">padaria dois irmãos</h2>

                        <div className="loja">
                            <img className="img-state-open" src={greenImg} alt="Circulo verde" />
                            <span className="statusAbertura">Loja aberta</span>
                        </div>
                    </div>

                    <div className="container-button">
                        <button className="btnHome">Fechar Loja</button>
                    </div>

                </div>

                <div className="container-options">
                    <CardsInformativos></CardsInformativos>
                </div>

                <div className="container-horario-itens">

                    <div className="containers horario-funcionamento">

                        <div className="horario">

                            <span className="title-funcionamento">Horário de funcionamento</span>
                            <span className="text">Hoje, 10 de agosto</span>
                            <span className="text">18:00 - 23:00</span>

                        </div>

                        <Link className="text-alterar-horario" to='/menu/horario-funcionamento'>Alterar horário</Link>

                    </div>

                    <Cards titleCard="Itens pausados no cardápio" numberCard="2"></Cards>

                </div>

                <div className="container-desempenho">
                    <CardsDesempenho titleCard="Acompanhamento de desempenho" firstColumn="Pedidos hoje" firstData="5" secondColumn="Valor vendido" secondData="R$ 211,12" thirdColumn="Pedidos concluídos" thirdData="3"></CardsDesempenho>
                </div>

                <div className="container-atrasos-pedidos">

                    <Cards titleCard="Pedidos cancelados" numberCard="0"></Cards>
                    <Cards titleCard="Pedidos em atraso" numberCard="0"></Cards>

                </div>

            </div>
        </main>
    )
}