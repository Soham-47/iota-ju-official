import { motion } from 'framer-motion';
import ProjectsSection from '@/components/ProjectsSection';
import { ProjectType } from '@/types';
import projectsData from '../data/projects';
import { GetStaticProps } from 'next';

interface ProjectsPageProps {
  projects: ProjectType[];
}

export default function ProjectsPage({ projects = projectsData }: ProjectsPageProps) {

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
       
      </motion.div>

      <ProjectsSection projects={projects} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: projectsData,
    },
  };
};
