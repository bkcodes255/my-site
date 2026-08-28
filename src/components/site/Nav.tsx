const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-heading text-sm font-bold tracking-tight">
          BRIAN KILEO
        </a>
        <ul className="flex items-center gap-5 font-mono text-xs tracking-wide text-ink-soft uppercase">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative pb-0.5 transition-colors hover:text-verified focus-visible:text-verified focus-visible:outline-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-verified after:transition-[width] after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
