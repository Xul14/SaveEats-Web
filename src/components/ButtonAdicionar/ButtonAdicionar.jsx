import React from "react";

import "./ButtonAdicionar.css"

export function ButtonAdicionar({ text, background, onClick }) {
    return (
        <>

            <button style={{backgroundColor: background }} onClick={onClick} className="button-adicionar">
                <i className="fa-solid fa-plus"></i>
                {text}
            </button>

        </>
    )
}