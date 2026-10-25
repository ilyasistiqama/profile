import { useEffect } from "react";

// Menampilkan gambar layar penuh. Tutup dengan klik di mana saja atau tombol Esc.
export default function Lightbox({ image, alt = "", onClose }) {
  useEffect(() => {
    if (!image) return;

    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button type="button" className="absolute top-5 right-6 text-4xl text-white" aria-label="Close">
        ×
      </button>
      <img src={image} alt={alt} className="max-h-[85vh] max-w-full rounded-xl shadow-2xl" />
    </div>
  );
}
