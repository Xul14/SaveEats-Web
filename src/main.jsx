//Import dependências do React
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'

//Import do arquivo de css global
import './index.css'

//Import páginas das rotas
import App from './App.jsx'
import { RegisterPage } from './pages/RegisterPage/RegisterPage.jsx'
import { HomePage } from './pages/HomePage/HomePage.jsx'
import { MenuPageEmpty } from './pages/MenuPageEmpty/MenuPageEmpty'
import { Menu } from './pages/Menu/Menu.jsx'
import { CardapioPage } from './pages/Menu/CardapioPage/CardapioPage.jsx'
import { PedidosPage } from './pages/Menu/PedidosPage/PedidoPage'
import { AvaliacaoPage } from './pages/Menu/AvaliacaoPage/AvaliacaoPage'
import { FinanceiroPage } from './pages/Menu/FinanceiroPage/FinanceiroPage'
import { AreasEntregaPage } from './pages/Menu/AreasEntregaPage/AreasEntregaPage'
import { FormasPagamentoPage } from './pages/Menu/FormasPagamentoPage/FormasPagamentoPage'
import { HorarioFuncionamentoPage } from './pages/Menu/HorarioFuncionamentoPage/HorarioFuncionamentoPage'
import { PerfilPage } from './pages/Menu/PerfilPage/PerfilPage'
import { DetalhesPedidoPage } from './pages/Menu/PedidosPage/DetalhesPedidoPage/DetalhesPedidoPage'
import {LoadingPage} from './pages/LoadingPage/LoadingPage'
import {DeliveryPage} from './pages/DeliveryPage/DeliveryPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cadastro' element={<RegisterPage />} />
            <Route path='/loading' element={<LoadingPage />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/menu/cardapio' element={<CardapioPage />} />
            <Route path='/menu/home' element={<HomePage />} />
            <Route path='/menu/cardapio' element={<CardapioPage />} />
            <Route path='/menu/pedidos' element={<PedidosPage />} />
            <Route path='/pedido-entregue' element={<DeliveryPage />} />
            <Route path='/menu/detalhes/pedido' element={<DetalhesPedidoPage />} />
            <Route path='/menu/avaliacao' element={<AvaliacaoPage />} />
            <Route path='/menu/financeiro' element={<FinanceiroPage />} />
            <Route path='/menu/areas-entrega' element={<AreasEntregaPage />} />
            <Route path='/menu/formas-pagamento' element={<FormasPagamentoPage />} />
            <Route path='/menu/horario-funcionamento' element={<HorarioFuncionamentoPage />} />
            <Route path='/menu/perfil' element={<PerfilPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
