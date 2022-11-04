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
import Profile from './components/pages/Profile'
import MyPurchases from './components/pages/MyPurchases'
import Register from './components/pages/Register'
import Claim from './components/pages/Claim'

const App = () => {
  return (
    <DataProvider>
      <div className='AppContainer'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route index element={<ProductsProvider> <Catalog /> </ProductsProvider>} />
              <Route path='/product/:productId' element={<ProductPage />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/purchase' element={<Purchase />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/mypurchases' element={<MyPurchases />} />
              <Route path='/claim' element={<Claim />} />
              <Route path='/error/:errorId' element={<ErrorPage />} />
              <Route path='*' element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  )
}

export default App
