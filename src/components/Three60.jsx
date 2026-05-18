import React from 'react'

const Three60 = ({text,innerBg,outerBg,icon,textColor,iconColor}) => {
    return (
        <div className={`sm:h-32 sm:w-32 h-28 w-28 ${outerBg}  ${textColor} rounded-full items-center justify-center flex relative`}>
            {
                text?.split("").map((e, idx, arr) => {
                    let rotate = 360 * idx / arr.length;

                    return (
                        <div key={idx} style={{ rotate: `${rotate - 45}deg` }} className='text-center text-[8px] font-semibold absolute top-1/2 left-1/2 w-3 origin-center -translate-y-1/2 -translate-x-1/2  pb-24  sm:pb-28 uppercase'>
                            <p className='-rotate-1'>{e}</p>
                        </div>
                    )
                })
            }
            <div className={`h-18 w-18 border ${innerBg} rounded-full flex items-center justify-center border-gray-700`}>
                <i className={`${icon} ${iconColor} text-3xl`}></i>
            </div>
        </div>
    )
}

export default Three60