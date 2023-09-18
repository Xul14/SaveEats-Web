//Import dependências React
import React from "react";

//Import css e components
import "./HomePage.css"
import stateOpen from "./img/verde.png"
import { MenuNavigation } from "../../components/MenuNavigation/MenuNavigation";
import { CardsInformativos } from "../../components/HomeComponents/CardsInformativos/CardsInformativos";
import { Cards } from "../../components/HomeComponents/Cards/Cards";

export function HomePage() {
    return (
        <main className="main-home">

            <div className="container-left-home">
                <MenuNavigation></MenuNavigation>
            </div>

            <div className="container-rigth-home">
                <div className="header">

                    <div>
                        <h2>padaria dois irmãos</h2>

                        <div className="loja">
                            <img src={stateOpen} alt="Circulo verde" />
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

                    <Cards titleCard="Itens pausados no cardápio" numberCard="2"></Cards>
                    <Cards titleCard="Itens pausados no cardápio" numberCard="2"></Cards>

                </div>

            </div>
        </main>
    )
}