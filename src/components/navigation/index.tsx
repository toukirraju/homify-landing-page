import React from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';

const navData = [
    {
        label: "Feature",
        href: "#feature"
    },
    {
        label: "Details",
        href: "#details"
    },
    {
        label: "About Us",
        href: "#about-us"
    },
    {
        label: "Partner",
        href: "#partner"
    }

]

const Navigation = () => {

    return (
        <div className="flex justify-between items-center pl-6 md:pl-10 xl:pl-40 py-3 fixed top-2 left-1/2 -translate-x-1/2 w-[95%] z-50 rounded-full border border-slate-100  dark:border-slate-700 shadow-md bg-primary-light/50 dark:bg-primary-dark/50 backdrop-blur-md">
            <Link href={"#/"} className="text-nowrap lg:text-xl xl:text-2xl font-bold text-primary-900 dark:text-primary-50 w-full">Real Estate</Link>
            <div className="flex md:gap-6 items-center justify-end w-full px-3 md:px-0 md:pr-3">
                <div className="hidden md:flex md:gap-8 items-center w-full lg:pl-32">
                    {navData.map((nav, index) => (
                        <NavLink key={index} href={nav.href} label={nav.label} />
                    ))}
                </div>
                <div className="xl:text-lg flex items-center gap-4 font-semibold shadow-lg shadow-primary/50 rounded-full py-2 text-nowrap px-6 bg-primary/90 hover:bg-primary hover:text-white cursor-pointer backdrop-blur-sm text-gray-100 transition-all duration-200 dark:text-gray-100">
                    <span>
                        Login
                    </span>
                    <Icon icon="ep:arrow-right-bold" className=" w-5 h-5 " />
                </div>
            </div>
        </div>
    )
}

export default Navigation


const NavLink = ({
    href,
    label
}: {
    href: string,
    label: string
}) => {

    return (
        <Link href={href} className="xl:text-lg font-semibold shadow-lg shadow-primary/50 rounded-full py-2 text-nowrap px-6 bg-primary/70 hover:bg-primary/90 hover:text-white cursor-pointer backdrop-blur-md text-white transition-all duration-200 dark:text-gray-100">
            <span>
                {label}
            </span>
        </Link>
    )
}