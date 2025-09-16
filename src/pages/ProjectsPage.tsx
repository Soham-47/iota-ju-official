import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

type ProjectType = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  team: string[];
  status: 'active' | 'completed' | 'on-hold';
  startDate: string;
  endDate?: string;
};

export default function ProjectsPage() {
  const projects: ProjectType[] = [
    {
      id: '1',
      title: 'Smart Campus IoT Network',
      description: 'IoT infrastructure for monitoring and optimizing campus resources',
      longDescription: 'A comprehensive IoT network deployed across campus that collects real-time data from various sensors (temperature, humidity, occupancy, energy usage). Features include predictive maintenance, energy optimization, and automated facility management using ML algorithms at the edge.',
      tags: ['IoT', 'Edge Computing', 'ML', 'Raspberry Pi', 'Sensor Networks'],
      image: '/placeholder-project-1.jpg',
      demoUrl: '#',
      githubUrl: '#',
      team: ['Alex Johnson', 'Sarah Kim', 'Michael Chen'],
      status: 'active',
      startDate: '2023-06-15',
    },
    {
      id: '2',
      title: 'Industrial IoT for Predictive Maintenance',
      description: 'Machine learning models for predictive maintenance of industrial equipment',
      longDescription: 'This project implements vibration and temperature sensors on industrial machinery to predict maintenance needs using machine learning. Data is processed at the edge using NVIDIA Jetson devices with secure data transmission and storage.',
      tags: ['IIoT', 'Machine Learning', 'Edge AI', 'NVIDIA Jetson', 'Predictive Analytics'],
      image: '/placeholder-project-2.jpg',
      githubUrl: '#',
      team: ['David Wilson', 'Emma Garcia', 'James Brown'],
      status: 'active',
      startDate: '2023-08-01',
    },
    {
      id: '3',
      title: 'AI-Powered Smart Agriculture System',
      description: 'Precision agriculture system using IoT and edge AI',
      longDescription: 'An end-to-end solution for smart farming that uses soil sensors, drone imagery, and edge AI to optimize crop yields. The system processes data locally on Raspberry Pi devices and uses ML models for disease detection and crop monitoring.',
      tags: ['Precision Agriculture', 'Edge AI', 'Computer Vision', 'Raspberry Pi', 'Drone Technology'],
      image: '/placeholder-project-3.jpg',
      demoUrl: '#',
      githubUrl: '#',
      team: ['Robert Taylor', 'Jennifer Lee', 'Daniel Martinez'],
      status: 'completed',
      startDate: '2023-01-10',
      endDate: '2023-05-20',
    },
    {
      id: '4',
      title: 'Autonomous Drone Swarm Coordination',
      description: 'Decentralized coordination of drone swarms using IOTA',
      longDescription: 'A framework for autonomous drone swarms that can coordinate complex tasks like search & rescue or package delivery. The system uses IOTA for secure, feeless machine-to-machine communication and implements distributed decision-making algorithms for swarm intelligence.',
      tags: ['Drone Swarm', 'Autonomous Systems', 'IOTA', 'Edge Computing'],
      image: '/placeholder-project-4.jpg',
      status: 'on-hold',
      team: ['William Wilson', 'Sophia Chen', 'Ethan Brown'],
      startDate: '2023-09-01',
    },
  ];

  const getStatusBadge = (status: ProjectType['status']) => {
    const statusStyles = {
      active: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      'on-hold': 'bg-yellow-100 text-yellow-800',
    };
    
    const statusText = {
      active: 'In Progress',
      completed: 'Completed',
      'on-hold': 'On Hold',
    };

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
        {statusText[status]}
      </span>
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore innovative projects built with IOTA technology by our community
        </p>
      </motion.div>

      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">All</Button>
            <Button variant="ghost" size="sm">Active</Button>
            <Button variant="ghost" size="sm">Completed</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden border flex flex-col h-full"
            >
              <div className="h-48 bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    {getStatusBadge(project.status)}
                  </div>
                  <p className="text-sm text-white/90 mt-1">{project.description}</p>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4">{project.longDescription}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      {project.team.length} team members • Started {new Date(project.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </div>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" /> Code
                          </a>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button size="sm" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            Live Demo <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="bg-secondary/30 p-8 rounded-xl mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Have a project idea?</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for innovative ideas to build with IOTA. Share your project proposal with us!
          </p>
          <Button>
            Submit Project Idea <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Project Showcase</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-video bg-muted rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-white font-medium text-lg mb-1">Project Showcase {item}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">
                    Watch how our projects are making an impact in the real world.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
