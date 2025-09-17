import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Github, Twitter, Mail, Youtube, Instagram, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Types
type AlumniMember = {
  id: string;
  name: string;
  role: string;
  batch: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
    youtube?: string;
    instagram?: string;
    medium?: string;
  };
  skills: string[];
  currentPosition?: string;
  company?: string;
};

type AlumniBatch = {
  id: string;
  year: string;
  members: AlumniMember[];
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

// Alumni Card Component
const AlumniCard = ({ member, index }: { member: AlumniMember; index: number }) => {
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
      className="relative group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Alumni: ${member.name}, ${member.role}`}
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
            <p className="text-sm text-muted-foreground">{member.role}</p>
            {member.currentPosition && (
              <p className="text-sm text-muted-foreground">{member.currentPosition}</p>
            )}
            {member.company && (
              <p className="text-sm text-muted-foreground">{member.company}</p>
            )}
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
              Batch of {member.batch}
            </span>
          </div>
        </div>
        
        {/* Bio */}
        <p className="text-sm mb-4 line-clamp-3 mt-2 flex-grow">
          {member.bio}
        </p>
        
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

// Alumni Page Component
const AlumniPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBatch, setActiveBatch] = useState('all');
  const [alumniBatches, setAlumniBatches] = useState<AlumniBatch[]>([]);
  const [filteredBatches, setFilteredBatches] = useState<AlumniBatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sample data - Replace with actual alumni data
  useEffect(() => {
    // Simulate API call
    const fetchAlumni = async () => {
      try {
        // TODO: Replace with actual API call
        const mockAlumniBatches: AlumniBatch[] = [
          {
            id: '2023',
            year: '2023',
            members: [
              {
                id: 'alum1',
                name: 'John Doe',
                role: 'Former President',
                batch: '2023',
                currentPosition: 'Software Engineer',
                company: 'Tech Corp',
                image: '/assets/images/team/placeholder.jpg',
                bio: 'Led the chapter to new heights during the 2022-2023 academic year. Passionate about blockchain technology and open-source development.',
                skills: ['Leadership', 'Blockchain', 'Public Speaking'],
                social: {
                  linkedin: 'https://linkedin.com',
                  github: 'https://github.com',
                  email: 'john@example.com'
                }
              },
              // Add more alumni as needed
            ]
          },
          // Add more batches as needed
        ];
        
        setAlumniBatches(mockAlumniBatches);
        setFilteredBatches(mockAlumniBatches);
      } catch (error) {
        console.error('Error fetching alumni:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  // Filter alumni based on search query and active batch
  useEffect(() => {
    let result = [...alumniBatches];
    
    // Filter by batch
    if (activeBatch !== 'all') {
      result = result.filter(batch => batch.id === activeBatch);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.map(batch => ({
        ...batch,
        members: batch.members.filter(member => 
          member.name.toLowerCase().includes(query) ||
          member.role.toLowerCase().includes(query) ||
          member.bio.toLowerCase().includes(query) ||
          member.skills.some(skill => skill.toLowerCase().includes(query))
        )
      })).filter(batch => batch.members.length > 0);
    }
    
    setFilteredBatches(result);
  }, [searchQuery, activeBatch, alumniBatches]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-muted rounded w-1/3 mx-auto"></div>
          <div className="h-6 bg-muted rounded w-1/2 mx-auto"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-96 bg-muted rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Alumni Network
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Connecting past and present members of the IOTA JU community
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search alumni by name, role, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-base"
                aria-label="Search alumni"
              />
              <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <button
                onClick={() => setActiveBatch('all')}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeBatch === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
                aria-pressed={activeBatch === 'all'}
                aria-label="Show all batches"
              >
                All Batches
              </button>
              {alumniBatches.map((batch) => (
                <button
                  key={batch.id}
                  onClick={() => setActiveBatch(batch.id)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeBatch === batch.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                  aria-pressed={activeBatch === batch.id}
                  aria-label={`Show batch of ${batch.year}`}
                >
                  {batch.year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Alumni Grid */}
        <AnimatePresence mode="wait">
          {filteredBatches.length > 0 ? (
            <div className="space-y-16">
              {filteredBatches.map((batch) => (
                <motion.div
                  key={batch.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold">Batch of {batch.year}</h2>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {batch.members.length} Alumni
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {batch.members.map((alumni, index) => (
                      <AlumniCard key={alumni.id} member={alumni} index={index} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mx-auto w-24 h-24 mb-6 rounded-full bg-muted flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-muted-foreground"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="23" y1="21" x2="16" y2="14"></line>
                  <line x1="16" y1="21" x2="23" y2="14"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No alumni found</h3>
              <p className="text-muted-foreground">
                {searchQuery 
                  ? `No alumni match "${searchQuery}"`
                  : 'No alumni records available at the moment.'
                }
              </p>
              {searchQuery && (
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  Clear search
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AlumniPage;
