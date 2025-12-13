import React from 'react'
import Navbar from './components/Navbar'
import Background from './components/Background'
import RadialLines from './components/RadialLines'
import Main from './components/Main'
import About from './components/About'
import Feature from './components/Feature'
import { LenisProvider } from './utils/LenisProvider'
import Lenis from 'lenis'
import Projects from './components/Projects'
import Footer from './components/Footer'
import BlogsList from './components/BlogsList'

const App = () => {
  return (
    <LenisProvider>
      <div className='relative min-h-screen overflow-x-hidden'>
        <Background />
        <Navbar />
        <Main />
        <About />
        <Feature />
        <Projects />
        <BlogsList />
        <Footer />
      </div>
    </LenisProvider>
  )
}

export default App;