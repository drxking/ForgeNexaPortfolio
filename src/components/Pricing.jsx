import React from 'react'
import Three60 from './Three60'
import pricingData from '../data/pricing.json'
import { useCurrency } from '../utils/CurrencyContext'

const Pricing = () => {
    return (
        <section id='pricing' className='py-10'>
            <div className="top py-4 overflow-hidden flex gap-10">
                <div className="text flex">
                    <div className='relative sm:pt-0 pt-10 pr-20'>
                        <p className='md:text-[250px] text-8xl sm:text-[180px] text- font-semibold leading-none tracking-tighter -ml-6 sm:-ml-16 glow'>pricing</p>
                        <div className='absolute top-5 right-10'>
                            <Three60
                                icon={"ri-price-tag-3-fill"}
                                iconColor={"text- glow"}
                                outerBg={"bg-gray-800"}
                                textColor={"text-white"}
                                text={"Transparent Pricing-Flexible Plans for Every Brand-"}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex items-end'>
                    <div className='hidden items-center lg:flex'>
                        <div className='glow-div h-12 w-12 rounded-full'></div>
                        <div className='text-xs font-bold -ml-4 uppercase'>
                            Choose Your Plan
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 sm:px-10 lg:px-20 py-4'>
                <div className='flex items-center justify-between flex-wrap gap-4 pb-10'>
                    <p className='text-5xl text-gray-800 font-semibold max-w-xl tracking-tight'>
                        Plans built for <br /> every stage of growth.
                    </p>
                    <p className='text-sm text-gray-500 font-medium md:w-96 w-full tracking-tight leading-6'>
                        From a starter landing page to a full-scale digital ecosystem, our pricing is crafted to match your ambitions with <span className='border-b text-black'>no hidden fees</span> and complete clarity.
                    </p>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {pricingData.plans.map((plan) => (
                        <PricingCard
                            key={plan.tier}
                            num={plan.num}
                            tier={plan.tier}
                            price={plan.price}
                            desc={plan.desc}
                            features={plan.features}
                            highlight={plan.highlight}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const CONTACT_EMAIL = 'forgenexa15@gmail.com'

const buildMailto = ({ tier, displayPrice, features }) => {
    const isCustom = displayPrice == null
    const subject = isCustom
        ? `Premium Inquiry — Custom Plan | ForgeNexa`
        : `Project Inquiry — ${tier} Plan (${displayPrice}) | ForgeNexa`

    const featureLines = features.map((f) => `  • ${f}`).join('\n')

    const body = isCustom
        ? `Hi ForgeNexa team,

I'd like to discuss a custom Premium engagement for my brand.

Plan of interest: ${tier} (Custom pricing)

The capabilities I'm specifically interested in:
${featureLines}

A bit about my project:
  • Brand / Company:
  • Project goal:
  • Approximate timeline:
  • Indicative budget:

Could we schedule a discovery call to align on scope, deliverables and pricing?

Thanks,`
        : `Hi ForgeNexa team,

I'd like to get started with the ${tier} plan (${displayPrice}).

Here are the features from this plan that are most relevant to me:
${featureLines}

A bit about my project:
  • Brand / Company:
  • Project goal:
  • Preferred start date:
  • Anything else you should know:

Please share the next steps to kick things off.

Thanks,`

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const PricingCard = ({ num, tier, price, desc, features, highlight }) => {
    const { format, currency, loading } = useCurrency()
    const isCustom = price === 'Custom' || typeof price !== 'number'
    const formatted = isCustom ? null : format(price)
    const displayPrice = isCustom ? null : `${formatted.symbol}${formatted.value} ${formatted.code}`

    const mailto = buildMailto({ tier, displayPrice, features })

    return (
        <div className={`relative rounded-2xl overflow-hidden p-8 flex flex-col gap-6 transition-all duration-300 ${highlight ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-black'}`}>
            {highlight && (
                <div className='absolute top-5 right-5 flex items-center'>
                    <div className='glow-div h-3 w-3 rounded-full'></div>
                    <p className='uppercase text-[10px] tracking-wide font-semibold ml-2'>Most Popular</p>
                </div>
            )}

            <div>
                <p className='text-7xl font-semibold text-transparent text-this stroke-black'>{num}</p>
                <div className='-mt-6 pl-10 flex flex-col gap-1'>
                    <h1 className='capitalize text-sm font-bold'>{tier}</h1>
                    <p className={`text-xs leading-5 w-56 ${highlight ? 'text-gray-400' : 'text-gray-500'}`}>{desc}</p>
                </div>
            </div>

            <div className='flex items-end gap-1 pt-2 min-h-[72px]'>
                {isCustom ? (
                    <p className='text-6xl font-semibold tracking-tight'>Custom</p>
                ) : loading ? (
                    <div className='h-12 w-32 bg-gray-200/40 rounded animate-pulse'></div>
                ) : (
                    <>
                        <p className='text-2xl font-semibold pb-2'>{formatted.symbol}</p>
                        <p className='text-6xl font-semibold tracking-tight leading-none'>{formatted.value}</p>
                        <p className={`text-xs pb-3 ${highlight ? 'text-gray-400' : 'text-gray-500'}`}>{formatted.code} / project</p>
                    </>
                )}
            </div>

            <div className={`h-px w-full ${highlight ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

            <ul className='flex flex-col gap-3'>
                {features.map((feature, idx) => (
                    <li key={idx} className='flex items-start gap-3 text-sm'>
                        <i className={`ri-check-line text-base leading-5 ${highlight ? 'text-glow' : 'text-black'}`}></i>
                        <span className={highlight ? 'text-gray-200' : 'text-gray-700'}>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className='flex-1'></div>

            <a
                href={mailto}
                className={`mt-2 px-5 py-3 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 ${highlight ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
            >
                {isCustom ? 'Contact Sales' : 'Get Started'}
                <i className="ri-arrow-right-line"></i>
            </a>
        </div>
    )
}

export default Pricing
