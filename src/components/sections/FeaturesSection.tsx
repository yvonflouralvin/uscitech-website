import React from 'react'
import SectionTitle from '../partials/SectionTitle'
import Button from '../ui/Button'
import { ArrowUpRightIcon, ChartNoAxesCombined, Handshake, Lightbulb, Pyramid } from 'lucide-react'
import ServiceItem from '../partials/ServiceItem'
import SectionWrapper from '../partials/SectionWrapper'

function FeaturesSection() {
    return (
        <SectionWrapper marginSize='sm'>
            <div className='w-full flex flex-col sm:flex-row gap-10 md:gap-20 border p-[18px] sm:p-[30px] md:p-[60px] rounded'>
                <div className='flex flex-col flex-1 gap-6'>
                    <SectionTitle maxWidth='max-w-lg'
                        label='Nos Facultés'
                        title='Venez explorer nos cursus académiques et découvrir votre voie vers le futur'
                    />
                    <div>
                        <Button
                            type='primary'
                            label='En savoir plus'
                            icon={<ArrowUpRightIcon size={13} />}
                        />
                    </div>
                </div>
                <div className='flex flex-col flex-1 gap-5 md:gap-10'>
                    <div className='flex flex-1 justify-between gap-5 md:gap-10'>
                        <ServiceItem
                            icon={<Handshake size={40} />}
                            title='GENIE / INGENIERIE'
                            description='Pour les esprits ingénieux qui aiment concevoir et construire des infrastructures, des systèmes, des machines ou des procédés de fabrication.'
                        />
                        <ServiceItem
                            icon={<Lightbulb size={40} />}
                            title='SCIENCES INFORMATIQUES'
                            description='Pour les esprits analytiques et novateurs qui aiment concevoir des systèmes pour analyser et traiter l’information.'
                        />
                    </div>
                    <div className='flex flex-1 justify-between gap-5 md:gap-10'>

                        <ServiceItem
                            icon={<ChartNoAxesCombined size={40} />}
                            title='SCIENCES ECONOMIQUES ET DE L’ADMINISTRATION'
                            description='Si vous avez la fibre entrepreneuriale et que vous aimez analyser les données économiques, gérer des stratégies d’entreprises'
                        />
                        <ServiceItem
                            icon={<Pyramid size={40} />}
                            title='SCIENCES DE L’EDUCATION'
                            description='Forme des enseignant(e)s et professionnel(le)s de l’éducation. Nos programmes vous préparent à devenir des enseignant(e)s'
                        />

                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default FeaturesSection