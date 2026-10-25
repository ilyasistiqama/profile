import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import SplashScreen from "./SplashScreen";

// Kerangka yang sama untuk semua halaman. Isi halaman dirender di <Outlet />.
export default function Layout() {
  const { pathname, hash } = useLocation();

  // Pindah halaman -> mulai dari atas (kecuali link ke #anchor)
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <SplashScreen />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
