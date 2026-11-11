export interface PersonalInfo {
  name: string;
  title: string;
  bioHeadline: string;
  bioSummary: string;
  aboutText: string[];
  email: string;
  linkedin: string;
  github: string;
  cvPdfUrl?: string;
  profilePhoto?: string;
}

export type ProjectCategory = 
  | 'Web Development'
  | 'Mobile Development'
  | 'Machine Learning'
  | 'UI/UX Design'
  | 'Healthcare Application';

export interface ProjectItem {
  id: string;
  name: string;
  category: ProjectCategory;
  year: number;
  role: string;
  description: string;
  problemStatement?: string;
  objectives?: string[];
  keyFeatures: string[];
  techStack: string[];
  personalContributions: string[];
  achievement?: string;
  deploymentUrl?: string;
  githubUrl?: string;
  featured: boolean;
  thumbnailUrl: string;
  screenshots?: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
  details?: string[];
  isBootcamp?: boolean;
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  skillsUsed?: string[];
}

export interface OrganizationItem {
  organization: string;
  role: string;
  period: string;
  description: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  competition: string;
  year: number;
  rank: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  organizer: string;
  year: number;
  duration?: string;
  certificateNumber?: string;
  certificateUrl?: string;
}

