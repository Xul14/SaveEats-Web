//Import React
import React, { useState } from "react";

//Import css, img e components
import { ModalDelete } from "../ModalDelete/ModalDelete"
import tresPontos from "./img/tres-pontos.png"
import "./TresPontos.css"

export function TresPontos() {
    //Modal para deletar um item
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`container-tres-pontos ${menuOpen ? 'open' : ''}`}>

            <button onClick={toggleMenu} className="toggle-button">
                <img src={tresPontos} alt="Três pontos" className="tres-pontos" />
            </button>

            {menuOpen && (

                <ul className="lista">
                    <li>Editar</li>
                    <li onClick={() => setOpenModalDelete(true)}>Excluir</li>
                    <ModalDelete isOpenModal={openModalDelete} setModalOpenDelete={() => setOpenModalDelete(!openModalDelete)}></ModalDelete>
                </ul>

            )}
        </div>
    );
}