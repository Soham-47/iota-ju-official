import { useState, useEffect } from 'react';
import StarField from '@/components/StarField';
import IOTALogo from '@/components/IOTALogo';
import IntroButtons from '@/components/IntroButtons';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading and then show the intro
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleEnterWebsite = () => {
    toast({
      title: "Welcome to IOTA",
      description: "Entering the main website...",
      duration: 2000,
    });
    // In a real app, this would navigate to the main site
  };

  const handleSkipIntro = () => {
    toast({
      description: "Intro skipped",
      duration: 1000,
    });
    // In a real app, this would also navigate to the main site
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-space">
      <StarField />
      
      {isLoaded && (
        <>
          <div className="flex min-h-screen flex-col items-center justify-center px-4">
            <IOTALogo />
            
            <div className="mt-8 max-w-4xl text-center animate-fade-in" style={{ animationDelay: '1s' }}>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                IOTA is a feeless cryptocurrency and development platform
              </p>
              <p className="mt-4 text-lg text-muted-foreground/80 font-light">
                Built for the Internet of Things and distributed ledger technology
              </p>
            </div>
          </div>

          <IntroButtons 
            onEnterWebsite={handleEnterWebsite}
            onSkipIntro={handleSkipIntro}
          />
        </>
      )}
    </div>
  );
};

export default Index;
