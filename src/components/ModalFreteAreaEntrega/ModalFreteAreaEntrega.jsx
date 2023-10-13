//import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//import css
import './ModalFreteAreaEntrega.css'

export function ModalFreteAreaEntrega({ isOpenModal, setModalOpenModalAreaEntrega, onCreateAreaEntrega }) {

    // const [idAreaEntrega, setAreaEntrega] = useState('');
    const [km, setKm] = useState('');
    const [taxa, setTaxa] = useState('');
    const [tempo, setTempo] = useState('');
    const [raioEntrega, setRaioEntrega] = useState();

    const idRestaurante = localStorage.getItem("id");

    useEffect(() => {
        async function getRaioEntrega(idRestaurante) {
            try {
                const response = await axios.get(`http://localhost:8080/v1/saveeats/restaurante/raio-entrega/idRestaurante/${idRestaurante}`)
                const responseData = response.data.raio_entrega_do_restaurante
                console.log(response.data.raio_entrega_do_restaurante[0].raio_entrega);
                setRaioEntrega(responseData)
            } catch (error) {
                console.error('Erro ao obter dados da API:', error)
            }
        }
        getRaioEntrega(idRestaurante)
    }, [])

    const raio = raioEntrega && raioEntrega.length > 0 ? raioEntrega[0].raio_entrega : 0;

    const novaAreaEntrega = {
        restaurante_id: idRestaurante,
        km: km,
        valor_entrega: taxa,
        tempo_entrega: tempo,
        raio_entrega: raio
    };
    

    //Post de uma nova área de entrega
    const handleCreateAreaEntrega = async () => {
        try {
            const response = await axios.post("http://localhost:8080/v1/saveeats/restaurante/frete-area-entrega", novaAreaEntrega)

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
            console.log(novaAreaEntrega);
        }
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