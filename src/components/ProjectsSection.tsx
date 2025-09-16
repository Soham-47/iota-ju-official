import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Cpu, Zap, Wifi, Brain } from 'lucide-react';
import projectsImage from '@/assets/projects.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Smart Campus Monitoring',
      description: 'IoT-based environmental monitoring system for the entire JU campus with real-time data visualization.',
      technologies: ['Arduino', 'Raspberry Pi', 'LoRaWAN', 'React'],
      status: 'Ongoing',
      icon: <Wifi className="h-6 w-6" />,
      category: 'Environmental'
    },
    {
      title: 'AI-Powered Home Automation',
      description: 'Intelligent home automation system using machine learning to predict and adapt to user preferences.',
      technologies: ['Python', 'TensorFlow', 'ESP32', 'MQTT'],
      status: 'Completed',
      icon: <Brain className="h-6 w-6" />,
      category: 'AI/ML'
    },
    {
      title: 'Smart Energy Management',
      description: 'Energy optimization system for university buildings using IoT sensors and predictive analytics.',
      technologies: ['Node.js', 'InfluxDB', 'Grafana', 'ESP8266'],
      status: 'Ongoing',
      icon: <Zap className="h-6 w-6" />,
      category: 'Energy'
    },
    {
      title: 'Connected Healthcare Device',
      description: 'Wearable health monitoring device with real-time vitals tracking and emergency alerts.',
      technologies: ['C++', 'Bluetooth', 'Firebase', 'Flutter'],
      status: 'Planning',
      icon: <Cpu className="h-6 w-6" />,
      category: 'Healthcare'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ongoing': return 'bg-yellow-500/20 text-yellow-600';
      case 'Completed': return 'bg-green-500/20 text-green-600';
      case 'Planning': return 'bg-blue-500/20 text-blue-600';
      default: return 'bg-gray-500/20 text-gray-600';
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Projects Hero */}
        <div className="relative rounded-2xl overflow-hidden mb-16 h-96">
          <img
            src={projectsImage}
            alt="IoT Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
            <div className="max-w-2xl mx-8 text-white">
              <h2 className="text-4xl font-bold mb-4">Projects</h2>
              <h3 className="text-2xl font-semibold mb-4">Ongoing and Past IoT Projects</h3>
              <p className="text-lg mb-6">
                Discover our top projects involving smart automation, 
                connected devices, environmental monitoring, and AI-powered systems.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-500"
              >
                <Github className="mr-2 h-5 w-5" />
                Explore Projects
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="mt-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="flex-1"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Want to Contribute?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our project teams and help build the future of IoT. We welcome contributors of all skill levels.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-500">
            Join a Project Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;