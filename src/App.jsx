import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Accordian from './component/Accordian'

function App() {

  return (
    <>
      <div className='container'>
        <div style={{width: '80%'}}>
          <h2>Esim FAQ</h2>
          <Accordian/>
        </div>
      </div>
    </>
  )
}

export default App
