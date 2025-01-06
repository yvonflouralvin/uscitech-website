import { ArrowUpRightIcon, HistoryIcon, Linkedin, LinkedinIcon, LocateIcon, MailIcon, MapPinIcon, PhoneCall, TwitterIcon } from 'lucide-react'
import React from 'react'
import Button from '../ui/Button'
import SectionWrapper from './SectionWrapper'
import Image from 'next/image'
import Link from 'next/link'


type Menu = {
    label: string,
    link?: string,
    menu?: Menu
}
export default function Header() {
    const sub_header_info = [
        { icon: <PhoneCall size={14} />, info: "(+243) 998 123 456" },
        { icon: <MailIcon size={14} />, info: "info@uscitech.ac.cd" },
        { icon: <MapPinIcon size={14} />, info: "41, Av. Kananga, Q. Pigeon, C. Ngaliema" },
    ]

    const menu_items = [
        { label: "A Propos", link: "/about" },
        { label: "Nos Facultés", link: "/programmes" },
        { label: "Actualités", link: "/blog" },
        { label: "Inscriptions", link: "/" }, 
        { label: "Contact", link: "/contact" },
    ]
    return <SectionWrapper marginSize='md' className='bg-[#F0EFEA]'>
        <div className='w-full md:flex justify-between m-auto'>
            {/* Logo Container */}
            <div className='hidden bg-transparent text-center lg:flex justify-center items-center text-white'>
                <Image src="/logo_uscitech.webp" alt='logo Uscitech' width={200} height={100} />
            </div>

            {/*  */}
            <div className='w-full flex flex-col gap-[0px] px-3'>
                <div className='w-full md:flex-row flex-col flex flex-wrap gap-[15px] justify-between items-center py-[7px] border-b border-inherent'>
                    <div className='flex md:flex-row flex-col flex-wrap divide-x divide-gray-300  gap-[15px]'>
                        {
                            sub_header_info.map((info, index) => (
                                <div key={index} className='w-max flex text-[13px] items-center gap-[5px] first:ps-0 ps-2.5'>
                                    {info.icon}
                                    <p className='text-[13px]'>{info.info}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-amx flex divide-gray-300 gap-[15px] items-center'>
                        <div className='flex items-center gap-[5px]'>
                            <HistoryIcon size={14} />
                            <p className='text-[13px]'>Lundi - Vendredi : 09:00-18:00</p>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                            <LinkedinIcon size={14} />
                            <TwitterIcon size={14} />
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col justify-between items-center py-[5px]'>
                    <div className='flex items-center gap-[20px] '>
                        {
                            menu_items.map((item, index) => (
                                <Link  key={index} href={item.link}>
                                    <p className='duration-300 text-[13px] cursor-pointer font-semibold hover:text-[#007bff]'>
                                    {item.label}
                                </p>
                                </Link>
                            ))
                        }
                    </div>
                    <div className='hidden sm:flex items-center justify-end'>
                        <Button
                            type='primary'
                            label='Inscription'
                            icon={<ArrowUpRightIcon size={13} />}
                        />

                    </div>
                </div>
            </div>
        </div>
    </SectionWrapper>

}