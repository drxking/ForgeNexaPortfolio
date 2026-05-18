import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchPosts, formatBlogDate, deriveCategory, excerpt } from '../utils/api'

const BlogsList = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let alive = true
        fetchPosts()
            .then((data) => { if (alive) setPosts(Array.isArray(data) ? data : []) })
            .catch((err) => { if (alive) setError(err.message) })
            .finally(() => { if (alive) setLoading(false) })
        return () => { alive = false }
    }, [])

    const visible = posts.slice(0, 8)

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
                {loading && Array.from({ length: 4 }).map((_, i) => (
                    <BlogSkeleton key={i} />
                ))}

                {!loading && error && (
                    <div className='col-span-full text-center text-sm text-gray-500 py-10'>
                        <p className='uppercase tracking-wide font-semibold mb-2 text-black'>Unable to load blogs</p>
                        <p>{error}</p>
                    </div>
                )}

                {!loading && !error && visible.length === 0 && (
                    <div className='col-span-full text-center text-sm text-gray-500 py-10'>
                        No blogs available yet.
                    </div>
                )}

                {!loading && !error && visible.map((p) => (
                    <BlogCard
                        key={p._id}
                        id={p._id}
                        imgsrc={p.image}
                        date={formatBlogDate(p.createdAt)}
                        title={deriveCategory(p.headline)}
                        desc={excerpt(p.headline, 90)}
                    />
                ))}
            </div>
        </section>
    )
}

export default BlogsList

const BlogCard = ({ id, imgsrc, date, title, desc }) => {
    return (
        <Link to={`/blog/${id}`} className='block group'>
            <div className='lg::h-[15vw] md:h-[20vw] h-[35vw] bg-gray-300 rounded-xl overflow-hidden'>
                <img
                    src={imgsrc}
                    alt={desc}
                    loading='lazy'
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
            </div>
            <div className='flex pt-3 text-[10px] lg:text-xs gap-2 uppercase font-semibold'>
                <p>{title}</p>
                <p className='text-gray-500'>•</p>
                <p className='text-gray-500'>{date}</p>
            </div>
            <p className='text-xs font-semibold pt-3 text-gray-700 leading-5 group-hover:text-black transition-colors'>
                {desc}
            </p>
        </Link>
    )
}

const BlogSkeleton = () => (
    <div className='animate-pulse'>
        <div className='lg::h-[15vw] md:h-[20vw] h-[35vw] bg-gray-200 rounded-xl'></div>
        <div className='h-3 w-1/2 bg-gray-200 rounded mt-4'></div>
        <div className='h-3 w-3/4 bg-gray-200 rounded mt-3'></div>
        <div className='h-3 w-2/3 bg-gray-200 rounded mt-2'></div>
    </div>
)
