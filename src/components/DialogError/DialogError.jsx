import React from "react";
import './DialogError.css'

export function DialogError() {

    return (
        <dialog className="dialog-error active">
            <div className="card-dialog">
                <div className="dialog-header">
                    <h4 className="dialog-title">
                        Preencher
                    </h4>
                    <button className="close-dialog">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <p className="dialog-message">
                    Qual deles gostaria de preencher primeiro?
                </p>
                <div className="btn-close-modal">
                    <button className="btn-close">
                        Registro de tempo
                    </button>
                </div>
            </div>
        </dialog>
    )
}