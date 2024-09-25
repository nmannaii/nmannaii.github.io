import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { useMousePosition } from "./hooks/useMousePosition";
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
      <div className="mx-auto px-1 z-10 relative min-h-screen flex flex-col justify-between">
        <Nav />
        <div className="flex-1">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
