"use client";

import { Personal } from "@/lib/types";
import { ContactForm } from "@/components/contact-form";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import ContactMapView from "@/components/contact-mapview";

export default function SectionContact({ personal }: { personal: Personal }) {
  return (
    <section id="contact">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="section-title">Contact.</h2>
        </AnimateOnScroll>

        <div
          className="spacer"
          data-height="60"
          style={{ height: "60px" }}></div>

        <div className="row">
          <AnimateOnScroll className="col-sm-12 col-md-4">
            <address className="mb-0" style={{ fontStyle: "normal" }}>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                {personal.email && (
                  <li className="d-flex align-items-center gap-3">
                    <img
                      width="18"
                      height="18"
                      src="/images/icons/envelope.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <a
                      className="text-dark text-decoration-none"
                      href={`mailto:${personal.email}`}>
                      {personal.email}
                    </a>
                  </li>
                )}

                {personal.whatsapp && (
                  <li className="d-flex align-items-center gap-3">
                    <img
                      width="18"
                      height="18"
                      src="/images/icons/whatsapp.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <a
                      className="text-dark text-decoration-none"
                      href={`https://wa.me/${personal.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      {personal.whatsapp}
                    </a>
                  </li>
                )}

                {personal.instagram && (
                  <li className="d-flex align-items-center gap-3">
                    <img
                      width="18"
                      height="18"
                      src="/images/icons/instagram.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <a
                      className="text-dark text-decoration-none"
                      href={`https://www.instagram.com/${personal.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      {personal.instagram}
                    </a>
                  </li>
                )}

                {personal.github && (
                  <li className="d-flex align-items-center gap-3">
                    <img
                      width="18"
                      height="18"
                      src="/images/icons/github-original.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <a
                      className="text-dark text-decoration-none"
                      href={`https://github.com/${personal.github}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      {personal.github}
                    </a>
                  </li>
                )}

                {personal.codewars && (
                  <li className="d-flex align-items-center gap-3">
                    <img
                      width="18"
                      height="18"
                      src="/images/icons/code.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <a
                      className="text-dark text-decoration-none"
                      href={`https://www.codewars.com/users/${personal.codewars}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      Codewars ({personal.codewars})
                    </a>
                  </li>
                )}

                {personal.linkedin && (
                  <li className="d-flex align-items-center gap-3">
                    <img
                      width="18"
                      height="18"
                      src="/images/icons/linkedin-original.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <a
                      className="text-dark text-decoration-none"
                      href={`https://www.linkedin.com/in/${personal.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      {personal.linkedin}
                    </a>
                  </li>
                )}
              </ul>
            </address>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15} className="col-sm-12 col-md-8">
            <ContactForm />
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2} className="col-12">
            <div style={{ padding: "50px 0" }}>
              <hr style={{ borderColor: "rgba(0, 0, 0, 0.05)" }} />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3} className="col-12">
            <ContactMapView />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
