import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/product/:productId" element={< Product />} />
          <Route path="/404" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
