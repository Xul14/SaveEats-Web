//Import React
import React from "react";

//Import css e components
import "./AreasEntregaPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { InputTaxas } from "../../../components/InputTaxas/InputTaxas";
import { InputTempo } from "../../../components/InputTempo/InputTempo";

export function AreasEntregaPage() {
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

                        <div className="container-alcance">

                            <span className="title-alcance">Alcance</span>

                            <span className="text-km">Até 1km</span>

                            <span className="text-km">Até 2km</span>

                            <span className="text-km">Até 3km</span>

                            <span className="text-km">Até 4km</span>

                        </div>

                        <div className="container-taxas">

                            <span className="title-taxas">Taxa</span>

                            <div className="container-input-taxas">

                                <InputTaxas></InputTaxas>

                                <InputTaxas></InputTaxas>

                                <InputTaxas></InputTaxas>

                                <InputTaxas></InputTaxas>

                            </div>

                        </div>

                        <div className="container-tempo">

                            <span className="title-tempo">Tempo</span>

                            <div className="container-input-tempo">

                                <InputTempo></InputTempo>

                                <InputTempo></InputTempo>

                                <InputTempo></InputTempo>

                                <InputTempo></InputTempo>

                            </div>

                        </div>


                    </div>

                    <div className="container-button-area-entrega">

                        <button className="button-area-entrega">Salvar área de entrega</button>

                    </div>

                </div>

            </div>

        </div>

    )
}