import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalog from './components/pages/Catalog'
import Home from './components/pages/Home'
import ProductPage from './components/pages/ProductPage'
import ErrorPage from './components/pages/ErrorPage'
import { DataProvider } from './context/DataContext'
import Cart from './components/pages/Cart'
import Purchase from './components/pages/Purchase'
import { ProductsProvider } from './context/ProductsContext'
import Login from './components/pages/Login'

const App = () => {
  return (
    <DataProvider>
      <div className='AppContainer'>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            >
              <Route
                index
                element={
                  <ProductsProvider>
                    <Catalog />
                  </ProductsProvider>
                }
              />
              <Route
                path='/product/:productId'
                element={<ProductPage />}
              />
              <Route
                path='/cart'
                element={<Cart />}
              />
              <Route
                path='/purchase'
                element={<Purchase />}
              />
              <Route
                path='/login'
                element={<Login />}
              />
              <Route
                path='/error/:errorId'
                element={<ErrorPage />}
              />
              <Route
                path='*'
                element={<ErrorPage />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  )
}

export default App
