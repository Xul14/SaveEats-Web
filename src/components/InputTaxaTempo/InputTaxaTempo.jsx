//import react
import React from "react";

//import css e components
import './InputTaxaTempo.css'
import { InputTaxas } from "../InputTaxas/InputTaxas";
import { InputTempo } from "../InputTempo/InputTempo";
import { TresPontos } from "../TresPontos/TresPontos"

export function InputTaxaTempo({ id, km, taxa, tempo, raio_entrega, onDelete, onEdit }) {

    const handleDeleteClick = () => {
        onDelete(id)
    };

    const handleEditClick = () => {
        onEdit({
            id,
            km,
            taxa,
            tempo,
            raio_entrega
        });
    };

    // Função para formatar o preço substituindo '.' por ','
    const formatPrice = (price) => {
        return `R$ ${price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`.replace('.', ',');
    };

    return (
        <div className="alcance-taxa-tempo-item">

            <div className="container-alcance">
                <span className="text-km">{km}</span>
            </div>

            <div className="container-input-taxas">
                <input type="text" className="input-taxas" value={formatPrice(taxa)} readOnly></input>
            </div>

            <div className="container-input-tempo">
                <input type="time" className="input-tempo" value={tempo}></input>
            </div>

            <div className="container-tres-pontos">
                <TresPontos onDelete={handleDeleteClick} onEdit={handleEditClick}></TresPontos>
            </div>

        </div>
    )
}