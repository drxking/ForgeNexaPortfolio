import React from 'react'

const About = () => {
    return (
        <div className='min-h-screen flex gap-16 py-10'>
            <div className=" w-1/2 ">
                <div className='w-full h-full bg-gray-200'>

                </div>
            </div>
            <div className="right w-1/2 flex flex-col justify-end gap-7">
                <h1 className='text-6xl font-semibold tracking-tight -ml-32' >
                    We create unique <br />
                    digital experiences.
                </h1>
                <p className='text-sm text-gray-500 font-medium w-96 tracking-tight leading-6'>
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
                        <p className='text-[16vw] text-[#BEFF01] font-semibold leading-none tracking-tighter'>about</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About