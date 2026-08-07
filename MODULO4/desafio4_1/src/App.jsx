import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import UserDetails from './components/UserDetails'
import Title from './components/Title'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [pessoas, setPessoas] = useState([
    { id: 1, nome: 'Maria', idade: 20, profissao: 'Desenvolvedora' },
    { id: 2, nome: 'Matheus', idade: 32, profissao: 'Suporte' },
    { id: 3, nome: 'Pedro', idade: 17, profissao: 'Estagiário' }
  ])

  let redTitle = false

  return (
    <>
      <header>
        <h1>Seção 4</h1>
      </header>

      <UserDetails pessoas={pessoas}></UserDetails>

      {/* CSS Dinâmico */}
      <section className='container' style={{textAlign: 'center'}}>
        <h2>CSS dinâmico</h2>
        <h3 className={redTitle ? 'red-title' : 'myTitle'}>Este título vai ter classe dinâmica</h3>
      </section>

      {/* CSS Module */}
      <Title>
        <h3 className='myTitle'>Testando se a classe 'myTitle' está pegando o style do Title.module</h3>
      </Title>
    </>
  )
}

export default App
