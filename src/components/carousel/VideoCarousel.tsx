import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const VideoCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0); // State to track active item for big preview
    const [isPlaying, setIsPlaying] = useState(false); // State to toggle video play/pause
    const carouselItems = [
        {
            thumbnail: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            video: 'https://videos.pexels.com/video-files/4770380/4770380-hd_1920_1080_30fps.mp4'
        },
        {
            thumbnail: 'https://images.unsplash.com/photo-1505819244306-ef53954f9648?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            video: 'https://videos.pexels.com/video-files/3859438/3859438-uhd_2560_1440_24fps.mp4'
        },
        {
            thumbnail: 'https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            video: 'https://videos.pexels.com/video-files/7578550/7578550-uhd_2560_1440_30fps.mp4'
        },
        {
            thumbnail: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            video: 'https://videos.pexels.com/video-files/5031099/5031099-uhd_2560_1440_30fps.mp4'
        },
        {
            thumbnail: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            video: 'https://videos.pexels.com/video-files/7578540/7578540-uhd_2560_1440_30fps.mp4'
        }
    ]; // Replace with actual video/image URLs

    useEffect(() => {
        // Only set up automatic transitions if not playing
        if (!isPlaying) {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
            }, 5000); // Change every 5 seconds
            return () => clearInterval(interval);
        }
    }, [carouselItems.length, isPlaying]);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleThumbnailClick = (index: number) => {
        setActiveIndex(index);
        setIsPlaying(false); // Pause video when a new item is selected
    };

    // Filter out the active item from thumbnails
    const thumbnailIndices = [
        (activeIndex + 1) % carouselItems.length,
        (activeIndex + 2) % carouselItems.length,
    ];

    return (
        <div className="lg:h-[400px] lg:w-[400px] xl:h-[600px] xl:w-[600px] ml-auto rounded-md relative">
            {/* Video thumbnail or player */}
            {isPlaying ? (
                <video
                    src={carouselItems[activeIndex].video} // Use the active item's video
                    className="absolute h-full w-full object-cover rounded-md"
                    autoPlay
                    onPause={() => setIsPlaying(false)} // Reset when video is paused
                    onEnded={() => setIsPlaying(false)} // Reset when video ends
                />
            ) : (
                <Image
                    src={carouselItems[activeIndex].thumbnail}
                    fill
                    sizes='100%'
                    alt="house"
                    className="absolute h-full w-full object-cover dark:brightness-75 rounded-md"
                />
            )}

            {/* Play/Pause button */}
            {!isPlaying && (
                <div
                    onClick={handlePlayPause}
                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 bg-primary/20 rounded-full p-4 text-white cursor-pointer shadow-lg hover:shadow-primary/70 transition-all duration-200 shadow-primary/50 backdrop-blur-md font-semibold"
                >
                    <Icon icon="heroicons:play-16-solid" className="w-8 h-8" />
                </div>
            )}

            {/* Active item in carousel */}
            <div className="lg:h-[130px] lg:w-[200px] xl:h-[200px] xl:w-[350px] rounded-md absolute -bottom-10 -left-14 shadow-md">
                <Image
                    src={carouselItems[activeIndex].thumbnail}
                    fill
                    sizes='100%'
                    alt="house"
                    className="h-full w-full object-cover rounded-md dark:brightness-90"
                />
            </div>

            {/* Carousel thumbnails (two items displayed, excluding the active item) */}
            <div className="lg:h-[80px] lg:w-[220px] xl:h-[110px] xl:w-[270px] rounded-md absolute -bottom-10 right-6 flex gap-2 items-center">
                {thumbnailIndices.map((index) => (
                    <div
                        key={index}
                        className="lg:h-[80px] lg:w-[120px] xl:h-[110px] xl:w-[130px] rounded-md shadow-md cursor-pointer"
                        onClick={() => handleThumbnailClick(index)}
                    >
                        <Image
                            src={carouselItems[index].thumbnail}
                            height={300}
                            width={300}
                            loading='lazy'
                            alt="house"
                            className="h-full w-full object-cover rounded-md dark:brightness-90"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoCarousel;
