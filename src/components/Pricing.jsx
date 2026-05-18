import React from 'react'
import Three60 from './Three60'

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
                    <PricingCard
                        num={"01"}
                        tier={"Starter"}
                        price={"499"}
                        desc={"Perfect for individuals and small brands stepping into the digital space."}
                        features={[
                            "Single page web design",
                            "Responsive across devices",
                            "Basic SEO setup",
                            "2 rounds of revisions",
                            "Delivery within 7 days",
                        ]}
                    />
                    <PricingCard
                        num={"02"}
                        tier={"Professional"}
                        price={"1,299"}
                        desc={"For growing businesses ready to scale presence with a refined identity."}
                        features={[
                            "Up to 6 page web design",
                            "Custom animations & interactions",
                            "Advanced SEO & analytics",
                            "CMS integration",
                            "Unlimited revisions",
                            "Priority delivery",
                        ]}
                        highlight={true}
                    />
                    <PricingCard
                        num={"03"}
                        tier={"Enterprise"}
                        price={"Custom"}
                        desc={"Tailored solutions for established brands demanding a unique digital ecosystem."}
                        features={[
                            "Unlimited pages & modules",
                            "eCommerce & dashboards",
                            "Dedicated project manager",
                            "Custom integrations & APIs",
                            "Ongoing maintenance",
                            "24/7 priority support",
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

const PricingCard = ({ num, tier, price, desc, features, highlight }) => {
    return (
        <div className={`relative rounded-2xl overflow-hidden p-8 flex flex-col gap-6 transition-all duration-300 ${highlight ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-black'}`}>
            {highlight && (
                <div className='absolute top-5 right-5 flex items-center'>
                    <div className='glow-div h-3 w-3 rounded-full'></div>
                    <p className='uppercase text-[10px] tracking-wide font-semibold ml-2'>Most Popular</p>
                </div>
            )}

            <div>
                <p className={`text-7xl font-semibold text-transparent text-this stroke-black ${highlight ? '' : ''}`}>{num}</p>
                <div className='-mt-6 pl-10 flex flex-col gap-1'>
                    <h1 className='capitalize text-sm font-bold'>{tier}</h1>
                    <p className={`text-xs leading-5 w-56 ${highlight ? 'text-gray-400' : 'text-gray-500'}`}>{desc}</p>
                </div>
            </div>

            <div className='flex items-end gap-1 pt-2'>
                {price === "Custom" ? (
                    <p className='text-6xl font-semibold tracking-tight'>Custom</p>
                ) : (
                    <>
                        <p className='text-2xl font-semibold pb-2'>$</p>
                        <p className='text-6xl font-semibold tracking-tight leading-none'>{price}</p>
                        <p className={`text-xs pb-3 ${highlight ? 'text-gray-400' : 'text-gray-500'}`}>/ project</p>
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

            <button className={`mt-2 px-5 py-3 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 ${highlight ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                {price === "Custom" ? "Contact Sales" : "Get Started"}
                <i className="ri-arrow-right-line"></i>
            </button>
        </div>
    )
}

export default Pricing
