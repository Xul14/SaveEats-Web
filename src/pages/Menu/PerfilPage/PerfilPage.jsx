//Import React
import React from "react";

//Import css e components
import "./PerfilPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import img from './img/padaria.png'

export function PerfilPage() {
    return (
        <div>
            <div className="container-perfil">

                <div className="container-left-perfil">
                    <MenuNavigation></MenuNavigation>
                </div>

                <div className="container-rigth-perfil">

                    <main>

                    <div class="circle">
                
                        <img src={img} alt="" />
                
                    </div>

                    <h1 className="titulo">PADARIA DOIS IRMÃOS</h1>

                   <div> 

                     <p className="info1">Nome da loja</p>

                    <input type="text" className="box1"></input>

                   </div>

                    <div>

                    <p className="info2">Telefone</p>

                     <input type="text" className="box2"></input>

                    </div>
                    

                    <div>

                    <p className="info2">Categoria</p>

                    <input type="text" className="box3"></input>

                    </div>

                    <div>

                    <p className="info4">Nome da loja</p>

                    <input type="text" className="box4"></input>

                    </div>
                    

                    <div>

                    <p className="info5">Telefone</p>

                    <input type="text" className="box5"></input>

                    </div>
                    
                    <div class="botao">

                        <p>Salvar alterações</p>


                    </div>

                    </main>














                </div>
            </div>
        </div>
    )
}