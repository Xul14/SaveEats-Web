//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./AreasEntregaPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { InputTaxas } from "../../../components/InputTaxas/InputTaxas";
import { InputTempo } from "../../../components/InputTempo/InputTempo";
import { InputTaxaTempo } from "../../../components/InputTaxaTempo/InputTaxaTempo";

export function AreasEntregaPage() {

    const idRestaurante = localStorage.getItem("id");

    const [areaEntrega, setAreaEntrega] = useState([]);

    useEffect(() => {
        async function areaEntregaData() {
            try {
                const areaEntregaResponse = await axios.get(`http://localhost:8080/v1/saveeats/restaurante/frete-area-entrega/idRestaurante/${idRestaurante}`);
                const areaEntregaData = areaEntregaResponse.data.frete_area_entrega_do_restaurante;
                console.log(areaEntregaResponse);
                console.log(areaEntregaData);
                setAreaEntrega(areaEntregaData)
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        }

        areaEntregaData();
    }, []);

      //Consumo da API para exclusão de um frete area de entrega
      const handleDeleteFrete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/v1/saveeats/frete/area/entrega/id/${id}`);
            const updatedFrete = areaEntrega.filter((areaEntrega) => areaEntrega.id !== id);
            setAreaEntrega(updatedFrete)
            console.log(id)
        } catch (error) {
            console.error("Erro ao tentar excluir:", error);
        }
    };

    return (

        <div>

            <div className="container-area-entrega">

                <div className="container-left-area-entrega">

                    <MenuNavigation></MenuNavigation>

                </div>

                <div className="container-rigth-area-entrega">

                    <HeaderPages title="Áreas de entrega" text="A seção de áreas de entrega é onde você define suas preferências de entrega"></HeaderPages>

                    <div className="container-input-area-entrega">

                        <span className="text-input-area-entrega">Raio de entrega</span>

                        <select name="Categoria" className="input-area-entrega">
                            <option></option>
                            <option>teste</option>
                            <option>teste</option>
                        </select>

                    </div>

                    <div className="container-taxas-tempo">

                        <span className="title-taxas-tempo">Taxas e tempo</span>

                        <span className="text-definir-taxas-tempo">Defina a taxa de entrega e o tempo para cada área.</span>

                    </div>

                    <div className="container-alcance-taxas-tempo">

                        <div className="title-alcance-tempo-taxa">

                            <span className="title-alcance">Alcance</span>
                            <span className="title-taxas">Taxa</span>
                            <span className="title-tempo">Tempo</span>

                        </div>

                        <div className="container-infos">
                            {areaEntrega.map((areaEntrega, index) => (
                                <InputTaxaTempo
                                key={index}
                                id={areaEntrega.area_entrega_id}
                                km={areaEntrega.km}
                                taxa={areaEntrega.valor_entrega}
                                tempo={areaEntrega.tempo_entrega}
                                onDelete={handleDeleteFrete}
                                />
                            ))}
                        </div>

                    </div>

                    <div className="container-button-area-entrega">

                        <button className="button-area-entrega">Adicionar área de entrega</button>

                    </div>

                </div>

            </div>

        </div>

    )
}