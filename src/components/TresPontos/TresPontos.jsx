import React, { useState} from "react";
import "./TresPontos.css"
import tresPontos from "./img/tres-pontos.png"

export function TresPontos() {
    const [mostrarLista, setMostrarLista] = useState(false);

    const toggleLista = () => {
        setMostrarLista(!mostrarLista);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {setMostrarLista(false);}, 200000); 
      };

    return (
        <div className="container-tres-pontos" onMouseLeave={handleMouseLeave}>
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