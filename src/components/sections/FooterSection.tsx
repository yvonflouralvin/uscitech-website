import React from 'react'
import SectionWrapper from '../partials/SectionWrapper'
import { FacebookIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

function FooterSection() {

    const sub_header_info = [
        { icon: <PhoneCall size={14} color='white'/>, info: "(+243) 998 123 456" },
        { icon: <MailIcon size={14} color='white' />, info: "info@uscitech.ac.cd" },
        { icon: <MapPinIcon size={14} color='white' />, info: "41, Av. Kananga, Q. Pigeon, C. Ngaliema, Kinshasa" },
    ]

    return (
        <SectionWrapper marginSize='md' className='bg-[#0E0F21]'>
            <div className='w-full text-white'>
                <div className='w-full flex flex-col sm:flex-row justify-between gap-10 sm:gap-16 md:gap-24 py-16'>
                    <div className='max-w-80 flex flex-col gap-6'>
                        <div className='flex w-full h-8 items-center gap-2 text-black'>
                            <Link href={"/"}><Image src="/images/logo-mono.png" style={{
                                filter: "invert(1)"
                            }} alt='logo Uscitech' width={50} height={100} /></Link>
                            <p className='text-white font-[14px] font-bold'>Université des Sciences <br /> et des Technologies </p>
                        </div>
                        <p>
                            L’Université des Sciences et des Technologies est une Institution Universitaire qui a pour vocation de donner à la jeunesse une formation de qualité en sciences et technologies.
                        </p>
                    </div>
                    {/* <div className='w-full flex flex-wrap justify-between py-2'> */}
                    <div className='max-w-80 flex flex-col gap-6'>
                        <h1 className='text-lg font-bold'>Liens rapides</h1>
                        <ul className='flex flex-col gap-2'>
                            <li><Link href={"/about"}>A Propos</Link></li>
                            <li>Inscriptions</li>
                            <li><Link href={"/blog"}>Actualités</Link></li>
                            <li><Link href="/parteners">Nos Partenaires</Link></li>
                            <li><Link href={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='max-w-80 flex flex-col gap-6'>
                        <h1 className='text-lg font-bold'>Contact</h1>
                        <ul className='flex flex-col gap-2'>
                            {
                                sub_header_info.map((info, index) => (
                                    <li key={index} className='w-max flex text-[13px] text-white items-center gap-[5px] first:ps-0'>{info.icon}<p className='text-[13px]'>{info.info}</p></li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* <div className='min-w-max max-w-80 flex flex-col gap-6'>
                        <h1 className='text-lg font-bold'>Ressources</h1>
                        <ul className='flex flex-col gap-2'>
                            <li>Free eBooks</li>
                            <li>Developement Tutorial</li>
                            <li>How To - Blog</li>
                            <li>Youtube Playlist</li>
                        </ul>
                    </div> */}
                </div>
                {/* </div> */}
                <div className='flex justify-between items-center py-6 border-t border-slate-600'>
                    <p className='font-extralight'>
                        @ 2025 - Uscitech. All Rights Reserved.
                    </p>
                    <div className='flex items-center gap-[15px]'>
                        <Link href="https://web.facebook.com/theuscitech" target='_blank'><FacebookIcon size={15} /></Link>
                        <Link href="https://www.instagram.com/reel/DEHPG1KirOw/?igsh=MXBtM2lvazlhbTI1bA==" target='_blank'><InstagramIcon size={15} /></Link>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default FooterSection