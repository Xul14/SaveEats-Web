//Import React
import React from "react";

//Import css e components
import "./ButtonDetalhesPedido.css"

export function ButtonDetalhesPedido({ text, background, onClick }) {
    return (
        <>

            <button style={{ background }} onClick={onClick} className="botao-detalhes-pedido">{text}</button>

        </>
    )
}