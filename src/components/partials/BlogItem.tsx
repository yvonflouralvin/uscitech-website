import Image from 'next/image'


type BlogItemType = {
    category: string,
    title: string,
    date: string,
    description: string
}

function BlogItem({
    title, category, description
}: BlogItemType) {
    return (
        <div className='w-full sm:w-1/3 flex flex-col gap-3 flex-1'>
            <div className='relative flex-1'>
                <Image width={100} height={100} src='/images/hero-img.png' alt="Hero Image"
                    className="flex-1 w-full h-[180px] object-cover"
                />
                <div className='max-w-14 bg-primary text-center absolute top-3 left-4 p-1'>
                    <span> <strong className='text-xl'>25</strong> Mar</span>
                </div>
            </div>
            <span className='text-sm text-zinc-600'>{category}</span>
            <h1 className='text-lg font-semibold leading-6'>
                {title}
            </h1>
            <p className='text-sm line-clamp-2 font-light text-zinc-600'>
                {description}
            </p>
        </div>
    )
}

export default BlogItem