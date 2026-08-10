import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='container'>
        <h1>Módulo de Forms</h1>
      </header>

      <MyForm user={{ name: 'Lais', email: 'laisoliveira@gmail.com', bio: 'Estudante de Moda', role: 'editor' }}></MyForm>
    </>
  )
}

export default App
