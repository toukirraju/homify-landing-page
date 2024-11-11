import React from 'react'
import Button from '../Button'
import { Icon } from '@iconify/react/dist/iconify.js'
import FeatureCard from '../card/FeatureCard'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import Header from '@/layouts/Feature/Header'
import useBreakPoint from '@/hooks/useBreakPoint';

const featureData = [
    {
        img: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWhttps://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Roselands House",
        price: "35.000.000",
        type: "popular",
        avater: "https://i.pravatar.cc/300?img=3",
        owner: "John Doe",
        location: "California, USA"
    },
    {
        img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Kingswood House",
        price: "25.000.000",
        type: "new",
        avater: "https://i.pravatar.cc/300?img=4",
        owner: "Katherine",
        location: "Washington, USA"
    },
    {
        img: "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lakeside House",
        price: "45.000.000",
        type: "best-deals",
        avater: "https://i.pravatar.cc/300?img=7",
        owner: "Micheal",
        location: "n York, USA"
    },
    {
        img: "https://images.unsplash.com/photo-1505819244306-ef53954f9648?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Hillside House",
        price: "55.000.000",
        type: "popular",
        avater: "https://i.pravatar.cc/300?img=9",
        owner: "Sarah",
        location: "Texas, USA"
    },
    {
        img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Seaside House",
        price: "5.000.000",
        type: "new",
        avater: "https://i.pravatar.cc/300?img=10",
        owner: "Xavier",
        location: "Florida, USA"
    },
]

const Feature = () => {
    // Create a ref to store the Swiper instance
    const [swiperRef, setSwiperRef] = React.useState<SwiperType | null>(null);

    const breakpoint = useBreakPoint()

    // Handler functions for next/prev buttons
    const handlePrev = () => {
        if (swiperRef) {
            swiperRef.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef) {
            swiperRef.slideNext();
        }
    };

    return (
        <section id="feature" className="h-screen w-full">
            {/* action header  */}

            <Header>
                {/* prev button  */}
                <Button
                    variant="outlined"
                    color="gray"
                    rounded="full"
                    className="xl:py-4 xl:px-8 font-extrabold"
                    onClick={handlePrev}
                >
                    <Icon icon="iconamoon:arrow-left-2-light" className="text-inherit" />
                </Button>
                {/* next button  */}
                <Button
                    variant="contained"
                    color="primary"
                    rounded="full"
                    className="xl:py-4 xl:px-8 font-extrabold"
                    onClick={handleNext}
                >
                    <Icon icon="iconoir:nav-arrow-right" className="text-inherit" />
                </Button>
            </Header>
            {/* feature carousel */}
            <Swiper
                spaceBetween={30}
                slidesPerView={
                    breakpoint === 'mobile' ? 1 : breakpoint === 'tablet' ? 2 : breakpoint === 'laptop' ? 3 : 4
                }
                modules={[Navigation]}
                loop={true}
                onSwiper={setSwiperRef}
            >
                {
                    featureData?.map((item, index) => (
                        <SwiperSlide key={index} className='px-5'>
                            <FeatureCard data={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Feature