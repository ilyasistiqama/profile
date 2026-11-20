import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Dock from "./Dock";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

// Kerangka yang sama untuk semua halaman (dock + footer). Isi halaman dirender di <Outlet />.
export default function Layout() {
  const { pathname, hash } = useLocation();

  // Pindah halaman -> mulai dari atas. Link ke #anchor (mis. /portfolio#project-x) -> scroll ke elemen itu.
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const frame = requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Latar dekoratif: pola titik halus (gaya ada di index.css) */}
      <div aria-hidden="true" className="site-bg" />
      <Dock />
      {/* Ruang untuk dock: di kiri pada laptop/PC/TV (tidak perlu lagi di layar sangat lebar), di bawah pada HP & tablet */}
      <div className="flex grow flex-col pb-20 desk:pb-0 desk:pl-20 2xl:pl-0">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}
