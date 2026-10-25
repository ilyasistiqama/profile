import Contact from "../sections/Contact";
import usePageMeta from "../hooks/usePageMeta";

export default function ContactPage() {
  usePageMeta("contact", "/contact/");

  return <Contact />;
}
