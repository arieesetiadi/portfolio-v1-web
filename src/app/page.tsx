import SectionAbout from "./(home)/section-about";
import SectionContact from "./(home)/section-contact";
import SectionExperiences from "./(home)/section-experiences";
import SectionHero from "./(home)/section-hero";
import SectionProjects from "./(home)/section-projects";
import SectionSkills from "./(home)/section-skills";

import jsonData from "./(home)/data.json";
import { Data } from "@/lib/types";

export default function HomePage() {
  const data: Data = jsonData;

  return (
    <>
      <SectionHero personal={data.personal} />
      <SectionAbout personal={data.personal} />
      <SectionSkills skills={data.skills} />
      <SectionExperiences experiences={data.experiences} />
      <SectionProjects projects={data.projects} />
      <SectionContact personal={data.personal} />
    </>
  );
}
