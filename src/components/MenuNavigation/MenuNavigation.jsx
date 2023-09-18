//Import React e dependências
import React from "react";
import { Link } from 'react-router-dom'

//Import imagens e css
import "./MenuNavigation.css"
import horarioFuncionamento from '../../pages/HomePage/img/horario-de-funcionamento.png'
import formasPagamento from '../../pages/HomePage/img/formas-de-pagamento.png'
import areaEntrega from '../../pages/HomePage/img/area-de-entrega.png'
import financeiro from '../../pages/HomePage/img/financeiro.png'
import avaliacao from '../../pages/HomePage/img/avaliacao.png'
import cardapio from '../../pages/HomePage/img/cardapio.png'
import pedido from '../../pages/HomePage/img/pedido.png'
import perfil from '../../pages/HomePage/img/perfil.png'
import home from '../../pages/HomePage/img/home.png'

export function MenuNavigation(){
    return (
        <>

            <h1 className="appName">Save Eats</h1>

            <div className="menu">

                <div className="menus">
                    <img className="imgMenuNav" src={home} alt="" />
                    <Link className="linkPage">Home</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src={cardapio} alt="" />
                    <Link className="linkPage">Cardápio</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src={pedido} alt="" />
                    <Link className="linkPage">Pedidos</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src={avaliacao} alt="" />
                    <Link className="linkPage">Avaliação</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src={financeiro} alt="" />
                    <Link className="linkPage">Financeiro</Link>
                </div>
                
                <div className="menus">
                    <img className="imgMenuNav" src={areaEntrega} alt="" />
                    <Link className="linkPage">Área de Entrega</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src={formasPagamento} alt="" />
                    <Link className="linkPage">Formas de Pagamento</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src={horarioFuncionamento} alt="" />
                    <Link className="linkPage">Horário de Funcionamento</Link>
                </div>

                <div className="menus">
                    <img className="imgMenuNav" src={perfil} alt="" />
                    <Link className="linkPage">Perfil</Link>
                </div>

            </div>
        </>
    )
}