"use client";

import { Experience } from "@/lib/types";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export default function SectionExperiences({
  experiences,
}: {
  experiences: Experience[];
}) {
  const educationalExperiences = experiences.filter(
    (experience) => experience.type == "educational",
  );

  const workExperiences = experiences.filter(
    (experience) => experience.type == "work",
  );

  return (
    <section id="experiences">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="section-title">Experiences.</h2>
        </AnimateOnScroll>

        <div
          className="spacer"
          data-height="60"
          style={{ height: "60px" }}></div>

        <div className="row">
          <AnimateOnScroll className="col-md-6 bg-white">
            <div
              className="spacer d-md-none d-lg-none"
              data-height="30"
              style={{ height: "30px" }}></div>
            <div className="timeline exp shadow-dark padding-30 overflow-hidden rounded">
              {educationalExperiences.map((experience, i) => (
                <div key={i} className="timeline-container">
                  <div className="content">
                    <span className="time">{experience.period}</span>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        width="20"
                        height="20"
                        src="/images/icons/briefcase-line.svg"
                        alt="Briefcase icon"
                      />

                      <h3 className="title">{experience.title}</h3>
                    </div>
                    <p>
                      {experience.place}
                      <br />
                      {experience.role}
                    </p>
                  </div>
                </div>
              ))}

              <span className="line"></span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.15} className="col-md-6 bg-white">
            <div
              className="spacer d-md-none d-lg-none"
              data-height="30"
              style={{ height: "30px" }}></div>
            <div className="timeline exp shadow-dark padding-30 overflow-hidden rounded">
              {workExperiences.map((experience, i) => (
                <div key={i} className="timeline-container">
                  <div className="content">
                    <span className="time">{experience.period}</span>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        width="20"
                        height="20"
                        src="/images/icons/graduation-cap-line.svg"
                        alt="Graduation cap icon"
                      />

                      <h3 className="title">{experience.title}</h3>
                    </div>
                    <p>
                      {experience.place}
                      <br />
                      {experience.role}
                    </p>
                  </div>
                </div>
              ))}

              <span className="line"></span>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
