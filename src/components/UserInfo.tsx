
import Image from 'next/image'
import React from 'react'

const UserInfo = ({
    img,
    name,
    subtitle
}: {
    img?: string,
    name?: string,
    subtitle?: string
}) => {
    return (
        <div className="flex items-center gap-4 ">
            {
                img && <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden">
                    <Image width={300} height={300} src={img} alt={name || ''} className=" h-full w-full object-cover" />
                </div>
            }

            <div>
                {name && <h1 className="md:text-2xl font-medium text-primary-900 dark:text-primary-200 capitalize truncate">{name}</h1>}
                {subtitle && <p className="text-lg font-medium text-primary-900 dark:text-primary-200 capitalize truncate">{subtitle}</p>}
            </div>
        </div>
    )
}

export default UserInfo
