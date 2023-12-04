//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./FinanceiroPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { CardsDesempenho } from "../../../components/CardsDesempenho/CardsDesempenho";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { PieChart, Pie, Cell } from 'recharts';
import { CSSTransition } from 'react-transition-group';

export function FinanceiroPage() {

    const idRestaurante = localStorage.getItem("id");

    const [pedidos, setPedidos] = useState([]);
    const [financeiro, setFinanceiro] = useState([])
    const [resumoValores, setResumoValores] = useState([])
    const [financeiroMensal, setFinanceiroMensal] = useState([])
    const [showChart, setShowChart] = useState(false)

    //Resumo dos valores
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://save-eats.azurewebsites.net/v1/saveeats/valor-total-liquido-comissao/restaurante/idRestaurante/${idRestaurante}`);
                const responseData = response.data.dados_financeiro
                setResumoValores(responseData)
            } catch (error) {
                console.error('Erro ao obter dados da API:', error)
            }
        }
        fetchData()
    }, [])

    //Acompanhamento diário
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://save-eats.azurewebsites.net/v1/saveeats/acompanhamento-desempenho-data-atual/restaurante/idRestaurante/${idRestaurante}`);
                const responseData = response.data.acompanhamento_desempenho_data_atual
                setFinanceiro(responseData)
            } catch (error) {
                console.error('Erro ao obter dados da API:', error)
            }
        }
        fetchData()
    }, [])

    //Acompanhamento mensal
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://save-eats.azurewebsites.net/v1/saveeats/acompanhamento-desempenho-mes-atual/restaurante/idRestaurante/${idRestaurante}`);
                const responseData = response.data.acompanhamento_desempenho_mes_atual
                setFinanceiroMensal(responseData)
            } catch (error) {
                console.error('Erro ao obter dados da API:', error)
            }
        }
        fetchData()
    }, [])
    useEffect(() => {
        async function fetchDataGrafico() {
            try {
                const response = await axios.get(`https://save-eats.azurewebsites.net/v1/saveeats/pedidos-cancelados-entregues-mes-atual/restaurante/idRestaurante/${idRestaurante}`);
                const responseData = response.data;
    
                const pedidosEntregues = responseData.quantidade_pedidos_entregues || 0;
                const pedidosCancelados = responseData.quantidade_pedidos_cancelados || 0;
    
                setPedidos([
                    { name: 'Entregues', value: pedidosEntregues, color: '#90AE6E' },
                    { name: 'Cancelados', value: pedidosCancelados, color: '#295F1B' }
                ]);
    
                // Adicionando um pequeno atraso antes de exibir o gráfico
                setTimeout(() => {
                    setShowChart(true);
                }, 300); // 300 milissegundos (ou ajuste conforme necessário)
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        }
        fetchDataGrafico();
    }, [idRestaurante]);
    

    return (
        <div>
            <div className="container-financeiro">

                <div className="container-left-financeiro">
                    <MenuNavigation></MenuNavigation>
                </div>

                <div className="container-rigth-financeiro">
                    <HeaderPages title="Financeiro" text="Tenha as informações financeiras da loja "></HeaderPages>

                    <div className="container-resumo-valores">

                        <div className="grafico-financeiro">
                            <CSSTransition
                                in={showChart}
                                timeout={500}
                                classNames="chart"
                                unmountOnExit
                            >
                                <PieChart width={400} height={400} className="grafico-pizza">
                                    <Pie
                                        data={pedidos}
                                        dataKey="value"
                                        cx={200}
                                        cy={200}
                                        outerRadius={170}
                                        fill="#8884d8"
                                        label={{ fontSize: 20, fontWeight: 600 }}
                                        labelLine={false}
                                    >
                                        {pedidos.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </CSSTransition>

                            <div className="legenda-grafico">

                                <div className="legenda-line">
                                    <p className="cor-legenda entregue"></p>
                                    <span className="text-legenda">Entregue</span>
                                </div>

                                <div className="legenda-line">
                                    <p className="cor-legenda cancelado"></p>
                                    <span className="text-legenda">Cancelado</span>
                                </div>

                            </div>
                        </div>

                        <div className="resumo-valores-financeiro">

                            <span className="text-resumo-valores">Resumo dos valores</span>
                            <div>

                                <div className="linhas-custos">
                                    <span className="text-linha-custo">Total de vendas</span>
                                    <span className="valor-custo">{`R$ ${resumoValores.length > 0 ? resumoValores[0].total_pedidos : "0,00"}`}</span>
                                </div>

                                <div className="linhas-custos">
                                    <span className="text-linha-custo">Comissão Save Eats (11%)</span>
                                    <span className="valor-custo">{`R$ ${resumoValores.length > 0 ? resumoValores[0].comissao_save_eats : "0,00"}`}</span>
                                </div>

                                <div className="linhas-custos">
                                    <span className="text-linha-custo">Total líquido</span>
                                    <span className="valor-custo total-mensal">{`R$ ${resumoValores.length > 0 ? resumoValores[0].valor_liquido : "0,00"}`}</span>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="cards-financeiros">
                        <CardsDesempenho
                            titleCard="Acompanhamento de desempenho"
                            firstColumn="Pedidos hoje"
                            firstData={financeiro.length > 0 ? financeiro[0].quantidade_pedidos_data_atual : 0}
                            secondColumn="Valor vendido"
                            secondData={`R$ ${financeiro.length > 0 ? financeiro[0].valor_total_pedidos_data_atual : "0,00"}`}
                            thirdColumn="Pedidos concluídos"
                            thirdData={financeiro.length > 0 ? financeiro[0].quantidade_pedidos_concluido_data_atual : 0}
                        />

                        <CardsDesempenho
                            titleCard="Acompanhamento de desempenho total"
                            firstColumn="Pedidos no mês"
                            firstData={financeiroMensal.length > 0 ? financeiroMensal[0].quantidade_pedidos_mes_atual : 0}
                            secondColumn="Valor vendido (Bruto)"
                            secondData={`R$ ${financeiroMensal.length > 0 ? financeiroMensal[0].valor_total_pedidos_mes_atual : "0,00"}`}
                            thirdColumn="Valor líquido"
                            thirdData={`R$ ${financeiroMensal.length > 0 ? financeiroMensal[0].valor_liquido_mes_atual : "0,00"}`}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}