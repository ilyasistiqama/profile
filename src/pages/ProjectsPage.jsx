import Projects from "../sections/Projects";
import usePageMeta from "../hooks/usePageMeta";

export default function ProjectsPage() {
  usePageMeta("portfolio", "/portfolio/");

  return <Projects />;
}
