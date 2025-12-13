import React from 'react'
import RadialLines from './RadialLines'
import MainFooter from './MainFooter'

const Main = () => {

    return (
        <section id='main' className='flex overflow-hidden  items-center relative h-screen justify-center'>
            <div  className='absolute  rounded-full'>
                <RadialLines />
            </div>
            <h1 className='z-20 md:text-7xl  text-4xl text-[#222] text-center md:font-semibold font-bold'>We're a creative  <br /> digital agency</h1>
            <p className='  text- opacity-85 absolute sm:text-[33vw] text-[35vw] tracking-tighter leading-none font-semibold glow'>creative</p>
            <div className='absolute bottom-2'>
                <MainFooter />
            </div>
        </section>
    )
}

export default Main