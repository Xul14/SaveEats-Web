import React from "react";

import "./ButtonPausadoAtivo.css"

export function ButtonPausadoAtivo({ text, background }) {
    return (
        <>

            <button style={{backgroundColor: background }}  className="button-pausado-ativo">
                {text}
            </button>

        </>
    )
}