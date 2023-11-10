//Import React
import React, { useState, useEffect } from "react";

//Import css e components
import "./FormasPagamentoPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { TiposPagamento } from "../../../components/TiposPagamento/TiposPagamento";

//Import Axios para integração
import axios from 'axios'

export function FormasPagamentoPage() {

    //Consumo da API para pegar as formas de pagamento
    const [formaPagamento, setFormaPagamento] = useState([]);

    // useEffect(() => {
    //     async function formaPagamentoData() {
    //         try {
    //             const formasPagamento = await axios.get('http://localhost:3000/v1/saveeats/obter-dados-do-mercado-pago');
    //             const formaPagamentoData = formasPagamento.data;
    //             setFormaPagamento(formaPagamentoData);
    //             console.log(formasPagamento);

    //         } catch (error) {
    //             console.error('Erro ao obter dados do Mercado Pago:', error);
    //         }
    //     }

    //     formaPagamentoData();
    // }, []);

    useEffect(() => {
        async function formaPagamentoData() {
            try {
                const formasPagamento = await axios.get('http://localhost:3000/v1/saveeats/forma/pagamento');
                const formaPagamentoData = formasPagamento.data.formas_de_pagamento;
                console.log(formaPagamentoData);
                setFormaPagamento(formaPagamentoData);

            } catch (error) {
                console.error('Erro ao obter dados:', error);
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

                                {/* {formaPagamento.map((formaPagamento, index) => (
                                    <TiposPagamento
                                        key={index}
                                        nomeFormaPagamento={formaPagamento.name}
                                        imgFormaPagamento={formaPagamento.secure_thumbnail}
                                    />
                                ))} */}

                                {formaPagamento.map((formaPagamento, index) => (
                                    <TiposPagamento
                                        key={index}
                                        nomeFormaPagamento={formaPagamento.nome_forma_pagamento}
                                        imgFormaPagamento={formaPagamento.foto_bandeira}
                                    />
                                ))}


                            </div>

                        </div>

                    </div>

                    {/* <div className="container-button-salvar-alteracoes">

                        <button className="salvar-alteracoes">Salvar alterações</button>

                    </div> */}

                </div>

            </div>

        </div>

    )
}