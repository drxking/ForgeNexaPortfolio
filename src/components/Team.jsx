import React from 'react'
import Three60 from './Three60'
import teamData from '../data/team.json'

const Team = () => {
    return (
        <section id='team' className='py-10'>
            <div className="top py-4 overflow-hidden flex gap-10">
                <div className="text flex">
                    <div className='relative sm:pt-0 pt-10 pr-20'>
                        <p className='md:text-[250px] text-8xl sm:text-[180px] text- font-semibold leading-none tracking-tighter -ml-6 sm:-ml-16 glow'>team</p>
                        <div className='absolute top-5 right-10'>
                            <Three60
                                icon={"ri-team-fill"}
                                iconColor={"text- glow"}
                                outerBg={"bg-gray-800"}
                                textColor={"text-white"}
                                text={"Meet The People-Behind ForgeNexa-Crafting Bold Ideas-"}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex items-end'>
                    <div className='hidden items-center lg:flex'>
                        <div className='glow-div h-12 w-12 rounded-full'></div>
                        <div className='text-xs font-bold -ml-4 uppercase'>
                            Meet Our Team
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 sm:px-10 lg:px-20 py-4'>
                <div className='flex items-center justify-between flex-wrap gap-4 pb-10'>
                    <p className='text-5xl text-gray-800 font-semibold max-w-xl tracking-tight'>
                        The minds behind <br /> every pixel.
                    </p>
                    <p className='text-sm text-gray-500 font-medium md:w-96 w-full tracking-tight leading-6'>
                        A small, focused team of designers, developers, and strategists <span className='border-b text-black'>obsessed with craft</span> and the brands we get to build alongside.
                    </p>
                </div>

                <div className='overflow-x-auto -mx-4 sm:-mx-10 lg:-mx-20 px-4 sm:px-10 lg:px-20 pb-4'>
                    <div className='flex gap-6 min-w-min'>
                        {teamData.members.map((member) => (
                            <TeamCard
                                key={member.id}
                                num={member.id}
                                name={member.name}
                                title={member.title}
                                image={member.image}
                                portfolio={member.portfolio}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const TeamCard = ({ num, name, title, image, portfolio }) => {
    const hasPortfolio = portfolio && portfolio.trim().length > 0

    const card = (
        <div className='relative rounded-2xl overflow-hidden bg-white border border-gray-200 text-black w-72 sm:w-80 shrink-0 flex flex-col group transition-all duration-300 hover:border-gray-400'>
            <div className='h-80 bg-gray-300 overflow-hidden relative'>
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        loading='lazy'
                        className='h-full w-full object-cover grayscale-100 transition-transform duration-500 group-hover:scale-105'
                    />
                ) : (
                    <div className='h-full w-full flex items-center justify-center bg-gradient-to-b from-gray-200 to-gray-300'>
                        <i className='ri-user-3-line text-7xl text-gray-400'></i>
                    </div>
                )}
                {hasPortfolio && (
                    <div className='absolute top-4 right-4 flex items-center'>
                        <div className='glow-div h-3 w-3 rounded-full'></div>
                        <p className='uppercase text-[10px] tracking-wide font-semibold ml-2 text-white drop-shadow'>Portfolio</p>
                    </div>
                )}
            </div>

            <div className='p-6 flex flex-col gap-3'>
                <p className='text-6xl font-semibold text-transparent text-this stroke-black leading-none'>{num}</p>
                <div className='pl-8 -mt-4 flex flex-col gap-1'>
                    <h1 className='capitalize text-sm font-bold'>{name}</h1>
                    <p className='text-xs leading-5 text-gray-500'>{title}</p>
                </div>

                <div className='h-px w-full bg-gray-200 mt-2'></div>

                <div className='flex items-center justify-between text-xs uppercase font-semibold tracking-wide'>
                    <span className='text-gray-500'>View Portfolio</span>
                    <i className={`ri-arrow-right-up-line text-base ${hasPortfolio ? 'text-black' : 'text-gray-300'}`}></i>
                </div>
            </div>
        </div>
    )

    if (hasPortfolio) {
        return (
            <a href={portfolio} target='_blank' rel='noopener noreferrer'>
                {card}
            </a>
        )
    }

    return card
}

export default Team
