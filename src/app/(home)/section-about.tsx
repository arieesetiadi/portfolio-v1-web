import { Personal } from "@/lib/types";

export default function SectionAbout({ personal }: { personal: Personal }) {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About.</h2>

        <div
          className="spacer"
          data-height="60"
          style={{ height: "60px" }}></div>

        <div className="row">
          <div className="col-md-12 triangle-left-md triangle-top-sm bg-white">
            <div className="shadow-dark rounded p-5">
              <div className="row">
                <div className="col-12">
                  <p>{personal.about}</p>

                  {!!personal.resume && (
                    <div className="mt-4">
                      <a
                        className="btn btn-default w-xs-100 d-inline-flex justify-content-center align-items-center gap-2"
                        href={personal.resume}
                        target="_blank">
                        <img
                          width="18"
                          height="18"
                          src="/images/icons/download-white.svg"
                          alt="Download icon"
                        />
                        Resume
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
