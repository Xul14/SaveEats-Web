//Import React
import React, { useState } from "react";

//Import css, img e components
import {ModalDelete} from "../ModalDelete/ModalDelete"
import tresPontos from "./img/tres-pontos.png"
import "./TresPontos.css"

export function TresPontos() {
    const [mostrarLista, setMostrarLista] = useState(false);

    const toggleLista = () => {
        setMostrarLista(!mostrarLista);
    };

    const handleMouseLeave = () => {
        setTimeout(() => { setMostrarLista(false); }, 3000);
    };

    //Modal para deletar um item
    const [openModalDelete, setOpenModalDelete] = useState(false)

    return (
        <div className="container-tres-pontos" onMouseLeave={handleMouseLeave}>
            <button className="botao" onClick={toggleLista}>
                <img src={tresPontos} alt="Três pontoa" className="tres-pontos" />
            </button>
            {mostrarLista && (
                <ul className="lista">
                    <li>Editar</li>
                    <li onClick={() => setOpenModalDelete(true)}>Excluir</li>
                    <ModalDelete isOpenModal={openModalDelete} setModalOpenDelete={() => setOpenModalDelete(!openModalDelete)}></ModalDelete>
                </ul>
            )}
        </div>
    );
}