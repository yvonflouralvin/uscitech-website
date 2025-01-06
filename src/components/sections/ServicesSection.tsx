import { ArrowUpRightIcon } from 'lucide-react'
import SectionTitle from '../partials/SectionTitle'
import SectionWrapper from '../partials/SectionWrapper'
import ServiceCard from '../partials/ServiceICard'
import Button from '../ui/Button'

function ServicesSection({
    backGroundType, className
}:{
    className?: string,
    backGroundType?: 'fill' | 'transparent'
}) {
    return (
        <SectionWrapper marginSize='md' className={`${backGroundType === 'transparent' ? 'bg-transparent' : 'bg-[#F0EFEA]'}`} >
            <div className={`flex flex-col gap-10 py-20 ${className || ''}`}>
                <div className='flex flex-col sm:flex-row gap-10 sm:gap-24 md:gap-40 lg:gap-52 justify-between items-end'>
                    <SectionTitle maxWidth='max-w-md'
                        label='Pourquoi nous choisir ?'
                        title='RAISONS PRINCIPALES POUR CHOISIR USCITECH'
                    />
                    <p className='font-extralight'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur nesciunt animi velit.
                    </p>
                </div>
                <div className='flex flex-wrap justify-between gap-[10px]'>
                    <ServiceCard isBgTransparent={backGroundType === 'transparent' ? true : false }
                        title='Bénéficier de l’excellence de l’éducation canadienne en RDC'
                        description='Avec une variété de programmes innovants continuellement enrichis par le développement de nouvelles connaissances scientifiques et technologiques.'
                    />
                    <ServiceCard isBgTransparent={backGroundType === 'transparent' ? true : false }
                        title='Des auditoires ergonomiques et des laboratoires - ateliers équipés '
                        description='Vous pourrez étudier et travailler en petits groupes pour une meilleure prise en charge et collaboration.'
                    />
                    <ServiceCard isBgTransparent={backGroundType === 'transparent' ? true : false }
                        title='Formation pratique en collaboration avec les milieux professionnels'
                        description='Nous avons établi des ententes de collaborations avec ces milieux professionnels pour offrir une formation innovante afin d’assurer votre employabilité'
                    />
                    <ServiceCard isBgTransparent={backGroundType === 'transparent' ? true : false }
                        title='Programmes ancrés sur le développent du leadership'
                        description='Préparer les futurs diplômés à être des créateurs d’entreprises et de richesses dont la RDC a tant besoin pour son développement'
                    />
                </div>
                <div className='flex justify-center mt-4'>
                    <Button
                        type='outline'
                        label='En savoir plus'
                        icon={<ArrowUpRightIcon size={13} />}
                    />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ServicesSection