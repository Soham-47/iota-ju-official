import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Github, Mail, Users, Award, Code, Lightbulb } from 'lucide-react';
import teamImage from '@/assets/team.jpg';

const TeamSection = () => {
  const teamStats = [
    { icon: <Users className="h-6 w-6" />, number: '50+', label: 'Active Members' },
    { icon: <Award className="h-6 w-6" />, number: '25+', label: 'Projects Completed' },
    { icon: <Code className="h-6 w-6" />, number: '15+', label: 'Open Source Contributions' },
    { icon: <Lightbulb className="h-6 w-6" />, number: '100+', label: 'Ideas Generated' },
  ];

  const teamMembers = [
    {
      name: 'Arjun Sharma',
      role: 'President',
      department: 'Electronics & Telecommunication',
      year: '3rd Year',
      expertise: ['IoT Architecture', 'Embedded Systems', 'Team Leadership'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'arjun@iotaju.com'
      }
    },
    {
      name: 'Priya Das',
      role: 'Technical Lead',
      department: 'Computer Science',
      year: '3rd Year', 
      expertise: ['Machine Learning', 'Cloud Computing', 'Full Stack Development'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'priya@iotaju.com'
      }
    },
    {
      name: 'Rahul Chatterjee',
      role: 'Project Coordinator',
      department: 'Electrical Engineering',
      year: '2nd Year',
      expertise: ['Hardware Design', 'Circuit Analysis', 'Project Management'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'rahul@iotaju.com'
      }
    },
    {
      name: 'Sneha Roy',
      role: 'Events Manager',
      department: 'Information Technology',
      year: '2nd Year',
      expertise: ['Event Planning', 'Digital Marketing', 'Community Outreach'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'sneha@iotaju.com'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Team Hero */}
        <div className="relative rounded-2xl overflow-hidden mb-16 h-96">
          <img
            src={teamImage}
            alt="IOTA Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
            <div className="max-w-2xl mx-8 text-white">
              <h2 className="text-4xl font-bold mb-4">Our Team</h2>
              <h3 className="text-2xl font-semibold mb-4">Meet Our Dedicated Members</h3>
              <p className="text-lg mb-6">
                A collaborative group of innovators, engineers, developers and designers 
                leading IOTA towards excellence.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-500"
              >
                <Users className="mr-2 h-5 w-5" />
                Know the Team
              </Button>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Team Members */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Core Team</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals who drive IOTA's mission forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h4>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-1">{member.department}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.year}</p>
                
                <div className="space-y-1 mb-4">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-block bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs mr-1 mb-1">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-3">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center bg-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for passionate students interested in IoT, embedded systems, 
            and cutting-edge technology. Join us and be part of the innovation!
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-500">
              Apply Now
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;