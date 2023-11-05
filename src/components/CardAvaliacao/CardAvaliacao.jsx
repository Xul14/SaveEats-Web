//import react
import React from "react";

//import css e outros
import "./CardAvaliacao.css"
import img from "../../pages/Menu/AvaliacaoPage/img/estrelas.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export function CardAvaliacao({ imgCliente, nomeCliente, avaliacaoCliente, dataAvaliacao, classificacao }) {

    const estrelasPreenchidas = Array.from({ length: classificacao }).map((_, index) => (
        <FontAwesomeIcon
            icon={faStar}
            key={index}
            className="star-filled"
        />
    ));
    const estrelasVazias = Array.from({ length: 5 - classificacao }).map((_, index) => (
        <FontAwesomeIcon
            icon={faStar}
            key={index}
            className="star-empty"
        />
    ));

    return (
        <div className="card-avaliacao-cliente">

            <img className="img-cliente" src={imgCliente} alt="Imagem do cliente" />

            <div className="avaliacao-cliente">

                <p className="nome-cliente-av">{nomeCliente}</p>

                <div className="estrelas-num">

                    <p className="nota-av">{classificacao},00</p>
                    {estrelasPreenchidas}
                    {estrelasVazias}

                </div>

                <p className="resposta-av">{avaliacaoCliente}.</p>

            </div>

            <p className="data-av">{dataAvaliacao}</p>

        </div>
    )
}
