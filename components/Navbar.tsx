import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-800 bg-black text-white">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-lg font-semibold leading-tight">
          Gao Zhouhao
        </Link>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:justify-end">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/awards">Awards</Link>
          <a
            href="/CV_Gao_Zhouhao.pdf"
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