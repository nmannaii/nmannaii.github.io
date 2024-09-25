import { MapPinIcon } from "@heroicons/react/24/outline";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Terminal from "../components/Terminal";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="text-primary-text">
      <div className="text-center">
        <h1 className="bg-gradient-to-r mb-2 from-secondary-text/80 to-primary-text/80 bg-clip-text text-transparent text-6xl font-bold inline-block leading-tight">
          Najmedine Mannaii
        </h1>
        <h2 className="text-xl mb-2 flex justify-center font-medium text-primary-text/75">
          <MapPinIcon className="inline-block size-6 mr-1" /> Tunis, Tunisia
        </h2>
        <h2 className="text-xl mb-2 text-primary-text/75">
          Crafting Elegant and Robust Software Solutions
        </h2>
      </div>
      <Terminal />
      <Experience />
      <Education />
      <Projects />
      <Skills />
    </main>
  );
}
