import ArticelVector from '@/assets/ArticelVector'
import React from 'react'
import SectionTitle from '../headers/SectionTitle'
import SectionHeading from '../headers/SectionHeading'
import Button from '../Button'
import Image from 'next/image'
import UserInfo from '../UserInfo'
import { Icon } from '@iconify/react/dist/iconify.js'
import Description from '../Description'
import ArticleCard from '../card/ArticleCard'

const articals = [
    {
        id: 1,
        title: "The things we need to check when we want to buy a house",
        time: "5 min read",
        date: "25 Apr 2021",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "article",
        user: {
            name: "John Doe",
            image: "https://i.pravatar.cc/300?img=27",
        }
    },
    {
        id: 2,
        title: "12 Things to know before buying a house",
        time: "8 min read",
        date: "25 Apr 2021",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "article",
        user: {
            name: "Katherine",
            image: "https://i.pravatar.cc/300?img=28",
        }
    },
    {
        id: 3,
        title: "How to choose the right house",
        time: "6 min read",
        date: "25 Apr 2021",
        image: "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "article",
        user: {
            name: "Micheal",
            image: "https://i.pravatar.cc/300?img=29",
        }
    },
]

const Partner = () => {
    return (
        <section id="partner" className="h-screen w-full relative">

            <ArticelVector className="absolute -top-40 left-0 z-[1] w-full md:w-fit" />

            {/* heading  */}
            <div className="flex items-center justify-center flex-col pt-32 px-10 xl:px-40 pb-5 space-y-5">
                <SectionTitle text="See tips and trick from our partnership" horizontal />
                <SectionHeading className=" z-[5]" text="Find out more about selling and buying homes" />
                <Button variant="contained" color="primary" rounded="full" className="py-4 px-8 font-extrabold mt-4">
                    <span>
                        More Article
                    </span>
                </Button>
            </div>
            {/* article secton  */}
            <div className="px-10 lg:px-20 xl:px-40 flex flex-col md:flex-row">
                {/* left side  */}
                <div className="w-full space-y-6 z-[5]">
                    {/* card 1 */}
                    {
                        articals.map((artical) => (
                            <ArticleCard key={artical.id} artical={artical} />
                        ))
                    }
                </div>
                {/* right side  */}
                <div className="w-full pt-5 md:pt-0 md:pl-10">
                    <div className="space-y-1 flex items-center md:space-y-4 flex-col gap-5 md:flex-row">
                        {/* image  */}
                        <div className="hidden md:block h-[200px] w-full rounded-2xl">
                            <Image src={
                                "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
                            } alt="article" width={700} height={300} className="w-full h-full object-cover rounded-2xl  dark:brightness-75" />
                        </div>
                        {/* content  */}
                        <div className="space-y-3 w-full">
                            <UserInfo
                                name="Katherine"
                                img="https://i.pravatar.cc/300?img=28"
                            />
                            <h2 className="text-primary-900 dark:text-primary-200 capitalize md:text-2xl font-medium">
                                12 Things to know before buying a house
                            </h2>
                            <Description>
                                Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house
                            </Description>
                            <div className="flex items-center gap-4 text-[#888B97] text-lg font-normal">
                                <Icon icon="bx:bx-time-five" className="w-5 h-5" />
                                <div className="flex items-center  divide-x w-full">
                                    <span className="pr-2 truncate">
                                        5 min read
                                    </span>
                                    <span className="pl-2 truncate">
                                        25 Apr 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Partner
