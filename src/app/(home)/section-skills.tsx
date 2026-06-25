import { Skill } from "@/lib/types";

export default function SectionSkills({ skills }: { skills: Skill[] }) {
  const coreSkills = skills.filter((s) => s.type === "core");
  const softSkills = skills.find((s) => s.type === "soft");

  return (
    // TODO: Adjust icons
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills.</h2>

        <div
          className="spacer"
          data-height="60"
          style={{ height: "60px" }}></div>

        <div className="row">
          {coreSkills.map((skill, i) => (
            <div key={i} className="col-md-6 mb-4">
              <div className="bg-white shadow-dark padding-30 rounded h-100">
                <div className="d-flex align-items-center mb-3 gap-2">
                  {skill.icon && (
                    <img
                      width="24"
                      height="24"
                      src={skill.icon}
                      alt={`Icon of ${skill.title}`}
                    />
                  )}
                  <h4 className="m-0" style={{ color: "#23232f" }}>
                    {skill.title}
                  </h4>
                </div>
                <p
                  className="mb-0 text-secondary"
                  style={{ fontSize: "0.95rem" }}>
                  {skill.items.join(" · ")}
                </p>
              </div>
            </div>
          ))}

          {softSkills && (
            <div className="col-12">
              <div
                className="bg-white shadow-dark padding-30 rounded border-primary"
                style={{ borderLeft: "4px solid #007bff" }}>
                <div className="d-flex align-items-center mb-3 gap-2">
                  {softSkills.icon && (
                    <img
                      width="24"
                      height="24"
                      src={softSkills.icon}
                      alt={`Icon of ${softSkills.title}`}
                    />
                  )}
                  <h4 className="m-0" style={{ color: "#23232f" }}>
                    {softSkills.title}
                  </h4>
                </div>
                <p className="mb-0">{softSkills.items.join(" · ")}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
