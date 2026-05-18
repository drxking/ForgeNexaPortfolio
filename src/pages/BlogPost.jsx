import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Background from '../components/Background'
import Footer from '../components/Footer'
import Three60 from '../components/Three60'
import BlogContent from '../components/BlogContent'
import { fetchPostById, fetchPosts, formatBlogDate, deriveCategory, excerpt } from '../utils/api'

const BlogPost = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [related, setRelated] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let alive = true
        setLoading(true)
        setError(null)
        setPost(null)

        Promise.all([fetchPostById(id), fetchPosts().catch(() => [])])
            .then(([detail, all]) => {
                if (!alive) return
                setPost(detail)
                setRelated((Array.isArray(all) ? all : []).filter(p => p._id !== id).slice(0, 3))
            })
            .catch((err) => { if (alive) setError(err.message) })
            .finally(() => { if (alive) setLoading(false) })

        window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
        return () => { alive = false }
    }, [id])

    return (
        <div className='relative min-h-screen w-screen overflow-x-hidden'>
            <Background />
            <Navbar />

            <article className='pt-32 sm:pt-40 px-4 sm:px-10 lg:px-20 pb-10'>
                <div className='flex items-center gap-2 text-xs uppercase font-semibold tracking-wide pb-6'>
                    <Link to='/' className='text-gray-500 hover:text-black transition-colors'>Home</Link>
                    <span className='text-gray-400'>/</span>
                    <Link to='/#blogs' className='text-gray-500 hover:text-black transition-colors'>Blogs</Link>
                    <span className='text-gray-400'>/</span>
                    <span>Article</span>
                </div>

                {loading && <BlogPostSkeleton />}

                {!loading && error && (
                    <div className='py-20 text-center'>
                        <p className='uppercase text-xs font-bold tracking-wide text-gray-500 mb-3'>Something went wrong</p>
                        <h1 className='text-3xl font-semibold tracking-tight mb-6'>{error}</h1>
                        <Link to='/#blogs' className='inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full text-sm'>
                            <i className="ri-arrow-left-line"></i> Back to blogs
                        </Link>
                    </div>
                )}

                {!loading && !error && post && (
                    <>
                        <div className='flex flex-wrap items-center gap-3 text-[10px] lg:text-xs uppercase font-semibold pb-5'>
                            <p className='text-black'>{deriveCategory(post.headline)}</p>
                            <span className='text-gray-400'>•</span>
                            <p className='text-gray-500'>{formatBlogDate(post.createdAt)}</p>
                            <span className='text-gray-400'>•</span>
                            <p className='text-gray-500'>By {post.author}</p>
                        </div>

                        <h1 className='md:text-6xl text-3xl sm:text-5xl font-semibold tracking-tight max-w-5xl pb-10'>
                            {post.headline}
                        </h1>

                        {post.image && (
                            <div className='relative w-full h-[60vw] sm:h-[45vw] md:h-[40vw] lg:h-[34vw] bg-gray-200 rounded-2xl overflow-hidden mb-12'>
                                <img
                                    src={post.image}
                                    alt={post.headline}
                                    className='h-full w-full object-cover'
                                />
                                <div className='absolute -bottom-4 -right-4 hidden md:block'>
                                    <Three60
                                        icon={"ri-book-read-fill"}
                                        iconColor={"text- glow"}
                                        outerBg={"bg-white all-shadow"}
                                        textColor={"text-black"}
                                        text={`${deriveCategory(post.headline)}-Read Time ${Math.max(2, Math.round((post.desc || '').split(/\s+/).length / 200))} Min-`}
                                    />
                                </div>
                            </div>
                        )}

                        <div className='grid lg:grid-cols-[1fr_280px] gap-10'>
                            <div className='max-w-3xl'>
                                <BlogContent text={post.desc} />
                            </div>

                            <aside className='lg:sticky lg:top-32 self-start flex flex-col gap-6'>
                                <div className='border border-gray-200 rounded-2xl p-6 flex flex-col gap-4'>
                                    <p className='uppercase text-[10px] font-bold tracking-wide text-gray-500'>Written by</p>
                                    <div className='flex items-center gap-3'>
                                        <div className='glow-div h-10 w-10 rounded-full shrink-0'></div>
                                        <div>
                                            <p className='text-sm font-semibold'>{post.author}</p>
                                            <p className='text-xs text-gray-500'>Published {formatBlogDate(post.createdAt)}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='border border-gray-200 rounded-2xl p-6 flex flex-col gap-4'>
                                    <p className='uppercase text-[10px] font-bold tracking-wide text-gray-500'>Share article</p>
                                    <div className='flex gap-3 text-xl'>
                                        <i className="ri-twitter-x-line cursor-pointer hover:text-black text-gray-700"></i>
                                        <i className="ri-linkedin-box-fill cursor-pointer hover:text-black text-gray-700"></i>
                                        <i className="ri-facebook-circle-fill cursor-pointer hover:text-black text-gray-700"></i>
                                        <i className="ri-link cursor-pointer hover:text-black text-gray-700"></i>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </>
                )}
            </article>

            {!loading && !error && related.length > 0 && (
                <section className='px-4 sm:px-10 lg:px-20 py-20 border-t border-gray-100 mt-10'>
                    <div className='flex items-center justify-between flex-wrap gap-4 pb-10'>
                        <p className='text-5xl text-gray-800 font-semibold tracking-tight'>Keep reading</p>
                        <Link to='/#blogs' className='flex items-center'>
                            <div className='glow-div h-12 w-12 rounded-full'></div>
                            <p className='uppercase text-xs tracking-wide font-semibold -ml-5'>All Blogs</p>
                        </Link>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                        {related.map(r => (
                            <Link to={`/blog/${r._id}`} key={r._id} className='block group'>
                                <div className='h-[55vw] sm:h-[30vw] md:h-[18vw] bg-gray-300 rounded-xl overflow-hidden'>
                                    <img src={r.image} alt={r.headline} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105' loading='lazy' />
                                </div>
                                <div className='flex pt-3 text-[10px] lg:text-xs gap-2 uppercase font-semibold'>
                                    <p>{deriveCategory(r.headline)}</p>
                                    <p className='text-gray-500'>•</p>
                                    <p className='text-gray-500'>{formatBlogDate(r.createdAt)}</p>
                                </div>
                                <p className='text-sm font-semibold pt-3 text-gray-700 group-hover:text-black leading-6'>
                                    {excerpt(r.headline, 80)}
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <Footer />
        </div>
    )
}

const BlogPostSkeleton = () => (
    <div className='animate-pulse'>
        <div className='h-4 w-40 bg-gray-200 rounded mb-6'></div>
        <div className='h-12 w-3/4 bg-gray-200 rounded mb-4'></div>
        <div className='h-12 w-1/2 bg-gray-200 rounded mb-10'></div>
        <div className='h-[40vw] w-full bg-gray-200 rounded-2xl mb-10'></div>
        <div className='space-y-3 max-w-3xl'>
            <div className='h-3 w-full bg-gray-200 rounded'></div>
            <div className='h-3 w-11/12 bg-gray-200 rounded'></div>
            <div className='h-3 w-10/12 bg-gray-200 rounded'></div>
            <div className='h-3 w-9/12 bg-gray-200 rounded'></div>
        </div>
    </div>
)

export default BlogPost
