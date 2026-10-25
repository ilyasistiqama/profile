import Hero from "../sections/Hero";
import About from "../sections/About";
import Stats from "../sections/Stats";
import Skills from "../sections/Skills";
import PhotoBanner from "../sections/PhotoBanner";
import usePageMeta from "../hooks/usePageMeta";

export default function HomePage() {
  usePageMeta("home", "/");

  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Skills />
      <PhotoBanner />
    </>
  );
}
