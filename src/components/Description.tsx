import React from 'react'

const Description = ({
    children,
    ...rest
}: {
    children: string
}) => {
    return (
        <p className="text-gray-500 dark:text-gray-400 text-xl leading-8 font-semibold line-clamp-2" {...rest}>
            {
                children
            }
        </p>
    )
}

export default Description
