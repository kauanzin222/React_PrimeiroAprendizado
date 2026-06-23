// Components
import PrimeiroComponente from './components/PrimeiroComponente'
import TemplateExpressions from './components/TemplateExpressions'


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Fundamento React</h1>
      </header>

      <section>
        <PrimeiroComponente></PrimeiroComponente>
      </section>

      <section>
        <TemplateExpressions></TemplateExpressions>
      </section>

    </>
  )
}

export default App
