import React from "react";
import '../TextField/TextField.css'
import { useState, useRef } from 'react'
import { ErrorMessages } from "../ErrorMessages/ErrorMessages";

// export function TextField({spanInput, type, inputContent, status, onChangeValue}) {
//     return (
//         <>
//             <span className="span-input">{spanInput}</span>
//             <input type={type} value={inputContent} status={status} onChange={onChangeValue} />
//         </>
//     )
// }

export function TextFieldPassword(type, id, register){
    const [password, setPassword] = useState('');

  const [open, setOpen] = useState()

  const [errors, setErrors] = useState({
    minValueValidation: false,
    numberValidation: false,
    capitalLetterValidation: false,
    specialCharacterValidation: false,
  });

  const handlePasswordChange = (event) => {
    setOpen(!open !== open)
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    
    setErrors({
      minValueValidation: password.length >= 8,
      numberValidation: /\d/.test(password),
      capitalLetterValidation: /[A-Z]/.test(password),
      specialCharacterValidation: /[^A-Za-z0-9]/.test(password),
    });
  };

  const handleBlur = () => {
    setOpen(!open === open)
  }

  if (type == 'password', register){
    return <>
      <div>
        <input onBlur={handleBlur} onChange={handlePasswordChange} id={id} className='inputSenhaGlobal' type={type} placeholder={placeholder}/> 
          {/* <i> <IconeOlhoGlobal></IconeOlhoGlobal> </i> */}
          {register && (
            
            <ErrorMessages
              isOpen={open}
              errors={errors}
              ></ErrorMessages>
              
            )
          }
      </div>

     
    </>
  } else {
    return <>
      <input className='inputGlobal' type={type}/> 
    </>
  }
}