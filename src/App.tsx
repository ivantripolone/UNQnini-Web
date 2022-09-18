import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalog from './components/pages/Catalog'
import Home from './components/pages/Home'

const App = () => {
  return (
    <div className='App' style={{ backgroundColor: `#832c1b` }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Catalog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
