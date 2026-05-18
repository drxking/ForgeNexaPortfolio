import React from 'react'

const Feature = () => {
  return (
    <div className='flex items-center justify-center gap-10 py-10 flex-wrap'>
      <FeaturesList num={"01"} title={"Web Design"} dets={"We create compelling web designs, which are the right-fit for your target groups."} />
      <FeaturesList num={"02"} title={"Web Development"} dets={"We create compelling web designs, which are the right-fit for your target groups."} />
      <FeaturesList num={"03"} title={"eCommerce Solution"} dets={"We create compelling web designs, which are the right-fit for your target groups."} />
    </div>
  )
}



const FeaturesList = ({num,title,dets}) => {
  return (
    <>
      <div>
        <p className='text-7xl font-semibold text-transparent text-this  stroke-black'>{num}</p>
        <div className='-mt-6 pl-10 flex flex-col gap-2'>
          <h1 className='capitalize text-sm font-bold'>{title}</h1>
          <p className='w-56 text-sm text-gray-500 leading-6'>{dets}</p>
        </div>
      </div>
    </>
  )
}

export default Feature