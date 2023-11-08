//Import React
import React, { useState, useEffect, useRef } from "react";
import './BarAvaliacao.css'

//Import Axios para integração
import axios from 'axios'

export const BarAvaliacao = () => {

    const [avaliacaoData, setAvaliacaoData] = useState([]);
    const idRestaurante = localStorage.getItem("id");

    useEffect(() => {
        async function getAvaliacoes() {
            try {
                const response = await axios.get(`http://localhost:3000/v1/saveeats/avaliacoes/restaurante/idRestaurante/${idRestaurante}`);
                const responseData = response.data.contagem_avaliacoes_por_estrela
                setAvaliacaoData(responseData)
            } catch (error) {
                console.error('Erro ao obter dados da API:', error)
            }
        }
        getAvaliacoes()
    }, [])
;
    const data = [
        { label: '5 Estrelas', value: avaliacaoData[4] },
        { label: '4 Estrelas', value: avaliacaoData[3] },
        { label: '3 Estrelas', value: avaliacaoData[2] },
        { label: '2 Estrelas', value: avaliacaoData[1] },
        { label: '1 Estrela', value: avaliacaoData[0] },
    ];

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



