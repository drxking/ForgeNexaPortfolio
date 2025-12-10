import React from 'react'
import Three60 from './Three60'
import Links from '../utils/Links'

const Footer = () => {
    return (
        <div>
            <div className='overflow-x-hidden relative'>
                <div className='absolute top-3 left-2/5 -translate-x-1/2'>
                    <Three60 icon={"ri-number-1"} iconColor={"text-black font-extrabold"} innerBg={"bg-[#BEFF01] border-none"} outerBg={"bg-white all-shadow font-extrabold"} textColor={"text-black"} text={"Based on Nepal-Thousands of Engaging and Smooth Websites-"} />
                </div>
                <h1 className='md:text-[250px] opacity-0 text-8xl sm:text-[180px] text-[#BEFF01] font-semibold leading-none tracking-tighter flex-nowrap text-nowrap py-10'>work together</h1>
                <h1 className='md:text-[250px] text-8xl sm:text-[180px] -z-10 text-[#BEFF01] font-semibold leading-none tracking-tighter flex-nowrap text-nowrap absolute top-1/2 sm:left-1/2 left-4/6 -translate-x-1/2 -translate-y-1/2'><span className='text-black mr-6 sm:mr-16'>work</span>  together</h1>
            </div>
            <div className='flex   justify-between gap-10 md:px-28 px-5 lg:px-52 py-10 flex-wrap'>
                <div className="left">
                    <h1 className='text-xl py-10'>Let's make something great <span className='border-b font-semibold'>work together?</span></h1>
                    <div className='flex text-xs justify-between leading-5'>
                        <div>
                            <h1 className='font-medium mb-1'>ForgeNexa - Kathmandu</h1>
                            <p className='text-gray-500'>Suryakot Koteshwor</p>
                            <p className='text-gray-500'>CCRC college aagadi</p>
                        </div>
                        <div>
                            <h1 className='font-medium mb-1'>ForgeNexa - Pokhara</h1>
                            <p className='text-gray-500'>Suryakot Naranchok</p>
                            <p className='text-gray-500'>MKC college paxadi</p>
                        </div>
                    </div>
                </div>

                <div className="right sm:pb-10  flex flex-col justify-between items-end flex-1 pt-10">
                    <img className='h-12 w-12 scale-[130%] shrink-0 cursor-pointer m-4' src="/F.png" alt="logo" />
                    <div className='text-xs'>
                        <p className='text-right'>+977 9876543210</p>
                        <p className='text-right border-b font-semibold'>forgenexa15@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='flex  text-xs justify-center items-center lg:justify-between gap-10 md:px-28 px-5 lg:px-52 py-3 md:py-7 border-t border-gray-200'>
                <ul className='lg:flex hidden font-medium    items-center gap-6 ' >
                    {
                        Links.map((e) => (
                            <a key={e[0]} href={`${e[1]}`}>
                                <li className='cursor-pointer'>{e[0]}</li>
                            </a>
                        ))
                    }
                </ul>
                <p className='text-gray-500 text-nowrap'>© 2025 All Copyright Reserved | <span className='text-black font-semibold'>ForgeNexa</span></p>
            </div>
        </div>
    )
}

export default Footer