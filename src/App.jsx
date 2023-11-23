import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbarinitial from './components/navbarinitial'
import Footerinitial from './components/Footerinitial'

function App() {

  return (
    <div className='App'>
      <Navbarinitial className='menu' />
      <Outlet/>
      <Footerinitial className='rodape' />
    </div>
  )
}

export default App
