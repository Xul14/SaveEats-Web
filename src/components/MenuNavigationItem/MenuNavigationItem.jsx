import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MenuNavigationItem.css';

export function MenuNavigationItem({ icon, text, to }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link to={to} className={`menu-item ${isActive ? 'active' : ''}`}>
          <FontAwesomeIcon icon={icon} className="menu-icon" />
          <span className="menu-text">{text}</span>
        </Link>
    );
}
