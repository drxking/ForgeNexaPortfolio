import React from 'react'


const ProjectCards = ({ img, title, category }) => {

    return (
        <div>
            <div className='lg::h-[15vw] md:h-[20vw] h-[35vw] bg-gray-300 rounded-sm overflow-hidden'>
                <img className={img ? ('h-full w-full object-cover outline-0 grayscale-100') : "hidden"} src={img} alt={img} />
            </div>
            <div className='flex items-center font-medium text-gray-400 text-xs sm:text-sm gap-2 py-6 px-1 sm:px-5 lg:px-10'>
                <p className='text-black capitalize'>
                    <span>{title.split(" ")[0].split("").map((i, idx) => {
                        if (idx === 0) {
                            return i.toUpperCase();
                        } else {
                            return i.toLowerCase();
                        }
                    }).join("")}</span>
                    &nbsp;
                    <span className='lowercase'>{title.split(" ")[1]}</span>
                </p>
                <div className='h-px w-3 bg-gray-400'></div>
                <p>{category}</p>

            </div>
        </div>
    )
}

export default ProjectCards