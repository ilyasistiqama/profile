import { useEffect, useRef, useState } from "react";

/**
 * Mengembalikan true saat elemen pertama kali terlihat di layar.
 * Setelah terlihat, nilainya tetap true (animasi hanya jalan sekali).
 *
 * const [ref, inView] = useInView();
 * <div ref={ref} className={inView ? "opacity-100" : "opacity-0"} />
 *
 * rootMargin "300px" = anggap terlihat 300px sebelum benar-benar masuk layar
 * (berguna untuk mulai memuat gambar lebih awal).
 */
export default function useInView(threshold = 0.2, rootMargin = "0px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, inView]);

  return [ref, inView];
}
