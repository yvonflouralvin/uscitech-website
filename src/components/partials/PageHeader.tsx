import React from 'react'
import SectionWrapper from './SectionWrapper'
import Link from 'next/link'


type PageHeaderType = {
    title: string,
    links: {
        label: string,
        href: string
    }[]
}

function PageHeader({
    title, links
}: PageHeaderType) {
    return (
        <SectionWrapper marginSize='md' className='bg-[#F0EFEA]'>
            <div className='py-12'>
                <div className='flex items-center justify-center gap-[20px] '>
                    <Link href='/' className='duration-300 cursor-pointer font-semibold text-zinc-500 hover:text-[#007bff]'>
                        Accueil
                    </Link>
                    {
                        links && links.map((link) => (
                            <Link href={link?.href} key={`${link.label}${link.href}`} className='duration-300 cursor-pointer font-semibold hover:text-[#007bff]'>
                                {link?.label}
                            </Link>
                        ))
                    }
                </div>
                <h1 className='text-[34px] md:text-[40px] text-center font-bold'>
                    {title}
                </h1>
            </div>
        </SectionWrapper>
    )
}

export default PageHeader