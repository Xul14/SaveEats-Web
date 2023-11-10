// //Import React
// import React, { useState, useEffect } from "react";

// //Import Axios para integração
// import axios from 'axios'
// import "./HorarioDiaSemana.css"

// export function HorarioDiaSemana() {

//     const [diaSemana, setDiaSemana] = useState([])

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await axios.get('http://localhost:3000/v1/saveeats/dia/semana');
//                 const responseData = response.data.dia_semana
//                 setDiaSemana(responseData)
//                 console.log(responseData);
//             } catch (error) {
//                 console.error('Erro ao obter dados da API:', error)
//             }
//         }
//         fetchData()
//     }, [])

//     return (

//         <div className="dia-semana-container">

//             <div className="inicio-termino">
//                 <p></p>
//                 <p className="text-inicio-termino">Início</p>
//                 <p className="text-inicio-termino">Término</p>
//                 <p className="text-inicio-termino">Tempo total</p>
//             </div>

//             <div className="dia-semana-item">

//                 {/* <div className="dia-semana-rows">
//                     <p className="dia-da-semana">Domingo</p>
//                     <p className="horario">12:00</p>
//                     <p className="horario">12:00</p>
//                     <p className="horario">12:00</p>
//                 </div> */}

//                 <div className="dia-semana-rows">

//                     {diaSemana.map((diaSemana, index) => (
//                         <p className="dia-da-semana">Domingo</p>
//                     ))}

//                 </div>

//                 <div className="dia-semana-rows">

//                     <div className="container-hora">

//                         <p className="horario">12:00</p>
//                         <p className="horario">12:00</p>
//                         <p className="horario">12:00</p>

//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./HorarioDiaSemana.css";

export function HorarioDiaSemana() {
  const [diaSemana, setDiaSemana] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/v1/saveeats/dia/semana');
        const responseData = response.data.dia_semana;
        setDiaSemana(responseData);
        console.log(responseData);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="dia-semana-container">
      <div className="inicio-termino">
        <p></p>
        <p className="text-inicio-termino">Início</p>
        <p className="text-inicio-termino">Término</p>
        <p className="text-inicio-termino">Tempo total</p>
      </div>

      <div className="dia-semana-item">
        {diaSemana.map((dia, index) => (
          <div key={index} className="dia-semana-rows">
            <p className="dia-da-semana">{dia.dia_semana}</p>
            {/* Adicione os elementos correspondentes ao início, término e tempo total */}
            <p className="horario">12:00</p>
            <p className="horario">12:00</p>
            <p className="horario">12:00</p>
          </div>
        ))}
      </div>
    </div>
  );
}
