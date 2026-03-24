import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-800 bg-black text-white">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="text-lg font-semibold">
          Gao Zhouhao
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-3 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">Aboust</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/awards">Awards</Link>
          {/* <Link href="/contact">Contact</Link> */}
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