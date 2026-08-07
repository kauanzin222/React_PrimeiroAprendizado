import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import UserDetails from './components/UserDetails'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [pessoas, setPessoas] = useState([
    { id: 1, nome: 'Maria', idade: 20, profissao: 'Desenvolvedora' },
    { id: 2, nome: 'Matheus', idade: 32, profissao: 'Suporte' },
    { id: 3, nome: 'Pedro', idade: 17, profissao: 'Estagiário' }
  ])

  return (
    <>
      <header>
        <h1>Seção 4</h1>
      </header>

      <UserDetails pessoas={pessoas}></UserDetails>
    </>
  )
}

export default App
