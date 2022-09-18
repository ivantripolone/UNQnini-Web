import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalog from './components/pages/Catalog'
import Home from './components/pages/Home'
import ProductPage from './components/pages/ProductPage'

const App = () => {
  return (
    <div className='AppContainer'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Catalog />} />
            <Route path='/product/:productId' element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
