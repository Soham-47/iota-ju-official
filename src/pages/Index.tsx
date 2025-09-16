import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Cpu, Wifi, Users, Calendar, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<NodeJS.Timeout>();

  const slides = [
    {
      title: 'Pioneering the Future of',
      highlight: 'Internet of Things',
      description: 'Join the IOTA community at Jadavpur University to explore, learn, and build innovative IoT solutions combining ML, electronics, hardware, and software with IOTA\'s Tangle technology.',
      image: '/assets/common/hero1.jpg',
      button1: 'Learn More',
      button1Link: '/about',
      button2: 'Upcoming Events',
      button2Link: '/events'
    },
    {
      title: 'Meet Our',
      highlight: 'Innovative Team',
      description: 'A diverse group of engineers, developers, and researchers working at the intersection of IoT, machine learning, and distributed systems.',
      image: '/assets/common/team.jpg',
      button1: 'View Team',
      button1Link: '/team',
      button2: 'Join Us',
      button2Link: '/contact'
    },
    {
      title: 'Explore Our',
      highlight: 'IoT Innovations',
      description: 'Discover cutting-edge projects leveraging IOTA\'s Tangle technology to build the machine economy of the future, from smart cities to industrial IoT solutions.',
      image: '/assets/common/projects.jpg',
      button1: 'View Projects',
      button1Link: '/projects',
      button2: 'Get Involved',
      button2Link: '/contact'
    }
  ];

  useEffect(() => {
    sliderRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      if (sliderRef.current) clearInterval(sliderRef.current);
    };
  }, [slides.length]);

  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Hands-on Learning',
      description: 'Get practical experience with IOTA technology through workshops and coding sessions.'
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: 'Cutting-edge Tech',
      description: 'Work with the latest in distributed ledger technology and IoT solutions.'
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: 'Networking',
      description: 'Connect with like-minded individuals and industry professionals.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Collaboration',
      description: 'Join a community of developers, researchers, and blockchain enthusiasts.'
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: 'Events',
      description: 'Participate in hackathons, talks, and networking events.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: 'Resources',
      description: 'Access learning materials and development tools to enhance your skills.'
    },
  ];

  return (
    <div className="relative min-h-screen">
      <StarField />
      
      <div className="relative z-10">
        <Header />
        
        <main>
          {/* Hero Section with Slideshow */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Images */}
            <div className="absolute inset-0 z-0">
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    opacity: currentSlide === index ? 1 : 0,
                    zIndex: currentSlide === index ? 1 : 0,
                    pointerEvents: currentSlide === index ? 'auto' : 'none',
                    transition: 'opacity 1s ease-in-out',
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full flex items-start pt-16 justify-center px-4">
              <div className="w-full max-w-4xl mx-auto text-center mt-20">
                {slides.map((slide, index) => (
                  <div 
                    key={index}
                    className="w-full flex flex-col items-center justify-center absolute top-0 left-0 right-0"
                    style={{
                      opacity: currentSlide === index ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out',
                      pointerEvents: currentSlide === index ? 'auto' : 'none',
                      visibility: currentSlide === index ? 'visible' : 'hidden',
                      transform: currentSlide === index ? 'translateY(0)' : 'translateY(20px)',
                    }}
                  >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                      {slide.title} <span className="text-primary">{slide.highlight}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                      <Button size="lg" asChild className="w-full sm:w-auto">
                        <Link to={slide.button1Link}>
                          {slide.button1} <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                        <Link to={slide.button2Link}>
                          {slide.button2}
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* Why Join IOTA JU Section */}
          <section className="relative py-32 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            
            <div className="relative z-10 container mx-auto px-4">
              <div className="text-center mb-20">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
                  Why Join IOTA JU?
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-transparent mx-auto mb-6"></div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Be part of a community that's shaping the future of decentralized technologies
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      delay: index * 0.1 
                    }}
                    className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center group"
                  >
                    <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(feature.icon, { className: 'h-8 w-8 text-primary' })}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent mt-auto"></div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-20 text-center">
                <div className="inline-flex items-center gap-3 bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full border border-border/50 shadow-sm">
                  <span className="text-sm font-medium text-muted-foreground">Ready to join us?</span>
                  <Button size="sm" asChild>
                    <Link to="/contact">
                      Get Started <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* News and Updates Section */}
          <section className="py-16 bg-background/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest in IoT & Technology</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Stay updated with the latest in IOTA, IoT innovations, and our technical initiatives
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* News Item 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>September 10, 2025</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">IOTA for Smart Cities Initiative</h3>
                    <p className="text-muted-foreground mb-4">
                      Our team is collaborating with local authorities to implement IOTA's Tangle technology for efficient IoT device communication in urban infrastructure.
                    </p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <a href="#" className="text-primary hover:no-underline">
                        Read More <ArrowRight className="ml-1 h-4 w-4 inline" />
                      </a>
                    </Button>
                  </div>
                </motion.div>

                {/* News Item 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>August 28, 2025</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">IoT Hardware Hackathon</h3>
                    <p className="text-muted-foreground mb-4">
                      Our recent IoT hardware hackathon brought together 100+ participants to build innovative solutions using IOTA's feeless microtransactions for machine-to-machine communication.
                    </p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link to="/events" className="text-primary hover:no-underline">
                        View Event Photos <ArrowRight className="ml-1 h-4 w-4 inline" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>

                {/* News Item 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>August 15, 2025</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">ML for IoT Research Breakthrough</h3>
                    <p className="text-muted-foreground mb-4">
                      Our team's research on "Machine Learning at the Edge with IOTA" has been published in the Journal of IoT and Embedded Systems.
                    </p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <a href="#" className="text-primary hover:no-underline">
                        Read Paper <ArrowRight className="ml-1 h-4 w-4 inline" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 text-center justify-center items-center flex mr-10">
                <Button variant="outline" asChild>
                  <Link to="/news">
                    View All News & Updates
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Page Cards Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore More</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Discover what our community has to offer
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* About Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">About Us</h3>
                    <p className="text-muted-foreground mb-6">
                      Learn about our mission, vision, and the passionate team behind IOTA JU. Discover our journey and what drives us forward in the world of distributed ledger technology.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/about">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>

                {/* Events Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Events</h3>
                    <p className="text-muted-foreground mb-6">
                      Stay updated with our upcoming workshops, hackathons, and networking events. Join us to learn, collaborate, and grow in the blockchain space.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/events">
                        View Events <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>

                {/* Projects Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Projects</h3>
                    <p className="text-muted-foreground mb-6">
                      Explore our innovative projects leveraging IOTA technology. From research initiatives to real-world applications, see how we're building the future.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/projects">
                        View Projects <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join our community of developers, researchers, and blockchain enthusiasts to explore the potential of IOTA technology.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/team">
                      Meet the Team
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        
      </div>
    </div>
  );
};

export default Index;
