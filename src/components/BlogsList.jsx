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
                <BlogCard imgsrc={"https://i.pinimg.com/736x/d3/e0/f4/d3e0f4f99fcd71072d5372988a94c8c4.jpg"} date={"21 October 2024"}/>
                <BlogCard imgsrc={"https://i.pinimg.com/736x/55/fd/86/55fd861501fccb8ba7a7b6ddafb6ced7.jpg"} date={"21 October 2024"}/>
                <BlogCard imgsrc={"https://i.pinimg.com/1200x/25/b4/2d/25b42d975719938fad0dbfb2de15a275.jpg"} date={"21 October 2024"}/>
                <BlogCard imgsrc={"https://i.pinimg.com/1200x/24/c9/38/24c9381b1a79672b5e276782c86a92ac.jpg"} date={"21 October 2024"}/>
                
            </div>
        </section>
    )
}

export default BlogsList



const BlogCard = ({ imgsrc, date }) => {
    return (
        <div>
            <div className='h-56 bg-gray-300 rounded-xl overflow-hidden'>
                <img src={imgsrc} alt="imgsrc" className='h-full w-full object-cover'/>
            </div>
            <div className='flex pt-3 text-[10px] lg:text-xs gap-2 uppercase font-semibold'>
                <p>Decor</p>
                <p className='text-gray-500'>•</p>
                <p className='text-gray-500 '>{date}</p>
            </div>
            <p className='text-xs font-semibold pt-3 text-gray-700'>
                The best influencers to follow for sartorial inspiration.
            </p>
        </div>
    )
}