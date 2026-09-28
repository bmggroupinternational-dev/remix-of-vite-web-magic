import { Link } from "@tanstack/react-router";
import { navLinks } from "./nav";

export function Footer() {
  return (
    <footer className="surface-deep">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">
              Rafiki Al Nabeel
            </p>
            <p className="eyebrow mt-2">Inspiring Growth</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              A maritime asset ownership and investment company focused on acquiring, owning
              and commercially deploying vessels through structured charter and hire
              arrangements.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Corporate</p>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/70">
              <li>Rafiki Al Nabeel Limited</li>
              <li>Incorporated 18 April 2024</li>
              <li>RAK ICC, United Arab Emirates</li>
              <li>Dubai Investment Park, Dubai</li>
              <li>DIFC correspondence address</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-navy-foreground/15 pt-6 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rafiki Al Nabeel Limited. All rights reserved.</p>
          <p>Corporate information only. Not an offer of securities or investment advice.</p>
        </div>
      </div>
    </footer>
  );
}
