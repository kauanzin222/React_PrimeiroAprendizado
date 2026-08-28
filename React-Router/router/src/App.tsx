import './App.css'

// Config React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components
import NavBar from './components/NavBar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'
import ProductInfo from './pages/ProductInfo'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'

function App() {
  const url = 'http://localhost:3000/products/'

  return (
    <>
      <main>
        {/* Elementos que estão fora de BrowserRouter estarão em todas as páginas */}
        <h1>React Router</h1>
        <BrowserRouter>
          <NavBar />
          {/* Search */}
          <SearchForm />
          <Routes>
            <Route path='/' element={<Home url={url} />} />
            <Route path='/about' element={<About />} />
            {/* Rota Dinâmica */}
            <Route path='/products/:id' element={<ProductDetails url={url} />} />
            {/* Nested Routes */}
            <Route path='/products/:id/info' element={<ProductInfo url={url} />} />
            {/* Search */}
            <Route path='/search' element={<Search />} />
            {/* No match route */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
