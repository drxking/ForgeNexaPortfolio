import React from 'react'

const MainFooter = () => {
  return (
    <div className='flex  text-[9px] px-2 md:items-center gap-4 font-medium uppercase'>
        <div className='flex items-center md:flex-row flex-col justify-center gap-1'>
            <i className="ri-verified-badge-fill text-lg"></i>
            <p className='text-center'>Full Service Web Dev Agency</p>
        </div>
        <div className='h-0.5 w-20 md:opacity-100 opacity-0 bg-gray-700'>

        </div>
        <div className='flex items-center md:flex-row flex-col justify-center gap-1'>
            <i className="ri-map-pin-2-fill text-lg"></i>
            <p className='text-center'>Located at Nepal</p>
        </div>
          <div className='h-0.5 w-20 md:opacity-100 opacity-0 bg-gray-700'>

        </div>
        <div className='flex items-center md:flex-row flex-col justify-center gap-1'>
            <i className="ri-heart-3-fill text-lg"></i>
            <p className='text-center'>Modern Creative Agency</p>
        </div>
    </div>
  )
}




export default MainFooter