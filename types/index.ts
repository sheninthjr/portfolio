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
