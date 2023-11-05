//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./AvaliacaoPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import img from './img/perfilcoments.png'
import img2 from './img/estrelas.png'
import { CardAvaliacao } from "../../../components/CardAvaliacao/CardAvaliacao";

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

                                <div className="card">
                                    <p className="avaliation_number">5</p>
                                    <div className="card_5"></div>
                                    <p className="avaliation_result">95</p>
                                </div>

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


                    {/* <div className="container_bigbig">

                        <div className="card_av">

                            <div className="container_av">
                                <p className="tit_av">4,0</p>

                                <img className="estrelass" src={img2} alt="" />


                                <p className="titdesc_av">355 avaliações</p>
                            </div>




                            <div className="container_bars">

                                <div className="card">
                                    <p className="avaliation_number">5</p>
                                    <div className="card_5"></div>
                                    <p className="avaliation_result">95</p>
                                </div>

                                <div className="card">
                                    <p className="avaliation_number">4</p>
                                    <div className="card_5"></div>
                                    <p className="avaliation_result">127</p>
                                </div>
                                <div className="card">
                                    <p className="avaliation_number">3</p>
                                    <div className="card_5"></div>
                                    <p className="avaliation_result">80</p>
                                </div>
                                <div className="card">
                                    <p className="avaliation_number">2</p>
                                    <div className="card_5"></div>
                                    <p className="avaliation_result">95</p>
                                </div>
                                <div className="card">
                                    <p className="avaliation_number">1</p>
                                    <div className="card_5"></div>
                                    <p className="avaliation_result">22</p>
                                </div>


                            </div>

                        </div>

                        <p className="title_coments">20 avaliações encontradas</p>

                        <div className="container_avaliacao">

                            <div className="comentarios">

                                <img className="imgperfil" src={img} alt="" />

                                <div>

                                    <p className="nome">Rafael Santos</p>

                                    <div className="row">


                                        <p className="avaliacao">5,0</p>

                                        <img className="estrelas" src={img2} alt="" />

                                    </div>



                                </div>

                                <p className="data">17/08/2023</p>



                            </div>

                            <p className="resposta">Muito bom! Comida de qualidade, ótimo atendimento e a comida chegou antes do tempo previsto.</p>

                            <div className="linhaa"></div>


                        </div>

                    </div> */}


                </div>
            </div>
        </div>
    )
}