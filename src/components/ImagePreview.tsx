import Image from 'next/image'
import React from 'react'

// const ImagePreview = ({
//     image,
//     text = "?",
//     size = 'md',
//     shape = 'rounded',
//     rounded = 'none',
//     ring = 'none',
//     ringColor = 'primary',
//     className
// }: {
//     image: string,
//     text?: string,
//     className?: string,
//     size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | '10xl',
//     shape?: 'rounded' | 'square' | 'rectangle',
//     rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full',
//     ring?: 'none' | '1' | '2' | '4' | '8',
//     ringColor?: 'primary' | 'secondary' | 'white' | 'black' | 'red' | 'green' | 'blue' | 'yellow' | 'indigo' | 'purple' | 'pink' | 'gray' | 'trueGray' | 'coolGray' | 'blueGray' | 'warmGray' | 'blackAlpha' | 'whiteAlpha' | 'warmGray',
// }) => {
//     return (
//         <div className="z-[5] h-28 w-28 ring-4 ring-white rounded-3xl">
//             <Image src={image} alt="" className="w-full h-full object-cover rounded-3xl" />
//         </div>
//     )
// }

// export default ImagePreview
const getSizeClasses = (size: string) => {
    switch (size) {
        case 'xs': return 'h-8 w-8';
        case 'sm': return 'h-12 w-12';
        case 'md': return 'h-16 w-16';
        case 'lg': return 'h-20 w-20';
        case 'xl': return 'h-24 w-24';
        case '2xl': return 'h-28 w-28';
        case '3xl': return 'h-32 w-32';
        case '4xl': return 'h-36 w-36';
        case '5xl': return 'h-40 w-40';
        case '6xl': return 'h-44 w-44';
        case '7xl': return 'h-48 w-48';
        case '8xl': return 'h-52 w-52';
        case '9xl': return 'h-56 w-56';
        case '10xl': return 'h-60 w-60';
        default: return 'h-16 w-16';
    }
};



const getRoundedClasses = (rounded: string) => {
    switch (rounded) {
        case 'none': return 'rounded-none';
        case 'sm': return 'rounded-sm';
        case 'md': return 'rounded-md';
        case 'lg': return 'rounded-lg';
        case 'xl': return 'rounded-xl';
        case '2xl': return 'rounded-2xl';
        case '3xl': return 'rounded-3xl';
        case '4xl': return 'rounded-[1.8rem]';
        case '5xl': return 'rounded-[2rem]';
        case '6xl': return 'rounded-[2.2rem]';
        case '7xl': return 'rounded-[2.4rem]';
        case '8xl': return 'rounded-[2.6rem]';
        case 'full': return 'rounded-full';
        default: return 'rounded-none';
    }
};

const getRingClasses = (ring: string) => {
    switch (ring) {
        case 'none': return 'ring-0';
        case '1': return 'ring-1';
        case '2': return 'ring-2';
        case '3': return 'ring-[3px]';
        case '4': return 'ring-4';
        case '8': return 'ring-8';
        default: return 'ring-0';
    }
};

const getRingColorClasses = (ringColor: string) => {
    switch (ringColor) {
        case 'primary': return 'ring-primary';
        case 'secondary': return 'ring-secondary';
        case 'white': return 'ring-white';
        case 'black': return 'ring-black';
        case 'red': return 'ring-red-500';
        case 'green': return 'ring-green-500';
        case 'blue': return 'ring-blue-500';
        case 'yellow': return 'ring-yellow-500';
        case 'indigo': return 'ring-indigo-500';
        case 'purple': return 'ring-purple-500';
        case 'pink': return 'ring-pink-500';
        case 'gray': return 'ring-gray-500';
        case 'trueGray': return 'ring-trueGray-500';
        case 'coolGray': return 'ring-coolGray-500';
        case 'blueGray': return 'ring-blueGray-500';
        case 'warmGray': return 'ring-warmGray-500';
        case 'blackAlpha': return 'ring-blackAlpha-500';
        case 'whiteAlpha': return 'ring-whiteAlpha-500';
        case 'warmGray': return 'ring-warmGray-500';
        default: return 'ring-primary';
    }
};

const ImagePreview = ({
    image,
    text = "?",
    size = 'md',
    rounded = 'none',
    ring = 'none',
    ringColor = 'primary',
    className
}: {
    image: any,
    text?: string,
    className?: string,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | '10xl',
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | 'full',
    ring?: 'none' | '1' | '2' | '3' | '4' | '8',
    ringColor?: 'primary' | 'secondary' | 'white' | 'black' | 'red' | 'green' | 'blue' | 'yellow' | 'indigo' | 'purple' | 'pink' | 'gray' | 'trueGray' | 'coolGray' | 'blueGray' | 'warmGray' | 'blackAlpha' | 'whiteAlpha' | 'warmGray',
}) => {
    const sizeClasses = getSizeClasses(size);
    const roundedClasses = getRoundedClasses(rounded);
    const ringClasses = getRingClasses(ring);
    const ringColorClasses = getRingColorClasses(ringColor);

    return (
        <div className={`z-[5]  overflow-hidden ${sizeClasses}  ${roundedClasses} ${ringClasses} ${ringColorClasses} ${className}`}>
            <Image src={image} alt={text} width={400} height={400} className="w-full h-full object-cover" />
        </div>
    )
}

export default ImagePreview;