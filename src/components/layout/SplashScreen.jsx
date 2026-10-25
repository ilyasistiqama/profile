import { useEffect, useState } from "react";

const NAME = "MUH. ILYAS ISTIQAMA";
const SHOW_MS = 1800; // lama splash tampil sebelum menghilang
const EXIT_MS = 500; // lama animasi menghilang
const STORAGE_KEY = "splash-seen";

// Splash cukup tampil sekali per sesi (tab browser), supaya tidak mengganggu saat reload.
function alreadySeen() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export default function SplashScreen() {
  // "show" -> "exit" (animasi keluar) -> "done" (dihapus dari halaman)
  const [stage, setStage] = useState(() => (alreadySeen() ? "done" : "show"));

  useEffect(() => {
    if (stage === "done") return;

    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // abaikan, splash tetap jalan
    }

    document.body.style.overflow = "hidden";
    const exitTimer = setTimeout(() => setStage("exit"), SHOW_MS);
    const doneTimer = setTimeout(() => setStage("done"), SHOW_MS + EXIT_MS);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- cukup dijalankan sekali saat mount
  }, []);

  if (stage === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d1117] px-5 text-white transition-all duration-500 ${
        stage === "exit" ? "scale-105 opacity-0" : "opacity-100"
      }`}
    >
      <p className="text-center text-2xl font-extrabold tracking-[0.2em] md:text-4xl">
        {NAME.split("").map((char, i) => (
          <span key={i} className="inline-block animate-fade-up" style={{ animationDelay: `${i * 40}ms` }}>
            {char === " " ? " " : char}
          </span>
        ))}
      </p>

      <p
        className="mt-4 animate-fade-up text-xs tracking-[0.35em] text-[#33c4cb] uppercase md:text-sm"
        style={{ animationDelay: "700ms" }}
      >
        Fullstack Web Developer
      </p>

      <div className="absolute bottom-[12%] h-0.5 w-48 overflow-hidden rounded-full bg-white/10">
        <div className="h-full animate-splash-progress bg-[#33c4cb]" />
      </div>
    </div>
  );
}
