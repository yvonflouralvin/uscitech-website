import React from 'react'
import Button from '../ui/Button'
import { ArrowUpRightIcon } from 'lucide-react'


type serviceCardType = {
    title: string,
    description: string,
    isBgTransparent: boolean
}

function ServiceCard({
    title, description, isBgTransparent
}: serviceCardType) {
    return (
        <div className={
            `md:w-[47%] lg:w-full lg:flex-1 md:flex-none select-none shadow-sm min-h-64 flex flex-col gap-5 duration-500 bg-white hover:bg-[#ffe873] px-5 py-8 
            ${isBgTransparent ? 'border' : ''}`
            }>
            <hr className='w-[16%] h-[3px] bg-zinc-600' />
            <div className='flex flex-col flex-1 gap-2'>
                <h3 className='font-bold'>{title}</h3>
                <p className='font-extralight text-sm leading-6'>
                    {description}
                </p>
            </div>
            <div className='flex justify-end'>
                <Button
                    type='secondary'
                    icon={< ArrowUpRightIcon size={22} />}
                    isIconOnly={true}
                />
            </div>
        </div>
    )
}

export default ServiceCard