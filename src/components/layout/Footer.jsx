import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../../context/LanguageContext";
import profile from "../../data/profile";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-line px-5 py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p>
          © {new Date().getFullYear()} <span className="font-mono">muis.life</span> · {t.contact.footer}
        </p>
        <div className="flex gap-5">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-base transition-colors hover:text-fg"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
