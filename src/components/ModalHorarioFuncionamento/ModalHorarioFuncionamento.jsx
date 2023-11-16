import React, { useState, useEffect } from "react";

export function ModalHorarioFuncionamento({ data, onSave }) {
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
    };

    return (
        <div className={`modal ${data.id ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={() => onSave({})}>&times;</span>
                <h2>{data.isEditing ? "Editar" : "Adicionar"} Horário</h2>
                <form>
                    <label htmlFor="diaSemana">Dia da semana:</label>
                    <input
                        type="text"
                        name="diaSemana"
                        value={formData.diaSemana}
                        onChange={handleInputChange}
                        readOnly={data.isEditing}
                    />
                    <label htmlFor="inicio">Início:</label>
                    <input
                        type="text"
                        name="inicio"
                        value={formData.inicio}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="termino">Término:</label>
                    <input
                        type="text"
                        name="termino"
                        value={formData.termino}
                        onChange={handleInputChange}
                    />
                    <button type="button" onClick={handleSave}>
                        {data.isEditing ? "Salvar Alterações" : "Adicionar"}
                    </button>
                </form>
            </div>
        </div>
    );
}
