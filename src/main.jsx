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



const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cadastro",
    element: <RegisterPage />
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/menu",
    element: <MenuPageEmpty />
  },
  {
    element: <Menu />,
    children: [
      {
        path: "/menu/cardapio",
        element: <CardapioPage />
      },
      {
        path: "/menu/pedidos",
        element: <PedidosPage />
      },
      {
        path: "/menu/avaliacao",
        element: <AvaliacaoPage />
      },
      {
        path: "/menu/financeiro",
        element: <FinanceiroPage />
      },
      {
        path: "/menu/areas-entrega",
        element: <AreasEntregaPage />
      },
      {
        path: "/menu/formas-pagamento",
        element: <FormasPagamentoPage />
      },
      {
        path: "/menu/horario-funcionamento",
        element: <HorarioFuncionamentoPage />
      },
      {
        path: "/menu/perfil",
        element: <PerfilPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cadastro' element={<RegisterPage />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/menu/cardapio' element={<CardapioPage />} />
        {/* <RouterProvider router = {routers} />  */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
