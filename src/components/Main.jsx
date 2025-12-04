import React from 'react'
import RadialLines from './RadialLines'
import MainFooter from './MainFooter'

const Main = () => {
    return (
        <div className='flex overflow-x-hidden  items-center relative h-screen justify-center'>
            <div className='absolute'>
                <RadialLines />
            </div>
            <h1 className='z-20 md:text-7xl  text-4xl text-[#222] text-center md:font-semibold font-bold'>We're a creative  <br /> digital agency</h1>
            <p className='text-[#bad44f] md:text-[#bcff01] opacity-85 absolute sm:text-[33vw] text-[35vw] tracking-tighter leading-none font-semibold'>creative</p>
            <div className='absolute bottom-2'>
                <MainFooter />
            </div>
        </div>
    )
}

export default Main