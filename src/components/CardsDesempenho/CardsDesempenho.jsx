//Import dependências React
import React from "react";

//Import css
import "./CardsDesempenho.css"

export function CardsDesempenho({titleCard, firstColumn, firstData, secondColumn, secondData, thirdColumn, thirdData}){
    return(
                <div className="containers desempenho">

                    <div className="container-title">
                        <span className="title">{titleCard}</span>
                    </div>

                    <div className="pedidos-vendidos-concluidos">

                        <div className="container-desempenho pedidos">
                            <span className="text">{firstColumn}</span>
                            <span className="data-desempenho">{firstData}</span>
                        </div>

                        <div className="container-desempenho vendido">
                            <span className="text">{secondColumn}</span>
                            <span className="data-desempenho">{secondData}</span>
                        </div>

                        <div className="container-desempenho concluidos">
                            <span className="text">{thirdColumn}</span>
                            <span className="data-desempenho">{thirdData}</span>
                        </div>

                    </div>
                </div>
    )
}