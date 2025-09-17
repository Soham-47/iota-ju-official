export type ProjectType = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  githubUrl: string;
  team: string[];
  status: 'active' | 'completed' | 'on-hold' | 'planned';
  startDate: string;
  endDate?: string;
  demoUrl?: string;
  technologies?: string[];
  challenges?: string[];
  solutions?: string[];
};
