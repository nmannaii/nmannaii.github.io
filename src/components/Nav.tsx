import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const link = useRef<HTMLAnchorElement>(null);
  const location = useLocation();
  const [activeLinkStyle, setActiveLinkStyle] = useState({
    height: 0,
    width: 0,
    top: 0,
    left: 0,
  });
  useEffect(() => {
    if (link.current) {
      setActiveLinkStyle({
        height: link.current.offsetHeight,
        width: link.current.offsetWidth,
        top: link.current.offsetTop,
        left: link.current.offsetLeft,
      });
    }
  }, [location]);
  return (
    <div className="flex justify-center py-5">
      <nav className="flex justify-center relative text-white items-center gap-4 py-1 px-1 text-sm font-medium bg-lighter-background rounded-2xl">
        <div
          className="absolute bg-background rounded-2xl transition-all duration-150 ease-in z-0"
          style={{ ...activeLinkStyle }}
        ></div>
        <Link
          to="/"
          className="relative z-10 px-2 py-1"
          ref={location.pathname === "/" ? link : null}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="relative z-10 px-2 py-1"
          ref={location.pathname === "/about" ? link : null}
        >
          About
        </Link>
        <a href="/resume/Najmedine-Mannaii-EN.pdf" target="_blank" className="px-2 py-1 flex">
          Resume <ArrowDownTrayIcon className="size-5 ml-1"/>
        </a>
      </nav>
    </div>
  );
}
