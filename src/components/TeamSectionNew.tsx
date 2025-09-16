import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Linkedin, Github, Mail, Users, Award, Code, Lightbulb, Twitter, Instagram, ExternalLink, ArrowRight } from 'lucide-react';
import teamImage from '@/assets/team.jpg';

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('core');
  
  const teamStats = [
    { 
      icon: <Users className="h-6 w-6" />, 
      number: '50+', 
      label: 'Active Members',
      description: 'Passionate students driving innovation'
    },
    { 
      icon: <Award className="h-6 w-6" />, 
      number: '25+', 
      label: 'Projects Completed',
      description: 'Real-world IoT solutions delivered'
    },
    { 
      icon: <Code className="h-6 w-6" />, 
      number: '15+', 
      label: 'Open Source',
      description: 'Contributions to the community'
    },
    { 
      icon: <Lightbulb className="h-6 w-6" />, 
      number: '100+', 
      label: 'Ideas',
      description: 'Innovative concepts explored'
    },
  ];

  const teamMembers = {
    core: [
      {
        id: 1,
        name: 'Arjun Sharma',
        role: 'President',
        department: 'Electronics & Telecommunication',
        year: '3rd Year',
        expertise: ['IoT Architecture', 'Embedded Systems', 'Team Leadership'],
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        social: {
          linkedin: '#',
          github: '#',
          twitter: '#',
          email: 'arjun@iotaju.com'
        }
      },
      {
        id: 2,
        name: 'Priya Das',
        role: 'Technical Lead',
        department: 'Computer Science',
        year: '3rd Year', 
        expertise: ['Machine Learning', 'Cloud Computing', 'Full Stack'],
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        social: {
          linkedin: '#',
          github: '#',
          twitter: '#',
          email: 'priya@iotaju.com'
        }
      },
      {
        id: 3,
        name: 'Rahul Chatterjee',
        role: 'Project Coordinator',
        department: 'Electrical Engineering',
        year: '2nd Year',
        expertise: ['Hardware Design', 'Circuit Analysis', 'Management'],
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        social: {
          linkedin: '#',
          github: '#',
          twitter: '#',
          email: 'rahul@iotaju.com'
        }
      },
      {
        id: 4,
        name: 'Sneha Roy',
        role: 'Events Manager',
        department: 'Information Technology',
        year: '2nd Year',
        expertise: ['Event Planning', 'Marketing', 'Community'],
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        social: {
          linkedin: '#',
          github: '#',
          instagram: '#',
          email: 'sneha@iotaju.com'
        }
      }
    ],
    technical: [
      // Add technical team members here
    ],
    design: [
      // Add design team members here
    ],
    marketing: [
      // Add marketing team members here
    ]
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

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="team" className="py-20 relative overflow-hidden">
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
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Meet the Innovators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse group of passionate individuals driving IoT innovation at Jadavpur University.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {teamStats.map((stat, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/30 hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{stat.number}</h3>
                  <p className="font-medium mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="mb-16">
          <Tabs 
            defaultValue="core" 
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-background/50 backdrop-blur-sm border border-border/30">
                <TabsTrigger value="core">Core Team</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value={activeTab}>
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    {teamMembers[activeTab as keyof typeof teamMembers]?.map((member) => (
                      <motion.div key={member.id} variants={item}>
                        <Card className="h-full flex flex-col overflow-hidden border-border/30 hover:border-primary/50 transition-colors duration-300 group">
                          <div className="relative h-60 overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                              <div className="space-y-2">
                                <div className="flex flex-wrap gap-1">
                                  {member.expertise.slice(0, 3).map((skill, i) => (
                                    <Badge key={i} variant="secondary" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <CardHeader className="flex-grow">
                            <CardTitle className="text-xl">{member.name}</CardTitle>
                            <div className="space-y-1">
                              <p className="text-primary font-medium">{member.role}</p>
                              <p className="text-sm text-muted-foreground">{member.department}</p>
                              <p className="text-xs text-muted-foreground">{member.year}</p>
                            </div>
                          </CardHeader>
                          <CardFooter className="border-t border-border/30 p-4">
                            <div className="flex items-center justify-between w-full">
                              <div className="flex space-x-2">
                                {member.social.linkedin && (
                                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                    <Linkedin className="h-4 w-4" />
                                  </Button>
                                )}
                                {member.social.github && (
                                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                    <Github className="h-4 w-4" />
                                  </Button>
                                )}
                                {member.social.twitter && (
                                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                    <Twitter className="h-4 w-4" />
                                  </Button>
                                )}
                                {member.social.instagram && (
                                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                    <Instagram className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                <Mail className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Team</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make an impact in the world of IoT and technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="group">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              Become a Member
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
