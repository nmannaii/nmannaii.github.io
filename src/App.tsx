import { MapPinIcon } from "@heroicons/react/24/outline";
import Terminal from "./components/Terminal";
import Skills from "./components/Skills";
import Nav from "./components/Nav";
import { useMousePosition } from "./hooks/useMousePosition";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const mousePosition = useMousePosition();
  return (
    <>
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px,rgba(110, 237, 255, .1),transparent 80%)`,
        }}
      ></div>
      <div className="mx-auto px-1 z-10 relative">
        <Nav />

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
        <Footer/>
      </div>
    </>
  );
}

export default App;
