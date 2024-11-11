import FooterVector from '@/assets/FooterVector'
import React from 'react'
import SectionHeading from '../headers/SectionHeading'
import { Icon } from '@iconify/react/dist/iconify.js'
import ImagePreview from '../ImagePreview'
import Description from '../Description'

const Footer = () => {
    return (
        <section className="h-screen w-full pt-40 px-10 md:px-20 xl:px-40 relative flex flex-col justify-between gap-6">
            <FooterVector className="absolute bottom-0 right-0 z-[1]" />
            {/* footer card  */}
            <div className="w-full h-[350px] p-4 rounded-2xl relative bg-no-repeat bg-center bg-cover dark:brightness-75"
                style={{
                    backgroundImage: `url(./24.svg)`,
                }}
            >
                {/* center content  */}
                <div className="z-[5] mx-auto h-full w-full md:w-1/2 flex items-center justify-center flex-col space-y-8 ">
                    <SectionHeading className="text-center dark:text-primary-900">
                        Subscribe For More Info and update from Hounter
                    </SectionHeading>
                    {/* search */}
                    <div className="flex items-center border-none shadow-md md:text-xl font-semibold bg-white border-gray-300 dark:border-gray-600 rounded-full p-1 gap-2 w-full text-gray-200 dark:text-gray-300">
                        <Icon icon="carbon:location-filled" className="text-[#F59E0B] w-10 h-10 ml-5" />
                        <input type="text" placeholder="Search for your place" className="bg-transparent outline-none w-full  text-gray-500 dark:text-gray-400" />
                        <button className="bg-primary py-2 px-4 md:py-4 md:px-8 rounded-full flex justify-center items-center gap-2 hover:bg-primary-600">
                            <span>
                                Search
                            </span>
                            <Icon icon="ep:arrow-right-bold" className="w-5 h-5 md:ml-2" />
                        </button>
                    </div>
                </div>


                {/* left side  */}
                <ImagePreview image={
                    'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                } size="2xl" rounded="3xl" ring="3" ringColor="white" className="hidden lg:block z-[5] absolute top-11 left-11" />
                <ImagePreview image={
                    'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                } size="sm" rounded="full" ring="3" ringColor="white" className="hidden lg:block z-[5] absolute top-10 xl:top-24 left-64" />
                <ImagePreview image={
                    'https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                } size="lg" rounded="5xl" ring="3" ringColor="white" className="hidden xl:block z-[5] absolute -bottom-1 xl:bottom-6 left-64" />
                <ImagePreview image={
                    'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                } size="sm" rounded="full" ring="3" ringColor="white" className="hidden lg:block z-[5] absolute bottom-20 left-20 " />


                {/* right side */}

                <ImagePreview image={
                    'https://images.unsplash.com/photo-1465301055284-72f355cfd745?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                } size="2xl" rounded="3xl" className="hidden lg:block z-[5] absolute top-11 right-11" />
                <ImagePreview image={
                    'https://images.unsplash.com/photo-1505819244306-ef53954f9648?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                } size="sm" rounded="full" ring="3" ringColor="white" className="hidden lg:block z-[5] absolute top-10 xl:top-24 right-64" />
                <ImagePreview image={
                    'https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                } size="lg" rounded="6xl" ring="3" ringColor="white" className="hidden xl:block z-[5] absolute bottom-1 xl:bottom-6 right-64" />
                <ImagePreview image={
                    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                } size="sm" rounded="full" ring="3" ringColor="white" className="hidden lg:block z-[5] absolute bottom-20 right-20 " />


            </div>

            {/* footer link container  */}

            <footer className="grid grid-cols-12 gap-3 z-[5] pb-5">
                {/* left side  */}
                <div className="col-span-12 lg:col-span-6 md:pr-32 space-y-2 md:space-y-6">
                    <div className="text-2xl font-bold text-primary-900 dark:text-primary-50  w-full">Real Estate</div>
                    <Description>
                        We provide information about properties such as houses, villas and apartments to help people find their dream home
                    </Description>
                    {/* social media */}
                    <div className="flex gap-8">
                        <Icon icon="akar-icons:facebook-fill" className="w-10 h-10 text-primary-900 dark:text-primary-200" />
                        <Icon icon="akar-icons:instagram-fill" className="w-10 h-10 text-primary-900 dark:text-primary-200" />
                        <Icon icon="akar-icons:twitter-fill" className="w-10 h-10 text-primary-900 dark:text-primary-200" />
                        <Icon icon="akar-icons:linkedin-fill" className="w-10 h-10 text-primary-900 dark:text-primary-200" />
                    </div>
                </div>
                {/* right side  */}
                <div className="col-span-12 lg:col-span-6 grid grid-cols-12">
                    <div className="col-span-6 md:col-span-3 md:space-y-3">
                        <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-200">Property</h3>
                        <ul className="space-y-1 md:space-y-3">
                            <li className="text-lg font-medium text-gray-500 dark:text-gray-400">House</li>
                            <li className="text-lg font-medium text-gray-500 dark:text-gray-400">Apartment</li>
                            <li className="text-lg font-medium text-gray-500 dark:text-gray-400">Villa</li>
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-3 md:space-y-3">
                        <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-200">Article</h3>
                        <ul className="space-y-1 md:space-y-3">
                            <li className="text-lg font-medium text-gray-500 dark:text-gray-400">New Article</li>
                            <li className="text-lg font-medium text-gray-500 dark:text-gray-400">Popular Article</li>
                            <li className="text-lg font-medium text-gray-500 dark:text-gray-400">Most Read</li>
                            <li className="text-lg font-medium text-gray-500 dark:text-gray-400">Tips & Tricks</li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 md:space-y-3">
                        <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-200">Contact</h3>
                        <ul className="space-y-1 md:space-y-3">
                            <li className="text-lg font-medium text-gray-500 dark:text-gray-400">
                                <span>
                                    2464 Royal Ln. Mesa, New Jersey 45463
                                </span>
                            </li>
                            <li className="text-lg font-medium text-gray-500 dark:text-gray-400">+62 812 3456 7890</li>
                            <li className="text-lg font-medium text-gray-500 dark:text-gray-400">info@hounter.com</li>

                        </ul>
                    </div>
                </div>

            </footer>

        </section>
    )
}

export default Footer
