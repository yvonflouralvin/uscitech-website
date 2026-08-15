import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Camera, ImageIcon, Layers } from "lucide-react";
import SectionWrapper from "@/components/partials/SectionWrapper";
import { galeries } from "@/lib";

export default function Gallery() {
  const totalActivities = galeries.length;
  const totalPhotos = galeries.reduce(
    (sum, activity) => sum + activity.images.length,
    0
  );

  return (
    <>
      <section className="relative min-h-[440px] flex items-center overflow-hidden pt-[70px]">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/gallery/_MC00096.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_25%]"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <SectionWrapper marginSize="md" className="relative z-10 py-[50px]">
          <div className="max-w-[660px]">
            {/* Fil d'Ariane */}
            <div className="flex items-center gap-[10px] text-[14px] font-medium text-white/70 mb-[24px]">
              <Link href="/" className="hover:text-primary duration-300">
                Accueil
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-primary">Galerie</span>
            </div>

            {/* Badge */}
            <span className="inline-flex items-center gap-[8px] rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-[14px] py-[6px] text-[13px] font-semibold text-primary mb-[20px]">
              <Camera size={15} />
              Galerie USCITECH
            </span>

            <h1 className="text-[38px] md:text-[48px] leading-[1.1] font-bold text-white m-0">
              Découvrez USCITECH <span className="text-primary">en images</span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-white/80 mt-[18px] mb-0">
              Explorez nos activités et cérémonies. Cliquez sur une activité pour
              consulter toute sa galerie photo.
            </p>

            {/* Statistiques */}
            <div className="flex flex-wrap gap-[14px] mt-[30px]">
              <div className="flex items-center gap-[12px] rounded-[12px] bg-white/10 border border-white/15 backdrop-blur-sm px-[18px] py-[12px]">
                <Layers className="text-primary" size={22} />
                <div>
                  <p className="text-[22px] font-bold text-white leading-none m-0">
                    {totalActivities}
                  </p>
                  <p className="text-[13px] text-white/70 m-0">Activités</p>
                </div>
              </div>
              <div className="flex items-center gap-[12px] rounded-[12px] bg-white/10 border border-white/15 backdrop-blur-sm px-[18px] py-[12px]">
                <ImageIcon className="text-primary" size={22} />
                <div>
                  <p className="text-[22px] font-bold text-white leading-none m-0">
                    {totalPhotos}
                  </p>
                  <p className="text-[13px] text-white/70 m-0">Photos</p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>

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
                  src={activity.images[0]}
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
                {activity.date && (
                  <span className="flex items-center gap-[6px] text-[13px] text-zinc-500 mt-[8px]">
                    <Calendar size={14} />
                    {activity.date}
                  </span>
                )}
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
