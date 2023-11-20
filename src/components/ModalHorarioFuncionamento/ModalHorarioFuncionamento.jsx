import React, { useState, useEffect } from "react";
import "./ModalHorarioFuncionamento.css"

export function ModalHorarioFuncionamento({ data, onSave, onClose, onSaveSuccess }) {

    const handleClose = () => {
        onClose()
    }

    const [formData, setFormData] = useState({
        id: data.id,
        diaSemana: data.diaSemana,
        inicio: data.inicio,
        termino: data.termino
    });

    useEffect(() => {
        setFormData({
            id: data.id,
            diaSemana: data.diaSemana,
            inicio: data.inicio,
            termino: data.termino
        });
    }, [data]);

    console.log(formData);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSave = () => {
        onSave(formData);
        onSaveSuccess()
    };

    return (

        <div className="background-modal">

            <div className={`modal-horario-funcionamento ${data.isEditing ? 'open' : ''}`}>

                <div className="add-item-horario-funcionamento">

                    <span className="closeModalFuncionamento" onClick={handleClose}>&times;</span>

                    <div className="body-horario-funcionamento-modal">

                        <div className="title-horario-funcionamento">
                            <span className="title-horario-funcionamento-item">Dia da semana</span>
                            <span className="title-horario-funcionamento-item">Início</span>
                            <span className="title-horario-funcionamento-item">Término</span>
                        </div>

                        <div className="inputs-add-horario-funcionamento">

                            <div className="container-input-horario">

                                <input
                                    className="inputs-horarios-edit dia-input"
                                    type="text"
                                    name="diaSemana"
                                    value={formData.diaSemana}
                                    onChange={handleInputChange}
                                    readOnly={data.isEditing}
                                    disabled={true}
                                />
                            </div>

                            <div className="container-input-horario">
                                <input
                                    className="inputs-horarios-edit"
                                    type="time"
                                    name="inicio"
                                    value={formData.inicio}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="container-input-horario">
                                <input
                                    className="inputs-horarios-edit"
                                    type="time"
                                    name="termino"
                                    value={formData.termino}
                                    onChange={handleInputChange}
                                />
                            </div>

                        </div>

                    </div>

                    <div className="btn-criar-horario-funcionamento">
                        <button type="button" className="btn-salvar-horario" onClick={handleSave}>
                            {data.isEditing ? "Salvar Alterações" : "Adicionar"}
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}
