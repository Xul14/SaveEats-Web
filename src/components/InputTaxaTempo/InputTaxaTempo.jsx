//import react
import React from "react";

//import css e components
import './InputTaxaTempo.css'
import { InputTaxas } from "../InputTaxas/InputTaxas";
import { InputTempo } from "../InputTempo/InputTempo";
import { TresPontos } from "../TresPontos/TresPontos"

export function InputTaxaTempo({ id, km, taxa, tempo, onDelete }) {

    const handleDeleteClick = () => {
        onDelete(id)
    };

    return (
        <div className="alcance-taxa-tempo-item">

            <div className="container-alcance">
                <span className="text-km">{km}</span>
            </div>

            <div className="container-input-taxas">
                <input type="text" className="input-taxas"value={`R$ ${taxa}`} readOnly></input>
            </div>

            <div className="container-input-tempo">
                <input type="time" className="input-tempo" value={tempo}></input>
            </div>

            <div className="container-tres-pontos">
                <TresPontos onDelete={handleDeleteClick}></TresPontos>
            </div>

        </div>
    )
}