import { useLanguage } from "../context/LanguageContext";
import Button from "../components/ui/Button";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFoundPage() {
  usePageMeta("not_found");
  const { t } = useLanguage();

  return (
    <section className="flex min-h-screen items-center justify-center px-5 pt-28 pb-10 text-center">
      <div className="max-w-md animate-fade-up">
        <p className="text-7xl font-extrabold text-accent md:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold">{t.not_found.title}</h1>
        <p className="mt-2 mb-7 text-muted">{t.not_found.description}</p>
        <Button to="/">{t.not_found.back}</Button>
      </div>
    </section>
  );
}
