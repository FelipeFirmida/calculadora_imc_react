import { useState } from 'react'

import Calculadora from './components/Calculadora'
import Calcular from './components/Calculadora'

import './App.css'


function App() {


  return (
    <div className="container">
      <h1 className='title'>
        Calculadora de IMC:
      </h1>
      <Calcular />
    </div>
  )
}

export default App
