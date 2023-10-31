//Import React
import React from "react";

//Import css e components
import "./HorarioFuncionamentoPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { CalendarFuncionamento } from '../../../components/CalendarFuncionamento/CalendarFuncionamento'

export function HorarioFuncionamentoPage() {
    return (
        <div>
            <div className="container-horario-funcionamento">

                <div className="container-left-horario-funcionamento">
                    <MenuNavigation></MenuNavigation>
                </div>

                <div className="container-rigth-horario-funcionamento">
                    <HeaderPages title="Horario de funcionamento" text="Defina seus horários de funcionamento em cada dia da semana aqui. "></HeaderPages>

                    <div className="calendario">
                        <CalendarFuncionamento></CalendarFuncionamento>
                    </div>

                </div>
            </div>
        </div>
    )
}