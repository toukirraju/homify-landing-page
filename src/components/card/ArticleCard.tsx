import Image from 'next/image'
import React from 'react'
import UserInfo from '../UserInfo'
import { Icon } from '@iconify/react/dist/iconify.js'

const ArticleCard = ({ artical }: {
    artical?: {
        id: number,
        title: string,
        time: string,
        date: string,
        image: string,
        alt: string,
        user: {
            name: string,
            image: string
        }
    }
}) => {
    const { title, time, date, image, alt, user } = artical || {}
    return (
        <div className=" flex items-center flex-col md:flex-row gap-6">
            {/* image section  */}
            <div className="hidden md:block h-[180px] max-w-[500px] rounded-xl">
                <Image src={image || ''} width={300} height={200} alt={alt || ""} className="max-w-[500px] h-full object-cover rounded-xl  dark:brightness-75" />
            </div>
            {/* content section  */}
            <div className="space-y-1 md:space-y-4 w-full">
                <UserInfo
                    name={user?.name}
                    img={user?.image}
                />
                <h2 className="text-primary-900 dark:text-primary-200 capitalize md:text-2xl font-medium">
                    {title}
                </h2>
                <div className="flex items-center gap-4 text-[#888B97] text-lg font-normal">
                    <Icon icon="bx:bx-time-five" className="w-5 h-5" />
                    <div className="flex items-center  divide-x w-full">
                        <span className="pr-2 truncate">
                            {time}
                        </span>
                        <span className="pl-2 truncate">
                            {date}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard
