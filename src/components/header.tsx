import Link from "next/link";

export default function Header() {
  return (
    <header className="desktop-header-1 light d-flex align-items-start flex-column">
      <div className="site-logo">
        <Link href="/" className="text-decoration-none">
          <h1>Arie.</h1>
        </Link>
      </div>

      <nav>
        <ul className="vertical-menu scrollspy">
          <li className="active">
            <a href="#home" className="nav-link">
              <i className="text-dark"></i>Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              <i className="text-dark"></i>About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              <i className="text-dark"></i>Skills
            </a>
          </li>
          <li>
            <a href="#experiences" className="nav-link">
              <i className="text-dark"></i>Experiences
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              <i className="text-dark"></i>Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              <i className="text-dark"></i>Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="footer">
        <span className="copyright">
          ©<span id="year">2025</span> Arie Setiadi.
        </span>
      </div>
    </header>
  );
}
