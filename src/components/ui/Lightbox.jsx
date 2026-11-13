import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Menampilkan gambar layar penuh. Tutup dengan klik di luar gambar atau tombol Esc.
// Mode galeri: kirim `images` + `index` + `onNavigate` agar bisa geser kiri/kanan
// (tombol panah, tombol ← → di keyboard, atau swipe di HP) tanpa menutup lightbox.
export default function Lightbox({ image, images, index = 0, onNavigate, alt = "", onClose }) {
  const isGallery = Array.isArray(images) && images.length > 0;
  const total = isGallery ? images.length : 0;
  const current = isGallery ? images[index] : image;
  const canNavigate = isGallery && total > 1 && typeof onNavigate === "function";
  const touchStartX = useRef(null);

  const prev = () => onNavigate((index - 1 + total) % total);
  const next = () => onNavigate((index + 1) % total);

  useEffect(() => {
    if (!current) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      else if (canNavigate && e.key === "ArrowLeft") onNavigate((index - 1 + total) % total);
      else if (canNavigate && e.key === "ArrowRight") onNavigate((index + 1) % total);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [current, onClose, canNavigate, onNavigate, index, total]);

  if (!current) return null;

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (!canNavigate || touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx > 0) prev();
    else next();
  };

  const stop = (e) => e.stopPropagation();
  const arrowClass =
    "absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 md:size-12";

  // Dirender langsung ke <body> lewat portal: kalau tetap di dalam section yang punya
  // transform/animasi, z-index-nya terkurung dan navbar bisa tembus di atas lightbox.
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 md:px-20"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-modal="true"
    >
      <button type="button" className="absolute top-5 right-6 z-10 text-4xl text-white" aria-label="Close">
        ×
      </button>

      <img
        src={current}
        alt={isGallery && total > 1 ? `${alt} ${index + 1}` : alt}
        onClick={stop}
        className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
      />

      {canNavigate && (
        <>
          <button
            type="button"
            onClick={(e) => {
              stop(e);
              prev();
            }}
            className={`${arrowClass} left-3 md:left-6`}
            aria-label="Previous image"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              stop(e);
              next();
            }}
            className={`${arrowClass} right-3 md:right-6`}
            aria-label="Next image"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <div
            onClick={stop}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-sm text-white backdrop-blur"
          >
            {index + 1} / {total}
          </div>
        </>
      )}
    </div>,
    document.body
  );
}
