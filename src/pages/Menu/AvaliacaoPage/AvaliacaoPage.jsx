//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./AvaliacaoPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { CardAvaliacao } from "../../../components/CardAvaliacao/CardAvaliacao";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { BarAvaliacao } from "../../../components/BarAvaliacao/BarAvaliacao";
import img from './img/perfilcoments.png'
import img2 from './img/estrelas.png'

export function AvaliacaoPage() {

    const idRestaurante = localStorage.getItem("id");
    const [avaliacao, setAvaliacao] = useState([]);

    useEffect(() => {
        async function getAvaliacoes() {
            try {
                const response = await axios.get(`http://localhost:3000/v1/saveeats/avaliacoes/restaurante/idRestaurante/${idRestaurante}`);
                const responseData = response.data.avaliacoes_do_restaurante
                console.log(responseData);
                setAvaliacao(responseData)
            } catch (error) {
                console.error('Erro ao obter dados da API:', error)
            }
        }
        getAvaliacoes()
    }, [])

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
                                <p className="title_media_estrelas">4,0</p>
                                <img className="media_estrelas" src={img2} alt="" />
                                <p className="titdesc_media_estrelas">355 avaliações</p>
                            </div>

                            <div className="container_bars_estrelas">

                                <BarAvaliacao/>

                            </div>
                        </div>
                    </div>

                    <p className="quantidade-avaliacoes">20 avaliações encontradas</p>

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