'use client'
import { AlignRight, ArrowUpRightIcon, FacebookIcon, HistoryIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneCall } from 'lucide-react'
import React from 'react'
import Button from '../ui/Button'
import SectionWrapper from './SectionWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Header() {
    const sub_header_info = [
        { icon: <PhoneCall size={14} />, info: "(+243) 998 123 456" },
        { icon: <MailIcon size={14} />, info: "info@uscitech.ac.cd" },
        { icon: <MapPinIcon size={14} />, info: "41, Av. Kananga, Q. Pigeon, C. Ngaliema, Kinshasa" },
    ]

    const menu_items = [
        { label: "A Propos", link: "/about" },
        { label: "Nos Facultés", link: "/facultes" },
        { label: "Galerie", link: "/galerie" },
        // { label: "Actualités", link: "/blog" },
        { label: "Inscriptions", link: "https://uscitech-cisnet.com/inscriptions/formulaire" }, 
        // { label: "Partenaires", link: "/parteners" }, 
        { label: "Contact", link: "/contact" },
    ]
    const [headerScroll, setHeaderScroll] = React.useState(false)
    
    React.useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            //console.log(window.scrollY);
            if(window.scrollY > 80) {
                setHeaderScroll(true)
            }

            if(window.scrollY < 80) {
                setHeaderScroll(false)
            } 
       
        })
    },[])

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const pathname = usePathname()
    React.useEffect(()=>{ setIsMenuOpen(false) ; }, [pathname])
    

    return <>
        <SectionWrapper marginSize='md' className='bg-[#F0EFEA]'>
        <div className={`duration-300 w-full md:flex justify-between m-auto fixed top-0 left-0 p-[10px] px-[20px]`} style={{
            backgroundColor: `${ headerScroll ? `rgba(255, 255, 255, 1)` : `rgba(255, 255, 255, 0)` }`,
            color: `${ headerScroll ? `black` : `white` }`,
            boxShadow: `rgba(0, 0, 0, ${ headerScroll ? `0.2` : `0` }) 0px 2px 8px 0px`,
        }}>
            {/* Logo Container */}
            <div className='hidden cursor-pointer bg-transparent text-center lg:flex justify-center items-center text-white'>
                <Link href={"/"}><Image src="/logo_uscitech.webp" alt='logo Uscitech' width={200} height={100} /></Link>
            </div>

            {/* Logo Container */}
            <div className='sm:hidden cursor-pointer bg-transparent text-center flex justify-center items-center text-white'>
                <div className='flex-1'>
                <Link href={"/"}><Image src="/logo_uscitech.webp" alt='logo Uscitech' width={100} height={50} /></Link>
                </div>
                <div className='flex flex-row items-center justify-center p-[7px] bg-white cursor-pointer shadow-lg rounded-lg'>
                    <AlignRight size={18} color={` ${headerScroll ?  'black' : 'black'} `} className='duration-300' onClick={()=>setIsMenuOpen(true)} />
                </div>
            </div>


            {/*  */}
            <div className='w-full flex flex-col gap-[0px] px-3'>
                <div className='w-full md:flex-row flex-col flex flex-wrap gap-[15px] justify-between items-center py-[7px] border-0  md:border-b border-inherent'>
                    <div className='hidden sm:flex flex-row flex-nowrap divide-x-0 md:divide-x divide-gray-300  gap-[15px]'>
                        {
                            sub_header_info.map((info, index) => (
                                <div key={index} className='w-max flex text-[13px] items-center gap-[5px] first:ps-0 ps-2.5'>
                                    {info.icon}
                                    <p className='text-[10px] md:text-[13px]'>{info.info}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-amx hidden xl:flex divide-gray-300 gap-[15px] items-center'>
                        <div className='flex items-center gap-[5px]'>
                            <HistoryIcon size={14} />
                            <p className='text-[13px]'>Lundi - Vendredi : 08:30-16:30</p>
                        </div>
                        <div className='flex items-center gap-[5px]'> 
                            <Link href="https://web.facebook.com/theuscitech" target='_blank'><FacebookIcon size={15} /></Link>
                            <Link href="https://www.instagram.com/reel/DEHPG1KirOw/?igsh=MXBtM2lvazlhbTI1bA==" target='_blank'><InstagramIcon size={15} /></Link> 
                        </div>
                    </div>
                </div>
                <div className='hidden sm:flex sm:flex-row flex-col justify-between items-center py-[5px]'>
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
                        <Link href={"https://uscitech-cisnet.com/inscriptions/formulaire"}><Button
                            type='primary'
                            label='Inscription'
                            icon={<ArrowUpRightIcon size={13} />}
                        /></Link>

                    </div>
                </div>
            </div>
        </div>
    </SectionWrapper>

    {
        isMenuOpen && <div className={`duration-300 h-screen w-screen fixed top-0 left-0 backdrop-blur-sm flex flex-row items-end opacity-${ isMenuOpen ? '1' : '0' }`}>
        
        <div className="h-screen w-[100px]">
        </div>
        <div className='h-screen w-full max-w-[400px] bg-white shadow-lg  p-[20px]'>
            <div className='w-full justify-end mb-[25px]'>
                <AlignRight size={20} className={`cursor-pointer`}  onClick={()=>setIsMenuOpen(false)}/>
            </div>
            <div className='items-center gap-[20px] border-b border-inherent pb-[20px] mb-[20px]'>
                {
                    menu_items.map((item, index) => (
                        <Link key={index} href={item.link} className='flex flex-row mb-[15px]'>
                            <p className='duration-300 text-[13px] cursor-pointer font-semibold hover:text-[#007bff] border-b-[3px] border-transparent hover:border-[#007bff]'>
                            {item.label}
                        </p>
                        </Link>
                    ))
                }
            </div>
            <div className='flex flex-col flex-nowrap divide-x-0 md:divide-x divide-gray-300  gap-[15px]'>
                {
                    sub_header_info.map((info, index) => (
                        <div key={index} className='w-max flex text-[13px] items-center gap-[5px]'>
                            {info.icon}
                            <p className='text-[12px] md:text-[13px]'>{info.info}</p>
                        </div>
                    ))
                }
            </div>
</div>
    </div>
    }
    </>

}