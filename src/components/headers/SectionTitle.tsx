import React from 'react'

const SectionTitle = ({
    text = "Our Recommendation",
    horizontal = false
}: {
    text: string,
    horizontal?: boolean
}) => {
    return (
        <div className={`text-[#F59E0B] capitalize text-lg font-medium flex items-center gap-2 ${horizontal && 'flex-col'}`}>
            <hr className="w-8 border border-[#F59E0B] h-0" />
            <span>
                {
                    text
                }
            </span>
        </div>
    )
}

export default SectionTitle
