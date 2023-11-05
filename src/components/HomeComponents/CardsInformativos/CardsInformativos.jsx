//Import dependências React
import React from "react";

//Import css e img's
import "./Cardsinformativos.css"
import sacolaCompras from './img/img-card1.png'
import formasPagamento from './img/img-card-pagamento.png'
import diasFuncionamento from './img/img-card-funcionamento.png'

export function CardsInformativos() {
    return (
        <>

            <div className="option cardapio">
                <p className="text-card-informativo">Ajude a combater o desperdício alimentar</p>
                <img className="img-cards-informativos" src={sacolaCompras} />
            </div>

            <div className="option calendario-card">
                <p className="text-card-informativo">Escolha suas formas de pagamento</p>
                <img className="img-cards-informativos" src={formasPagamento} />
            </div>

            <div className="option formas-de-pagamento">
                <p className="text-card-informativo">Defina os seu horário de funcionamento</p>
                <img className="img-cards-informativos" src={diasFuncionamento} />
            </div>

        </>
    )
}