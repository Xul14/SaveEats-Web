//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css
import './ModalCardapio.css'
import arrow from './img/arrow.png'
import imageAdd from './img/addImage.png'

export function ModalCardapio({ isOpen, setModalOpen, onProdutoCriado }) {

  const nomeRestaurante = localStorage.getItem("nome_fantasia");

  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [status, setStatus] = useState([]);
  const [statuselecionado, setStatuselecionado] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [imagemProduto, setImagemProduto] = useState('');

  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    descricao: "",
    imagem: "",
    preco: "",
    status_produto: "",
    categoria_produto: "",
    nome_fantasia: "Mercadão",
  });

  //Input option categoria
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

  // //Input option status produto
  useEffect(() => {
    async function fetchData() {
      try {
        const responseStatus = await axios.get('https://save-eats.cyclic.cloud/v1/saveeats/status/produto');
        // const responseStatus = await axios.get('http://localhost:8080/v1/saveeats/status/produto');
       
        const responseStatusData = responseStatus.data.status_produto
        setStatus(responseStatusData)
        
      } catch (error) {
        console.error('Erro ao obter dados da API:', error)
      }
    }

    fetchData()
  }, [])

  // Post de um novo produto
  const handleCreateProduto = async () => {
    const novoProduto = {
      nome: nomeProduto,
      descricao: descricaoProduto,
      imagem: imagemProduto,
      preco: precoProduto,
      status_produto: statuselecionado,
      categoria_produto: categoriaSelecionada,
      nome_fantasia: nomeRestaurante,
    };

    console.log(novoProduto);

    try {
      const response = await axios.post('http://localhost:8080/v1/saveeats/produto/', novoProduto);
      // const response = await axios.post('https://save-eats.cyclic.cloud/v1/saveeats/produto/', novoProduto);

      if (response.status === 201) {
        console.log("Produto criado com sucesso!");

        setNovoProduto({
          nome: "",
          descricao: "",
          imagem: "",
          preco: "",
          status_produto: "",
          categoria_produto: "",
          nome_fantasia: "Mercadão",
        });

        onProdutoCriado(novoProduto);
        setModalOpen(false)

      } else {
        console.error("Falha ao criar o produto.");
        console.log(response);
      }
    } catch (error) {
      console.error("Erro ao criar o produto:", error);
    }
  };


  if (isOpen) {
    return (
      <div className="background-modal">
        <div className="modal-cardapio">

          <div className="addItem">

            <div className="header-modal">

              <img src={arrow} className="arrow" style={{ cursor: 'pointer' }} onClick={setModalOpen} />

              <div className="title-container">
                <span className="title-modal">Novo Item</span>
              </div>

            </div>

            <div className="inputsModal">

              <div className="inputs-modal-left">

                <div className="input-span">

                  <span className="span-input-item">Categoria</span>

                  <select name="Categoria" className="input-modal-select" value={categoriaSelecionada} onChange={(e) => setCategoriaSelecionada(e.target.value)}>
                    <option>Categoria</option>
                    {categorias.map((categoria, index) => (
                      <option key={index} value={categoria.categoria_produto}>
                        {categoria.categoria_produto}
                      </option>
                    ))}
                  </select>

                </div>

                <div className="input-span">

                  <span className="span-input-item">Status do Produto</span>

                  <select name="Status produto" className="input-modal-select" value={statuselecionado} onChange={(e) => setStatuselecionado(e.target.value)}>
                    <option>Status</option>
                    {status.map((status, index) => (
                      <option key={index} value={status.status_produto}>
                        {status.status_produto}
                      </option>
                    ))}
                  </select>

                </div>

                <div className="input-span">
                  <span className="span-input-item">Nome do Produto</span>
                  <input type="text" className="input-modal" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                </div>

                <div className="input-span">
                  <span className="span-input-item">Preço</span>
                  <input type="text" className="input-modal" value={precoProduto} onChange={(e) => setPrecoProduto(e.target.value)} />
                </div>
              </div>

              <div className="inputs-modal-right">

                <div className="input-span">
                  <span className="span-input-item-img center">Imagem do Produto</span>

                  <label>
                    {/* <input type="image" src={imageAdd} className="input-modal-img"></input> */}
                    {/* Escolher foto na galeria */}
                    <input type="text" className="input-modal-img" value={imagemProduto} onChange={(e) => setImagemProduto(e.target.value)} />
                  </label>
                </div>

              </div>

            </div>

            <div className="inputDesc-btn">

              <div className="input-span">
                <span className="span-input-item">Descrição do Produto</span>
                <input type="text" className="input-modal-desc" value={descricaoProduto} onChange={(e) => setDescricaoProduto(e.target.value)} />
              </div>

              <button className="btn-criarItem" onClick={handleCreateProduto}>Criar Item</button>
            </div>

          </div>

        </div>
      </div>
    )
  }

  return null
}