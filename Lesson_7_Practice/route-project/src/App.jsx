import React from 'react'
import { StrictMode } from 'react'
import { Routes, Route }  from "react-router"
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/products/:id' element={<ProductDetails />} />
      <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App