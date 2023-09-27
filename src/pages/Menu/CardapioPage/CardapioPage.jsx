//Import React
import React, { useState, useEffect } from "react";

//Import css e components
import "./CardapioPage.css"
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";
import { HeaderPages } from "../../../components/HeaderPages/Header";
import { ButtonAdicionar } from "../../../components/ButtonAdicionar/ButtonAdicionar";
import { ButtonPausadoAtivo } from "../../../components/ButtonPausadoAtivo/ButtonPausadoAtivo";
import { TresPontos } from "../../../components/TresPontos/TresPontos"
import { CardapioItem } from "../../../components/CardapioItem/CardapioItem";
import { ModalCardapio } from "../../../components/ModalCardapio/ModalCardapio";

//Import Axios para integração
import axios from 'axios'


export function CardapioPage() {

    //Modal para adicionar um produto
    const [openModal, setOpenModal] = useState(false)

    //Pegando dados do restaurante
    const nomeRestaurante = localStorage.getItem("nome_fantasia");
    const idRestaurante = localStorage.getItem("id");

    const [produtosAtualizados, setProdutosAtualizados] = useState([]);

    //Consumo da API para o input de Categorias
    const [categorias, setCategorias] = useState([])
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('')

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://save-eats.cyclic.cloud/v1/saveeats/categoria/produto');
                // const response = await axios.get('http://localhost:8080/v1/saveeats/categoria/produto');
                const responseData = response.data.categoria_produto
                setCategorias(responseData)
            } catch (error) {
                console.error('Erro ao obter dados da API:', error)
            }
        }

        fetchData()
    }, [])

    //Consumo da API para listar os produtos do restaurante
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function produtoData() {
            try {
                const produto = await axios.get(`https://save-eats.cyclic.cloud/v1/saveeats/restaurante/produtos/nome-fantasia/${nomeRestaurante}`);
                // const produto = await axios.get(`http://localhost:8080/v1/saveeats/restaurante/produtos/nome-fantasia/${nomeRestaurante}`);
                const produtoData = produto.data.restaurante;
                setProdutos(produtoData);
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        }

        produtoData();
    }, []);


    // Consumo da API para buscar produtos com base no termo de pesquisa
    const [termoPesquisa, setTermoPesquisa] = useState("");
    const [produtosBuscar, setProdutosBuscar] = useState([]);

    const buscarProdutos = async () => {
        try {
            // const response = await axios.get(`http://localhost:8080/v1/saveeats/restaurante/produtos/id-restaurante/50/nome-produto/${termoPesquisa}`);
            const response = await axios.get(`https://save-eats.cyclic.cloud/v1/saveeats/restaurante/produtos/id-restaurante/50/nome-produto/${termoPesquisa}`);
            const data = response.data;
            setProdutos(data);
        } catch (error) {
            const response = await axios.get(`https://save-eats.cyclic.cloud/v1/saveeats/restaurante/produtos/id-restaurante/50/nome-produto/${termoPesquisa}`);
            const data = response.data;
            console.error("Erro ao buscar produtos:", error);
            console.log(data);
            console.log(response.data);
            console.log(setProdutos(data));
        }
    };

    useEffect(() => {
        if (termoPesquisa.trim() !== "") {
            buscarProdutos();
        } else {
            setProdutos([]);
        }
    }, [termoPesquisa]);

    const handlePesquisaEnter = (e) => {
        if (e.key === "Enter") {
            buscarProdutos();
        }
    };

    return (
        <div>

            <div className="container-cardapio">

                <div className="container-left-cardapio">

                    <MenuNavigation></MenuNavigation>

                </div>

                <div className="container-rigth-cardapio">

                    <HeaderPages title="Cardápio" text="Este é o seu cardápio. Aqui você define quais produtos os clientes poderão pedir"></HeaderPages>

                    <div className="container-busca-categoria">

                        {/* <input className="input-busca" type="search" placeholder="Buscar produto" /> */}
                        <input
                            className="input-busca"
                            type="search"
                            placeholder="Buscar produto"
                            value={termoPesquisa}
                            onChange={(e) => setTermoPesquisa(e.target.value)}
                            onKeyPress={handlePesquisaEnter}
                        />

                        <select name="Categoria" className="input-categoria" value={categoriaSelecionada} onChange={(e) => setCategoriaSelecionada(e.target.value)}>
                            <option>Categoria</option>
                            {categorias.map((categoria, index) => (
                                <option key={index} value={categoria.categoria_produto}>
                                    {categoria.categoria_produto}
                                </option>
                            ))}
                        </select>

                    </div>

                    <div className="container-adicionar">

                        <ButtonAdicionar background='#90AE6E' text="Adicionar categoria"></ButtonAdicionar>

                        <ButtonAdicionar background='#E3E9DD' text="Adicionar produto" onClick={() => setOpenModal(true)}></ButtonAdicionar>
                        <ModalCardapio isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} onProdutoCriado={(novoProduto) => {setProdutos([...produtos, novoProduto]); setOpenModal(false)}}></ModalCardapio>

                    </div>

                    <div className="container-produtos">

                        <div className="container-lista-produtos">

                            <div className="header-lista-produtos">

                                <h2>Bolos</h2>

                                <div className="container-button-adicionar">

                                    <ButtonAdicionar background="#E3E9DD" text="Adicionar produto" ></ButtonAdicionar>

                                </div>

                                <div className="container-button-pausado-ativo">

                                    <ButtonPausadoAtivo background="#E3E9DD" text="Pausado"></ButtonPausadoAtivo>

                                    <ButtonPausadoAtivo background="#90AE6E" text="Ativo"></ButtonPausadoAtivo>

                                </div>

                                <TresPontos></TresPontos>

                            </div>

                            <div className="container-produtos-preco-status">

                                <h3>Produtos</h3>

                                <span className="text-preco">Preço</span>

                                <span className="text-status">Status</span>

                            </div>

                            <div className="container-produtos-preco-status-options">

                                {produtos.map((produto, index) => (
                                    <CardapioItem
                                        key={index}
                                        imgProduto={produto.imagem}
                                        nomeProduto={produto.nome}
                                        precoProduto={produto.preco}
                                    />
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}