import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LenisProvider } from './utils/LenisProvider'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

const App = () => {
  return (
    <LenisProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<BlogPost />} />
      </Routes>
    </LenisProvider>
  )
}

export default App;
