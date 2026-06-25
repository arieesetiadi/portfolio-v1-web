"use client";

import { Personal } from "@/lib/types";

export default function SectionContact({ personal }: { personal: Personal }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("Form submitted:", data);
  };

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

          <div className="col-sm-12 col-md-8">
            <div className="contact-form padding-30 shadow-dark bg-white rounded">
                {/* TODO
                    - Handle form submission
                    - Store to db (setup prisma first)
                    - Send mail to myself
                    - Handle loading
                */}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control rounded"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control rounded"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control rounded"
                    rows={5}
                    placeholder="Your Message"
                    required></textarea>
                </div>
                <button type="submit" className="btn btn-default">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
