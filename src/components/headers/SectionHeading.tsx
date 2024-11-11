import classNames from 'classnames'
import React from 'react'

const SectionHeading = ({
    text = "Featured House",
    children,
    className,
    ...rest
}: {
    text?: string,
    className?: string,
    children?: React.ReactNode
}) => {
    return (
        <h1 className={classNames("text-2xl lg:text-4xl xl:text-5xl font-bold text-primary-900 dark:text-primary-200 capitalize", className && className)} {...rest}>
            {
                children ? children : text
            }
        </h1>
    )
}

export default SectionHeading
