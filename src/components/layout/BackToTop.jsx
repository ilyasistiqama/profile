import { useLanguage } from "../../context/LanguageContext";
import useScrollState from "../../hooks/useScrollState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BackToTop() {
  const { t } = useLanguage();
  const { scrollY } = useScrollState();

  if (scrollY < 120) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t.nav.back_to_top}
      className="fixed right-6 bottom-6 z-40 flex size-12 items-center justify-center rounded-full bg-accent text-on-accent shadow-lg transition-colors hover:bg-accent-hover"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
