"use client";

import Image from "next/image";
import PageHeader from "@/components/partials/PageHeader";
import SectionWrapper from "@/components/partials/SectionWrapper";
import { galeries } from "@/lib";

export default function Gallery() {
  // const photos = [
  //   {
  //     src: "/gallery/_0016007.png",
  //     alt: "Campus USCITECH",
  //     caption: "Vue du campus principal"
  //   },
  //   {
  //     src: "/gallery/_0016017.png", 
  //     alt: "Laboratoire informatique",
  //     caption: "Laboratoire informatique moderne"
  //   },
  //   {
  //     src: "/gallery/_0016098.png",
  //     alt: "Étudiants USCITECH",
  //     caption: "Étudiants en session d'étude"
  //   },
  //   {
  //     src: "/gallery/_0016109.png",
  //     alt: "Bibliothèque",
  //     caption: "Notre bibliothèque"
  //   },
  //   {
  //     src: "/gallery/_0016223.png",
  //     alt: "Événement USCITECH",
  //     caption: "Cérémonie de remise des diplômes"
  //   },
  //   {
  //     src: "/gallery/_00162191.png",
  //     alt: "Installation USCITECH",
  //     caption: "Centre de recherche"
  //   }
  // ];

  return (
    <>
      <PageHeader 
        title="Galerie Photos" 
        links={[{ label: 'Galerie', href: '/galerie' }]} 
      />
      <div className={`bg-[url('/gallery/_00162191.png')] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-left p-[40px] relative`} style={{backgroundAttachment: 'fixed'}}>
            <div className="shadow-xl flex flex-col gap-[10px] bg-[rgba(0,0,0,0.5)] text-white backdrop-blur-[4px] p-[40px] min-h-[250px] relative z-10">  
                <h1 className="text-orange text-[35px] font-bold m-0">
                    Découvrez USCITECH en Images
                </h1>
                <p className="mb-[30px] text-[20px]">
                    Explorez notre campus, nos installations et la vie étudiante à travers notre galerie photo.
                </p>
            </div>
        </div>
      <SectionWrapper marginSize="md">
        <div>
          {galeries.map((galery, index) => (
              <div key={index} className="relative group mt-[20px]">
                <div className="border-t-[3px] max-w-[200px] border-primary h-[1px] w-full mb-[15px]"></div>
                <div className="flex flex-col max-w-[600px] mb-[10px]">
                  <p className="text-orange text-[30px] font-bold m-0">{galery.title}</p>
                  <p className="text-[20px] m-0">{galery.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galery.images.map((image, index) => (
                    <div key={index} className="overflow-hidden">
                      <Image
                        src={`/gallery/${image}.jpg`}
                        alt={galery.title}
                        width={500}
                        height={500}
                        style={{borderRadius: '10px'}}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        quality={90}
                      />
                  </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <div className="py-[30px]">
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            
            
            {/* {photos.map((photo, index) => (
              <div key={index} className="relative group">
                <div className="border-primary border-[5px] overflow-hidden aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    quality={90}
                  />
                </div>
                <p className="text-center mt-2 text-sm font-medium">
                  {photo.caption}
                </p>
              </div>
            ))} */}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
