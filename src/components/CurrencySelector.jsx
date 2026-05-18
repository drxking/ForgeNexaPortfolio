import React, { useEffect, useRef, useState } from 'react'
import { useCurrency } from '../utils/CurrencyContext'

const CurrencySelector = ({ variant = 'desktop' }) => {
    const { currency, setCurrency, countries, meta, loading } = useCurrency()
    const [open, setOpen] = useState(false)
    const wrapperRef = useRef(null)

    useEffect(() => {
        const onClick = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener('mousedown', onClick)
        return () => document.removeEventListener('mousedown', onClick)
    }, [])

    const isMobile = variant === 'mobile'

    return (
        <div ref={wrapperRef} className='relative'>
            <button
                type='button'
                onClick={() => setOpen((v) => !v)}
                disabled={loading}
                className={`flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 backdrop-blur-sm hover:border-black transition-colors cursor-pointer ${isMobile ? 'px-4 py-2 text-sm' : 'px-3 py-1.5 text-xs'} font-medium`}
            >
                <span className='text-base leading-none'>{meta?.flag}</span>
                <span className='uppercase tracking-wide'>{currency}</span>
                <i className={`ri-arrow-down-s-line text-base leading-none transition-transform ${open ? 'rotate-180' : ''}`}></i>
            </button>

            {open && (
                <ul className={`absolute ${isMobile ? 'left-0' : 'right-0'} top-full mt-2 w-52 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden z-50`}>
                    {countries.map((c) => {
                        const active = c.currency === currency
                        return (
                            <li key={c.currency}>
                                <button
                                    type='button'
                                    onClick={() => { setCurrency(c.currency); setOpen(false) }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-gray-50 transition-colors cursor-pointer ${active ? 'bg-gray-50' : ''}`}
                                >
                                    <span className='text-lg leading-none'>{c.flag}</span>
                                    <span className='flex-1'>
                                        <span className='block text-black font-medium'>{c.country}</span>
                                        <span className='block text-[10px] uppercase tracking-wide text-gray-500'>{c.currency} • {c.symbol}</span>
                                    </span>
                                    {active && <i className='ri-check-line text-base text-black'></i>}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default CurrencySelector
