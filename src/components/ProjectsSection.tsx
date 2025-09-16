import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Cpu, Zap, Wifi, Brain, ArrowRight, Code, Server, Smartphone, Database } from 'lucide-react';
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary)/0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our innovative IoT solutions that are making an impact on campus and beyond.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="h-full"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-border/30 hover:border-primary/50 transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/20">
                      {project.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {project.category}
                        </Badge>
                        <span className={`text-sm px-3 py-1 rounded-full font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs bg-background/50 backdrop-blur-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="border-t border-border/30 p-4">
                    <div className="flex w-full gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group-hover:bg-primary/5 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">Have an Idea for a Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for innovative ideas and passionate individuals to join our team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="group">
              Propose a Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              Join Our Team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;