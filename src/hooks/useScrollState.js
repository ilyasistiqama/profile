import { useEffect, useState } from "react";

/**
 * Info scroll untuk navbar dan tombol "kembali ke atas".
 * - scrolled: sudah turun dari paling atas
 * - hidden: sedang scroll ke bawah (navbar disembunyikan)
 */
export default function useScrollState() {
  const [state, setState] = useState({ scrollY: 0, scrolled: false, hidden: false });

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      // Abaikan gerakan kecil supaya navbar tidak berkedip
      const goingDown = Math.abs(y - lastY) < 10 ? null : y > lastY;

      setState((prev) => ({
        scrollY: y,
        scrolled: y > 50,
        hidden: goingDown === null ? prev.hidden : goingDown && y > 100,
      }));

      if (goingDown !== null) lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
}
