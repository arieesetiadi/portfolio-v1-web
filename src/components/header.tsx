"use client";

import Link from "next/link";
import { useActiveSection } from "@/hooks/use-active-section";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experiences", label: "Experiences" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const activeSection = useActiveSection();

  return (
    <header className="desktop-header-1 light d-flex align-items-start flex-column">
      <div className="site-logo">
        <Link href="/" className="text-decoration-none">
          <h1>Arie.</h1>
        </Link>
      </div>

      <nav>
        <ul className="vertical-menu scrollspy">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
            >
              <a href={`#${item.id}`} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer">
        <span className="copyright">
          ©<span id="year">{new Date().getFullYear()}</span> Arie Setiadi.
        </span>
      </div>
    </header>
  );
}
