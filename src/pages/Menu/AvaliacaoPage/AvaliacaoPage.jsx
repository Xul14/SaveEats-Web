//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./AvaliacaoPage.css"
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { CardAvaliacao } from "../../../components/CardAvaliacao/CardAvaliacao";
import { BarAvaliacao } from "../../../components/BarAvaliacao/BarAvaliacao";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export function AvaliacaoPage() {

    const idRestaurante = localStorage.getItem("id");
    const [avaliacao, setAvaliacao] = useState([]);
    const [avaliacaoData, setAvaliacaoData] = useState([]);

    useEffect(() => {
        async function getAvaliacoes() {
            try {
                const response = await axios.get(`http://localhost:3000/v1/saveeats/avaliacoes/restaurante/idRestaurante/${idRestaurante}`);
                const responseDataAvaliacao = response.data.avaliacoes_do_restaurante
                const responseData = response.data
                setAvaliacaoData(responseData)
                setAvaliacao(responseDataAvaliacao)
            } catch (error) {
                console.error('Erro ao obter dados da API:', error)
            }
        }
        getAvaliacoes()
    }, [])

    function mediaEstrelas(media) {
        const numeroEstrelas = Math.round(parseFloat(media));
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= numeroEstrelas) {
                stars.push(<FontAwesomeIcon icon={faStar} key={i} className="star-filled-avaliacao"/>);
            } else {
                stars.push(<FontAwesomeIcon icon={faStar} key={i} className="star-empty-avaliacao"/>);
            }
        }

        return stars;
    }

    return (
        <div>
            <div className="container-avaliacao">

                <div className="container-left-avaliacao">
                    <MenuNavigation></MenuNavigation>
                </div>

                <div className="container-rigth-avaliacao">

                    <HeaderPages title="Avaliações" text="Veja as avaliações de seus clientes"></HeaderPages>

                    <div className="container-card-avaliacao">

                        <div className="card_avaliacao">

                            <div className="container_media_estrelas">

                                <p className="title_media_estrelas">{avaliacaoData.media_estrelas} </p>

                                <div className="star-rating">
                                    {mediaEstrelas(avaliacaoData.media_estrelas)}
                                </div>

                                <p className="titdesc_media_estrelas">{avaliacaoData.quantidade_avaliacoes} avaliações</p>
                            </div>

                            <div className="container_bars_estrelas">

                                <BarAvaliacao />

                            </div>
                        </div>
                    </div>

                    <p className="quantidade-avaliacoes">{avaliacaoData.quantidade_avaliacoes} avaliações encontradas</p>

                    <div className="container_avaliacao">

                        {avaliacao.map((avaliacao, index) => (
                            <CardAvaliacao
                                key={index}
                                imgCliente={avaliacao.foto_cliente}
                                nomeCliente={avaliacao.nome_cliente}
                                avaliacaoCliente={avaliacao.avaliacao_descricao}
                                dataAvaliacao={avaliacao.data_avaliacao}
                                classificacao={avaliacao.quantidade_estrela}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}