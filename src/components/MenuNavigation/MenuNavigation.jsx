import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faClipboardList, faStar, faMoneyBill1Wave, faMapMarkerAlt, faMoneyCheck, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { MenuNavigationItem } from '../MenuNavigationItem/MenuNavigationItem';
import logo from './img/logo.png'
import "./MenuNavigation.css";

export function MenuNavigation() {
    return (
        <div className="menu-navigation">

            <div className="logo-saveeats">
                <img className="app-logo"src={logo}/>
            </div>

            <div className="links-page">
                <MenuNavigationItem icon={faHome} text="Home" to="/menu/home" />
                <MenuNavigationItem icon={faUtensils} text="Cardápio" to="/menu/cardapio" />
                <MenuNavigationItem icon={faClipboardList} text="Pedidos" to="/menu/pedidos" />
                <MenuNavigationItem icon={faStar} text="Avaliação" to="/menu/avaliacao" />
                <MenuNavigationItem icon={faMoneyBill1Wave} text="Financeiro" to="/menu/financeiro" />
                <MenuNavigationItem icon={faMapMarkerAlt} text="Área de Entrega" to="/menu/areas-entrega" />
                <MenuNavigationItem icon={faMoneyCheck} text="Formas de Pagamento" to="/menu/formas-pagamento" />
                <MenuNavigationItem icon={faClock} text="Horário de Funcionamento" to="/menu/horario-funcionamento" />
                <MenuNavigationItem icon={faUser} text="Perfil" to="/menu/perfil" />
            </div>
        </div>
    );
}
