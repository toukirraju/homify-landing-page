import DetailsVector from '@/assets/DetailsVector'
import React from 'react'
import SectionTitle from '../headers/SectionTitle'
import SectionHeading from '../headers/SectionHeading'
import Description from '../Description'
import { Icon } from '@iconify/react/dist/iconify.js'
import UserInfo from '../UserInfo'
import Button from '../Button'
import { VideoCarousel } from '../carousel'

const Details = () => {
    return (
        <section id="details" className="h-screen w-full relative">
            <DetailsVector className="absolute -top-40 right-0 z-[1]" />
            <div className="md:p-10 xl:p-40 h-full flex items-center">
                {/* left side  */}
                <div className="w-full space-y-6 z-[5]">
                    <SectionTitle text="Ready to Sell!" />
                    <div className="space-y-6 px-10">
                        <SectionHeading text="Let’s tour and see our house!" />
                        <Description>
                            Houses recommended by our partners that have been curated to become the home of your dreams
                        </Description>
                        {/* house details  */}
                        <div className="space-y-1 md:space-y-4">
                            <h3 className="text-primary-900 dark:text-primary-200 capitalize text-2xl font-bold">House Detail</h3>

                            <div className="grid grid-cols-2 gap-4">
                                {/* item 1 */}
                                <div className="col-span-1 flex gap-6 items-center text-2xl font-medium text-gray-500">
                                    <Icon icon="ion:bed" className="text-4xl" />
                                    <div className="flex items-center gap-2">4 <span className="hidden md:block truncate text-wrap">Bedrooms</span></div>
                                </div>
                                {/* item 2 */}
                                <div className="col-span-1 flex gap-6 items-center text-2xl font-medium text-gray-500">
                                    <Icon icon="fa:bath" className="text-4xl" />
                                    <div className="flex items-center gap-2">2 <span className="hidden md:block truncate text-wrap">Bathrooms</span></div>
                                </div>
                                {/* item 3 */}
                                <div className="col-span-1 flex gap-6 items-center text-2xl font-medium text-gray-500">
                                    <Icon icon="bxs:car-garage" className="text-4xl" />
                                    <div className="flex items-center gap-2">1 <span className="hidden md:block truncate text-wrap">Carport</span></div>
                                </div>
                                {/* item 4 */}
                                <div className="col-span-1 flex gap-6 items-center text-2xl font-medium text-gray-500">
                                    <Icon icon="ph:steps-duotone" className="text-4xl" />
                                    <div className="flex items-center gap-2">2 <span className="hidden md:block truncate text-wrap">Floors</span></div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        {/* contact  */}
                        <div className="flex items-center gap-3 md:gap-6 justify-between flex-wrap">
                            <UserInfo />
                            <Button variant="contained" color="primary" rounded="full" className="md:py-4 md:px-8 md:font-extrabold">
                                <Icon icon="ic:round-chat" className="text-inherit text-nowrap" />
                                <span className="text-nowrap">
                                    Contact Now
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* right side  */}
                <div className="hidden lg:block p-10 w-full z-[5] ">
                    {/* carousel */}
                    <VideoCarousel />
                </div>
            </div>
        </section>
    )
}

export default Details
