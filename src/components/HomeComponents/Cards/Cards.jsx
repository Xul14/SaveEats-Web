//Import dependências React
import React from "react";

//Import css
import "./Cards.css"

export function Cards({titleCard, numberCard}) {
    return (
        <div className="containers itens">

            <span className="title">{titleCard}</span>
            <span className="number">{numberCard}</span>

        </div>
    )
}