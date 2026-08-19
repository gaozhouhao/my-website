import Link from "next/link";

const links = [
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Publications", "/publications"],
  ["Awards", "/awards"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="site-name">
          Gao Zhouhao
          <span>IC Design Portfolio</span>
        </Link>
        <div className="nav-links">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
