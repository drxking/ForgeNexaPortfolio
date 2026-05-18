import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LenisProvider } from './utils/LenisProvider'
import { CurrencyProvider } from './utils/CurrencyContext'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

const App = () => {
  return (
    <CurrencyProvider>
      <LenisProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={<BlogPost />} />
        </Routes>
      </LenisProvider>
    </CurrencyProvider>
  )
}

export default App;
