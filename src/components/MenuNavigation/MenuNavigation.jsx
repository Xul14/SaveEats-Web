//Import React e dependências
import React from "react";
import { Link } from 'react-router-dom'

//Import imagens e css
import "./MenuNavigation.css"
// import {horarioFuncionamento} from './img/horario-de-funcionamento.png'
// import {formasPagamento} from './img/formas-de-pagamento.png'
// import {areaEntrega} from './img/area-de-entrega.png'
// import {financeiro} from './img/financeiro.png'
// import {avaliacao} from './img/avaliacao.png'
// import {cardapio} from './img/cardapio.png'
// import {pedido} from './img/pedido.png'
// import {perfil} from './img/perfil.png'
// import {home} from './img/home.png'

export function MenuNavigation(srcImg) {
    return (
        <>

            <h1 className="appName">Save Eats</h1>

            <div className="menu">

                <div className="menus">
                    <img className="imgMenuNav" src="../HomePage/img/home.png" alt="" />
                    <Link className="linkPage">Home</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src="../HomePage/img/cardapio.png" alt="" />
                    <Link className="linkPage">Cardápio</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src="../HomePage/img/pedido.png" alt="" />
                    <Link className="linkPage">Pedidos</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src="../HomePage/img/avaliacao.png" alt="" />
                    <Link className="linkPage">Avaliação</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src="../HomePage/img/financeiro.png" alt="" />
                    <Link className="linkPage">Financeiro</Link>
                </div>
                
                <div className="menus">
                    <img className="imgMenuNav" src="../HomePage/img/area-de-entrega.png" alt="" />
                    <Link className="linkPage">Área de Entrega</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src="../HomePage/img/formas-de-pagamento.png" alt="" />
                    <Link className="linkPage">Formas de Pagamento</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src="../HomePage/img/horario-de-funcionamento.png" alt="" />
                    <Link className="linkPage">Horário de Funcionamento</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src="../HomePage/img/perfil.png" alt="" />
                    <Link className="linkPage">Perfil</Link>
                </div>

            </div>
        </>
    )
}