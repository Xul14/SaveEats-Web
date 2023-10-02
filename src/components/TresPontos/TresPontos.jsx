//Import React
import React, { useState, useEffect, useRef } from "react";

//Import css, img e components
import { ModalDelete } from "../ModalDelete/ModalDelete"
import tresPontos from "./img/tres-pontos.png"
import "./TresPontos.css"

export function TresPontos({ onEdit, onDelete }) {
    //Modal para deletar um item
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Fecha o menu quando ocorre um clique fora dele
    useEffect(() => {
      function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuOpen(false);
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleDeleteClick = () => {
        setOpenModalDelete(true);
    };

    const handleEditClick = () => {
        onEdit();
    };

    return (
        <div className={`container-tres-pontos ${menuOpen ? 'open' : ''}`}  ref={menuRef}>

            <button onClick={toggleMenu} className="toggle-button">
                <img src={tresPontos} alt="Três pontos" className="tres-pontos" />
            </button>

            {menuOpen && (

                <ul className="lista">
                    <li onClick={handleEditClick}>Editar</li>
                    <li onClick={handleDeleteClick}>Excluir</li>
                    <ModalDelete isOpenModal={openModalDelete} setModalOpenDelete={() => setOpenModalDelete(!openModalDelete)} onDelete={onDelete}></ModalDelete>
                </ul>

            )}
        </div>
    );
}