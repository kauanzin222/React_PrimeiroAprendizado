// Components
import AlterarDado from './components/AlterarDado'
import ListaRender from './components/ListaRender'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Paisagem2 from './assets/img2.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Seção 3</h1>
      </header>

      <section>
        {/* Imagem em Public */}
        <img src="/img1.jpg" alt="Paisagem1" className='imgPaisagem'/>
      </section>

      <section>
        {/* Imagem em Assets */}
        <img src={Paisagem2} alt="Paisagem2" className='imgPaisagem'/>
      </section>

      <AlterarDado></AlterarDado>

      <br />
      <br />

      <ListaRender></ListaRender>

      <br />
      <br />
    </>
  )
}

export default App
