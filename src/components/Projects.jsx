import React from 'react'

const Projects = () => {
    let text = "Based on Nepal - Full Service Creative Web Design Agency - ";
    return (
        <div>
            <div className="top py-4 overflow-hidden flex gap-10">
                <div className="text flex">
                    <div className='relative sm:pt-0 pt-10 pr-20'>
                        <p className='md:text-[250px] text-8xl sm:text-[180px] text-[#BEFF01] font-semibold leading-none tracking-tighter -ml-6 sm:-ml-16'>projetcs</p>
                        <div className='sm:h-32 sm:w-32 h-28 w-28 bg-gray-800 rounded-full items-center justify-center absolute flex right-0 top-0'>
                            {
                                text.split("").map((e, idx, arr) => {
                                    let rotate = 360 * idx / arr.length;
                                    console.log(rotate);

                                    return (
                                        <div style={{ rotate: `${rotate}deg` }} className=' text-[8px] font-semibold absolute top-1/2 left-1/2 w-3 origin-center -translate-y-1/2 -translate-x-1/2 text-white  pb-24 uppercase'>
                                            {e}
                                        </div>
                                    )
                                })
                            }
                            <div className='h-18 w-18 border rounded-full flex items-center justify-center border-gray-700'>
                                <i class="ri-heart-3-fill text-3xl text-[#BEFF01]"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-end '>
                    <div className='hidden items-center lg:flex '>
                        <div className='bg-[#BEFF01] h-12 w-12 rounded-full'>

                        </div>
                        <div className='text-xs font-bold -ml-4  uppercase'>
                            Explore Projects
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects