import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./HorarioDiaSemana.css";

export function HorarioDiaSemana() {

  const idRestaurante = localStorage.getItem("id");

  const [diasSemana, setDiasSemana] = useState([]);
  const [horariosFuncionamento, setHorariosFuncionamento] = useState([]);

  useEffect(() => {
    async function fetchDiasSemana() {
      try {
        const response = await axios.get('http://localhost:3000/v1/saveeats/dia/semana');
        const responseData = response.data.dia_semana;
        setDiasSemana(responseData);
        console.log(responseData);
      } catch (error) {
        console.error('Erro ao obter dados dos dias da semana:', error);
      }
    }

    async function fetchHorariosFuncionamento() {
      try {
        const response = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/dia-horario-funcionamento/idRestaurante/${idRestaurante}`);
        const responseData = response.data.dias_horarios_funcionamento;
        setHorariosFuncionamento(responseData);
        console.log(responseData);
      } catch (error) {
        console.error('Erro ao obter dados dos horários de funcionamento:', error);
      }
    }

    fetchDiasSemana();
    fetchHorariosFuncionamento();
  }, []);

  const getHorarioPorDia = (dia, tipo) => {
    const horario = horariosFuncionamento.find((item) => item.dia_da_semana === dia);
    return horario ? (tipo === "inicio" ? horario.horario_inicio : horario.horario_final) : "-";
  };

  return (
    <div className="dia-semana-container">
      <div className="inicio-termino">
        <p></p>
        <p className="text-inicio-termino">Início</p>
        <p className="text-inicio-termino">Término</p>
        <p className="text-inicio-termino">Tempo total</p>
      </div>

      <div className="dia-semana-item">

        {diasSemana.map((dia, index) => (
          <div key={index} className="dia-semana-rows">
            <p className="dia-da-semana">{dia.dia_semana}</p>
            <p className="horario">{getHorarioPorDia(dia.dia_semana, "inicio")}</p>
            <p className="horario">{getHorarioPorDia(dia.dia_semana, "termino")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
