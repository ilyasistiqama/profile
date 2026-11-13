import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import profile from "../data/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleCheck, faCircleExclamation, faCopy, faEnvelope, faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";

// "_gotcha" = honeypot anti-spam: field tersembunyi yang hanya diisi oleh bot
// "topic" = jenis pesan (lowongan / freelance / lainnya), ikut terkirim ke email
const EMPTY_FORM = { topic: "job", name: "", email: "", message: "", _gotcha: "" };
const TOPICS = ["job", "freelance", "other"];

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
  const [copied, setCopied] = useState(false);

  // Salin alamat email (mailto sering tidak membuka apa-apa di desktop tanpa aplikasi email)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

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
        // _subject = judul email dari Formspree, diberi label topik supaya mudah dipilah
        body: JSON.stringify({
          ...form,
          topic: t.contact.topics[form.topic].label,
          _subject: `[${t.contact.topics[form.topic].label}] ${t.contact.subject_prefix}`,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ ...EMPTY_FORM, topic: form.topic });
    } catch {
      setStatus("error");
    }
  };

  const availability = [
    { label: t.contact.open_for_label, value: t.contact.open_for_value, highlight: true },
    { label: t.contact.mode_label, value: t.intro.work_mode },
    ...t.intro.work_areas.map((area, i) => ({
      label: i === 0 ? t.contact.area_label : "",
      value: `${area.region}: ${area.cities}`,
    })),
    { label: t.contact.reply_label, value: t.contact.reply_value },
  ];

  return (
    <section id="contact" className="px-5 pt-12 pb-20 md:pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr]">
        {/* Kiri: email + ketersediaan */}
        <div className="animate-fade-up">
          <h1 className="text-3xl font-semibold md:text-4xl">{t.contact.title}</h1>
          <p className="mt-4 mb-8 leading-relaxed text-muted">{t.contact.subtitle}</p>

          {/* Kartu email dengan tombol salin */}
          <div className="rounded-2xl border border-line bg-surface p-5">
            <p className="flex items-center gap-2 text-xs text-muted">
              <FontAwesomeIcon icon={faEnvelope} className="text-accent" /> {t.contact.email_card}
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <a href={`mailto:${profile.email}`} className="min-w-0 break-all text-lg font-semibold hover:text-accent">
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${
                  copied ? "border-accent/30 bg-accent/10 text-accent" : "border-line text-muted hover:border-fg/30 hover:text-fg"
                }`}
              >
                <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
              </button>
            </div>
          </div>

          {/* Ketersediaan, gaya tabel mono seperti "Selected work" */}
          <div className="mt-6">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              {t.contact.availability_title}
            </h2>
            <dl className="divide-y divide-line border-y border-line font-mono text-xs leading-6 sm:text-sm">
              {availability.map((row) => (
                <div key={row.value} className="grid grid-cols-[110px_1fr] gap-3 py-2 sm:grid-cols-[130px_1fr]">
                  <dt className="text-muted">{row.label}</dt>
                  <dd className={row.highlight ? "font-medium text-accent" : "text-fg"}>{row.value}</dd>
                </div>
              ))}
            </dl>
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

          {/* Pilihan topik: menentukan placeholder pesan dan judul email */}
          <fieldset>
            <legend className="mb-2 text-sm font-medium">{t.contact.topic_label}</legend>
            <div className="flex flex-wrap gap-2">
              {TOPICS.map((topic) => (
                <label
                  key={topic}
                  className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${
                    form.topic === topic
                      ? "border-accent bg-accent/10 font-medium text-accent"
                      : "border-line text-muted hover:border-fg/30 hover:text-fg"
                  }`}
                >
                  <input type="radio" name="topic" value={topic} checked={form.topic === topic} onChange={handleChange} className="sr-only" />
                  {t.contact.topics[topic].label}
                </label>
              ))}
            </div>
          </fieldset>

          <Field id="contact-name" label={t.contact.name_label}>
            <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder={t.contact.name_placeholder} className={inputClass} />
          </Field>

          <Field id="contact-email" label={t.contact.email_label}>
            <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
          </Field>

          <Field id="contact-message" label={t.contact.message_label}>
            <textarea id="contact-message" name="message" rows={5} required value={form.message} onChange={handleChange} placeholder={t.contact.topics[form.topic].placeholder} className={`${inputClass} resize-y`} />
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
