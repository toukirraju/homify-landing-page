import React, { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

const Button = ({
    children,
    className,
    variant = 'contained',
    color = 'primary',
    rounded = 'full',
    ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    variant?: 'outlined' | 'contained' | 'pastel' | 'text'
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' | 'transparent' | 'gray'
    rounded?: 'full' | 'lg' | 'md' | 'sm' | 'none'
}) => {

    // set variant
    const variantClasses = {
        outlined: classNames('border', {
            'border-primary-500 text-primary-500 hover:bg-primary-100 dark:border-primary-300': color === 'primary',
            'border-secondary-500 text-secondary-500 hover:bg-secondary-100 dark:border-secondary-300': color === 'secondary',
            'border-danger-500 text-danger-500 hover:bg-danger-100 dark:border-danger-300': color === 'danger',
            'border-success-500 text-success-500 hover:bg-success-100 dark:border-success-300': color === 'success',
            'border-warning-500 text-warning-500 hover:bg-warning-100 dark:border-warning-300': color === 'warning',
            'border-info-500 text-info-500 hover:bg-info-100 dark:border-info-300': color === 'info',
            'border-light-500 text-light-500 hover:bg-light-100 dark:border-light-300': color === 'light',
            'border-dark-500 text-dark-500 hover:bg-dark-100 dark:border-dark-300': color === 'dark',
            'border-none text-primary hover:bg-transparent': color === 'transparent',
            'border-gray-300 text-gray-500 hover:bg-gray-100 dark:border-gray-500': color === 'gray',
        }),
        contained: classNames({
            'bg-primary text-white hover:bg-primary-700': color === 'primary',
            'bg-secondary text-white hover:bg-secondary-700': color === 'secondary',
            'bg-danger text-white hover:bg-danger-700': color === 'danger',
            'bg-success text-white hover:bg-success-700': color === 'success',
            'bg-warning text-white hover:bg-warning-700': color === 'warning',
            'bg-info text-white hover:bg-info-700': color === 'info',
            'bg-light text-white hover:bg-light-700': color === 'light',
            'bg-dark text-white hover:bg-dark-700': color === 'dark',
            'bg-transparent text-primary hover:bg-transparent': color === 'transparent',
            'bg-gray-500 text-white hover:bg-gray-700': color === 'gray',
        }),
        pastel: classNames({
            'bg-primary/30 text-primary hover:bg-primary/50': color === 'primary',
            'bg-secondary/30 text-secondary hover:bg-secondary/50': color === 'secondary',
            'bg-danger/30 text-danger hover:bg-danger/50': color === 'danger',
            'bg-success/30 text-success hover:bg-success/50': color === 'success',
            'bg-warning/30 text-warning hover:bg-warning/50': color === 'warning',
            'bg-info/30 text-info hover:bg-info/50': color === 'info',
            'bg-light/30 text-light hover:bg-light/50': color === 'light',
            'bg-dark/30 text-dark hover:bg-dark/50': color === 'dark',
            'bg-transparent text-primary hover:bg-transparent': color === 'transparent',
            'bg-gray-500/30 text-gray-500 hover:bg-gray-500/50': color === 'gray',
        }),
        text: classNames({
            'text-primary hover:bg-primary-100': color === 'primary',
            'text-secondary hover:bg-secondary-100': color === 'secondary',
            'text-danger hover:bg-danger-100': color === 'danger',
            'text-success hover:bg-success-100': color === 'success',
            'text-warning hover:bg-warning-100': color === 'warning',
            'text-info hover:bg-info-100': color === 'info',
            'text-light hover:bg-light-100': color === 'light',
            'text-dark hover:bg-dark-100': color === 'dark',
            'text-primary hover:bg-transparent': color === 'transparent',
            'text-gray-500 hover:bg-gray-100': color === 'gray',
        })
    };

    const roundedClasses = {
        full: 'rounded-full',
        lg: 'rounded-lg',
        md: 'rounded-md',
        sm: 'rounded-sm',
        none: 'rounded-none'
    };

    const variantStyle = variantClasses[variant];
    const roundedStyle = roundedClasses[rounded];

    return (
        <button className={classNames('flex justify-center items-center gap-2 py-2 px-4 font-semibold text-lg', variantStyle, roundedStyle, className)} {...rest}>
            {children}
        </button>
    )
}

export default Button
