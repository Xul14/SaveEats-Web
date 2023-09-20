import React from "react";

import "./Header.css"

export function HeaderPages ({title,text}) {
    return (
        <>
        
        <div className="container-header">

            <h1 className="title-header">{title}</h1>

            <span className="text-header">{text}</span>

        </div>
        
        </>
    )
}