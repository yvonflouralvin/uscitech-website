import React from 'react'
import SectionWrapper from '../partials/SectionWrapper'
import { Linkedin, Twitter } from 'lucide-react'

function FooterSection() {
    return (
        <SectionWrapper marginSize='md' className='bg-[#0E0F21]'>
            <div className='w-full text-white'>
                <div className='w-full flex flex-col sm:flex-row justify-between gap-10 sm:gap-16 md:gap-24 py-16'>
                    <div className='max-w-80 flex flex-col gap-6'>
                        <div className='flex w-16 h-8 bg-slate-300 items-center justify-center text-center text-black'>
                            Logo
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam molestias eligendi, quisquam beatae labore ad. Esse odit blanditiis reprehenderit a eligendi ducimus, placeat, quia, debitis at quam voluptates eum. Pariatur!
                        </p>
                    </div>
                    <div className='w-full flex flex-wrap justify-between gap-6 py-2'>
                        <div className='min-w-max max-w-80 flex flex-col gap-6 pe-8'>
                            <h1 className='text-lg font-bold'>Company</h1>
                            <ul className='flex flex-col gap-2'>
                                <li>A Propos</li>
                                <li>Calendrier</li>
                                <li>Inscriptions</li>
                                <li>Actualités</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='min-w-max max-w-80 flex flex-col gap-6'>
                            <h1 className='text-lg font-bold'>Help</h1>
                            <ul className='flex flex-col gap-2'>
                                <li>Customer Supporte</li>
                                <li>Delivery Details</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className='min-w-max max-w-80 flex flex-col gap-6'>
                            <h1 className='text-lg font-bold'>Ressources</h1>
                            <ul className='flex flex-col gap-2'>
                                <li>Free eBooks</li>
                                <li>Developement Tutorial</li>
                                <li>How To - Blog</li>
                                <li>Youtube Playlist</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center py-6 border-t border-slate-600'>
                    <p className='font-extralight'>
                        @ 2024 - Uscitech. All Rights Reserved.
                    </p>
                    <div className='flex items-center gap-[15px]'>
                        <Linkedin size={25} />
                        <Twitter size={25} />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default FooterSection