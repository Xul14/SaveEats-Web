//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css
import './ModalCardapio.css'
import arrow from './img/arrow.png'
import imageAdd from './img/add-image.png'
import { uploadImageToFirebase } from "../../firebase";

export function ModalCardapio({ isOpen, setModalOpen, onProdutoCriado, produtoEmEdicao, onUpdateProduto }) {

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
  const [produtos, setProdutos] = useState([]);

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

  const converterPrecoParaBackend = (preco) => {
    if (preco && preco.includes(',')) {
      return preco.replace(',', '.');
    }
    return preco;
  };

  const precoParaBackend = converterPrecoParaBackend(precoProduto);

  const novoProduto = {
    id: idProduto,
    nome: nomeProduto,
    descricao: descricaoProduto,
    imagem: imagemProduto,
    preco: precoParaBackend,
    status_produto: statuselecionado,
    categoria_produto: categoriaSelecionada,
    nome_fantasia: nomeRestaurante,
  };

  //Input option categoria
  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await axios.get('https://save-eats.cyclic.cloud/v1/saveeats/categoria/produto');
        const response = await axios.get('https://save-eats-backend.azurewebsites.net/v1/saveeats/categoria/produto');
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
        // const responseStatus = await axios.get('https://save-eats.cyclic.cloud/v1/saveeats/status/produto');
        const responseStatus = await axios.get('https://save-eats-backend.azurewebsites.net/v1/saveeats/status/produto');

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
    console.log(novoProduto);

    if (isEditing) {

      try {
        const response = await axios.put(`https://save-eats-backend.azurewebsites.net/v1/saveeats/produto/id/${idProduto}`, novoProduto);
        // const response = await axios.put(`https://save-eats.cyclic.cloud/v1/saveeats/produto/id/${idProduto}`, novoProduto);

        if (response.status === 200) {
          console.log("Produto editado com sucesso!");

          onUpdateProduto(novoProduto);

          setModalOpen(false);
          setIsEditing(false);

        } else {
          console.error("Falha ao editar o produto.");
          console.log(response);
        }
      } catch (error) {
        const response = await axios.put(`https://save-eats-backend.azurewebsites.net/v1/saveeats/produto/id/${produtoEmEdicao.id}`, produtoEmEdicao);
        // const response = await axios.put(`https://save-eats.cyclic.cloud/v1/saveeats/produto/id/${produtoEmEdicao.id}`, produtoEmEdicao);
        console.log(response);
        console.error("Erro ao editar o produto:", error);
      }
    } else {
      // Criação de um novo produto
      try {
        const response = await axios.post('https://save-eats-backend.azurewebsites.net/v1/saveeats/produto/', novoProduto);
        // const response = await axios.post('https://save-eats.cyclic.cloud/v1/saveeats/produto/', novoProduto);

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
    }

    resetForm()
  };

  if (isOpen) {
    return (
      <div className="background-modal">
        <div className="modal-cardapio">

          <div className="addItem">

            <div className="header-modal">

              <img src={arrow} className="arrow" style={{ cursor: 'pointer' }} onClick={setModalOpen} />

              <div className="title-container">
                <span className="title-modal">Produto</span>
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
                </div>

                {/* <img src={imagemProduto} alt="Imagem do Produto" className="imagem-preview" /> */}
                <img
                  src={imagemProduto || imageAdd} // imageAdd é o placeholder para quando não há imagem
                  alt="Imagem do Produto"
                  className={imagemProduto ? "imagem-preview" : "imagem-preview-empty"}
                />
                <label className="custom-file-input">
                  <input type="file" className="input-modal-img center" accept="image/*" onChange={(e) => handleImageChange(e)} />
                  Escolher Arquivo
                </label>

              </div>

            </div>

            <div className="inputDesc-btn">

              <div className="input-span">
                <span className="span-input-item">Descrição do Produto</span>
                <textarea
                  className="input-modal-desc"
                  value={descricaoProduto}
                  onChange={(e) => setDescricaoProduto(e.target.value)}
                />
              </div>

              <button className="btn-criarItem" onClick={handleCreateProduto}>Confirmar</button>
            </div>

          </div>

        </div>
      </div>
    )
  }

  return null
}
