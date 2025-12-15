import React from 'react'

const BlogsList = () => {
    return (
        <section id='blogs' className='px-4 sm:px-10 mt-10 lg:px-20 py-4'>
            <div className='flex items-center justify-between'>
                <p className='text-5xl text-gray-800 font-semibold'>Latest blogs</p>
                <div className='flex items-center sm:mr-0 -mr-10'>
                    <div className="circle bg- glow-div h-12 w-12 rounded-full"></div>
                    <p className='uppercase text-xs tracking-wide font-semibold -ml-5 text-balance'>Explore All Blogs</p>
                </div>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-6 py-10'>
                <BlogCard imgsrc={"https://i.pinimg.com/736x/81/c2/d5/81c2d5db59757d2ab8f1730dc26a0165.jpg"} date={"21 October 2024"} title={"Decor"} desc={"The best influencers to follow for sartorial inspiration."}/>
                <BlogCard imgsrc={"https://i.pinimg.com/736x/8a/b7/9c/8ab79c16de2db4d5f61f975ba4fdbdbd.jpg"} date={"21 October 2024"} title={"Design"} desc={"Everything you need to know about decor's big night out."}/>
                <BlogCard imgsrc={"https://i.pinimg.com/1200x/70/95/b9/7095b95b99488947b47ec6fd186d1be1.jpg"} date={"21 October 2024"} title={"Development"} desc={"All the best looks & moments from the met gala 2023."}/>
                <BlogCard imgsrc={"https://i.pinimg.com/1200x/fe/8f/fb/fe8ffbab478f3e22993d9a0d395611e2.jpg"} date={"21 October 2024"} title={"Test"} desc={"Find a colour palettes that reflects your passion."}/>
                
            </div>
        </section>
    )
}

export default BlogsList



const BlogCard = ({ imgsrc, date,title,desc }) => {
    return (
        <div>
            <div className='lg::h-[15vw] md:h-[20vw] h-[35vw] bg-gray-300 rounded-xl overflow-hidden'>
                <img src={imgsrc} alt="imgsrc" className='h-full w-full object-cover'/>
            </div>
            <div className='flex pt-3 text-[10px] lg:text-xs gap-2 uppercase font-semibold'>
                <p>{title}</p>
                <p className='text-gray-500'>•</p>
                <p className='text-gray-500 '>{date}</p>
            </div>
            <p className='text-xs font-semibold pt-3 text-gray-700'>
                {desc}
            </p>
        </div>
    )
}