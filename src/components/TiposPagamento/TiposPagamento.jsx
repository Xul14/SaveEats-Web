import React from "react";

import "./TiposPagamento.css"

export function TiposPagamento({ imgFormaPagamento, nomeFormaPagamento }) {
    return (

        <>

            <div className="container-tipos-formas-pagamento">

                <input type="checkbox" className="checkbox-tipo-pagamento" />

                <img src={imgFormaPagamento} alt="Forma de pagamento" className="tipo-pagamento" />

                <span className="text-forma-pagamento">{nomeFormaPagamento}</span>

            </div>

        </>

    )
}