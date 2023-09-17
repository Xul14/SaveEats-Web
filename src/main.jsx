//Import dependências do React
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'

//Import do arquivo de css global
import './index.css'

//Import páginas das rotas
import App from './App.jsx'
import {RegisterPage} from './pages/RegisterPage/RegisterPage.jsx'
import { HomePage } from './pages/HomePage/HomePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/cadastro' element={<RegisterPage />}/>
        <Route path='/home' element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
