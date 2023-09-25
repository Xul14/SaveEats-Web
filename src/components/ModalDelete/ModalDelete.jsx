//import React
import React from "react";

//import css
import './ModalDelete.css'

export function ModalDelete({ isOpenModal, setModalOpenDelete }) {
  if (isOpenModal) {
    return (

      <div className="background-modal">

        <div className="modal-delete">

          <div className="delete-item">

            <div className="header-delete">

              <div className="title-container-delete">
                <span className="title-modal-delete">Deletar Item</span>
              </div>

              <div className="closeModal" style={{ cursor: 'pointer' }} onClick={setModalOpenDelete}>x</div>

            </div>

            <div className="body-delete-modal">
              <span className="message-delete">Tem certeza de que deseja excluir este item?</span>
              <button className="btn-sim">Sim</button>
              <button className="btn-nao" onClick={setModalOpenDelete}>Não</button>
            </div>

          </div>

        </div>

      </div>

    )
  }

  return null
}