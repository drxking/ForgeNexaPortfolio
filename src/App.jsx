import React from 'react'
import Navbar from './components/Navbar'
import Background from './components/Background'
import RadialLines from './components/RadialLines'
import Main from './components/Main'
import About from './components/About'

const App = () => {
  return (
    <div className='relative min-h-screen overflow-x-hidden'>
      <Background />
      <Navbar />
      <Main />
      <About />
    
    </div>
  )
}

export default App