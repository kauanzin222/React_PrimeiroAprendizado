import './App.css'

// Config React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'

import NavBar from './components/NavBar'

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
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
