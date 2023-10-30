//import React
import React from "react";

//import css
import './ModalCancelPedido.css'

export function ModalCancelPedido({ isOpenModal, setModalOpen, onConfirm }) {

  const handleConfirm = async () => {
    onConfirm()
    setModalOpen(true);
    console.log("clicou");
  }

  if (isOpenModal) {
    return (

      <div className="background-modal">

        <div className="modal-cancelar-pedido">

          <div className="cancelar-pedido-item">

            <div className="header-cancelar-pedido">

              <div className="title-container-cancelar-pedido">
                <span className="title-modal-cancelar-pedido">Cancelar Pedido</span>
              </div>

              <div className="closeModal" style={{ cursor: 'pointer' }} onClick={setModalOpen}>x</div>

            </div>

            <div className="body-cancelar-pedido-modal">
              <span className="message-cancelar-pedido">Tem certeza de que deseja cancelar este pedido?</span>
              <button className="btn-sim" onClick={handleConfirm}>Sim</button>
              <button className="btn-nao" onClick={setModalOpen}>Não</button>
            </div>

          </div>

        </div>

      </div>

    )
  }

  return null
}