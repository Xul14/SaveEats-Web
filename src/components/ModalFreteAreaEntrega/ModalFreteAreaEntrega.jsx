//import React
import React, { useState, useEffect } from "react";

//import css
import './ModalFreteAreaEntrega.css'

export function ModalFreteAreaEntrega({ isOpenModal, setModalOpenModalAreaEntrega }) {

    const [km, setKm] = useState('');
    const [taxa, setTaxa] = useState('');
    const [tempo, setTempo] = useState('');

    const handleConfirm = () => {
        setModalOpenModalAreaEntrega(false)
    };

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
                                    <input type="text" className="input-taxas" value={`R$ ${taxa}`} readOnly onChange={(e) => setTaxa(e.target.value)}></input>
                                </div>

                                <div className="container-input-tempo">
                                    <input type="time" className="input-tempo" value={tempo} onChange={(e) => setTempo(e.target.value)}></input>
                                </div>

                            </div>

                        </div>

                        <div className="btn-criar-area-entrega">
                            <button className="btn-salvar" onClick={handleConfirm}>Salvar</button>
                        </div>

                    </div>

                </div>

            </div>

        )
    }

    return null
}