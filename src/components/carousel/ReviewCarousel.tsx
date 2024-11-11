
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import UserInfo from '../UserInfo';
import { Pagination } from 'swiper/modules';
import useBreakPoint from '@/hooks/useBreakPoint';
import { useEffect, useState } from 'react';

const reviewData = [
    {
        id: 1,
        title: "Best! I got the house I wanted through RealHomes",
        description: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
        rating: 4.6,
        thumbnail: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user: {
            name: "John Doe",
            image: "https://i.pravatar.cc/300?img=23",
            designation: "House Owner",
        },
    },
    {
        id: 2,
        title: "Amazing! The house is very comfortable",
        description: "I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
        rating: 4.5,
        thumbnail: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user: {
            name: "Katherine",
            image: "https://i.pravatar.cc/300?img=24",
            designation: "Derector",
        },
    },
    {
        id: 3,
        title: "Great! The house is very luxurious",
        description: "I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
        rating: 4.7,
        thumbnail: "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user: {
            name: "Micheal",
            image: "https://i.pravatar.cc/300?img=25",
            designation: "Architect",
        },
    },
    {
        id: 4,
        title: "Nice! The house is very beautiful",
        description: "I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
        rating: 4.8,
        thumbnail: "https://images.unsplash.com/photo-1505819244306-ef53954f9648?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user: {
            name: "Sarah",
            image: "https://i.pravatar.cc/300?img=26",
            designation: "House Owner",
        },
    },
    {
        id: 5,
        title: "Awesome! The house is very good",
        description: "I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
        rating: 4.9,
        thumbnail: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user: {
            name: "Xavier",
            image: "https://i.pravatar.cc/300?img=27",
            designation: "Businessman",
        },
    },
]

const ReviewCarousel = () => {
    const breakPoint = useBreakPoint();
    const [swiperKey, setSwiperKey] = useState(0);

    // Trigger a re-render when the breakpoint changes to ensure Swiper recalculates
    useEffect(() => {
        setSwiperKey(prev => prev + 1); // Increment key to re-render Swiper
    }, [breakPoint]);

    return (
        <div className="flex justify-center items-center w-full">
            <div className="w-full ">
                <Swiper
                    key={swiperKey} // Reinitialize Swiper when breakpoint changes
                    spaceBetween={30}
                    slidesPerView={breakPoint === 'mobile' ? 1 : 2}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                >
                    {/* Carousel Items */}
                    {reviewData?.map((item, index) => (
                        <SwiperSlide key={index} className="pb-32">
                            <div className="w-full h-[480px] rounded-xl relative">
                                {/* Carousel thumbnail */}
                                <Image src={item?.thumbnail} fill sizes='100%' alt="review" className="absolute h-full w-full object-cover dark:brightness-75 rounded-xl" />
                                {/* Carousel card */}
                                <div className="w-[90%] bg-primary-light dark:bg-primary-dark shadow-lg dark:shadow-primary/25 md:h-[280px] p-8 rounded-2xl absolute -bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 space-y-4">
                                    <h3 className="text-primary-900 dark:text-primary-200 capitalize text-2xl font-bold">
                                        {item?.title}
                                    </h3>
                                    <p className="text-[#626687] text-xl font-normal leading-8 line-clamp-2">
                                        {item?.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <UserInfo
                                            img={item?.user?.image}
                                            name={item?.user?.name}
                                            subtitle={item?.user?.designation}
                                        />
                                        <div className="flex items-center gap-4 text-primary-900 dark:text-primary-200 capitalize text-2xl font-bold">
                                            ⭐
                                            <span>
                                                {item?.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ReviewCarousel;

