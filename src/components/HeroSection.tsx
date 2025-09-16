import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight, ArrowLeft, Sparkles, Cpu, Code, Wifi } from 'lucide-react';

// Images from public folder - make sure these filenames match exactly with the files in public/assets/common/
const hero1 = '/assets/common/hero1.jpg';
const hero2 = '/assets/common/events.jpg';
const hero3 = '/assets/common/team.jpg';

interface Slide {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const slides: Slide[] = [
    { 
      image: hero1, 
      alt: 'IoT Innovation',
      title: 'Innovate with IoT',
      description: 'Explore cutting-edge Internet of Things technologies and applications.'
    },
    { 
      image: hero2, 
      alt: 'Smart Technology',
      title: 'Smart Solutions',
      description: 'Develop intelligent systems that solve real-world problems.'
    },
    { 
      image: hero3, 
      alt: 'Connected Future',
      title: 'Connected Future',
      description: 'Shape the future with interconnected devices and smart environments.'
    },
  ];

  // Floating icons for background
  const floatingIcons = [
    { icon: <Cpu className="h-6 w-6" />, x: 10, y: 20, delay: 0 },
    { icon: <Code className="h-5 w-5" />, x: 80, y: 70, delay: 0.2 },
    { icon: <Wifi className="h-5 w-5" />, x: 40, y: 120, delay: 0.4 },
  ];

  // Auto-advance slides
  useEffect(() => {
    if (isHovered) return; // Pause on hover
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length, isHovered]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[80vh] flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)/5%,transparent_70%)]" />
        
        {floatingIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/20"
            style={{ left: `${icon.x}px`, top: `${icon.y}px` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [icon.y, icon.y - 20, icon.y],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              delay: icon.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {icon.icon}
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 h-full flex items-center px-4 md:px-6">
        <motion.div 
          className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 w-full"
          variants={container}
          initial="hidden"
          animate="show"
          ref={containerRef}
        >
          <motion.div className="space-y-6" variants={item}>
            <motion.div 
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Innovating the Future of IoT</span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.h1 
                key={`title-${currentSlide}`}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </motion.h1>

              <motion.p 
                key={`desc-${currentSlide}`}
                className="text-lg text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {slides[currentSlide].description}
              </motion.p>
            </AnimatePresence>

            <motion.div 
              className="flex flex-col gap-4 sm:flex-row pt-4"
              variants={item}
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 opacity-0 transition-opacity group-hover:opacity-100" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="relative overflow-hidden group"
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 pt-8 text-sm text-muted-foreground"
              variants={item}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-primary/10"
                    style={{ zIndex: 3 - i }}
                  />
                ))}
              </div>
              <span>Join 100+ students already innovating with us</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-1 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-full w-full overflow-hidden rounded-xl bg-background/80 p-1 backdrop-blur-sm">
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-background">
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].alt}
                      className="h-full w-full object-cover opacity-90"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-primary' : 'w-6 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </div>

      {/* Navigation Arrows - Only show on hover */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-10 pointer-events-none">
        <motion.button
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/30 flex items-center justify-center text-foreground hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100 hover:shadow-lg hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowLeft className="h-5 w-5" />
        </motion.button>
        
        <motion.button
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border/30 flex items-center justify-center text-foreground hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100 hover:shadow-lg hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <ArrowRight className="h-5 w-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;