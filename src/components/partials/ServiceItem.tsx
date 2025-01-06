import React from 'react'


type serviceItemType = {
    icon: React.ReactNode,
    title: string,
    description: string
}

function ServiceItem({
    icon, title, description
}: serviceItemType) {
    return (
        <div className='flex flex-col gap-3'>
            {icon}
            <div className='flex flex-col gap-2'>
                <h3 className='font-bold'>{title}</h3>
                <p className='font-extralight text-sm'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ServiceItem