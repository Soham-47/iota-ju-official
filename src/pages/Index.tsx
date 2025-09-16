import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      <StarField />
      
      {isLoaded && (
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <EventsSection />
            <ProjectsSection />
            <TeamSection />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
