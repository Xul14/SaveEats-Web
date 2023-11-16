//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./AreasEntregaPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { InputTaxas } from "../../../components/InputTaxas/InputTaxas";
import { InputTempo } from "../../../components/InputTempo/InputTempo";
import { InputTaxaTempo } from "../../../components/InputTaxaTempo/InputTaxaTempo";
import { ModalFreteAreaEntrega } from "../../../components/ModalFreteAreaEntrega/ModalFreteAreaEntrega";
import img_nenhuma_area from './img/nenhuma-area-entrega.webp'

export function AreasEntregaPage() {

    const idRestaurante = localStorage.getItem("id");

    const [areaEntrega, setAreaEntrega] = useState([]);
    const [openModal, setOpenModal] = useState(false)
    const [raioEntrega, setRaioEntrega] = useState('')

    useEffect(() => {
        const success = (pos) => {
            console.log('Latitude:', pos.coords.latitude);
            console.log('Longitude:', pos.coords.longitude);
        };

        const error = (err) => {
            console.error('Erro ao obter localização:', err);
        };

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
        };

        const watchID = navigator.geolocation.watchPosition(success, error, options);

        return () => {
            navigator.geolocation.clearWatch(watchID);
        };
    }, []);


    useEffect(() => {
        async function areaEntregaData() {
            try {
                const areaEntregaResponse = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/frete-area-entrega/idRestaurante/${idRestaurante}`);
                const areaEntregaData = areaEntregaResponse.data.frete_area_entrega_do_restaurante;

                if (areaEntregaData[0] && areaEntregaData[0].raio_entrega) {
                    setRaioEntrega(areaEntregaData[0].raio_entrega);
                }
                console.log(areaEntregaData);
                setAreaEntrega(areaEntregaData)
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        }

        areaEntregaData();
    }, []);

    //Consumo da API para exclusão de um frete area de entrega
    const handleDeleteFrete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/v1/saveeats/frete/area/entrega/id/${id}`);
            const updatedFrete = areaEntrega.filter((areaEntrega) => areaEntrega.id !== id);
            setAreaEntrega(updatedFrete)
            console.log(id)
        } catch (error) {
            console.error("Erro ao tentar excluir:", error);
        }
    };

    const [isEditing, setIsEditing] = useState(false);
    const [entregaEmEdicao, setEntregaEmEdicao] = useState(null);

    const handleEditEntrega = (areasEntrega) => {
        setIsEditing(true);
        setEntregaEmEdicao(areasEntrega);
        setOpenModal(true);
    };

    const handleUpdateEntrega = (entregaAtualizada) => {
        console.log(entregaAtualizada);
        setAreaEntrega((areasEntrega) => {
            const areaEntregaAtualizada = areasEntrega.map((areaEntrega) => {
                if (areaEntrega.area_entrega_id === entregaAtualizada.area_entrega_id) {
                    return entregaAtualizada;
                }
                return areaEntrega;
            });
            console.log(areaEntregaAtualizada);
            return areaEntregaAtualizada;
        });
    };

    const atualizarRaioEntrega = {
        id_restaurante: idRestaurante,
        raio_entrega: raioEntrega
    }

    const atualizarDados = async () => {
        try {
            const response = await axios.put("http://localhost:3000/v1/saveeats/restaurante/raio-entrega", atualizarRaioEntrega)

            if (response.status === 200) {
                console.log("Raio de Entrega editado com sucesso");
                console.log(response);
                console.log(atualizarRaioEntrega);
            } else {
                console.error("Falha ao editar.");
                console.log(response)
            }

        } catch (error) {
            console.error("Erro ao editar:", error);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            atualizarDados();
        }
    };

    return (

        <div>

            <div className="container-area-entrega">

                <div className="container-left-area-entrega">

                    <MenuNavigation></MenuNavigation>

                </div>

                <div className="container-rigth-area-entrega">

                    <HeaderPages title="Áreas de entrega" text="A seção de áreas de entrega é onde você define suas preferências de entrega"></HeaderPages>

                    <div className="container-input-area-entrega">

                        <span className="text-input-area-entrega">Raio de entrega</span>

                        <input
                            type="text"
                            className="input-area-entrega"
                            onKeyUp={handleKeyPress}
                            value={raioEntrega}
                            onChange={(event) => setRaioEntrega(event.target.value)}
                        />

                    </div>

                    <div className="container-taxas-tempo">

                        <span className="title-taxas-tempo">Taxas e tempo</span>

                        <span className="text-definir-taxas-tempo">Defina a taxa de entrega e o tempo para cada área.</span>

                    </div>

                    <div className="container-alcance-taxas-tempo">

                        <div className="title-alcance-tempo-taxa">

                            <span className="title-alcance">Alcance</span>
                            <span className="title-taxas">Taxa</span>
                            <span className="title-tempo">Tempo</span>

                        </div>

                        <div className="container-infos">
                            {areaEntrega ? (
                                areaEntrega.map((areaEntrega, index) => (
                                    <InputTaxaTempo
                                        key={index}
                                        id={areaEntrega.area_entrega_id}
                                        raio_entrega={areaEntrega.raio_entrega}
                                        km={areaEntrega.km}
                                        taxa={areaEntrega.valor_entrega}
                                        tempo={areaEntrega.tempo_entrega}
                                        onDelete={handleDeleteFrete}
                                        onEdit={() => handleEditEntrega(areaEntrega)}
                                    />
                                ))
                            ) : (
                                <div className="nenhuma-area-entrega">
                                    <p>Nenhuma área de entrega encontrada.</p>
                                    <p>Clique no botão para adicionar suas preferências de entrega.</p>
                                </div>
                            )}
                        </div>

                    </div>

                    <div className="container-button-area-entrega">

                        <button className="button-area-entrega" onClick={() => setOpenModal(true)}>Adicionar área de entrega</button>
                        <ModalFreteAreaEntrega
                            isOpenModal={openModal}
                            setModalOpenModalAreaEntrega={() => setOpenModal(!openModal)}
                            onCreateAreaEntrega={(novaAreaEntrega) => { setAreaEntrega([...areaEntrega, novaAreaEntrega]) }}
                            onUpdateAreaEntrega={handleUpdateEntrega}
                            isEditing={isEditing}
                            AreaEntregaEmEdicao={entregaEmEdicao}
                            AreaEntregas={areaEntrega}
                        ></ModalFreteAreaEntrega>
                    </div>

                </div>

            </div>

        </div>

    )
}