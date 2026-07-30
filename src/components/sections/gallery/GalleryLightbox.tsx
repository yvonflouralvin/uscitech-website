"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React from "react";

type GalleryLightboxProps = {
  images: string[];
  title: string;
};

// Nombre d'images ajoutées à chaque chargement progressif
const BATCH = 12;

// Motif de mosaïque : certaines images sont plus grandes pour rythmer la grille
function tileSpan(index: number): string {
  const p = index % 10;
  if (p === 0) return "col-span-2 row-span-2"; // grande (2x2)
  if (p === 3) return "row-span-2"; // haute (1x2)
  if (p === 6) return "md:col-span-2"; // large (2x1) sur écrans moyens+
  return "";
}

type TileProps = {
  image: string;
  index: number;
  title: string;
  onOpen: () => void;
};

function GalleryTile({ image, index, title, onOpen }: TileProps) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Agrandir la photo ${index + 1}`}
      className={`group relative overflow-hidden rounded-[10px] cursor-pointer bg-[#EDEBE4] ${tileSpan(index)}`}
    >
      <Image
        src={image}
        alt={`${title} — photo ${index + 1}`}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
          loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105"
        }`}
        quality={80}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </button>
  );
}

export default function GalleryLightbox({ images, title }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [visible, setVisible] = React.useState(() =>
    Math.min(BATCH, images.length)
  );
  const sentinelRef = React.useRef<HTMLDivElement>(null);

  const isOpen = activeIndex !== null;
  const hasMore = visible < images.length;

  // Chargement progressif : révèle un nouveau lot à l'approche du bas de page
  React.useEffect(() => {
    if (!hasMore) return;
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible((v) => Math.min(v + BATCH, images.length));
        }
      },
      { rootMargin: "600px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, images.length]);

  const close = React.useCallback(() => setActiveIndex(null), []);
  const next = React.useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prev = React.useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? i : (i - 1 + images.length) % images.length
      ),
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] md:auto-rows-[190px] grid-flow-row-dense gap-3 md:gap-4">
        {images.slice(0, visible).map((image, index) => (
          <GalleryTile
            key={image}
            image={image}
            index={index}
            title={title}
            onOpen={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {hasMore && (
        <div
          ref={sentinelRef}
          className="flex items-center justify-center gap-[10px] py-[36px] text-zinc-400 text-[14px]"
        >
          <span className="h-[18px] w-[18px] rounded-full border-2 border-zinc-300 border-t-primary animate-spin" />
          Chargement des photos…
        </div>
      )}

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
              src={images[activeIndex!]}
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
