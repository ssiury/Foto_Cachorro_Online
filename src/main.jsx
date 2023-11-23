import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"
import Troll from "./pages/Troll.jsx"
import Macaco from "./pages/Macaco.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home/>} />
          <Route path='services' element={<Services/>} />
          <Route path='troll' element={<Troll/>} />
          <Route path='macaco' element={<Macaco/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
