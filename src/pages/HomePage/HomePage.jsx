//Import dependências React
import React from "react";

//Import css e components
import "./HomePage.css"
import { MenuNavigation } from "../../components/MenuNavigation/MenuNavigation";

export function HomePage() {
    return (
        <main>

            <div className="container-left-home">
                <MenuNavigation></MenuNavigation>
            </div>

            <div className="container-rigth-home">
                <p>Container direito</p>
            </div>

        </main>
    )
}