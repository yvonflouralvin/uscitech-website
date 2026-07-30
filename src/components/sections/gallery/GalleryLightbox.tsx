"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React from "react";

type GalleryLightboxProps = {
  images: string[];
  title: string;
};

export default function GalleryLightbox({ images, title }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const isOpen = activeIndex !== null;

  const close = React.useCallback(() => setActiveIndex(null), []);
  const next = React.useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prev = React.useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-[10px] cursor-pointer bg-[#F0EFEA]"
          >
            <Image
              src={`/gallery/${image}.jpg`}
              alt={`${title} — photo ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute top-5 right-5 z-10 text-white/80 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Image précédente"
            className="absolute left-3 md:left-6 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2 text-white transition-colors"
          >
            <ChevronLeft size={30} />
          </button>

          <div
            className="relative w-[92vw] h-[80vh] max-w-[1100px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/gallery/${images[activeIndex!]}.jpg`}
              alt={`${title} — photo ${activeIndex! + 1}`}
              fill
              sizes="92vw"
              className="object-contain"
              quality={95}
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Image suivante"
            className="absolute right-3 md:right-6 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2 text-white transition-colors"
          >
            <ChevronRight size={30} />
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {activeIndex! + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
