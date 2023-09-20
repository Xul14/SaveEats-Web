import React from 'react'
import './ContainerLeft.css'
import family from '../../pages/LoginPage/img/family.png'

export function ContainerLeft() {
    return (
        <div className="container-left">

            <img src={family} alt="Família" className="family" />
            <span className="title-left">Junte-se a nós como parceiro e ajude a combater o desperdício de alimentos.</span>
            <span className="subtitle">Rentabilize seu prejuízo e o  transforme em lucro!</span>

        </div>
    )
}