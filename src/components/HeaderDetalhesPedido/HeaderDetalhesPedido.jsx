//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./HeaderDetalhesPedido.css"

export function HeaderDetalhesPedido() {

    const idPedido = localStorage.getItem("idPedido");
    const [pedido, setPedido] = useState([]);
    // const [enderecoFormatado, setEnderecoFormatado] = useState("");
    const enderecoFormatado = localStorage.getItem("enderecoFormatado");

    useEffect(() => {
        async function getDetailsPedido() {
            try {
                const response = await axios.get(`http://localhost:8080/v1/saveeats/detalhes/pedido/id/${idPedido}`)
                const responsePedido = response.data.detalhes_do_pedido;
                setPedido(responsePedido);
                console.log(responsePedido);
            } catch (error) {
                console.log('Erro ao pegar os dados:', error);
            }
        }
        getDetailsPedido()
    }, [idPedido])

    // const idCliente = pedido.id_cliente;

    //GET endereço cliente
        // useEffect(() => {
        //     async function getEnderecoCliente() {
        //         try {
        //             const response = await axios.get(`http://localhost:8080/v1/saveeats/endereco/cliente/idcliente/${idCliente}`)
        //             const responseEndereco = response.data.endereco_cliente;
    
        //             if (responseEndereco && responseEndereco.length > 0) {
        //                 const endereco = responseEndereco[0];
        //                 const enderecoFormatado = `Entrega em: ${endereco.rua_cliente} ${endereco.numero_endereco_cliente}, ${endereco.bairro_cliente}, ${endereco.nome_cidade} - ${endereco.nome_estado}`;
        //                 setEnderecoFormatado(enderecoFormatado);
        //             }
    
        //         } catch (error) {
        //             console.log('Erro ao pegar os dados:', error);
        //         }
        //     }
        //     getEnderecoCliente()
        // }, [idCliente])

    return (
        <>

            <div className="container-informacoes-pedido">

                <div className="container-informacoes-cliente">

                    <h2>{pedido.nome_cliente}</h2>

                    <div className="container-informacoes">

                        <span className="text-pedido">Pedido:</span>

                        <span className="numero-pedido">{`#${pedido.numero_pedido}`}</span>

                    </div>

                    <div className="container-informacoes">
                        <span className="endereco-pedido">{enderecoFormatado}</span>
                    </div>

                </div>

                <div className="container-horario-pedido">

                    <div className="container-horario">

                        <i class="fa-solid fa-clock"></i>

                        <span className="horario-inicial">{`${pedido.horario_pedido} - `}</span>

                        <span className="horario-final">{pedido.previsao_entrega}</span>

                    </div>

                    <span className="text-previsao">Previsão de entrega</span>

                </div>

            </div>

        </>
    )
}