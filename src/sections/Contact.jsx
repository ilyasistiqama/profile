import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import profile from "../data/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleExclamation, faEnvelope, faGlobe, faLocationDot, faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";

// "_gotcha" = honeypot anti-spam: field tersembunyi yang hanya diisi oleh bot
const EMPTY_FORM = { name: "", email: "", message: "", _gotcha: "" };

const inputClass =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 outline-none transition focus:border-accent focus:ring-3 focus:ring-accent/20";

function Field({ id, label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bot mengisi honeypot -> pura-pura berhasil, tapi pesan tidak dikirim
    if (form._gotcha) {
      setStatus("success");
      setForm(EMPTY_FORM);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(profile.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  };

  const details = [
    { icon: faEnvelope, text: profile.email, href: `mailto:${profile.email}` },
    { icon: faLocationDot, text: profile.location },
    { icon: faGlobe, text: "muis.life", href: profile.website },
  ];

  return (
    <section id="contact" className="px-5 pt-32 pb-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr]">
        {/* Kiri: info kontak */}
        <div className="animate-fade-up">
          <h2 className="text-3xl font-semibold md:text-4xl">{t.contact.title}</h2>
          <p className="mt-4 mb-8 leading-relaxed text-muted">{t.contact.subtitle}</p>

          <ul className="mb-8 space-y-4">
            {details.map((item) => (
              <li key={item.text} className="flex items-center gap-3">
                <FontAwesomeIcon icon={item.icon} className="w-5 text-accent" />
                {item.href ? (
                  <a href={item.href} className="hover:text-accent">{item.text}</a>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-11 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-fg/30 hover:text-fg"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Kanan: form */}
        <form
          onSubmit={handleSubmit}
          className="relative flex animate-fade-up flex-col gap-5 rounded-2xl border border-line bg-surface p-6 md:p-8"
        >
          {/* Honeypot: disembunyikan dari pengunjung dan pembaca layar */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="contact-gotcha">Leave this field empty</label>
            <input id="contact-gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" value={form._gotcha} onChange={handleChange} />
          </div>

          <Field id="contact-name" label={t.contact.name_label}>
            <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder={t.contact.name_placeholder} className={inputClass} />
          </Field>

          <Field id="contact-email" label={t.contact.email_label}>
            <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
          </Field>

          <Field id="contact-message" label={t.contact.message_label}>
            <textarea id="contact-message" name="message" rows={5} required value={form.message} onChange={handleChange} placeholder={t.contact.message_placeholder} className={`${inputClass} resize-y`} />
          </Field>

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-on-accent transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
          >
            <FontAwesomeIcon icon={status === "loading" ? faSpinner : faPaperPlane} spin={status === "loading"} />
            {status === "loading" ? t.contact.sending_btn : t.contact.send_btn}
          </button>

          {status === "success" && (
            <p className="rounded-lg border border-green-600/30 bg-green-600/10 px-4 py-3 text-sm text-green-700 dark:text-green-400">
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2" /> {t.contact.success_msg}
            </p>
          )}
          {status === "error" && (
            <p className="rounded-lg border border-red-600/30 bg-red-600/10 px-4 py-3 text-sm text-red-700 dark:text-red-400">
              <FontAwesomeIcon icon={faCircleExclamation} className="mr-2" /> {t.contact.error_msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
