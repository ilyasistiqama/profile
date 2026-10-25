import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../../context/LanguageContext";
import profile from "../../data/profile";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto bg-neutral-900 py-6 text-center text-sm text-white/85">
      <div className="mb-3 flex justify-center gap-5">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-lg text-white/70 transition-colors hover:text-white"
          >
            <FontAwesomeIcon icon={social.icon} />
          </a>
        ))}
      </div>
      © {new Date().getFullYear()} muis.life • {t.contact.footer}
    </footer>
  );
}
