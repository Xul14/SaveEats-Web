//Import React
import React, { useState, useEffect } from "react";
import './BarAvaliacao.css'

const data = [
    { label: 'Estrela 1', value: 4 },
    { label: 'Estrela 2', value: 8 },
    { label: 'Estrela 3', value: 12 },
    { label: 'Estrela 4', value: 6 },
    { label: 'Estrela 5', value: 20 },
];

export const BarAvaliacao = () => {
    const max = Math.max(...data.map((item) => item.value));

    return (

        <div className="bar-chart">

            {data.map((item, index) => (

                <div className="bar" key={index}>

                     {/* <div className="bar-label">{item.label}</div> */}

                    <div className="bar-fill" style={{ width: `${(item.value / max) * 100}%` }}>
                        {/* {item.value} */}
                    </div>

                </div>

            ))}

        </div>
    );
};



