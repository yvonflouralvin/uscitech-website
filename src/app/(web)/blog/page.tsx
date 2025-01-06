import BlogItem from "@/components/partials/BlogItem";
import PageHeader from "@/components/partials/PageHeader";
import SectionWrapper from "@/components/partials/SectionWrapper";


export default async function Page() {
    return <>
        <PageHeader title="Actualités" links={[{ label: 'Actualités', href: '/blog' }]} />
        <SectionWrapper marginSize='md'>
            <div className='py-5'>
                <div className='flex flex-col gap-5 py-8'>
                    <div>
                        <h1 className='text-2xl font-bold'>
                            Lates Articles
                        </h1>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-5'>
                        {
                            [1, 2, 3].map((el: number) => (
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
                <div className='flex flex-col gap-5 py-8'>
                    <div>
                        <h1 className='text-2xl font-bold'>
                            Featured Articles
                        </h1>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-5'>
                        {
                            [1, 2, 3].map((el: number) => (
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
                <div className='flex flex-col gap-5 py-8'>
                    <div>
                        <h1 className='text-2xl font-bold'>
                            Popular Articles
                        </h1>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-5'>
                        {
                            [1, 2, 3].map((el: number) => (
                                <BlogItem key={el}
                                    category='Business'
                                    title='Guide To Newly Supporte Morden CSS Psedo'
                                    date=''
                                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem aliquid culpa consectetur.'
                                />
                            ))
                        }
                    </div>
                    <div className='flex flex-col sm:flex-row gap-5'>
                        {
                            [1, 2, 3].map((el: number) => (
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
            </div>
        </SectionWrapper>

    </>
}