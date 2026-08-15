import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, ImageIcon } from "lucide-react";
import PageHeader from "@/components/partials/PageHeader";
import SectionWrapper from "@/components/partials/SectionWrapper";
import GalleryLightbox from "@/components/sections/gallery/GalleryLightbox";
import { galeries } from "@/lib";

export function generateStaticParams() {
  return galeries.map((galery) => ({ id: galery.id }));
}

export default async function ActivityGalleryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const activity = galeries.find((galery) => galery.id === id);

  if (!activity) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={activity.title}
        links={[
          { label: "Galerie", href: "/galerie" },
          { label: activity.title, href: `/galerie/${activity.id}` },
        ]}
      />
      <SectionWrapper marginSize="md" className="py-[40px]">
        <Link
          href="/galerie"
          className="inline-flex items-center gap-[8px] text-zinc-500 hover:text-[#007bff] font-semibold duration-300 mb-[20px]"
        >
          <ArrowLeft size={18} />
          Retour aux activités
        </Link>

        <div className="max-w-[720px] mb-[30px]">
          <div className="border-t-[3px] max-w-[200px] border-primary mb-[15px]" />
          {activity.content ? (
            activity.content.map((paragraph, index) => (
              <p
                key={index}
                className={`text-[17px] leading-[1.7] text-zinc-600 m-0 ${
                  index === 0 ? "" : "mt-[14px]"
                }`}
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-[18px] text-zinc-600 m-0">
              {activity.description}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-x-[18px] gap-y-[8px] text-zinc-500 text-[14px] mt-[16px]">
            {activity.date && (
              <span className="flex items-center gap-[8px]">
                <Calendar size={16} />
                {activity.date}
              </span>
            )}
            <span className="flex items-center gap-[8px]">
              <ImageIcon size={16} />
              {activity.images.length} photos
            </span>
          </div>
        </div>

        <GalleryLightbox images={activity.images} title={activity.title} />
      </SectionWrapper>
    </>
  );
}
