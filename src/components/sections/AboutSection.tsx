import React from 'react'
import Image from 'next/image'
import SectionTitle from '../partials/SectionTitle'
import Button from '../ui/Button'
import { ArrowUpRightIcon } from 'lucide-react'
import SectionWrapper from '../partials/SectionWrapper'
import Link from 'next/link'

function AboutSection() {
    return (
        <SectionWrapper marginSize='md' className='py-20'>
            <div className='flex flex-col sm:flex-row gap-10 md:gap-24'>
                <div className="relative flex flex-1 justify-center items-center">
                    <Image width={1000} height={1000} src='/uscitech_student.png' alt="Uscitech Diplomate"
                        className=" w-[300px] h-auto m-auto"/>
                    <div className='w-80 absolute shadow-md -left-1 sm:-left-5 md:left-5 top-[60%] bg-blue-300 px-6 py-4'>
                        <div className='relative flex flex-col'>
                            <div className='flex gap-2 items-end'>
                                <div className='w-16 h-16 rounded-full bg-gray-500'></div>
                                <h3 className='font-semibold pb-2'>Pr. KAFUNDA , <span className='text-orange-600'>SECRÉTAIRE GÉNÉRALE ACADÉMIQUE</span></h3>
                            </div>
                            <p className='mt-5 font-extralight'>
                                "Un homme bien formé a la capacité D’analyser sa société, déceler les points fort et faible de celle-ci et proposer des solutions efficaces et robustes"
                            </p>
                            <Link href="/mot-ouverture-prof-kafunda"><p>Lire ...</p></Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col flex-1 gap-6'>
                    <SectionTitle maxWidth='max-w-md'
                        label="A propos de l'USCITECH"
                        title='Programme spécial de double diplomation pour les jeunes du secondaire'
                    />
                    <div className='flex flex-col gap-4 font-extralight'>
                        <p>
                        L’USCITECH offre aux jeunes qui terminent leur secondaire plus que des études supérieures qui sont organisées dans ses 4 facultés. Dans le cadre d’un partenariat privilégié avec les organisations privée et publique canadiennes
                        </p>
                        <p>
                        Ce programme unique, qui est une première en Afrique, est rendu possible grâce au partenariat avec l’Académie des Sciences et Technologies (ASCITECH), l’organisation canadienne «Idée Education Entrepreneuriale» et le Conseil Scolaire du District Catholique de l’Est Ontarien (CSDCEO). 
                        </p>
                    </div>
                    <div>
                        <Button
                            type='primary'
                            label='En savoir plus'
                            icon={<ArrowUpRightIcon size={13} />}
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default AboutSection