//Import React
import React, { useState, useEffect } from "react";

//Import css e components
import "./FormasPagamentoPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { TiposPagamento } from "../../../components/TiposPagamento/TiposPagamento";

//Import Axios para integração
import axios from 'axios'

import imgMastercard from "./img/mastercard.png"
import imgVisa from "./img/visa.png"
import imgDinheiro from "./img/dinheiro.png"
import imgPix from "./img/pix.png"
import imgAlelo from "./img/alelo.png"
import imgElo from "./img/elo.png"
import imgVr from "./img/vr.png"
import imgTicket from "./img/ticket.png"
// import { mercadoPago } from "../../../api/API";

export function FormasPagamentoPage() {

    // axios.get('http://localhost:8080/v1/saveeats/obter-dados-do-mercado-pago')
    //     .then(response => {
    //         // Processar os dados da API do Mercado Pago recebidos do backend
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.error('Erro ao obter dados do Mercado Pago:', error);
    //     });

    //Consumo da API para pegar as formas de pagamento
    const [formaPagamento, setFormaPagamento] = useState([]);

    // useEffect(() => {
    //     async function formaPagamentoData() {
    //         try {
    //             // const formasPagamento = await axios.get(`https://save-eats.cyclic.cloud/v1/saveeats/forma/pagamento`);
    //             const formasPagamento = await axios.get(`http://localhost:8080/v1/saveeats/forma/pagamento`);
    //             const formaPagamentoData = formasPagamento.data.formas_de_pagamento;
    //             setFormaPagamento(formaPagamentoData);
    //             console.log(formaPagamentoData);
    //         } catch (error) {
    //             console.error('Erro ao obter dados da API:', error);
    //         }
    //     }

    //     formaPagamentoData();
    // }, []);

    useEffect(() => {
        async function formaPagamentoData() {
            try {
                const formasPagamento = await axios.get('http://localhost:8080/v1/saveeats/obter-dados-do-mercado-pago');
                const formaPagamentoData = formasPagamento.data;
                setFormaPagamento(formaPagamentoData);
                console.log(formaPagamentoData);
            } catch (error) {
                console.error('Erro ao obter dados do Mercado Pago:', error);
            }
        }

        formaPagamentoData();
    }, []);


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

                                {formaPagamento.map((formaPagamento, index) => (
                                    <TiposPagamento
                                        key={index}
                                        nomeFormaPagamento={formaPagamento.name}
                                        imgFormaPagamento={formaPagamento.secure_thumbnail}
                                    />
                                ))}

                                {/* <TiposPagamento nomeFormaPagamento="Dinheiro" imgFormaPagamento={imgDinheiro}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Elo" imgFormaPagamento={imgElo}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Pix" imgFormaPagamento={imgPix}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Vr" imgFormaPagamento={imgVr}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Mastercard" imgFormaPagamento={imgMastercard}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Alelo" imgFormaPagamento={imgAlelo}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Visa" imgFormaPagamento={imgVisa}></TiposPagamento>

                                <TiposPagamento nomeFormaPagamento="Ticket" imgFormaPagamento={imgTicket}></TiposPagamento> */}

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