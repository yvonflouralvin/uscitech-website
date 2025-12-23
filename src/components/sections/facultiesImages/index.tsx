import SectionWrapper from "@/components/partials/SectionWrapper";
import Image from "next/image";


import image_1 from '@/components/sections/facultiesImages/images/1.jpg'
import  image_2 from '@/components/sections/facultiesImages/images/2.jpg'
import  image_3 from '@/components/sections/facultiesImages/images/3.jpg'
import  image_4 from '@/components/sections/facultiesImages/images/4.jpg'
import  image_5 from '@/components/sections/facultiesImages/images/5.jpg'

export default function FactultiesImages(){
    const images = [
        image_1, image_2, image_3, image_4, image_5
    ]

    return <SectionWrapper marginSize="md">
        <div className="flex flex-row flex-wrap gap-[30px] align-middle text-center">
            {
                images.map((image: any, index: number)=>{
                    return <Image 
                        key={index+1}
                        src={image}
                        width={1000}
                        height={1000}
                        alt="Facultes"
                        className="w-full sm:w-[300px] h-auto sm:h-[300px]"
                    />
                })
            }
        </div>
    </SectionWrapper>
}