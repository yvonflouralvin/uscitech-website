import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";
import PageHeader from "@/components/partials/PageHeader";
import SectionWrapper from "@/components/partials/SectionWrapper";
import { galeries } from "@/lib";

export default function Gallery() {
  return (
    <>
      <PageHeader
        title="Galerie d'activités"
        links={[{ label: "Galerie", href: "/galerie" }]}
      />
      <div
        className="bg-[url('/gallery/_00162191.png')] bg-cover bg-center bg-no-repeat flex items-center justify-left p-[40px] relative"
        style={{ backgroundAttachment: "fixed" }}
      >
        <div className="shadow-xl flex flex-col gap-[10px] bg-[rgba(0,0,0,0.5)] text-white backdrop-blur-[4px] p-[40px] min-h-[250px] relative z-10">
          <h1 className="text-orange text-[35px] font-bold m-0">
            Découvrez USCITECH en Images
          </h1>
          <p className="mb-[30px] text-[20px]">
            Explorez nos activités et cérémonies. Cliquez sur une activité pour
            consulter toute sa galerie photo.
          </p>
        </div>
      </div>

      <SectionWrapper marginSize="md" className="py-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galeries.map((activity) => (
            <Link
              key={activity.id}
              href={`/galerie/${activity.id}`}
              className="group flex flex-col rounded-[14px] overflow-hidden bg-white shadow-md hover:shadow-xl duration-300 border border-zinc-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`/gallery/${activity.images[0]}.jpg`}
                  alt={activity.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                <span className="absolute top-3 right-3 flex items-center gap-[6px] rounded-full bg-black/60 text-white text-[12px] font-medium px-[10px] py-[4px] backdrop-blur-sm">
                  <ImageIcon size={13} />
                  {activity.images.length}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-[20px]">
                <div className="border-t-[3px] max-w-[60px] border-primary mb-[12px]" />
                <h2 className="text-[22px] font-bold m-0 group-hover:text-[#007bff] duration-300">
                  {activity.title}
                </h2>
                <p className="text-[15px] text-zinc-600 mt-[8px] mb-[16px] line-clamp-3">
                  {activity.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-[6px] text-[#007bff] font-semibold text-[14px]">
                  Voir la galerie
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 duration-300"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
