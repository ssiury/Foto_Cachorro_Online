import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbarinitial from './components/navbarinitial'

function App() {

  return (
    <div className='App'>
      <Navbarinitial className='menu' />
      <Outlet/>
    </div>
  )
}

export default App
