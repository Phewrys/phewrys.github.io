export interface Project {
  id: string;
  title: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  inProgress?: boolean;
  technologies?: string[];
}

export interface WorkExperience {
  id: string;
  current?: boolean;
  company: {
    en: string;
    pt: string;
  };
  position: {
    en: string;
    pt: string;
  };
  location: {
    en: string;
    pt: string;
  };
  period: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  activitieTitle: {
    en: string;
    pt: string;
  };
  activities: {
    en: string[];
    pt: string[];
  };
}

export type Language = 'en' | 'pt';
export type Theme = 'light' | 'dark';
