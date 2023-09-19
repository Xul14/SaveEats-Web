//Import React
import React from "react";

//Import css e components
import  "./CardapioPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";

export function CardapioPage(){
    return(
        <div>

            <div className="container-cardapio">

                <div className="container-left-cardapio">

                <MenuNavigation></MenuNavigation>

                </div>

                <div className="container-rigth-cardapio">

                    <HeaderPages></HeaderPages>

                </div>

            </div>

        </div>
    )
}