// Components
import AlterarDado from './components/AlterarDado'
import ListaRender from './components/ListaRender'
import CondicionalRender from './components/CondicionalRender'
import MostraNomeUsuario from './components/MostraNomeUsuario'
import DetalhesCarro from './components/DetalhesCarro'
import Fragment from './components/Fragment'
import Container from './components/Container'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ExecuteFunction from './components/ExecuteFunction'
import Mensagem from './components/Mensagem'
import MudarStateMensagem from './components/MudarStateMensagem'
import './App.css'

import Paisagem2 from './assets/img2.jpg'

function App() {
  const [count, setCount] = useState(0)
  const [nomeUsuario] = useState("Matheus")

  const carros = [
    { id: 1, marca: "Fiat", km: 3000, cor: "Azul", novo: false },
    { id: 2, marca: "Chevrolet", km: 5000, cor: "Vermelho", novo: true },
    { id: 3, marca: "Volvo", km: 4000, cor: "Ciano", novo: false }
  ]

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [mensagem, setMensagem] = useState('')

  const handleMensagem = (msg) => {
    setMensagem(msg)
  }

  return (
    <>
      <header>
        <h1>Seção 3</h1>
      </header>
      <section>
        {/* Imagem em Public */}
        <img src="/img1.jpg" alt="Paisagem1" className='imgPaisagem' />
      </section>
      <section>
        {/* Imagem em Assets */}
        <img src={Paisagem2} alt="Paisagem2" className='imgPaisagem' />
      </section>

      <AlterarDado></AlterarDado>

      <ListaRender>

      </ListaRender>

      <CondicionalRender></CondicionalRender>

      <MostraNomeUsuario nome={nomeUsuario}></MostraNomeUsuario>

      {/* Usando destructuring */}
      <DetalhesCarro marca="Fiat" km={2000} cor="Azul"></DetalhesCarro>
      {/* Reaproveitando componente */}
      <DetalhesCarro marca="Chevrolet" km={10000} cor="Vermelho"></DetalhesCarro>

      {carros.map((carro) => (
        <DetalhesCarro
          key={carro.id}
          marca={carro.marca}
          km={carro.km}
          cor={carro.cor}
          novo={carro.novo}
        ></DetalhesCarro>
      ))}

      {/* Fragment */}
      <Fragment propFragment="Terceiro Título"></Fragment>

      {/* Children */}
      <Container>
        <p>Este é o conteúdo</p>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage}></ExecuteFunction>

      {/* State Lift */}
      <Mensagem msg={mensagem}>
        <MudarStateMensagem handleMensagem={handleMensagem}></MudarStateMensagem>
      </Mensagem>
    </>


  )
}

export default App
