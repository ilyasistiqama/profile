import Intro from "../sections/Intro";
import About from "../sections/About";
import Stats from "../sections/Stats";
import Skills from "../sections/Skills";
import PhotoBanner from "../sections/PhotoBanner";
import usePageMeta from "../hooks/usePageMeta";

export default function HomePage() {
  usePageMeta("home", "/");

  return (
    <>
      <Intro />
      <Stats />
      <About />
      <Skills />
      <PhotoBanner />
    </>
  );
}
