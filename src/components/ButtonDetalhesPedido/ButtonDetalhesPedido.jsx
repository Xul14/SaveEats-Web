//Import React
import React from "react";

//Import css e components
import "./ButtonDetalhesPedido.css"

export function ButtonDetalhesPedido({ text, background }) {
    return (
        <>

            <button style={{ background }} className="botao-detalhes-pedido">{text}</button>

        </>
    )
}