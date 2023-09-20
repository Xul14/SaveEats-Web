import React from "react";

import "./ButtonAdicionar.css"

export function ButtonAdicionar({ text, background }) {
    return (
        <>

            <button style={{backgroundColor: background }} className="button-adicionar">
                <i className="fa-solid fa-plus"></i>
                {text}
            </button>

        </>
    )
}