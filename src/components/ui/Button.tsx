'use client'
import Link from 'next/link'
import React from 'react'

interface Props {
    type?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'light'
    icon?: any
    label?: string
    isIconOnly?: boolean,
    useAsLink?: boolean,
    href?: string,
    onClick?: () => void
}
export default function Button(props: Props = {
    type: 'primary',
    icon: null,
    label: 'Default Button',
    useAsLink: false,
    href: ''
}) {

    const currentClasses = `${props.type === 'primary' ? 'bg-primary'
        : props.type === 'outline' ? 'border border-black'
            : props.type === 'secondary' ? 'bg-black text-white'
                : props.type === 'light' ? 'bg-transparent' : ''
        } flex justify-center items-center rounded-full ${props.isIconOnly ? 'p-2'
            : 'py-[7px] px-[15px] gap-[5px]'
        }`


    return <>
        {
            props.useAsLink || props.href ?
                <Link href={props?.href || ''} className={`${currentClasses} w-max`}>
                    {!props.isIconOnly &&
                        <LabelButton label={props?.label || ''} />
                    }
                    {props.icon}
                </Link>
                :
                <button className={currentClasses}
                    onClick={() => {
                        props.onClick && props.onClick()
                    }}>
                    {!props.isIconOnly &&
                        <LabelButton label={props?.label || ''} />
                    }
                    {props.icon}
                </button>
        }
    </>

}




function LabelButton({ label }: { label: string }) {
    return (
        <p className='font-semibold text-[13px]'>{label}</p>
    )
}
