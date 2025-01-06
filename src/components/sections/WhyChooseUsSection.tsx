import React from 'react'
import SectionWrapper from '../partials/SectionWrapper'
import SectionTitle from '../partials/SectionTitle'
import Image from 'next/image'
import { Network } from 'lucide-react'
import ReasonWeWreBestItem from '../partials/ReasonWeWreBestItem'

function WhyChooseUsSection() {
    return (
        <SectionWrapper marginSize='md'>
            <div className='flex flex-col sm:flex-row justify-between items-end gap-20 py-20'>
                <div className='flex flex-col gap-8'>
                    <SectionTitle
                        label='Why Choose Us'
                        title='Reasons Why We are Best Business Consulting Agency'
                        maxWidth='max-w-md'
                    />
                    <div className='flex flex-col gap-7'>

                        <ReasonWeWreBestItem
                            icon={<Network size={32} />}
                            title='Process Excellence'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        />
                        <ReasonWeWreBestItem
                            icon={<Network size={32} />}
                            title='Strategic Planning'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        />
                        <ReasonWeWreBestItem
                            icon={<Network size={32} />}
                            title='Experience Designs'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        />
                        <ReasonWeWreBestItem
                            icon={<Network size={32} />}
                            title='Artificial Inteligence'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                        />
                    </div>
                </div>
                <div className="flex flex-1 justify-start relative w-full sm:w-max md:w-full">
                    <div className='w-80 h-80 m-auto relative -top-10 sm:-left-5 z-10 border'>
                        <Image width={100} height={100} src='/images/hero-img.png' alt="Hero Image"
                            className="w-80 h-80 object-cover m-auto"
                        />
                    </div>
                    <div className='absolute bottom-0 right-0 w-full h-52 bg-[#F0EFEA] z-0'></div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default WhyChooseUsSection