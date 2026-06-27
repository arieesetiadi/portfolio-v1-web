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
            <table className="table-borderless table">
              <tbody>
                {personal.email && (
                  <tr>
                    <td>
                      <img
                        width="18"
                        height="18"
                        src="/images/icons/envelope.svg"
                        alt="Email icon"
                      />
                    </td>
                    <td>
                      <a
                        className="text-dark text-decoration-none"
                        href={`mailto:${personal.email}`}
                        target="_blank">
                        {personal.email}
                      </a>
                    </td>
                  </tr>
                )}

                {personal.whatsapp && (
                  <tr>
                    <td>
                      <img
                        width="18"
                        height="18"
                        src="/images/icons/whatsapp.svg"
                        alt="Whatsapp icon"
                      />
                    </td>
                    <td>
                      <a
                        className="text-dark text-decoration-none"
                        href={`https://wa.me/${personal.whatsapp}`}
                        target="_blank">
                        {personal.whatsapp}
                      </a>
                    </td>
                  </tr>
                )}

                {personal.instagram && (
                  <tr>
                    <td>
                      <img
                        width="18"
                        height="18"
                        src="/images/icons/instagram.svg"
                        alt="Instagram icon"
                      />
                    </td>
                    <td>
                      <a
                        className="text-dark text-decoration-none"
                        href={`https://www.instagram.com/${personal.instagram}`}
                        target="_blank">
                        {personal.instagram}
                      </a>
                    </td>
                  </tr>
                )}

                {personal.github && (
                  <tr>
                    <td>
                      <img
                        width="18"
                        height="18"
                        src="/images/icons/github-original.svg"
                        alt="Github icon"
                      />
                    </td>
                    <td>
                      <a
                        className="text-dark text-decoration-none"
                        href={`https://github.com/${personal.github}`}
                        target="blank">
                        {personal.github}
                      </a>
                    </td>
                  </tr>
                )}

                {personal.codewars && (
                  <tr>
                    <td>
                      <img
                        width="18"
                        height="18"
                        src="/images/icons/code.svg"
                        alt="Codewars icon"
                      />
                    </td>
                    <td>
                      <a
                        className="text-dark text-decoration-none"
                        href={`https://www.codewars.com/users/${personal.codewars}`}
                        target="blank">
                        Codewars ({personal.codewars})
                      </a>
                    </td>
                  </tr>
                )}

                {personal.linkedin && (
                  <tr>
                    <td>
                      <img
                        width="18"
                        height="18"
                        src="/images/icons/linkedin-original.svg"
                        alt="Linkedin icon"
                      />
                    </td>
                    <td>
                      <a
                        className="text-dark text-decoration-none"
                        href={`https://www.linkedin.com/in/${personal.linkedin}`}
                        target="blank">
                        {personal.linkedin}
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
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
