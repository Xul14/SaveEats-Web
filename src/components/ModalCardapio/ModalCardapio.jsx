//Import React
import React from "react";

//Import css
import './ModalCardapio.css'
import arrow from './img/arrow.png'
import imageAdd from './img/addImage.png'

export function ModalCardapio({ isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <div className="background-modal">
        <div className="modal-cardapio">

          <div className="addItem">

            <div className="header-modal">

              <img src={arrow} className="arrow" style={{ cursor: 'pointer' }} onClick={setModalOpen} />

              <div className="title-container">
                <span className="title-modal">Novo Item</span>
              </div>

            </div>


            <div className="inputsModal">

              <div className="inputs-modal-left">

                <div className="input-span">

                  <span className="span-input-item">Categoria</span>

                  <select className="input-modal-select">

                    <option>Categoria</option>
                    <option>teste</option>
                    <option>teste</option>
                  </select>

                </div>

                <div className="input-span">

                  <span className="span-input-item">Status do Produto</span>

                  <select className="input-modal-select">
                    <option>Ativo</option>
                    <option>teste</option>
                    <option>teste</option>
                  </select>

                </div>

                <div className="input-span">
                  <span className="span-input-item">Nome do Produto</span>
                  <input type="text" className="input-modal" />
                </div>

                <div className="input-span">
                  <span className="span-input-item">Preço</span>
                  <input type="text" className="input-modal" />
                </div>
              </div>

              <div className="inputs-modal-right">

                <div className="input-span">
                  <span className="span-input-item-img center">Imagem do Produto</span>

                  <label>
                    <input type="image" src={imageAdd} className="input-modal-img"></input>
                    {/* Escolher foto na galeria */}
                  </label>
                </div>

              </div>

            </div>

            <div className="inputDesc-btn">

              <div className="input-span">
                <span className="span-input-item">Descrição do Produto</span>
                <input type="text" className="input-modal-desc" />
              </div>

              <button className="btn-criarItem" onClick={setModalOpen}>Criar Item</button>
            </div>

          </div>

        </div>
      </div>
    )
  }

  return null
}