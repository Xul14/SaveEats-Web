import React, { useState, useEffect } from "react";
import axios from 'axios';

//Css e components
import "./HorarioDiaSemana.css";
import { TresPontos } from "../TresPontos/TresPontos"

export function HorarioDiaSemana({ id, diaSemana, inicio, termino, onEdit, onDelete, horariosFuncionamento }) {

  const handleDeleteClick = () => {
    console.log(id);
  };

  const handleEditClick = () => {
    const horarioExistente = horariosFuncionamento.find((item) => item.dia_semana === diaSemana);
    onEdit({
      id: horarioExistente ? horarioExistente.id : null,
      diaSemana,
      inicio,
      termino,
      isEditing: !!horarioExistente
    });
  };

  return (
    <div className="dia-semana-container">

      <div className="dia-semana-item">

        <div className="dia-semana-rows">

          <div className="div-dia-da-semana">
            <p className="dia-da-semana">{diaSemana}</p>
          </div>

          <p className="horario-inicio-termino">{inicio}</p>
          <p className="horario-inicio-termino">{termino}</p>

          <TresPontos onDelete={handleDeleteClick} onEdit={handleEditClick}></TresPontos>

        </div>

      </div>
    </div>

  );
}
