import React from 'react'
import ProjectCards from './ProjectCards';

import { data } from '../data';

const Projects = () => {
    let text = "Based on Nepal-Full Service Creative Web Design Agency-";
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

                                    return (
                                        <div key={idx} style={{ rotate: `${rotate - 45}deg` }} className='text-center text-[8px] font-semibold absolute top-1/2 left-1/2 w-3 origin-center -translate-y-1/2 -translate-x-1/2 text-white pb-24  sm:pb-28 uppercase'>
                                            <p className='-rotate-1'>{e}</p>
                                        </div>
                                    )
                                })
                            }
                            <div className='h-18 w-18 border rounded-full flex items-center justify-center border-gray-700'>
                                <i className="ri-heart-3-fill text-3xl text-[#BEFF01]"></i>
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
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-10 lg:px-20 py-4 gap-5 '>
                <div className='mt-19'>
                    <ProjectCards img={data[0].img} title={data[0].title} category={data[0].category} />
                    <ProjectCards img={data[1].img} title={data[1].title} category={data[1].category} />

                </div>
                <div className='flex flex-col gap-10'>
                    <ProjectCards img={data[2].img} title={data[2].title} category={data[2].category} />
                    <ProjectCards img={data[3].img} title={data[3].title} category={data[3].category} />

                </div>
                <div className='mt-19 md:flex hidden flex-col'>
                    <ProjectCards img={data[4].img} title={data[4].title} category={data[4].category} />
                    <ProjectCards img={data[5].img} title={data[5].title} category={data[5].category} />

                </div>
                <div className='lg:flex hidden flex-col gap-10'>
                    <ProjectCards img={data[6].img} title={data[6].title} category={data[6].category} />
                    <ProjectCards img={data[7].img} title={data[7].title} category={data[7].category} />

                </div>
            </div>
        </div>
    )
}

export default Projects