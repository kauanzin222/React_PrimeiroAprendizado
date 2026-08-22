import './App.css'

// Config React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components
import NavBar from './components/NavBar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

function App() {
  return (
    <>
      <main>
        {/* Elementos que estão fora de BrowserRouter estarão em todas as páginas */}
        <h1>React Router</h1>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* Rota Dinâmica */}
            <Route path='/products/:id' element={<Product />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
