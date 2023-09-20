//Import React e dependências
import React from "react";
// import { Outlet } from "react-router-dom";

//Import css e components
import "./Menu.css"
import { MenuNavigation } from "../../components/MenuNavigation/MenuNavigation";

export function Menu() {
    return (

        <main className="main-menu">

            <div className="container-left-menu">
                <MenuNavigation></MenuNavigation>
            </div>

            <div className="container-rigth-menu" id="container-rigth-menu">
            <script type="module" src="/src/menuRouter.jsx"></script>
            </div>

        </main>
    )
}