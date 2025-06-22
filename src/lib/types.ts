export type NavItem = {
  title: string;
  href: string;
};

export type Roadmap = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type InterviewQuestion = {
  id: string;
  category: 'Frontend' | 'Backend' | 'DSA' | 'System Design' | 'HR';
  question: string;
  answer: string;
};

export type Project = {
  id: string;
  title:string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tech: string[];
};

export type Certification = {
  id: string;
  title: string;
  company: 'Google' | 'Microsoft' | 'Amazon' | 'Meta' | 'Other';
  domain: 'AI/ML' | 'Web Development' | 'Cloud' | 'Cybersecurity' | 'Data Science';
  description: string;
  link: string;
};
