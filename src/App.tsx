import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalog from './components/pages/Catalog'
import Home from './components/pages/Home'
import ProductPage from './components/pages/ProductPage'
import ErrorPage from './components/pages/ErrorPage'

const App = () => {
  return (
    <div className='AppContainer'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Catalog />} />
            <Route path='/product/:productId' element={<ProductPage />} />
            <Route path='/error/:errorId' element={<ErrorPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
