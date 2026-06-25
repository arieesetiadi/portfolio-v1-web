import { Skill } from "@/lib/types";

export default function SectionSkills({ skills }: { skills: Skill[] }) {
  return (
    <section id="skills" style={{ paddingTop: "1.5rem" }}>
      <div className="container">
        <div className="row justify-content-around">
          {skills.map((skill, i) => (
            <div key={i} className="col-md-6 col-lg-6 bg-white">
              <div className="service-box data-background padding-30 shadow-dark rounded text-center">
                <img
                  className="service-image"
                  src={skill.icon}
                  alt={`Icon of ${skill.title} skill`}
                />
                <h3 className="mb-3 mt-0">{skill.title}</h3>
                <p className="mb-0">{skill.description}</p>
              </div>
              <div
                className="spacer d-md-none d-lg-none"
                data-height="30"
                style={{ height: "30px" }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
