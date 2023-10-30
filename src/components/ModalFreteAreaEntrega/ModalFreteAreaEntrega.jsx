//import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//import css
import './ModalFreteAreaEntrega.css'

export function ModalFreteAreaEntrega({ isOpenModal, setModalOpenModalAreaEntrega, onCreateAreaEntrega, onUpdateAreaEntrega, AreaEntregaEmEdicao }) {

    const [km, setKm] = useState('');
    const [taxa, setTaxa] = useState('');
    const [tempo, setTempo] = useState('');
    const [raioEntrega, setRaioEntrega] = useState();
    const [idAreaEntrega, setIdAreaEntrega] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const idRestaurante = localStorage.getItem("id");

    const resetForm = () => {
        setKm('');
        setTaxa('');
        setTempo('');
        setRaioEntrega('');
        setIdAreaEntrega('');
        setIsEditing(false);
    };

    useEffect(() => {
        if (AreaEntregaEmEdicao) {
            setIdAreaEntrega(AreaEntregaEmEdicao.area_entrega_id);
            setKm(AreaEntregaEmEdicao.km);
            setTaxa(AreaEntregaEmEdicao.valor_entrega);
            setTempo(AreaEntregaEmEdicao.tempo_entrega);
            setRaioEntrega(AreaEntregaEmEdicao.raio_entrega);
            setIsEditing(true);
        }
    }, [AreaEntregaEmEdicao]);


    // useEffect(() => {
    //     async function getRaioEntrega(idRestaurante) {
    //         try {
    //             const response = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/raio-entrega/idRestaurante/${idRestaurante}`)
    //             const responseData = response.data.raio_entrega_do_restaurante
    //             setRaioEntrega(responseData)
    //         } catch (error) {
    //             console.error('Erro ao obter dados da API:', error)
    //         }
    //     }
    //     getRaioEntrega(idRestaurante)
    // }, [])

    useEffect(() => {
        async function areaEntregaData() {
            try {
                const areaEntregaResponse = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/frete-area-entrega/idRestaurante/${idRestaurante}`);
                const areaEntregaData = areaEntregaResponse.data.frete_area_entrega_do_restaurante;
                
                if (areaEntregaData[0] && areaEntregaData[0].raio_entrega) {
                    setRaioEntrega(areaEntregaData[0].raio_entrega);
                }
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        }

        areaEntregaData();
    }, []);

    const raio = raioEntrega && raioEntrega.length > 0 ? raioEntrega[0].raio_entrega : 1;
    // const taxaFormatada = taxa.replace(',', '.');

    const novaAreaEntrega = {
        restaurante_id: idRestaurante,
        area_entrega_id: idAreaEntrega,
        km: km,
        valor_entrega: taxa,
        tempo_entrega: tempo,
        raio_entrega: raio
    };


    //Post de uma nova área de entrega
    const handleCreateAreaEntrega = async () => {
        console.log(novaAreaEntrega);

        if (isEditing) {
            try {
                const response = await axios.put(
                    `http://localhost:3000/v1/saveeats/frete/area/entrega/id/${idAreaEntrega}`,
                    novaAreaEntrega,
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                )

                if (response.status === 200) {
                    console.log("Area de Entrega editada com sucesso");
                    onUpdateAreaEntrega(novaAreaEntrega)
                    setModalOpenModalAreaEntrega(false)
                    setIsEditing(false)
                } else {
                    console.error("Falha ao editar.");
                    console.log(response)
                }

            } catch (error) {
                const response = await axios.put(`http://localhost:3000/v1/saveeats/frete/area/entrega/id/${idAreaEntrega}`)
                console.log(response);
                console.error("Erro ao editar:", error);
            }
        } else {
            try {
                const response = await axios.post("http://localhost:3000/v1/saveeats/restaurante/frete-area-entrega", novaAreaEntrega)

                if (response.status === 201) {
                    console.log("Criado com sucesso!");
                    onCreateAreaEntrega(novaAreaEntrega);
                    setModalOpenModalAreaEntrega(false);
                } else {
                    console.error("Falha ao tentar criar.");
                    console.log(novaAreaEntrega);
                    setModalOpenModalAreaEntrega(false)
                }
            } catch (error) {
                console.error("Erro ao criar uma nova área de entrega:", error);
                setModalOpenModalAreaEntrega(false)
                console.log(novaAreaEntrega);
            }
        }

        resetForm()
    }

    if (isOpenModal) {
        return (

            <div className="background-modal">

                <div className="modal-area-entrega">

                    <div className="add-item-area-entrega">

                        <div className="closeModal" style={{ cursor: 'pointer' }} onClick={setModalOpenModalAreaEntrega}>x</div>

                        <div className="body-area-entrega-modal">

                            <div className="title-areas-entrega">
                                <span className="title-alcance">Alcance</span>
                                <span className="title-taxas">Taxa</span>
                                <span className="title-tempo">Tempo</span>
                            </div>

                            <div className="inputs-add-area-entrega">

                                <div className="container-alcance">
                                    <input type="text" className="text-km" value={km} onChange={(e) => setKm(e.target.value)}></input>
                                </div>

                                <div className="container-input-taxas">
                                    <input type="text" className="input-taxas" value={taxa} onChange={(e) => setTaxa(e.target.value)}></input>
                                </div>

                                <div className="container-input-tempo">
                                    <input type="time" className="input-tempo" value={tempo} onChange={(e) => setTempo(e.target.value)}></input>
                                </div>

                            </div>

                        </div>

                        <div className="btn-criar-area-entrega">
                            <button className="btn-salvar" onClick={handleCreateAreaEntrega}>Salvar</button>
                        </div>

                    </div>

                </div>

            </div>

        )
    }

    return null
}