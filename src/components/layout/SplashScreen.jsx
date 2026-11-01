import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import profile from "../../data/profile";
import "./SplashScreen.css";

const SHOW_MS = 3000;
const EXIT_MS = 1000;
const FONT_WAIT_MS = 1500;

export default function SplashScreen() {
  // "show" -> "exit" (animasi keluar) -> "done" (dihapus dari halaman)
  // Tampil pada setiap reload; navigasi antarhalaman tidak me-remount Layout.
  const [fontMode, setFontMode] = useState(() => typeof document !== "undefined" && document.fonts?.load ? "pending" : "fallback");
  const [stage, setStage] = useState(() => typeof document === "undefined" ? "done" : document.fonts?.load ? "prepare" : "show");
  const visible = stage !== "done";

  useEffect(() => {
    if (!document.fonts?.load) return;
    let settled = false;
    const finish = (mode) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      setFontMode(mode);
      setStage("show");
    };
    // Saat font lambat/gagal, kunci font cadangan sepanjang splash agar tidak swap di tengah.
    const timeout = setTimeout(() => finish("fallback"), FONT_WAIT_MS);
    Promise.all([
      document.fonts.load('600 48px "Plus Jakarta Sans"', profile.displayName),
      document.fonts.load('400 12px "JetBrains Mono"', `${profile.role} ${profile.location}`),
    ]).then(
      (faces) => finish(faces.every((loaded) => loaded.length > 0) ? "web" : "fallback"),
      () => finish("fallback"),
    );
    return () => { settled = true; clearTimeout(timeout); };
  }, []);

  useEffect(() => {
    if (stage === "done" || stage === "prepare") return;

    // Timer keluar baru dimulai setelah React menerapkan tahap exit ke DOM.
    // transitionend menutup splash; timer exit menjadi cadangan bila event tidak datang.
    const timer = setTimeout(
      () => setStage(stage === "show" ? "exit" : "done"),
      stage === "show" ? SHOW_MS : EXIT_MS + 100,
    );
    return () => clearTimeout(timer);
  }, [stage]);

  // Kunci scroll selama splash tampil. Komponen tidak di-unmount saat "done"
  // (hanya return null), jadi kuncinya harus dilepas saat `visible` berubah.
  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Jaring pengaman: lepas kunci lagi walau karena satu dan lain hal
    // state splash tidak pernah sampai "done" (mis. timer di-throttle browser).
    const unlockTimer = setTimeout(() => {
      document.body.style.overflow = previousOverflow;
    }, FONT_WAIT_MS + SHOW_MS + EXIT_MS + 1000);

    return () => {
      clearTimeout(unlockTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  if (stage === "done") return null;

  return createPortal(
    <div
      aria-hidden="true"
      className="portfolio-splash"
      data-stage={stage}
      data-font={fontMode}
      onTransitionEnd={(event) => {
        if (stage === "exit" && event.target === event.currentTarget && event.propertyName === "opacity") {
          setStage("done");
        }
      }}
      style={{
        "--splash-exit-duration": `${EXIT_MS}ms`,
        "--splash-font-sans": fontMode === "web" ? '"Plus Jakarta Sans", sans-serif' : "system-ui, sans-serif",
        "--splash-font-mono": fontMode === "web" ? '"JetBrains Mono", monospace' : "ui-monospace, monospace",
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "grid",
        placeItems: "center",
        padding: 24,
        overflow: "hidden",
        backgroundColor: "var(--bg, #fafafa)",
        color: "var(--fg, #18181b)",
        opacity: stage === "exit" ? 0 : 1,
      }}
    >
      <div className="portfolio-splash__grid" />
      <div className="portfolio-splash__content">
        <div className="portfolio-splash__logo">I</div>
        <p className="portfolio-splash__name" style={{ visibility: stage === "prepare" ? "hidden" : "visible" }}>
          {profile.displayName}<span className="portfolio-splash__dot">.</span>
        </p>
        <p className="portfolio-splash__role" style={{ visibility: stage === "prepare" ? "hidden" : "visible" }}>{profile.role}</p>
        <div className="portfolio-splash__track">
          <div className="portfolio-splash__progress" />
        </div>
      </div>

      <div className="portfolio-splash__footer" style={{ visibility: stage === "prepare" ? "hidden" : "visible" }}>
        <span>{profile.location}</span>
      </div>
    </div>,
    document.body,
  );
}
