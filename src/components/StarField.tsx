import { useEffect, useState } from 'react';

type StarSize = 'small' | 'medium' | 'large';

interface Star {
  id: number;
  x: number;
  y: number;
  size: StarSize;
  delay: number;
  duration: number;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const starCount = Math.floor(window.innerWidth / 5); // Adjust density based on screen size
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        const sizeRand = Math.random();
        let size: StarSize = 'small';
        let duration = 3 + Math.random() * 4; // 3-7 seconds
        
        if (sizeRand > 0.9) {
          size = 'large';
          duration = 4 + Math.random() * 6; // 4-10 seconds for larger stars
        } else if (sizeRand > 0.7) {
          size = 'medium';
          duration = 3.5 + Math.random() * 5; // 3.5-8.5 seconds for medium stars
        }
        
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size,
          delay: Math.random() * 5, // Staggered start times
          duration
        });
      }
      setStars(newStars);
    };

    generateStars();
    
    // Regenerate stars on window resize
    const handleResize = () => {
      generateStars();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${star.size}`}
          style={{
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            animation: `twinkle ${star.duration}s infinite ease-in-out`,
            animationDelay: `${star.delay}s`,
            opacity: 0.2, // Start slightly visible
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default StarField;