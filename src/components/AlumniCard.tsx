import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Github, Twitter, Mail, Youtube, Instagram, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Types
export type SocialLinks = {
  linkedin?: string;
  github?: string;
  twitter?: string;
  email?: string;
  youtube?: string;
  instagram?: string;
  medium?: string;
};

export type AlumniMember = {
  id: string;
  name: string;
  position: string;
  role: string;
  batch: string;
  image: string;
  bio: string;
  social: SocialLinks;
  skills: string[];
  currentPosition: string;
  company: string;
  tenure: string;
};

// Social Icon Component
const SocialIcon = ({ platform, ...props }: { platform: string; [key: string]: any }) => {
  const Icon = {
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter,
    email: Mail,
    youtube: Youtube,
    instagram: Instagram,
    medium: BookOpen,
  }[platform];

  if (!Icon) return null;
  return <Icon {...props} />;
};

type AlumniCardProps = {
  member: AlumniMember;
  index?: number;
  className?: string;
};

const AlumniCard = ({ member, index = 0, className = '' }: AlumniCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: inView ? 1 : 0, 
        y: inView ? 0 : 20,
        transition: { delay: index * 0.1 }
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`relative group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Alumni: ${member.name}, ${member.position}`}
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* Header with image and basic info */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
            <img 
              src={member.image} 
              alt={`${member.name}'s profile`}
              className="w-full h-full object-cover"
              loading="lazy"
              width={80}
              height={80}
            />
            <motion.div 
              className="absolute inset-0 bg-primary/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            />
          </div>
          
          <div className="space-y-1">
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="text-sm font-medium text-primary">{member.position}</p>
            <p className="text-sm text-muted-foreground">{member.role}</p>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 bg-muted rounded-full">
                {member.tenure}
              </span>
              <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                Batch of {member.batch}
              </span>
            </div>
          </div>
        </div>
        
        {/* Bio */}
        <p className="text-sm mb-4 line-clamp-3 mt-2 flex-grow">
          {member.bio}
        </p>
        
        {/* Current Position */}
        {(member.currentPosition || member.company) && (
          <div className="mb-4">
            <p className="text-sm font-medium">
              {member.currentPosition && <span>{member.currentPosition}</span>}
              {member.currentPosition && member.company && ' at '}
              {member.company && <span className="text-primary">{member.company}</span>}
            </p>
          </div>
        )}
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {member.skills.map((skill, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 bg-muted rounded-full"
              aria-label={skill}
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* Social Links */}
        <div className="flex gap-2 mt-auto">
          {Object.entries(member.social).map(([platform, url]) => (
            url && (
              <a
                key={platform}
                href={platform === 'email' ? `mailto:${url}` : url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={`${member.name}'s ${platform}`}
              >
                <SocialIcon 
                  platform={platform} 
                  className="w-4 h-4" 
                  aria-hidden="true"
                />
                <span className="sr-only">{platform}</span>
              </a>
            )
          ))}
        </div>
      </div>
      
      {/* Background animation */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 75% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
        }}
        animate={{
          background: [
            'radial-gradient(circle at 75% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 25% 70%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 75% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
};

export default AlumniCard;
