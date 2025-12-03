import React from 'react'
import Navbar from './components/Navbar'
import Background from './components/Background'
import RadialLines from './components/RadialLines'
import Main from './components/Main'

const App = () => {
  return (
    <div className='relative min-h-screen overflow-x-hidden'>
      <Background />
      <Navbar />
      <Main />
    
    </div>
  )
}

export default App