import { Icon } from '@iconify/react/dist/iconify.js'
import classNames from 'classnames'
import React from 'react'

const Badge = ({
    type,
    className
}: {
    type: 'popular' | 'new' | 'best-deals',
    className?: string
}) => {
    switch (type) {
        case 'popular':
            return (
                <div className={classNames("flex items-center gap-2 bg-red-200 rounded-full py-1 px-3 text-red-500 font-semibold",
                    className && className
                )}>
                    <Icon icon="icon-park-solid:fire" className="text-inherit" />
                    <span>
                        Popular
                    </span>
                </div>
            )
        case 'new':
            return (
                <div className={classNames("flex items-center gap-2 bg-primary rounded-full py-1 px-3 text-white font-semibold",
                    className && className
                )}>
                    <Icon icon="bxs:home" className="text-inherit" />
                    <span>
                        New
                    </span>
                </div>
            )
        case 'best-deals':
            return (
                <div className={classNames("flex items-center gap-2 bg-green-300 rounded-full py-1 px-3 text-green-700 font-semibold",
                    className && className
                )}>
                    <Icon icon="mdi:deal" className="text-inherit" />
                    <span>
                        Best Deals
                    </span>
                </div>
            )
        default:
            return null
    }

}

export default Badge
