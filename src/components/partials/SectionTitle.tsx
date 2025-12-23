import React from 'react'


type sectionTitleType = {
    title: string,
    label: string,
    maxWidth: 'max-w-xs' | 'max-w-sm' | 'max-w-md' | 'max-w-lg' | 'max-w-xl' | 'max-w-2xl' | 'max-w-3xl' | 'max-w-4xl' | 'max-w-5xl' | 'max-w-6xl' | 'max-w-7xl' | 'max-w-full'
}

function SectionTitle({
    label, title, maxWidth
}: sectionTitleType) {
  return (
    <div className={`${maxWidth} flex flex-col gap-2`}>
        <span className='text-sm text-orange-500 font-semibold uppercase'>
          {label}
        </span>
        <h1 className='duration text-[34px] md:text-[40px] font-medium leading-9 md:leading-[50px]'>
          {title}
        </h1>
    </div>
  )
}

export default SectionTitle