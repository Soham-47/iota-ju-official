import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const aboutItems = [
  {
    title: 'Who We Are',
    description: 'IOTA is the official technical society of the Department of Information Technology, Jadavpur University. We are a group of passionate individuals who love technology and innovation.',
    icon: '👥',
  },
  {
    title: 'Our Mission',
    description: 'To foster technical innovation, research, and development among students by providing a platform to learn, build, and showcase their skills.',
    icon: '🎯',
  },
  {
    title: 'What We Do',
    description: 'We organize workshops, hackathons, coding competitions, and technical talks to help students enhance their technical skills and stay updated with the latest technologies.',
    icon: '💡',
  },
];

interface AboutSectionProps {
  extended?: boolean;
}

const AboutSection = ({ extended = false }: AboutSectionProps) => {
  return (
    <section className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          About IOTA
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Empowering the next generation of technologists and innovators at Jadavpur University
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full bg-background/50 backdrop-blur-sm border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="text-4xl mb-4">{item.icon}</div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <Button size="lg" className="group">
          Learn More About Us
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </section>
  );
};

export default AboutSection;
