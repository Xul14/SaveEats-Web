//Import React
import React, { useState, useEffect } from "react";
import axios from 'axios';

//Import css e components
import "./HorarioFuncionamentoPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { CalendarFuncionamento } from '../../../components/CalendarFuncionamento/CalendarFuncionamento'
import { HorarioDiaSemana } from "../../../components/HorarioDiaSemana/HorarioDiaSemana";
import { ModalHorarioFuncionamento } from "../../../components/ModalHorarioFuncionamento/ModalHorarioFuncionamento";

export function HorarioFuncionamentoPage() {

    const idRestaurante = localStorage.getItem("id");

    const [diasSemana, setDiasSemana] = useState([]);
    const [horariosFuncionamento, setHorariosFuncionamento] = useState([]);
    const [modalData, setModalData] = useState({
        id: null,
        diaSemana: "",
        inicio: "",
        termino: "",
        isEditing: false
    });

    const handleCloseModal = () => {
        setModalData({
          id: null,
          diaSemana: "",
          inicio: "",
          termino: "",
          isEditing: false
        });
      };;

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
        const horario = horariosFuncionamento.find((item) => item.dia_semana === dia);
    
        if (!horario) {
            return "-";
        }
    
        return tipo === "inicio" ? horario.horario_inicio : horario.horario_final;
    };

    const handleEdit = ({ id, diaSemana, inicio, termino, isEditing }) => {
        setModalData({
            id,
            diaSemana,
            inicio,
            termino,
            isEditing
        });
    };

    const handleSaveModal = async (data) => {
        if (data.id) {
            console.log("edição");
            console.log(modalData);
        } else {
            console.log("criar");
        }
    };

    console.log(horariosFuncionamento);

    return (
        <div>
            <div className="container-horario-funcionamento">

                <div className="container-left-horario-funcionamento">
                    <MenuNavigation></MenuNavigation>
                </div>

                <div className="container-rigth-horario-funcionamento">
                    <HeaderPages title="Horario de funcionamento" text="Defina seus horários de funcionamento em cada dia da semana aqui. "></HeaderPages>

                    <div className="calendario">
                        <CalendarFuncionamento></CalendarFuncionamento>
                    </div>

                    <div className="container-horarios-funcionamento">

                        <div className="inicio-termino">
                            <p className="text-dia-semana">Dia da semana</p>
                            <p className="text-inicio-termino">Início</p>
                            <p className="text-inicio-termino">Término</p>
                        </div>

                        {diasSemana.map((dia, index) => (
                             <HorarioDiaSemana
                             key={index}
                             id={dia.id}
                             diaSemana={dia.dia_semana}
                             inicio={getHorarioPorDia(dia.dia_semana, "inicio")}
                             termino={getHorarioPorDia(dia.dia_semana, "termino")}
                             onEdit={handleEdit}
                             horariosFuncionamento={horariosFuncionamento} 
                         />
                        ))}
                    </div>
                </div>
            </div>
            {modalData.isEditing && (
            <ModalHorarioFuncionamento
                data={modalData}
                onSave={handleSaveModal}
                onClose={handleCloseModal}
            />
        )}
        </div>
    )
}