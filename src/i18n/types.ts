export type Language = 'en' | 'de';

export type TabId = 'about' | 'skills' | 'projects' | 'certifications' | 'ai-services' | 'contact';

export type SidebarTab = {
  id: TabId;
  label: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  githubUrl?: string;
};

export type AIServiceItem = {
  title: string;
  description: string;
  color: string;
};

export type SiteContent = {
  sidebar: {
    name: string;
    title: string;
    desktopHeading: string;
    tabs: SidebarTab[];
    language: {
      label: string;
      english: string;
      german: string;
    };
    social: {
      telegram: string;
      email: string;
      linkedin: string;
      github: string;
      homeAriaLabel: string;
      menuAriaLabel: string;
      closeMenuAriaLabel: string;
    };
    stackItems: { label: string }[];
  };

  about: {
    hero: {
      headline: string;
      paragraphs: string[];
      buttons: {
        cv: string;
        github: string;
        aiServices: string;
        cvAriaLabel: string;
      };
    };
    professionalProfile: {
      title: string;
      paragraphs: string[];
    };
    experiences: ExperienceItem[];
    education: {
      title: string;
      description: string;
      highlight: string;
    };
  };

  skills: {
    title: string;
    categories: SkillCategory[];
  };

  projects: {
    title: string;
    githubButton: string;
    items: ProjectItem[];
  };

  certifications: {
    title: string;
  };

  aiServices: {
    title: string;
    subtitle: string;
    introTitle: string;
    intro: string;
    offerTitle: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    services: AIServiceItem[];
  };

  contact: {
    title: string;
    infoTitle: string;
    followTitle: string;
    locationValue: string;
    labels: {
      email: string;
      phone: string;
      location: string;
      yourName: string;
      yourEmail: string;
      subject: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    submit: {
      sending: string;
      send: string;
      success: string;
      error: string;
    };
  };
};

