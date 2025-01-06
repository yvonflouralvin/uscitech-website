'use client'
import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import './style.css'
import Image from 'next/image';
const colors = ["#0088FE", "#00C49F", "#FFBB28"];

export default function Slideshow() {
  const slides = [
    {
      title: 'Bénéficier de l’excellence de l’éducation canadienne en RDC',
      description: 'avec une variété de programmes innovants continuellement enrichis par le développement de nouvelles connaissances scientifiques et technologiques.',
      illustration: "slideshow01.webp"
    },
    {
      title: 'Une formation bilingue de qualité qui vous prépare à l’international',
      description: 'Les multinationales et organismes internationaux peinent à recruter dans notre Pays parce que la plupart de nos diplômés ne peuvent pas travailler en anglais qui est la langue la plus utilisée dans ces milieux professionnels qui offrent de meilleures opportunités et rémunérations.',
      illustration: "slideshow02.webp"
    },
    {
      title: 'Des programmes ancrés sur le développent du leadership et de l’entrepreneuriat',
      description: 'Les multinationales et organismes internationaux peinent à recruter dans notre Pays parce que la plupart de nos diplômés ne peuvent pas travailler en anglais qui est la langue la plus utilisée dans ces milieux professionnels qui offrent de meilleures opportunités et rémunérations.',
      illustration: "slideshow03.webp"
    }
  ];
  return (
    <Slider infinite={true} autoplay={5000} touchDisabled={true}>
      {slides.map((slide, index) => <div key={index}
        className={`bg-cover `}
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundImage: `url(/slideshow/${slide.illustration})`
        }}>
        <div className='flex flex-col justify-center h-full w-full text-white px-[100px]' style={{
          background: `linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(4,4,27,0.6012780112044818) 35%, rgba(8,28,60,1) 100%)`
        }}>
          <div className='max-w-[700px]'>
            <h2 className='font-semibold text-[40px] leading-[40px]'>{slide.title}</h2>
            <div className="font-light">{slide.description}</div>
          </div>
        </div>
      </div>)}
    </Slider>
  );
}