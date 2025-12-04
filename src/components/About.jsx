import React from 'react'

const About = () => {
    return (
        <div className='sm:min-h-screen sm:h-screen flex sm:flex-row flex-col gap-16 py-10 sm:px-0 pl-5'>
            <div className="sm:w-1/2 sm:h-full h-96 ">
                <div className='w-full h-full bg-gray-200 sm:rounded-none rounded-l-4xl'>

                </div>
            </div>
            <div className="right sm:w-1/2 flex flex-col justify-end gap-7">
                <h1 className='md:text-6xl text-5xl font-semibold tracking-tight sm:-ml-32' >
                    We create unique <br />
                    digital experiences.
                </h1>
                <p className='text-sm text-gray-500 font-medium md:w-96 w-full tracking-tight leading-6 sm:pr-4 pr-8'>
                    We are excited for our work and how it positively impacts clients. With over <span className='border-b text-black'>3 years of experience</span> we have been constantly providing excellent web solutions which is best in-class experience for our clients. We mainly focus on clients and their requirements.
                </p>
                <div className='flex gap-10'>
                    <div className='shrink-0'>
                        <div className='flex items-center'>
                            <div className=' bg-[#BEFF01] rounded-full w-9 h-9'></div>
                            <p className='uppercase text-xs font-semibold -ml-5'>About Agency</p>
                        </div>
                    </div>
                    <div>
                        <p className='md:text-[220px] text-[180px] text-[#BEFF01] font-semibold leading-none sm:ml-0 -ml-15 tracking-tighter'>about</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About