import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalog from './components/pages/Catalog'
import Home from './components/pages/Home'
import ProductPage from './components/pages/ProductPage'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Catalog />} />
          </Route>
          <Route path='/product/:productId' element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
