import { Personal } from '@/lib/types';

export default function SectionHero({ personal }: { personal: Personal }) {
  return (
    <section className="home d-flex light align-items-center" id="home">
      <div className="container">
        <div className="intro">
          <h1 className="mb-2 mt-0">{personal.name}</h1>

          <span>
            <span className="text-rotating">{personal.position}</span>
          </span>

          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a
                href={`https://www.linkedin.com/in/${personal.linkedin}`}
                aria-label="Visit the LinkedIn account"
                target="_blank">
                <img
                  width="20"
                  height="20"
                  src="/images/icons/linkedin-original.svg"
                  alt="LinkedIn icon"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href={`https://wa.me/${personal.whatsapp}`}
                aria-label="Get in touch via Whatsapp"
                target="_blank">
                <img
                  width="20"
                  height="20"
                  src="/images/icons/whatsapp.svg"
                  alt="WhatsApp icon"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href={`https://github.com/${personal.github}`}
                aria-label="Visit the GitHub account"
                target="_blank">
                <img
                  width="20"
                  height="20"
                  src="/images/icons/github-original.svg"
                  alt="Github icon"
                />
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <a className="btn btn-default" href="#contact">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="scroll-down light">
          <a className="mouse-wrapper" href="#about">
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
