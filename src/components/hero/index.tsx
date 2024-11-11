import React from 'react'
import Description from '../Description'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import { logo1, logo2, logo3, logo4 } from '@/assets'

const Hero = () => {
    return (
        <section id="/" className="h-screen w-full flex">
            {/* left side  */}
            <div className="w-full md:w-1/2 max-h-screen min-h-full flex flex-col justify-center gap-8 py-32 px-8 lg:px-10 xl:px-40 ">

                <div className="space-y-5 z-[5]">
                    <h1 className="text-5xl lg:text-6xl font-extrabold capitalize text-primary-900 dark:text-primary-200 leading-tight">
                        find the place to  live <span className="outlined_text">your dreams </span>
                        easily here
                    </h1>
                    <Description>
                        Everything you need about finding your place to live will be here, where it will be easier for you
                    </Description>

                </div>
                {/* search */}
                <div className="flex items-center border-2 md:text-xl font-semibold border-gray-300 dark:border-gray-600 rounded-full p-1 gap-2 w-full text-gray-200 dark:text-gray-300">
                    <Icon icon="carbon:location-filled" className="text-[#F59E0B] w-10 h-10 ml-5" />
                    <input type="text" placeholder="Search for your place" className="bg-transparent outline-none w-full  text-gray-500 dark:text-gray-400" />
                    <button className="bg-primary py-2 px-4 md:py-4 md:px-8 rounded-full   flex justify-center items-center gap-2 hover:bg-primary-600">
                        <span>
                            Search
                        </span>
                        <Icon icon="ep:arrow-right-bold" className=" w-5 h-5 ml-2" />
                    </button>
                </div>
                {/* partner  */}
                <div className="space-y-2">
                    <p className="text-gray-500 dark:text-gray-400 text-xl leading-8 font-semibold">Our Partnership </p>
                    <div className="flex gap-6 flex-wrap items-center">
                        <Image src={logo1} width={3000} height={2000} className="w-20 h-full object-scale-down" alt="partner" />
                        <Image src={logo2} width={3000} height={2000} className="w-20 h-full object-scale-down" alt="partner" />
                        <Image src={logo3} width={3000} height={2000} className="w-20 h-full object-scale-down" alt="partner" />
                        <Image src={logo4} width={3000} height={2000} className="w-20 h-full object-scale-down" alt="partner" />
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="hidden md:block flex-shrink-0 flex-grow w-1/2 relative md:rounded-bl-[90px] lg:rounded-bl-[150px] xl:rounded-bl-[250px] overflow-hidden" >
                <Image src={'https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="hero image" fill className="absolute object-cover right-0 dark:brightness-50" />
            </div>
        </section>
    )
}

export default Hero
