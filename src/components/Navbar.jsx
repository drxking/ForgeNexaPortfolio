import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Links from '../utils/Links'




const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);
    const respo = useRef(null)
    const buttonRef = useRef(null);



    const navbarRef = useRef(null);
    const logoRef = useRef(null);
    const [prevScroll, setPrevScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const navbar = navbarRef.current;

            // Hide/Show navbar on scroll
            if (currentScroll > prevScroll) {
                gsap.to(navbar, { y: "-100%", duration: 0.8 });
            } else {
                gsap.to(navbar, { y: "0%", duration: 0.8 });
            }

            // Change navbar style after scrolling past viewport height
            if (currentScroll == 0) {
                gsap.to(navbar, { backgroundColor: "transparent", duration: 0.5 });
                navbar.classList.add("text-black");
                navbar.classList.remove("text-white");
            } else {
                gsap.to(navbar, { backgroundColor: "#fff", duration: 0.5 });
                navbar.classList.add("text-white");
                navbar.classList.remove("text-white");
            }
            setPrevScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScroll]);



    useGSAP(() => {
        if (!isOpened) {
            gsap.to(respo.current, {
                left: `100%`,
                // duration:0.3,
                ease: "power2.out"
            })
        } else {
            gsap.to(respo.current, {
                left: `0%`,
                // duration:0.3,
                ease: "power2.out"

            })
        }
    }, [isOpened])

    function openHandler() {
        if (isOpened) {
            document.body.style.overflow = 'unset';
            buttonRef.current.classList.add("-rotate-45")
            buttonRef.current.classList.remove("rotate-180")
            setIsOpened(false)
        } else {
            document.body.style.overflow = 'hidden';
            buttonRef.current.classList.remove("-rotate-45")
            buttonRef.current.classList.add("rotate-180")
            setIsOpened(true)


        }
    }
    return (
        <>
            <nav ref={navbarRef} className='flex  fixed items-center  w-full justify-between sm:px-14 px-4 py-5 text-sm z-50' >
                <div className=' lg:w-1/6 w-1/3 flex gap-2 ' >
                    <div className='rounded-full overflow-hidden'>
                        <img ref={logoRef} className='h-12 scale-[130%] cursor-pointer' src="/F.png" alt="logo" />
                    </div>
                </div>
                <ul className='lg:flex hidden font-medium   items-center justify-center gap-5 w-4/6' >
                    {
                        Links.map((e) => (
                            <a key={e[0]} href={`${e[1]}`}>
                                <li className='cursor-pointer'>{e[0]}</li>
                            </a>
                        ))
                    }
                </ul>
                <div className=' lg:w-1/6 w-2/3 gap-2 flex items-center justify-end'>
                    <button className='bg-black text-white px-4 py-2 rounded-full cursor-pointer'>Hire Agency <i className="ri-arrow-right-line"></i></button>
                    <i ref={buttonRef} onClick={openHandler} className="ri-close-line leading-none rotate-45 duration-200 lg:hidden text-3xl"></i>
                </div>
                <div ref={respo} className="respo h-screen w-screen bg-gray-200/45 backdrop-blur-xl absolute flex flex-col justify-between top-0 left-full -z-10">
                    <ul className='font-medium  flex flex-col sm:pt-40 pt-32 px-10 text-xl uppercase gap-8 ' >
                        {
                            Links.map((e) => (
                                <a onClick={openHandler} key={e[0]} href={`${e[1]}`}>
                                    <li className='cursor-pointer border-b border-gray-400'>{e[0]}</li>
                                </a>
                            ))
                        }
                    </ul>
                    <div className="px-10 pb-16 flex flex-col gap-2">
                        <p className="text-lg font-semibold">Social Links</p>
                        <div className="text-3xl flex gap-2">
                            <i className="ri-instagram-line"></i>
                            <i className="ri-facebook-circle-fill"></i>
                            <i className="ri-twitter-x-line"></i>
                            <i className="ri-linkedin-box-fill"></i>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar