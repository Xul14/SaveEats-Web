import React, { useState, useEffect } from "react";
import axios from 'axios';

//Css e components
import "./HorarioDiaSemana.css";
import { TresPontos } from "../TresPontos/TresPontos"

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
      } catch (error) {
        console.error('Erro ao obter dados dos dias da semana:', error);
      }
    }

    async function fetchHorariosFuncionamento() {
      try {
        const response = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/dia-horario-funcionamento/idRestaurante/${idRestaurante}`);
        const responseData = response.data.dias_horarios_funcionamento;
        console.log(responseData);
        setHorariosFuncionamento(responseData);
      } catch (error) {
        console.error('Erro ao obter dados dos horários de funcionamento:', error);
      }
    }

    fetchDiasSemana();
    fetchHorariosFuncionamento();
  }, []);

  const getHorarioPorDia = (dia, tipo) => {
    if (!horariosFuncionamento || horariosFuncionamento.length === 0) {
      return "-";
    }
    const horario = horariosFuncionamento.find((item) => item.dia_da_semana === dia);

    if (!horario) {
      return "-";
    }

    return tipo === "inicio" ? horario.horario_inicio : horario.horario_final;
  };

  return (
    <div className="dia-semana-container">
      <div className="inicio-termino">
        <p className="text-dia-semana">Dia da semana</p>
        <p className="text-inicio-termino">Início</p>
        <p className="text-inicio-termino">Término</p>
      </div>

      <div className="dia-semana-item">

        {diasSemana.map((dia, index) => (
          <div key={index} className="dia-semana-rows">

            <div className="div-dia-da-semana">
              <p className="dia-da-semana">{dia.dia_semana}</p>
            </div>

            <p className="horario-inicio-termino">{getHorarioPorDia(dia.dia_semana, "inicio")}</p>
            <p className="horario-inicio-termino">{getHorarioPorDia(dia.dia_semana, "termino")}</p>
            
              <TresPontos></TresPontos>

          </div>
        ))}
      </div>

    </div>

  );
}
