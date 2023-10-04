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
import imgPix from "./img/pix.png"
import imgAlelo from "./img/alelo.png"
import imgElo from "./img/elo.png"
import imgVr from "./img/vr.png"
import imgTicket from "./img/ticket.png"

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

                                <TiposPagamento nomeFormaPagamento="Dinheiro" imgFormaPagamento={imgDinheiro}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Elo" imgFormaPagamento={imgElo}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Pix" imgFormaPagamento={imgPix}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Vr" imgFormaPagamento={imgVr}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Mastercard" imgFormaPagamento={imgMastercard}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Alelo" imgFormaPagamento={imgAlelo}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Visa" imgFormaPagamento={imgVisa}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Ticket" imgFormaPagamento={imgTicket}></TiposPagamento>

                            </div>

                        </div>

                    </div>

                    <div className="container-button-salvar-alteracoes">

                        <button className="salvar-alteracoes">Salvar alterações</button>

                    </div>

                </div>

            </div>

        </div>

    )
}