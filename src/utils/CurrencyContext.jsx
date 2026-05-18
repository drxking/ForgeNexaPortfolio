import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react'
import pricingData from '../data/pricing.json'

export const SUPPORTED_COUNTRIES = pricingData.supportedCountries
const SUPPORTED_CODES = new Set(SUPPORTED_COUNTRIES.map((c) => c.currency))
const COUNTRY_TO_CURRENCY = Object.fromEntries(SUPPORTED_COUNTRIES.map((c) => [c.code, c.currency]))
const BASE = pricingData.baseCurrency || 'USD'

const STORAGE_KEY = 'fn:currency'
const RATES_KEY = 'fn:rates'
const RATES_TTL_MS = 12 * 60 * 60 * 1000

const CurrencyContext = createContext(null)

export const useCurrency = () => {
    const ctx = useContext(CurrencyContext)
    if (!ctx) throw new Error('useCurrency must be used inside CurrencyProvider')
    return ctx
}

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrencyState] = useState(BASE)
    const [rates, setRates] = useState({ [BASE]: 1 })
    const [autoDetected, setAutoDetected] = useState(false)
    const [loading, setLoading] = useState(true)

    const setCurrency = useCallback((code) => {
        if (!SUPPORTED_CODES.has(code)) return
        setCurrencyState(code)
        try { localStorage.setItem(STORAGE_KEY, code) } catch {}
    }, [])

    useEffect(() => {
        let alive = true

        const loadRates = async () => {
            try {
                const cached = JSON.parse(localStorage.getItem(RATES_KEY) || 'null')
                if (cached && Date.now() - cached.fetchedAt < RATES_TTL_MS && cached.base === BASE) {
                    return cached.rates
                }
            } catch {}

            try {
                const res = await fetch(`https://open.er-api.com/v6/latest/${BASE}`)
                if (!res.ok) throw new Error('rates fetch failed')
                const data = await res.json()
                if (data?.rates) {
                    const payload = { rates: data.rates, base: BASE, fetchedAt: Date.now() }
                    try { localStorage.setItem(RATES_KEY, JSON.stringify(payload)) } catch {}
                    return data.rates
                }
            } catch {}

            return { [BASE]: 1 }
        }

        const detectCurrency = async () => {
            try {
                const saved = localStorage.getItem(STORAGE_KEY)
                if (saved && SUPPORTED_CODES.has(saved)) return { code: saved, auto: false }
            } catch {}

            try {
                const res = await fetch('https://ipapi.co/json/')
                if (res.ok) {
                    const data = await res.json()
                    const byCountry = COUNTRY_TO_CURRENCY[(data?.country_code || '').toUpperCase()]
                    if (byCountry) return { code: byCountry, auto: true }
                    const byCurrency = (data?.currency || '').toUpperCase()
                    if (SUPPORTED_CODES.has(byCurrency)) return { code: byCurrency, auto: true }
                }
            } catch {}

            try {
                const locale = navigator.language || 'en-US'
                const region = (locale.split('-')[1] || '').toUpperCase()
                const fromRegion = COUNTRY_TO_CURRENCY[region]
                if (fromRegion) return { code: fromRegion, auto: true }
            } catch {}

            return { code: BASE, auto: false }
        }

        ;(async () => {
            const [r, detected] = await Promise.all([loadRates(), detectCurrency()])
            if (!alive) return
            setRates(r)
            setCurrencyState(detected.code)
            setAutoDetected(detected.auto)
            setLoading(false)
        })()

        return () => { alive = false }
    }, [])

    const convert = useCallback((amount) => {
        if (typeof amount !== 'number') return amount
        const rate = rates[currency] ?? 1
        return amount * rate
    }, [rates, currency])

    const meta = useMemo(
        () => SUPPORTED_COUNTRIES.find((c) => c.currency === currency) || SUPPORTED_COUNTRIES[0],
        [currency]
    )

    const format = useCallback((amount) => {
        if (typeof amount !== 'number') return { symbol: meta.symbol, value: String(amount), code: currency }
        const converted = convert(amount)
        const zeroDecimal = currency === 'JPY' || currency === 'NPR' || currency === 'INR'
        const rounded = zeroDecimal ? Math.round(converted) : Math.round(converted * 100) / 100
        try {
            const value = new Intl.NumberFormat(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: zeroDecimal ? 0 : 2,
            }).format(rounded)
            return { symbol: meta.symbol, value, code: currency }
        } catch {
            return { symbol: meta.symbol, value: String(rounded), code: currency }
        }
    }, [convert, currency, meta])

    const value = useMemo(() => ({
        currency,
        setCurrency,
        countries: SUPPORTED_COUNTRIES,
        rates,
        convert,
        format,
        loading,
        autoDetected,
        meta,
    }), [currency, setCurrency, rates, convert, format, loading, autoDetected, meta])

    return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}
