//Import React
import React, { useState, useEffect, useRef } from "react";
import './BarAvaliacao.css'

const data = [
    { label: '5 Estrelas', value: 2 },
    { label: '4 Estrelas', value: 1 },
    { label: '3 Estrelas', value: 0 },
    { label: '2 Estrelas', value: 0 },
    { label: '1 Estrela', value: 0 },
];

export const BarAvaliacao = () => {
    const totalValue = data.reduce((acc, item) => acc + item.value, 0);

    return (

        <div className="bar-chart">

            {data.map((item, index) => (

                <div className="container-bar-av">

                    <div className="bar_label">{item.label}</div>

                    <div className="bar" key={index}>
                        <div className="bar_fill" style={{ width: `${(item.value / totalValue) * 100}%` }}></div>
                    </div>

                    <p className="quant_avaliacao_estrela">{item.value}</p>

                </div>

            ))}

        </div>
    );
};



