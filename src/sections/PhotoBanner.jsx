import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Button from "../components/ui/Button";
import Lightbox from "../components/ui/Lightbox";
import milkyWay from "../assets/images/background-2.webp";
import ranuKumbolo from "../assets/images/background.webp";
import lembahLengkehan from "../assets/images/lembah-lengkehan.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

// Tiga foto menempel dalam satu banner, dengan ajakan kontak di atasnya.
export default function PhotoBanner() {
  const { t } = useLanguage();
  const [zoomed, setZoomed] = useState(null);
  const photos = [
    { image: ranuKumbolo, title: "Ranu Kumbolo", caption: t.about.photo_caption, width: 1920, height: 1280 },
    { image: milkyWay, title: "Milky Way", caption: t.photo.caption, width: 1920, height: 1440 },
    { image: lembahLengkehan, title: "Lembah Lengkehan", caption: t.photo.cloud_caption, width: 960, height: 1280, position: "center bottom" },
  ];

  return (
    <section id="photo" aria-labelledby="photo-title" className="px-5 pb-20 md:pb-24">
      <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-3xl bg-neutral-950 text-white">
        <div className="absolute inset-0 grid grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.title} className="relative min-w-0">
              <button
                type="button"
                onClick={() => setZoomed(photo)}
                aria-label={`${t.photo.view_photo}: ${photo.title}`}
                className="group absolute inset-0 block size-full cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
              >
                <img src={photo.image} alt={photo.caption} width={photo.width} height={photo.height} loading="lazy" decoding="async" style={{ objectPosition: photo.position }} className="size-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" />
              </button>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex gap-2 p-3 text-[10px] leading-5 text-white/85 sm:p-6 sm:text-xs">
                <FontAwesomeIcon icon={faCamera} className="mt-1 hidden shrink-0 sm:block" />
                <span className="sm:hidden">{photo.title}</span>
                <span className="hidden sm:inline">{photo.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/30 via-black/55 to-black/70" />
        <div className="pointer-events-none relative z-10 flex min-h-[360px] items-center justify-center px-5 py-24 text-center sm:min-h-[420px] sm:px-10 md:min-h-[460px]">
          <div className="max-w-xl">
            <h2 id="photo-title" className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">{t.photo.title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/90 sm:text-base">{t.photo.text}</p>
            <Button to="/contact" variant="light" className="pointer-events-auto mt-7">{t.photo.cta}</Button>
          </div>
        </div>
      </div>
      <Lightbox image={zoomed?.image} alt={zoomed?.caption} onClose={() => setZoomed(null)} />
    </section>
  );
}
