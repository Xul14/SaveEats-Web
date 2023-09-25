//Import React
import React from "react";

//Import css e components
import "./FormasPagamentoPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { TiposPagamento } from "../../../components/TiposPagamento/TiposPagamento";

import imgMastercard from "./img/mastercard.png"
import imgVisa from "./img/visa.png"
import imgDinheiro from "./img/dinheiro.png"

export function FormasPagamentoPage() {
    return (

        <div>

            <div className="container-forma-pagamento">

                <div className="container-left-pagamento">

                    <MenuNavigation></MenuNavigation>

                </div>

                <div className="container-rigth-pagamento">

                    <HeaderPages title="Formas de pagamento" text="Escolha quais formas de pagamentos seus clientes poderão usar."></HeaderPages>

                    <div className="container-formas-pagamento">

                        <div className="container-lista-forma-pagamento">

                            <div className="container-title-pagamento">

                                <span className="opcoes-pagamento">Tenha diversas opções de pagamento para vender mais</span>

                                <span className="opcoes-recomendadas">Deixamos aqui as formas de pagamentos mais recomendadas pelo Save Eats</span>

                            </div>

                            <div className="container-tipos-pagamento">

                                <TiposPagamento nomeFormaPagamento="Mastercard" imgFormaPagamento={imgDinheiro}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Mastercard" imgFormaPagamento={imgMastercard}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Visa" imgFormaPagamento={imgVisa}></TiposPagamento>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}