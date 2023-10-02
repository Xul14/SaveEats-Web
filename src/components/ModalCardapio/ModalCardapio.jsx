//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css
import './ModalCardapio.css'
import arrow from './img/arrow.png'
import imageAdd from './img/addImage.png'
import { uploadImageToFirebase } from "../../firebase";

export function ModalCardapio({ isOpen, setModalOpen, onProdutoCriado, produtoEmEdicao, produtos, onUpdateProduto }) {

  const nomeRestaurante = localStorage.getItem("nome_fantasia");

  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [status, setStatus] = useState([]);
  const [statuselecionado, setStatuselecionado] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [imagemProduto, setImagemProduto] = useState('');
  const [idProduto, setIdProduto] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (produtoEmEdicao) {
      setCategoriaSelecionada(produtoEmEdicao.id_categoria_produto);
      setIdProduto(produtoEmEdicao.id);
      setStatuselecionado(produtoEmEdicao.id_status_produto);
      setNomeProduto(produtoEmEdicao.nome);
      setPrecoProduto(produtoEmEdicao.preco);
      setDescricaoProduto(produtoEmEdicao.descricao);
      setImagemProduto(produtoEmEdicao.imagem);
      setIsEditing(true);
    }
  }, [produtoEmEdicao]);

  const resetForm = () => {
    setCategoriaSelecionada('');
    setStatuselecionado('');
    setNomeProduto('');
    setPrecoProduto('');
    setDescricaoProduto('');
    setImagemProduto('');
    setIdProduto('');
    setIsEditing(false);
  };
  
  const novoProduto = {
    id: idProduto,
    nome: nomeProduto,
    descricao: descricaoProduto,
    imagem: imagemProduto,
    preco: precoProduto,
    status_produto: statuselecionado,
    categoria_produto: categoriaSelecionada,
    nome_fantasia: nomeRestaurante,
  };
  
  //Upload de imagem
  const handleImageChange = async (e) => {
    const imageFile = e.target.files[0];

    try {
      const downloadURL = await uploadImageToFirebase(imageFile);
      setImagemProduto(downloadURL);
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
    }
  };

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
        console.log(responseStatus);

      } catch (error) {
        console.error('Erro ao obter dados da API:', error)
      }
    }

    fetchData()
  }, [])

  // Post de um novo produto
  const handleCreateProduto = async () => {
    resetForm()
    try {
      const response = await axios.post('https://save-eats.cyclic.cloud/v1/saveeats/produto/', novoProduto);

      if (response.status === 201) {
        console.log("Produto criado com sucesso!");
        onProdutoCriado(novoProduto);
        setModalOpen(false);
      } else {
        console.error("Falha ao criar o produto.");
        console.log(response);
      }
    } catch (error) {
      console.error("Erro ao criar o produto:", error);
    }
  };

  //Atualiza um produto
  const handleUpdateProduto = async () => {
    try {
      const response = await axios.put(`https://save-eats.cyclic.cloud/v1/saveeats/produto/id/${idProduto}`, novoProduto);

      if (response.status === 200) {
        console.log("Produto editado com sucesso!");
        console.log(novoProduto);

        onUpdateProduto(novoProduto);
        setModalOpen(false);
        setIsEditing(false);
        resetForm();
      } else {
        console.error("Falha ao editar o produto.");
        console.log(response);
      }
    } catch (error) {
      console.error("Erro ao editar o produto:", error);
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
                <span className="title-modal">  {isEditing ? "Atualizar Item" : "Criar Item"}</span>
              </div>

            </div>

            <div className="inputsModal">

              <div className="inputs-modal-left">

                <div className="input-span">

                  <span className="span-input-item">Categoria</span>

                  <select name="Categoria" className="input-modal-select" value={categoriaSelecionada} onChange={(e) => setCategoriaSelecionada(e.target.value)}>

                    <option value="">Categoria</option>
                    {categorias.map((categoria) => (
                      <option key={categoria.id} value={categoria.id} selected={categoria.id === produtoEmEdicao.id_categoria_produto}>
                        {categoria.categoria_produto}
                      </option>
                    ))}

                  </select>

                </div>

                <div className="input-span">

                  <span className="span-input-item">Status do Produto</span>

                  <select name="Status produto" className="input-modal-select" value={statuselecionado} onChange={(e) => setStatuselecionado(e.target.value)}>

                  <option value="">Status</option>
                    {status.map((statusItem) => (
                      <option key={statusItem.id} value={statusItem.id}  selected={statusItem.id === produtoEmEdicao.id_status_produto}>
                        {statusItem.status_produto}
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
                </div>

                <img src={imagemProduto} alt="Imagem do Produto" className="imagem-preview" />
                <label className="custom-file-input">
                  <input type="file" className="input-modal-img center" accept="image/*" onChange={(e) => handleImageChange(e)} />
                  Escolher Arquivo
                </label>

              </div>

            </div>

            <div className="inputDesc-btn">

              <div className="input-span">
                <span className="span-input-item">Descrição do Produto</span>
                <input type="text" className="input-modal-desc" value={descricaoProduto} onChange={(e) => setDescricaoProduto(e.target.value)} />
              </div>

              <button className="btn-criarItem" onClick={isEditing ? handleUpdateProduto : handleCreateProduto}>
                {isEditing ? "Atualizar Item" : "Criar Item"}
              </button>
            </div>

          </div>

        </div>
      </div>
    )
  }

  return null
}