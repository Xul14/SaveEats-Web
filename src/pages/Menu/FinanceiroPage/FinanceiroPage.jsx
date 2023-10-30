//Import React
import React from "react";

//Import css e components
import "./FinanceiroPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";

export function FinanceiroPage() {
    return (
        <div>
            <div className="container-financeiro">

                <div className="container-left-financeiro">
                    <MenuNavigation></MenuNavigation>
                </div>

                <div className="container-rigth-financeiro">
                    <HeaderPages title="Financeiro" text="Tenha as informações financeiras da loja "></HeaderPages>
                </div>
            </div>
        </div>
    )
}