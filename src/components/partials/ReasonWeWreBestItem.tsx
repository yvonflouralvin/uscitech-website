import React from 'react'


type reasonWeWreBestItemType = {
    icon: React.ReactNode,
    title: string,
    description: string
}

function ReasonWeWreBestItem({
    icon, title, description
}: reasonWeWreBestItemType) {
    return (
        <div className='flex items-center gap-3'>
            <div className='border rounded-full p-3 text-zinc-600'>
                {icon}
            </div>
            <div>
                <h1 className='font-simibold text-lg'>{title}</h1>
                <p className='font-extralight text-sm'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ReasonWeWreBestItem