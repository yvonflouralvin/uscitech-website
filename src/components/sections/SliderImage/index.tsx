'use client'
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
// import styles from "./Slider.module.css";
import Image from "next/image";

const slides = [
    {
        title: 'Bénéficier de l’excellence de l’éducation canadienne en RDC',
        description: 'Avec une variété de programmes innovants continuellement enrichis par le développement de nouvelles connaissances scientifiques et technologiques.',
        illustration: "slideshow01.webp"
    },
    {
        title: 'Une formation bilingue de qualité qui vous prépare à l’international',
        description: 'Les multinationales et organismes internationaux peinent à recruter dans notre Pays parce que la plupart de nos diplômés ne peuvent pas travailler en anglais qui est la langue la plus utilisée dans ces milieux professionnels qui offrent de meilleures opportunités et rémunérations.',
        illustration: "slideshow02.webp"
    },
    {
        title: 'Des programmes ancrés sur le développement du leadership et de l’entrepreneuriat',
        description: 'Les multinationales et organismes internationaux peinent à recruter dans notre Pays parce que la plupart de nos diplômés ne peuvent pas travailler en anglais qui est la langue la plus utilisée dans ces milieux professionnels qui offrent de meilleures opportunités et rémunérations.',
        illustration: "slideshow03.webp"
    }
];

export default function SliderImage() {
    return <Slide easing="ease">
                {slides.map((slide, index) => {
                    return (
                        <div key={index}
                            className={`bg-cover h-screen`}
                            style={{
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundAttachment: 'fixed',
                                backgroundImage: `url(/slideshow/${slide.illustration})`
                            }}>
                            <div className='flex flex-col justify-center h-full w-full text-white px-[20px]  sm:px-[40px] lg:px-[100px]' style={{
                                background: `linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(4,4,27,0.6012780112044818) 35%, rgba(8,28,60,1) 100%)`
                            }}>
                                <div className='max-w-[900px]'>
                                    {/* Logo Container */}
                                    <div className='sm:hidden cursor-pointer bg-transparent text-center mb-[20px] justify-center items-center text-white'>
                                        <Image src="/logo_uscitech.webp" alt='logo Uscitech' width={300} height={200} />
                                    </div>
                                    <h2 className='font-semibold text-[30px] sm:text-[50px] lg:text-[70px] leading-[25px] sm:leading-[40px]  lg:leading-[60px]'>{slide.title}</h2>
                                    <div className="font-light text-[15px] sm:text-[20px] leading-[21px] sm:leading-[25px] mt-[10px]">{slide.description}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slide> ;
}
