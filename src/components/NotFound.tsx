import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex items-center flex-col justify-center">
      <img src="/not-found.svg" className="w-[250px] md:w-[400px]"/>
      <div className="mt-5">
        <Link to="/" className="text-3xl font-bold text-primary-text/75">
          Go Home
        </Link>
      </div>
    </div>
  );
}
