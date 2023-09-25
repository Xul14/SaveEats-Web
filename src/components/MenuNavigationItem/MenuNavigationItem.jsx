import React from 'react'
import './MenuNavigationItem.css'

export function MenuNavigationItem({srcImg, spanName}) {
    return (
        <div className="menus">
            <img src={srcImg} alt="" />
            <span>{spanName}</span>
        </div>
    )
}