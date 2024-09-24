export default function Nav() {
  return (
    <div className="flex justify-center py-5">
      <nav className="flex justify-center text-white items-center gap-4 py-1 px-1 text-sm font-medium bg-lighter-background rounded-2xl">
        <a href="#" className="bg-background rounded-2xl px-2 py-1">
          Home
        </a>
        <a href="#" className="rounded-2xl px-2 py-1">
          About
        </a>
        <a href="#" className="rounded-2xl px-2 py-1">
          Contact
        </a>
        <a href="#" className="rounded-2xl px-2 py-1">
          Resume
        </a>
      </nav>
    </div>
  );
}
