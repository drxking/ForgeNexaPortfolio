import React from 'react'
import Navbar from '../components/Navbar'
import Background from '../components/Background'
import Main from '../components/Main'
import About from '../components/About'
import Feature from '../components/Feature'
import Projects from '../components/Projects'
import Pricing from '../components/Pricing'
import Team from '../components/Team'
import BlogsList from '../components/BlogsList'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='relative min-h-screen shadow w-screen overflow-x-hidden'>
            <Background />
            <Navbar />
            <Main />
            <About />
            <Feature />
            <Projects />
            <Pricing />
            <Team />
            <BlogsList />
            <Footer />
        </div>
    )
}

export default Home
