import React from 'react'
import SectionTitle from '../headers/SectionTitle'
import SectionHeading from '../headers/SectionHeading'
import Image from 'next/image'
import { heroimg } from '@/assets'
import UserInfo from '../UserInfo'
import ReviewCarousel from '../carousel/ReviewCarousel'

const Review = () => {
    return (
        <section id="about-us" className="h-screen w-full space-y-6">
            {/* heading  */}
            <div className="flex items-center justify-center flex-col pt-40 xl:px-40 pb-5">
                <SectionTitle text="See Our Review" horizontal />
                <SectionHeading text="What Our User Say About Us" />
            </div>
            {/* review carousel */}
            <ReviewCarousel />

        </section>
    )
}

export default Review
