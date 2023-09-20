//Import React
import React from "react";

//Import css e components
import "./CardapioPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { ButtonAdicionar } from "../../../components/ButtonAdicionar/ButtonAdicionar";
import { ButtonPausadoAtivo } from "../../../components/ButtonPausadoAtivo/ButtonPausadoAtivo";
import { TresPontos } from "../../../components/TresPontos/TresPontos"

export function CardapioPage() {
    return (
        <div>

            <div className="container-cardapio">

                <div className="container-left-cardapio">

                    <MenuNavigation></MenuNavigation>

                </div>

                <div className="container-rigth-cardapio">

                    <HeaderPages title="Cardápio" text="Este é o seu cardápio. Aqui você define quais produtos os clientes poderão pedir"></HeaderPages>

                    <div className="container-busca-categoria">

                        <input className="input-busca" type="search" placeholder="Buscar produto" />

                        <select name="Categoria" className="input-categoria">
                            <option>Categoria</option>
                            <option>teste</option>
                            <option>teste</option>
                        </select>

                    </div>

                    <div className="container-adicionar">

                        <ButtonAdicionar background='#90AE6E' text="Adicionar categoria"></ButtonAdicionar>

                        <ButtonAdicionar background='#E3E9DD' text="Adicionar produto"></ButtonAdicionar>

                    </div>

                    <div className="container-produtos">

                        <div className="container-lista-produtos">

                            <div className="header-lista-produtos">

                                <h2>Bolos</h2>

                                <div className="container-button-adicionar">

                                    <ButtonAdicionar background="#E3E9DD" text="Adicionar produto" ></ButtonAdicionar>

                                </div>

                                <div className="container-button-pausado-ativo">

                                    <ButtonPausadoAtivo background="#E3E9DD" text="Pausado"></ButtonPausadoAtivo>

                                    <ButtonPausadoAtivo background="#90AE6E" text="Ativo"></ButtonPausadoAtivo>

                                </div>

                                <TresPontos></TresPontos>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}