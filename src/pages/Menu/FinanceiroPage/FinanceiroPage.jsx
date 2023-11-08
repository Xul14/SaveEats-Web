//Import React
import React from "react";

//Import css e components
import "./FinanceiroPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { CardsDesempenho } from "../../../components/CardsDesempenho/CardsDesempenho";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { PieChart, Pie } from 'recharts';


export function FinanceiroPage() {

    const data = [
        { name: 'Geeksforgeeks', students: 400, fill: '#B7CB9F' },
        { name: 'Technical scripter', students: 700, fill: '#90AE6E' },
        { name: 'Geek-i-knack', students: 200, fill: '#295F1B' },
        { name: 'Geek-o-mania', students: 1000, fill: '#FE9112' }
    ];


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
                            <PieChart width={380} height={380}>
                                {data.map((entry, index) => (
                                    <Pie
                                        key={`pie-${index}`}
                                        data={[entry]}
                                        dataKey="students"
                                        outerRadius={180}
                                        fill={entry.fill}
                                    />
                                ))}
                            </PieChart>

                        </div>

                        <div className="resumo-valores-financeiro">

                            <span className="text-resumo-valores">Resumo dos valores</span>

                            <div className="linhas-custos">
                                <span className="text-linha-custo">Total de vendas</span>
                                <span className="valor-custo">R$ 20.011,13</span>
                            </div>

                            <div className="linhas-custos">
                                <span className="text-linha-custo">Comissão Save Eats (11%)</span>
                                <span className="valor-custo">R$ 4.500,88</span>
                            </div>

                            <div className="linhas-custos">
                                <span className="text-linha-custo">Total líquido</span>
                                <span className="valor-custo total-mensal">R$ 15.510,25</span>
                            </div>

                        </div>

                    </div>

                    <div className="cards-financeiros">
                        <CardsDesempenho titleCard="Acompanhamento de desempenho" firstColumn="Pedidos hoje" firstData="5" secondColumn="Valor vendido" secondData="R$ 211,12" thirdColumn="Pedidos concluídos" thirdData="3"></CardsDesempenho>
                        <CardsDesempenho titleCard="Acompanhamento de desempenho total" firstColumn="Pedidos no mês" firstData="5" secondColumn="Valor vendido (Bruto)" secondData="R$ 211,12" thirdColumn="Valor líquido" thirdData="3"></CardsDesempenho>
                    </div>

                </div>
            </div>
        </div>
    )
}