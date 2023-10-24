//Import React
import React from "react";

//Import css e components
import "./PerfilPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";

export function PerfilPage() {
    return (
        <div>
            <div className="container-perfil">

                <div className="container-left-perfil">
                    <MenuNavigation></MenuNavigation>
                </div>

                <div className="container-rigth-perfil">

                </div>
            </div>
        </div>
    )
}