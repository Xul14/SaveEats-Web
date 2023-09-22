import React, { useState} from "react";
import "./TresPontos.css"
import tresPontos from "./img/tres-pontos.png"

export function TresPontos() {
    const [mostrarLista, setMostrarLista] = useState(false);

    const toggleLista = () => {
        setMostrarLista(!mostrarLista);
    };

    return (
        <div className="container-tres-pontos">
            <button className="botao" onClick={toggleLista}>
                <img src={tresPontos} alt="Três pontoa" className="tres-pontos"/>
            </button>
            {mostrarLista && (
                <ul className="lista">
                    <li>Editar</li>
                    <li>Excluir</li>
                </ul>
            )}
        </div>
    );
}