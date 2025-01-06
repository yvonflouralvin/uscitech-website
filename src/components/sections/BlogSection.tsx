import { ArrowUpRightIcon } from "lucide-react";
import SectionTitle from "../partials/SectionTitle";
import SectionWrapper from "../partials/SectionWrapper";
import Button from "../ui/Button";
import BlogItem from "../partials/BlogItem";

export default function BlogSection(){
    return (
        <SectionWrapper marginSize='md'>
            <div className='flex flex-col mx-auto py-20'>
                <div className='w-full flex flex-wrap gap-5 items-end justify-between'>
                    <SectionTitle
                        label='Articles & Actualités'
                        title='Restez informé de nos dernières articles'
                        maxWidth='max-w-sm'
                    />
                    <Button
                        type='outline'
                        label='Lire plus'
                        icon={<ArrowUpRightIcon size={13} />}
                        href='/blog'
                        useAsLink={true}
                    />
                </div>
                <div className='flex flex-col sm:flex-row gap-5 pt-10'>
                    {
                        [1, 2, 3].map((el: any) => (
                            <BlogItem key={el}
                                category='Business'
                                title='Guide To Newly Supporte Morden CSS Psedo'
                                date=''
                                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem aliquid culpa consectetur.'
                            />
                        ))
                    }
                </div>
            </div>
        </SectionWrapper>
    )
}