import Experience from "../sections/Experience";
import usePageMeta from "../hooks/usePageMeta";

export default function ExperiencePage() {
  usePageMeta("experience", "/experience/");

  return <Experience />;
}
