import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

// components
import NavBar from './components/NavBar'

// pages
import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return (
    <>
      <main>
        <h1>Context API</h1>

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
