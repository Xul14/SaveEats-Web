//Import React
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

//Import css
import '../../pages/HomePage/HomePage.css'

export function CurrentDate() {
        const [dataAtual, setDataAtual] = useState(new Date());
      
        useEffect(() => {
          // Função para atualizar a data a cada 24 horas
          const atualizarDataDiariamente = () => {
            const novaData = new Date();
            setDataAtual(novaData);
          };
      
          // Configurar um intervalo para chamar a função a cada 24 horas
          const intervalId = setInterval(atualizarDataDiariamente, 24 * 60 * 60 * 1000);
      
          // Certifique-se de limpar o intervalo ao desmontar o componente
          return () => clearInterval(intervalId);
        }, []);

        const dataFormatada = format(dataAtual, 'dd/MM/yyyy');

        return(
            <span className="text">Hoje, {dataFormatada}</span>
        )
      
    }