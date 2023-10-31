//Import React
import React from "react";

//Import css e components
import "./AvaliacaoPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import img from './img/perfilcoments.png'
import img2 from './img/estrelas.png'
import img3 from './img/estrelass.png'



export function AvaliacaoPage() {
    return (
        <div>
            <div className="container-avaliacao">

                <div className="container-left-avaliacao">
                    <MenuNavigation></MenuNavigation>
                </div>

                <div className="container-rigth-avaliacao">

                    <HeaderPages title="Avaliações" text="Veja as avaliações de seus clientes"></HeaderPages>


                    <div className="container_bigbig">

                        <div className="card_av">

                            <div className="container_av">
                                <p className="tit_av">4,0</p>

                                <img className="estrelass" src={img3} alt="" />


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

                        
                    </div>


                </div>
            </div>
        </div>
    )
}