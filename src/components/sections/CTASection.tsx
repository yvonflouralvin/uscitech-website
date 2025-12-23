import { ArrowUpRightIcon } from "lucide-react"
import SectionTitle from "../partials/SectionTitle"
import SectionWrapper from "../partials/SectionWrapper"
import Button from "../ui/Button"


type CTASectionType = { 
    title?: string, 
    buttonLabel?: string, 
    forNewsLetter?: boolean, 
    sectionBackground?: 'fill' | 'transparent' 
}

function CTASection({
    title, 
    buttonLabel, 
    forNewsLetter = true, 
    sectionBackground = 'fill'
}: CTASectionType) {
    return (
        <SectionWrapper marginSize='md' className={`${sectionBackground === 'fill' ? 'bg-[#F0EFEA]' : '' }`}>
            <div className='flex flex-col mx-auto py-10'>
                <div className='w-full flex flex-wrap gap-7 items-center justify-between'>
                    <SectionTitle
                        title={title || 'Recevez toutes les nouvelles et nos derniers articles'}
                        label=""
                        maxWidth='max-w-sm'
                    />
                    <div className='flex flex-wrap gap-3'>
                        {
                            forNewsLetter &&
                            <input type="text" placeholder='Email ' className='w-full sm:w-80 h-9 rounded-full px-4' />
                        }
                        <Button
                            type='primary'
                            label={buttonLabel || 'Souscrire'}
                            icon={<ArrowUpRightIcon size={13} />}
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTASection