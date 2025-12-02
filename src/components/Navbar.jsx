import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='flex items-center fixed w-full justify-between sm:px-14 px-4 py-5 text-sm z-50' >
                <div className=' lg:w-1/6 w-1/2 flex gap-2 rounded-full overflow-hidden' >
                    <img className='h-12 scale-125 cursor-pointer' src="/F.png" alt="logo" />
                </div>
                <ul className='lg:flex hidden font-medium   items-center justify-center gap-5 w-4/6' >
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Agency</li>
                    <li className='cursor-pointer'>Expertise</li>
                    <li className='cursor-pointer'>Projects</li>
                    <li className='cursor-pointer'>People</li>
                    <li className='cursor-pointer'>Blog</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
                <div className=' lg:w-1/6 w-1/2 gap-2 flex items-center justify-end'>
                    <button className='bg-black text-white px-4 py-2 rounded-full cursor-pointer'>Hire Agency <i className="ri-arrow-right-line"></i></button>
                    <i class="ri-menu-line lg:hidden text-3xl"></i>
                </div>

            </nav>
        </>
    )
}

export default Navbar