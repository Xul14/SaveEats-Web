//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import './CardapioItem.css'
import { ButtonPausadoAtivo } from "../ButtonPausadoAtivo/ButtonPausadoAtivo";
import { TresPontos } from "../TresPontos/TresPontos";

export function CardapioItem({ id, imgProduto, nomeProduto, precoProduto, statusProduto, categoriaProduto, descricaoProduto, onDelete, onEdit }) {

    const handleDeleteClick = () => {
        onDelete(id)
    };
    const handleEditClick = () => {
        onEdit({
            id,
            nomeProduto,
            descricaoProduto,
            imgProduto,
            precoProduto,
            statusProduto,
            categoriaProduto,
        });
    };

    const [buttonStyles, setButtonStyles] = useState({ ativo: '#E3E9DD', pausado: '#E3E9DD' });
    const [statusId, setStatusId] = useState(statusProduto);


    useEffect(() => {
        async function fetchButtonStyles() {
            try {
                let pausadoColor, ativoColor;

                if (statusId === 1) { 
                    pausadoColor = '#90AE6E';
                    ativoColor = '#E3E9DD';
                } else if (statusId === 2) { 
                    pausadoColor = '#E3E9DD';
                    ativoColor = '#90AE6E';
                } else {
                    pausadoColor = '#E3E9DD';
                    ativoColor = '#E3E9DD';
                }

                const pausado = pausadoColor;
                const ativo = ativoColor;

                setButtonStyles({ pausado, ativo });
            } catch (error) {
                console.error("Erro ao obter nome do status:", error);
                setButtonStyles({ pausado: '#E3E9DD', ativo: '#E3E9DD' });
            }
        }

        fetchButtonStyles();
    }, [statusId]);

    return (
        <div className="container-produto-item">

            <div className="container-imagem-produto">
                <img src={imgProduto} alt="" className="imagem-produto" />
            </div>

            <div className="container-nome-produto">
                <span className="nome-produto">{nomeProduto}</span>
            </div>

            <div className="container-preco-produto">
                <span className="preco-produto">R${precoProduto}</span>
            </div>

            <div className="container-status-produto">
                <div className="container-button-ativo-pausado">
                    <ButtonPausadoAtivo background={buttonStyles.pausado} text="Pausado"></ButtonPausadoAtivo>
                    <ButtonPausadoAtivo background={buttonStyles.ativo} text="Ativo"></ButtonPausadoAtivo>
                </div>
            </div>

            <div className="container-options">
                <TresPontos onEdit={handleEditClick} onDelete={handleDeleteClick}></TresPontos>
            </div>

        </div>
    )
}