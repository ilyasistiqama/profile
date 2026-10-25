import { useLanguage } from "../context/LanguageContext";
import Button from "../components/ui/Button";
import useInView from "../hooks/useInView";
import milkyWay from "../assets/images/background-2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

// Foto Milky Way hasil jepretan sendiri + ajakan menghubungi
export default function PhotoBanner() {
  const { t } = useLanguage();
  // Foto baru dimuat saat section ini hampir terlihat di layar (lazy load)
  const [ref, inView] = useInView(0, "300px");

  return (
    <section
      ref={ref}
      id="photo"
      // bg-fixed (efek parallax) hanya di desktop, karena tidak jalan baik di iOS
      className="relative flex min-h-[60vh] items-center bg-neutral-950 bg-cover bg-center bg-scroll px-5 py-24 text-center text-white md:min-h-[70vh] md:bg-fixed"
      style={{
        backgroundImage: inView
          ? `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${milkyWay})`
          : undefined,
      }}
    >
      <div className="mx-auto max-w-xl">
        <h2 className="text-3xl font-bold md:text-4xl">{t.photo.title}</h2>
        <p className="mt-3 mb-7 text-white/80">{t.photo.text}</p>
        <Button to="/contact" variant="light">{t.photo.cta}</Button>
      </div>

      <span className="absolute inset-x-0 bottom-4 text-center text-xs text-white/65 md:right-5 md:left-auto">
        <FontAwesomeIcon icon={faCamera} className="mr-1" /> {t.photo.caption}
      </span>
    </section>
  );
}
