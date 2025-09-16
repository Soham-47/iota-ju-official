import { Button } from "@/components/ui/button";
import { ArrowRight, SkipForward } from "lucide-react";

interface IntroButtonsProps {
  onEnterWebsite: () => void;
  onSkipIntro: () => void;
}

const IntroButtons = ({ onEnterWebsite, onSkipIntro }: IntroButtonsProps) => {
  return (
    <div className="fixed bottom-8 right-8 z-20 flex flex-col gap-4 animate-fade-in" style={{ animationDelay: '1.5s' }}>
      <Button
        onClick={onEnterWebsite}
        size="lg"
        className="group bg-gradient-primary hover:shadow-glow transition-all duration-500 hover:scale-105"
      >
        Enter Website
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
      
      <Button
        onClick={onSkipIntro}
        variant="ghost"
        size="sm"
        className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-secondary/20"
      >
        <SkipForward className="mr-2 h-4 w-4" />
        Skip Intro
      </Button>
    </div>
  );
};

export default IntroButtons;