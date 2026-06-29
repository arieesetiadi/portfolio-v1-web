export type Data = {
  personal: Personal;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
};

export type Personal = {
  name: string;
  position: string;
  email: string;
  linkedin: string;
  whatsapp: string;
  github: string;
  instagram: string;
  codewars: string;
  about: string;
  resume?: string;
  profile?: string;
};

export type Skill = {
  title: string;
  icon: string;
  items: string[];
  type?: string;
};

export type Experience = {
  period: string;
  title: string;
  place: string;
  role: string;
  type: string;
};

export type Project = {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  techStacks: string[];
  website: string | null;
  github: string | null;
  demo: string | null;
  thumbnail: string;
  adminPanel?: string | null;
  gallery: string[];
};
