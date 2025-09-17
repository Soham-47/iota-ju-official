import { GetStaticProps, GetStaticPaths } from 'next';
import { ProjectType } from '@/types';
import projectsData from '@/data/projects';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetails({ project }: { project: ProjectType }) {
  const router = useRouter();

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | IOTA JU</title>
        <meta name="description" content={project.description} />
      </Head>
      
      <div className="min-h-screen bg-background">
        {/* Back button */}
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => router.back()}
            className="mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Button>
        </div>

        {/* Project Header */}
        <div className="relative">
          <div className="h-64 md:h-96 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="container mx-auto px-4 relative -mt-24 md:-mt-32 mb-16">
            <div className="bg-background rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                  <p className="text-lg text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg">{project.longDescription}</p>
                
                {project.technologies && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {project.technologies.map((tech, index) => (
                        <div key={index} className="flex items-center">
                          <span className="h-2 w-2 rounded-full bg-primary mr-2" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.challenges && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex">
                          <span className="mr-2">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.solutions && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Our Solutions</h2>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex">
                          <span className="mr-2">•</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const project = projectsData.find(p => p.slug === slug) || null;

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false, // Return 404 for non-existent projects
  };
};
