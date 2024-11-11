import { heroimg } from '@/assets'
import Image from 'next/image'
import React from 'react'
import UserInfo from '../UserInfo'
import Badge from '../badge'

const FeatureCard = ({ data }: any) => {
    const { img, title, price, type, location, owner, avater } = data
    return (
        <div className="max-h-[620px] min-h-[620px] overflow-hidden flex flex-col gap-4">
            {/* image  */}
            <div className="bg-blue-300 flex-1 relative overflow-hidden rounded-3xl">
                <Image src={img} fill alt="house" className="absolute h-full w-full object-cover dark:brightness-75" />
                {/* badge  */}
                {/* <div > */}
                <Badge type={type} className="absolute bottom-4 left-4 z-10" />
                {/* </div> */}
            </div>
            {/* house info  */}
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-semibold text-primary-900 dark:text-primary-400 capitalize truncate">{title}</h1>
                <p className="text-2xl font-semibold text-primary-900 dark:text-primary-400 capitalize truncate">${price}</p>
            </div>
            {/* user info  */}
            <UserInfo
                img={avater}
                name={owner}
                subtitle={location}
            />
        </div>
    )
}

export default FeatureCard
