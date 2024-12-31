export interface LatestProjectsTypes {
  title: string;
  description: string;
  stacks: string[];
  link: string;
}

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  stacks: string[];
  type: ProjectType;
}

export enum ProjectType {
  WEB,
  APP,
  EXTENSION,
  OPENSOURCE,
}

export interface InterviewExperienceTypes {
  id: string;
  name: string;
  jobDescription: string;
  totalInterviewRounds: string[];
  companyType: 'Product' | 'Service';
  ratings: number;
  honestReview: string[];
}

export interface SocialLink {
  icon: React.FC<{ className?: string }>;
  href: string;
  label: string;
  color?: string;
}

export interface ContactInformation {
  location: string;
  country: string;
  remoteWork: boolean;
  freelancing: boolean;
}

export interface FeedbackForm {
  name: string;
  feedback: string;
}
