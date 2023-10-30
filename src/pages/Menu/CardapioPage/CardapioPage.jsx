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

    //Consumo da API para o input de Categorias
    const [categorias, setCategorias] = useState([])
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
    const [termoPesquisa, setTermoPesquisa] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                // const response = await axios.get('https://save-eats.cyclic.cloud/v1/saveeats/categoria/produto');
                const response = await axios.get('http://localhost:3000/v1/saveeats/categoria/produto');
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
                // const produto = await axios.get(`https://save-eats.cyclic.cloud/v1/saveeats/restaurante/produtos/nome-fantasia/${nomeRestaurante}`);
                const produto = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/produtos/nome-fantasia/${nomeRestaurante}`);
                const produtoData = produto.data.produtos_do_restaurante;
                setProdutos(produtoData);
                console.log(produtoData);
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        }

        produtoData();
    }, []);


    // Consumo da API para buscar produtos com base no termo de pesquisa
    const produtoData = async () => {
        try {
            // const produto = await axios.get(`https://save-eats.cyclic.cloud/v1/saveeats/restaurante/produtos/nome-fantasia/${nomeRestaurante}`);
            const produto = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/produtos/nome-fantasia/${nomeRestaurante}`);
            const produtoData = produto.data.produtos_do_restaurante;
            setProdutos(produtoData);
            console.log(produtoData);
        } catch (error) {
            console.error('Erro ao obter dados da API:', error);
        }
    }

    // Consumo da API para buscar produtos com base no termo de pesquisa
    const buscarProdutos = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/produtos/id-restaurante/${idRestaurante}/nome-produto/${termoPesquisa}`);
            const data = response.data.produtos_do_restaurante;
            setProdutos(data);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    };

    useEffect(() => {
        produtoData();
    }, []);

    const handlePesquisaChange = (e) => {
        setTermoPesquisa(e.target.value);
        buscarProdutos();
    };

    useEffect(() => {
        if (termoPesquisa.trim() === "") {
            produtoData();
        }
    }, [termoPesquisa]);


    //Consumo da API para exclusão de um item do cardapio
    const handleDeleteProduto = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/v1/saveeats/produto/id/${id}`);
            // await axios.delete(`https://save-eats.cyclic.cloud/v1/saveeats/produto/id/${id}`);
            const updatedProdutos = produtos.filter((produto) => produto.id !== id);
            setProdutos(updatedProdutos)
            console.log(id)
        } catch (error) {
            console.error("Erro ao excluir o produto:", error);
        }
    };

    const [isEditing, setIsEditing] = useState(false);
    const [produtoEmEdicao, setProdutoEmEdicao] = useState(null);

    const handleEditProduto = (produto) => {
        setIsEditing(true);
        setProdutoEmEdicao(produto);
        setOpenModal(true);
    };

    const handleUpdateProduto = (produtoAtualizado) => {
        setProdutos((produtos) => {
            const produtosAtualizados = produtos.map((produto) => {
                if (produto.id === produtoAtualizado.id) {
                    return produtoAtualizado;
                }
                return produto;
            });
            console.log(produtosAtualizados);
            return produtosAtualizados;
        });
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

                        <input
                            className="input-busca"
                            type="search"
                            placeholder="Buscar produto"
                            value={termoPesquisa}
                            onChange={handlePesquisaChange}
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

                        {/* <ButtonAdicionar background='#90AE6E' text="Adicionar categoria"></ButtonAdicionar> */}

                        <ButtonAdicionar background='#E3E9DD' text="Adicionar produto" onClick={() => setOpenModal(true)}></ButtonAdicionar>
                        <ModalCardapio
                            isOpen={openModal}
                            setModalOpen={() => setOpenModal(!openModal)}
                            onProdutoCriado={(novoProduto) => { setProdutos([...produtos, novoProduto]) }}
                            onUpdateProduto={handleUpdateProduto}
                            isEditing={isEditing}
                            produtoEmEdicao={produtoEmEdicao}
                            produtos={produtos}
                        ></ModalCardapio>
                    </div>

                    <div className="container-produtos">

                        <div className="container-lista-produtos">

                            <div className="container-produtos-preco-status">

                                <h3 className="title-list">Produtos</h3>

                                <span className="text-preco">Preço</span>

                                <span className="text-status">Status</span>

                            </div>

                            <div className="container-produtos-preco-status-options">

                                {produtos.map((produto, index) => (
                                    <CardapioItem
                                        key={index}
                                        id={produto.id}
                                        imgProduto={produto.imagem}
                                        nomeProduto={produto.nome}
                                        precoProduto={produto.preco}
                                        categoriaProduto={produto.id_categoria_produto}
                                        statusProduto={produto.id_status_produto}
                                        descricaoProduto={produto.descricao}
                                        onDelete={handleDeleteProduto}
                                        onEdit={() => handleEditProduto(produto)}
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