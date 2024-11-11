import Button from '@/components/Button'
import SectionHeading from '@/components/headers/SectionHeading'
import SectionTitle from '@/components/headers/SectionTitle'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Header = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="pt-32 px-10 xl:px-40 pb-3 ">
            {/* section title  */}
            <SectionTitle text="Our Recommendation" />
            {/* header actions  */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
                <SectionHeading>
                    Featured House
                </SectionHeading>
                <div className="flex items-center justify-between gap-4">
                    <div className="flex gap-4">
                        <Button variant="pastel" color="primary" rounded="full" className="xl:py-4 xl:px-8 font-extrabold">
                            <Icon icon="ph:house-fill" className="text-inherit" />
                            <span className="hidden md:block">House</span>
                        </Button>
                        <Button variant="outlined" color="gray" rounded="full" className="xl:py-4 xl:px-8 font-extrabold">
                            <Icon icon="ic:round-villa" className="text-inherit" />
                            <span className="hidden md:block">Villa</span>
                        </Button>
                        <Button variant="outlined" color="gray" rounded="full" className="xl:py-4 xl:px-8 font-extrabold">
                            <Icon icon="ic:round-apartment" className="text-inherit" />
                            <span className="hidden md:block">Apartment</span>
                        </Button>
                    </div>
                    <div className="flex gap-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
