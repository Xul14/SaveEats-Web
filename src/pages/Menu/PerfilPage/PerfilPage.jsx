//Import React
import React, { useState, useEffect } from "react";

//Import Axios para integração
import axios from 'axios'

//Import css e components
import "./PerfilPage.css"
import noImg from './img/no-image.webp'
import { uploadImageToFirebase } from "../../../firebase";
import { MenuNavigation } from "../../../components/MenuNavigation/MenuNavigation";

export function PerfilPage() {

    //Pegando dados do restaurante
    const idRestaurante = localStorage.getItem("id");
    const nomeRestaurante = localStorage.getItem("nome_fantasia");
    const emailRestaurante = localStorage.getItem("email");
    const senhaRestaurante = localStorage.getItem("senha");
    const idEnderecoRestaurante = localStorage.getItem("id_endereco_restaurante");

    const [dadosPerfil, setDadosPerfil] = useState([0]);
    const [isEditing, setIsEditing] = useState(false);

    //Consumo da API para o input de Categorias
    const [categorias, setCategorias] = useState([])
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('')

    //Categorias do restaurante
    useEffect(() => {
        async function fetchCategoria() {
            try {
                const response = await axios.get('http://localhost:3000/v1/saveeats/categoria/restaurante');
                const responseData = response.data.categorias
                setCategorias(responseData)
                // setCategoriaSelecionada(responseData.categoria);
            } catch (error) {
                console.error('Erro ao obter dados da API:', error)
            }
        }

        fetchCategoria()
    }, [])

    //Dados do restaurante
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3000/v1/saveeats/restaurante/id/${idRestaurante}`);
                const responseData = response.data.restaurantes
                setDadosPerfil(responseData)

                if (responseData[0].foto) {
                    setImagemPerfil(responseData[0].foto);
                }
            } catch (error) {
                console.error('Erro ao obter dados da API:', error)
            }
        }
        fetchData()
    }, [])

    //upload de imagem
    const [imagemPerfil, setImagemPerfil] = useState('');

    const handleCameraButtonClick = () => {
        const fileInput = document.getElementById("fileInput");
        fileInput.click();
    };

    const handleImageChange = async (e) => {
        const imageFile = e.target.files[0];
        console.log(imageFile);
        try {
            const downloadURL = await uploadImageToFirebase(imageFile);
            setImagemPerfil(downloadURL);
            console.log("foi?");
        } catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
        }
    };

    //Edição de dados
    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = async () => {

        const dadosAtualizados = {
            id_restaurante: idRestaurante,
            nome_proprietario: dadosPerfil[0].nome_proprietario,
            nome_fantasia: dadosPerfil[0].nome_fantasia,
            razao_social: dadosPerfil[0].razao_social,
            email: emailRestaurante,
            senha: senhaRestaurante,
            foto: imagemPerfil,
            cnpj: dadosPerfil[0].cnpj,
            categoria_restaurante: categoriaSelecionada,
            numero_telefone: dadosPerfil[0].numero_telefone,
            id_endereco_restaurante: idEnderecoRestaurante,
            rua: dadosPerfil[0].rua,
            cep: dadosPerfil[0].cep,
            bairro: dadosPerfil[0].bairro,
            numero: dadosPerfil[0].numero,
            complemento: dadosPerfil[0].complemento,
            nome_cidade: dadosPerfil[0].nome_cidade,
            nome_estado: dadosPerfil[0].nome_estado
        }

        console.log(dadosAtualizados);

        try {
            const response = await axios.put(`http://localhost:3000/v1/saveeats/restaurante/id/${idRestaurante}`, dadosAtualizados);

            if (response.status === 200) {
                console.log("Editado com sucesso");
            } else {
                console.log("Erro ao editar");
            }
        } catch (error) {
            console.error('Erro ao atualizar os dados:', error);
        }

        setIsEditing(false);
    }

    const handleInputChange = (e, field) => {
        const newValue = e.target.value;

        setDadosPerfil(prevData => ({
            ...prevData,
            [0]: {
                ...prevData[0],
                [field]: newValue
            }
        }));
    }
 
    return (
        <div>
            <div className="container-perfil">

                <div className="container-left-perfil">
                    <MenuNavigation></MenuNavigation>
                </div>

                <div className="container-rigth-perfil">

                    <div>
                        {/* <img src={dadosPerfil[0].foto} alt="" className="foto-restaurante" /> */}
                        <div className="image-container">
                            <img src={imagemPerfil} alt="" className="foto-restaurante" />
                            <button className="camera-button" onClick={handleCameraButtonClick} disabled={!isEditing}>
                                <i className="fas fa-camera"></i>
                            </button>
                            <input
                                type="file"
                                accept="image/*"
                                id="fileInput"
                                style={{ display: "none" }}
                                onChange={(e) => handleImageChange(e)}
                            />
                        </div>
                    </div>

                    <div>
                        <h1 className="nome-restaurante">{nomeRestaurante}</h1>
                    </div>

                    <div className="container-editar-dados">

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Nome proprietário</p>
                            <input type="text" className="input-editar" value={dadosPerfil[0].nome_proprietario} disabled={!isEditing} onChange={(e) => handleInputChange(e, "nome_proprietario")} ></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Nome fantasia</p>
                            <input type="text" className="input-editar" value={dadosPerfil[0].nome_fantasia} disabled={!isEditing} onChange={(e) => handleInputChange(e, "nome_fantasia")} ></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Razão Social</p>
                            <input type="text" className="input-editar" value={dadosPerfil[0].razao_social} disabled={!isEditing} onChange={(e) => handleInputChange(e, "razao_social")} ></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Categoria do estabelecimento</p>


                            <select name="Categoria" className="input-editar option-av" value={categoriaSelecionada} disabled={!isEditing} onChange={(e) => setCategoriaSelecionada(e.target.value)}>
                                <option>{dadosPerfil[0].categoria_restaurante}</option>
                                {categorias.map((categoria, index) => (
                                    <option key={index} value={categoria.nome_categoria}>
                                        {categoria.nome_categoria}
                                    </option>
                                ))}
                            </select>


                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Telefone</p>
                            <input type="text" className="input-editar" value={dadosPerfil[0].numero_telefone} disabled={!isEditing} onChange={(e) => handleInputChange(e, "numero_telefone")} ></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">CNPJ</p>
                            <input type="text" className="input-editar" value={dadosPerfil[0].cnpj} disabled={!isEditing} onChange={(e) => handleInputChange(e, "cnpj")} ></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">CEP</p>
                            <input type="text" className="input-editar" value={dadosPerfil[0].cep} disabled={!isEditing} onChange={(e) => handleInputChange(e, "cep")} ></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Rua</p>
                            <input type="text" className="input-editar" value={dadosPerfil[0].rua} disabled={!isEditing} onChange={(e) => handleInputChange(e, "rua")} ></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Número</p>
                            <input type="text" className="input-editar" value={dadosPerfil[0].numero} disabled={!isEditing} onChange={(e) => handleInputChange(e, "numero")} ></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Bairro</p>
                            <input type="text" className="input-editar" value={dadosPerfil[0].bairro} disabled={!isEditing} onChange={(e) => handleInputChange(e, "bairro")} ></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Cidade</p>
                            <input type="text" className="input-editar" value={dadosPerfil[0].nome_cidade} disabled={!isEditing} onChange={(e) => handleInputChange(e, "nome_cidade")} ></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Estado</p>
                            <input type="text" className="input-editar" value={dadosPerfil[0].nome_estado} disabled={!isEditing} onChange={(e) => handleInputChange(e, "nome_estado")} ></input>
                        </div>

                        <div className="input-editar-dados">
                            <p className="nome-input-editar">Complemento</p>
                            <input type="text" className="input-editar" value={dadosPerfil[0].complemento} disabled={!isEditing} onChange={(e) => handleInputChange(e, "complemento")} ></input>
                        </div>

                    </div>

                    <div className="btn-salvar-edicao">
                        {isEditing ? (
                            <button className="btn-salvar-alteracoes" onClick={handleSave}>Salvar Alterações</button>
                        ) : (
                            <button className="btn-salvar-alteracoes" onClick={handleEdit}>Editar Dados</button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}