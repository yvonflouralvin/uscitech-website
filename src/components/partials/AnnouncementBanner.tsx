'use client'
import { Megaphone, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props {
    onClose: () => void
}
export default function AnnouncementBanner(props: Props) {
    return (
        <div className='w-full bg-primary text-black'>
            <div className='flex flex-row flex-wrap items-center justify-center gap-[10px] py-[8px] px-[15px] text-center'>
                <Megaphone size={16} className='shrink-0' />
                <p className='text-[12px] sm:text-[13px] font-medium'>
                    Les inscriptions pour l&apos;année académique 2025-2026 sont ouvertes.
                </p>
                <Link href="https://uscitech-cisnet.com/inscriptions/formulaire" className='text-[12px] sm:text-[13px] font-semibold underline shrink-0'>
                    S&apos;inscrire
                </Link>
                <button onClick={props.onClose} className='ms-[5px] shrink-0 cursor-pointer' aria-label="Fermer l'annonce">
                    <X size={16} />
                </button>
            </div>
        </div>
    )
}
