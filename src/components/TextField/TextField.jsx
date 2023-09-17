import React from "react";
import './TextField.css'

export function TextField({spanInput, type, inputContent, status, onChangeValue}) {
    return (
        <>
            <span className="span-input">{spanInput}</span>
            <input type={type} value={inputContent} status={status} onChange={onChangeValue} />
        </>
    )
}
