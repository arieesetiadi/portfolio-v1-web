import { Personal } from "@/lib/types";

export default function SectionContact({ personal }: { personal: Personal }) {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact.</h2>

        <div
          className="spacer"
          data-height="60"
          style={{ height: "60px" }}></div>

        <div className="row">
          <div className="col-sm-12 col-md-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
