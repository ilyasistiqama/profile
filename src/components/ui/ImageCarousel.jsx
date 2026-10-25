import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Slider gambar sederhana: panah kiri/kanan (muncul saat hover di desktop) + titik indikator
export default function ImageCarousel({ images, alt, onImageClick }) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const arrowClass =
    "absolute top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition-opacity hover:bg-black/75 md:opacity-0 md:group-hover:opacity-100";

  return (
    // Rasio 2:1 mengikuti ukuran screenshot proyek, jadi gambar tidak terpotong banyak
    <div className="group relative aspect-[2/1] overflow-hidden border-b border-line bg-bg-alt">
      <img
        src={images[index]}
        alt={`${alt} ${index + 1}`}
        onClick={() => onImageClick(images[index])}
        loading="lazy"
        decoding="async"
        className="size-full cursor-zoom-in object-cover object-top"
      />

      {total > 1 && (
        <>
          <button type="button" onClick={prev} className={`${arrowClass} left-2`} aria-label="Previous image">
            <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
          </button>
          <button type="button" onClick={next} className={`${arrowClass} right-2`} aria-label="Next image">
            <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
          </button>

          <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
            {images.map((image, i) => (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Image ${i + 1}`}
                className={`h-1.5 rounded-full shadow transition-all ${i === index ? "w-4 bg-white" : "w-1.5 bg-white/60"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
