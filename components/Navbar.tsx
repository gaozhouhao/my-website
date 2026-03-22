import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-800 bg-black text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Gao Zhouhao
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/awards">Awards</Link>
          <Link href="/contact">Contact</Link>
          <a
            href="/cv.pdf"
            className="rounded border border-white px-3 py-1"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}