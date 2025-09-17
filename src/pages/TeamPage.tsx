/**
 * Team Page Component
 * 
 * Displays the team members in an organized, interactive layout with animations.
 * Features:
 * - Department-wise categorization of team members
 * - Animated cards with hover effects
 * - Social media links and skill tags
 * - Responsive grid layout
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// UI Components
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

// Icons from Lucide React
import { 
  Linkedin, Github, Mail, Twitter, Instagram, Youtube, BookOpen 
} from 'lucide-react';

// Utility functions
import { cn } from '@/lib/utils';

/**
 * SocialIcon Component
 * 
 * Renders the appropriate social media icon based on the platform.
 * Supports: LinkedIn, GitHub, Twitter, Email, YouTube, Instagram, Medium
 * 
 * @param {string} platform - The social media platform
 * @param {object} props - Additional props to pass to the icon
 * @returns {JSX.Element|null} The corresponding icon component or null if not found
 */
const SocialIcon = ({ platform, ...props }: { platform: string; [key: string]: any }) => {
  // Map of platform names to their corresponding icon components
  const iconMap = {
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter,
    email: Mail,
    youtube: Youtube,
    instagram: Instagram,
    medium: BookOpen,
  };

  const Icon = iconMap[platform as keyof typeof iconMap];
  if (!Icon) return null;
  
  return <Icon {...props} />;
};


/**
 * TeamMember Type
 * 
 * Defines the structure of a team member object
 */
type TeamMember = {
  id: string;               // Unique identifier for the team member
  name: string;             // Full name of the team member
  role: string;             // Role/position in the team
  department: string;       // Department/team they belong to
  image: string;            // URL to the team member's photo
  bio: string;              // Short biography or description
  social: {                 // Social media links (all optional)
    linkedin?: string;      // LinkedIn profile URL
    github?: string;        // GitHub profile URL
    twitter?: string;       // Twitter profile URL
    email?: string;         // Email address
    behance?: string;       // Behance portfolio URL
    dribbble?: string;      // Dribbble portfolio URL
    youtube?: string;       // YouTube channel URL
    instagram?: string;     // Instagram profile URL
    medium?: string;        // Medium profile URL
    spotify?: string;       // Spotify profile URL
  };
  skills: string[];         // Array of skills/tags
};

/**
 * TeamDepartment Type
 * 
 * Groups team members by their department/team
 */
type TeamDepartment = {
  id: string;               // Unique identifier for the department
  name: string;             // Name of the department
  description: string;      // Description of the department
  members: TeamMember[];    // Array of team members in this department
};

/**
 * Team Departments Data
 * 
 * Contains the complete organizational structure of the IOTA JU team.
 * Organized by departments with each department containing:
 * - Department metadata (id, name, description)
 * - Array of team members with their details
 * 
 * This data powers the team page and is used to render department sections
 * and individual team member cards.
 */
const teamDepartments: TeamDepartment[] = [
  {
    id: 'advisors',
    name: 'Faculty Advisors',
    description: 'Guiding the team with their expertise and wisdom',
    members: [
      {
        id: 'a1',
        name: 'Dr. Chinmoy Ghorai',
        role: 'Faculty Advisor',
        department: 'ETCE',
        image: '/assets/team images/chinmoysir.jpeg',
        bio: 'Faculty advisor providing guidance and support for the IOTA JU .',
        social: {
          linkedin: 'https://www.linkedin.com/in/dr-chinmoy-ghorai',
          email: 'chinmoy.ghorai@gmail.com'
        },
        skills: ['Mentorship', 'Research', 'AI/ML']
      },
      {
        id: 'a2',
        name: 'Dr. Sheli Sinha Chaudhuri',
        role: 'Faculty Co-Advisor',
        department: 'ETCE',
        image: '/assets/team images/shelimaam.jpeg',
        bio: 'Faculty co-advisor supporting the IOTA JU initiatives and activities.',
        social: {
          linkedin: 'https://www.linkedin.com/in/dr-sheli-sinha-chaudhuri',
          email: 'sheli.sinha@jadavpuruniversity.in'
        },
        skills: ['Mentorship', 'Academic Guidance', 'Research']
      }
    ]
  },
  {
    id: 'board',
    name: 'Board',
    description: 'Leading the strategic direction of IOTA JU',
    members: [
      {
        id: 'b1',
        name: 'Saptarshi Garai',
        role: 'Head of Public Relations and Operations',
        department: 'ETCE',
        image: '/assets/team images/saptarshi.jpeg',
        bio: 'Leading public relations and operational strategies for IOTA JU.',
        social: {
          linkedin: 'https://www.linkedin.com/in/saptarshi-garai',
          github: 'https://github.com/Sap-7',
          instagram: 'https://instagram.com/garaisapta_7',
          email: 'saptarshigarai01@gmail.com'
        },
        skills: ['Public Relations', 'Operations', 'Leadership']
      },
      {
        id: 'b2',
        name: 'Anish Chanda',
        role: 'Head of Content',
        department: 'ETCE',
        image: '/assets/team images/Koach.png',
        bio: 'Overseeing content strategy and development for IOTA JU.',
        social: {
          linkedin: 'https://www.linkedin.com/in/anish-chanda',
          github: 'https://github.com/GAZ739',
          instagram: 'https://instagram.com/anish_chanda_1',
          email: 'anish.chanda28@gmail.com'
        },
        skills: ['Content Strategy', 'Writing', 'Editing']
      },
      {
        id: 'b3',
        name: 'Anurag Kar',
        role: 'Head of Tech',
        department: 'ETCE',
        image: '/assets/team images/Anurag.jpeg',
        bio: 'Leading the technical initiatives and development at IOTA JU.',
        social: {
          linkedin: 'https://www.linkedin.com/in/anurag-kar',
          github: 'https://github.com/Anurag369-create',
          instagram: 'https://instagram.com/anuragkar52',
          email: 'anuragkar660@gmail.com'
        },
        skills: ['Technical Leadership', 'AI/ML', 'Development']
      },
      {
        id: 'b4',
        name: 'Nayan Singha',
        role: 'Head of Design',
        department: 'ETCE',
        image: '/assets/team images/Nayan.png',
        bio: 'Leading the design vision and creative direction for IOTA JU.',
        social: {
          linkedin: 'https://www.linkedin.com/in/nayan-singha',
          instagram: 'https://instagram.com/with_void',
          email: 'singhnayan007@gmail.com'
        },
        skills: ['UI/UX Design', 'Branding', 'Visual Design']
      },
      {
        id: 'b5',
        name: 'Srijan Roy',
        role: 'Head of Web Development',
        department: 'ETCE',
        image: '/assets/team images/srijan.jpg',
        bio: 'Leading web development initiatives and technical implementations.',
        social: {
          linkedin: 'https://www.linkedin.com/in/srijan-roy',
          github: 'https://github.com/SrijanRoy123-github',
          instagram: 'https://instagram.com/srijanroysr10',
          email: 'srijanroysr10@gmail.com'
        },
        skills: ['Web Development', 'Frontend', 'Backend']
      },
      {
        id: 'b6',
        name: 'Parthiv Paul',
        role: 'Board Member',
        department: 'ETCE',
        image: '/assets/team images/parthiv.jpeg',
        bio: 'Contributing to the strategic direction and initiatives of IOTA JU.',
        social: {
          linkedin: 'https://www.linkedin.com/in/parthiv-paul',
          github: 'https://github.com/ParthivPaul1',
          instagram: 'https://instagram.com/parthivpaul17',
          email: 'parthivpaul1@gmail.com'
        },
        skills: ['Strategy', 'Leadership', 'Coordination']
      }
    ]
  },
  {
    id: 'team-leads',
    name: 'Team Leads',
    description: 'Leading various technical and operational teams',
    members: [
      {
        id: 'tl1',
        name: 'Soham Saha',
        role: 'Head of Web Development',
        department: 'Team Leads',
        image: '/assets/team images/sohamsaha.jpg',
        bio: 'Leading the web development team in building and maintaining digital solutions.',
        social: {
          linkedin: 'https://www.linkedin.com/in/soham-saha-123456',
          github: 'https://github.com/sohamsaha',
          email: 'soham@example.com'
        },
        skills: ['Web Development', 'Frontend', 'Backend']
      },
      {
        id: 'tl2',
        name: 'Arghya Pratim Biswas',
        role: 'Head of Operations',
        department: 'Team Leads',
        image: '/assets/team images/arghyapratim.jpg',
        bio: 'Overseeing operational strategies and team coordination.',
        social: {
          linkedin: '#',
          email: 'arghya@example.com'
        },
        skills: ['Operations', 'Management', 'Coordination']
      },
      {
        id: 'tl3',
        name: 'Subhojit Khatua',
        role: 'Head of Tech',
        department: 'Team Leads',
        image: '/assets/team images/subhojeetkhatua.jpeg',
        bio: 'Leading technical initiatives and innovation.',
        social: {
          linkedin: '#',
          email: 'subhojit@example.com'
        },
        skills: ['Technical Leadership', 'AI/ML', 'Development']
      },
      {
        id: 'tl4',
        name: 'Sahana Sharmin',
        role: 'Head of PR',
        department: 'Team Leads',
        image: '/assets/team images/sahanasharmin.jpg',
        bio: 'Leading public relations and communications.',
        social: {
          linkedin: 'https://www.linkedin.com/in/sahana-sharmin',
          email: 'sahana@example.com'
        },
        skills: ['Public Relations', 'Communication', 'Networking']
      },
      {
        id: 'tl5',
        name: 'Rohit Sharma',
        role: 'Head of Design',
        department: 'Team Leads',
        image: '/assets/team images/ROHITSHARMA.jpeg',
        bio: 'Leading the design vision and creative direction.',
        social: {
          linkedin: '#',
          email: 'rohit@example.com'
        },
        skills: ['UI/UX', 'Graphic Design', 'Branding']
      },
      {
        id: 'tl6',
        name: 'Koushik Kar',
        role: 'Head of Content',
        department: 'Team Leads',
        image: '/assets/team images/koushikkar.jpeg',
        bio: 'Leading content strategy and development.',
        social: {
          linkedin: 'https://www.linkedin.com/in/koushik-kar',
          email: 'koushik@example.com'
        },
        skills: ['Content Strategy', 'Writing', 'Editing']
      }
    ]
  },
  {
    id: 'web',
    name: 'Web Development',
    description: 'Building and maintaining the digital presence',
    members: [
      {
        id: 'w1',
        name: 'Soham Saha',
        role: 'Lead Developer',
        department: 'Web Development',
        image: '/assets/team images/sohamsaha.jpg',
        bio: 'Full-stack developer with expertise in modern web technologies and blockchain integration.',
        social: {
          linkedin: '#',
          github: '#',
          email: 'ryan.park@example.com'
        },
        skills: ['React', 'Node.js', 'TypeScript', 'Next.js']
      },
      {
        id: 'w2',
        name: 'Soumojeet Pan',
        role: 'Frontend Developer',
        department: 'Web Development',
        image: '/assets/team images/soumojeet.jpg',
        bio: 'Passionate about creating beautiful and responsive user interfaces.',
        social: {
          linkedin: '#',
          github: '#',
          email: 'lisa.wong@example.com'
        },
        skills: ['React', 'CSS', 'UI/UX']
      },
      {
        id: 'w3',
        name: 'Trishita Biswas',
        role: 'Backend Developer',
        department: 'Web Development',
        image: '/assets/team images/Trishita.jpeg',
        bio: 'Backend specialist with experience in building scalable APIs.',
        social: {
          linkedin: '#',
          github: '#',
          email: 'james.wilson@example.com'
        },
        skills: ['Node.js', 'Python', 'API Design']
      },
      {
        id: 'w4',
        name: 'Arnab Kuiry',
        role: 'Full Stack Developer',
        department: 'Web Development',
        image: '/assets/team images/arnabkuiry.jpg',
        bio: 'Versatile developer with experience across the stack.',
        social: {
          linkedin: '#',
          github: '#',
          email: 'aisha.khan@example.com'
        },
        skills: ['JavaScript', 'React', 'Express']
      },
      {
        id: 'w5',
        name: 'Abhay Singh',
        role: 'AI/ML Developer',
        department: 'Web Development',
        image: '/assets/team images/abhay.jpg',
        bio: 'Specialized in AI/ML and devops integration.',
        social: {
          linkedin: '#',
          github: '#',
          email: 'carlos.rodriguez@example.com'
        },
        skills: [ 'DevOps' ,'AI/ML', 'Frontend']
      },
      {
        id: 'w6',
        name: 'Anik Das',
        role: 'UI/UX Developer',
        department: 'Web Development',
        image: '/assets/team images/AnikDas.jpeg',
        bio: 'Focused on creating intuitive user experiences.',
        social: {
          linkedin: '#',
          behance: '#',
          email: 'nina.patel@example.com'
        },
        skills: ['Figma', 'UI Design', 'Prototyping']
      },
      {
        id: 'w7',
        name: 'Arghya Pratim Biswas',
        role: 'DevOps Engineer',
        department: 'Web Development',
        image: '/assets/team images/arghyapratim.jpg',
        bio: 'Ensuring smooth deployments and infrastructure.',
        social: {
          linkedin: '#',
          github: '#',
          email: 'david.kim@example.com'
        },
        skills: ['Docker', 'AWS', 'CI/CD']
      },
      {
        id: 'w8',
        name: 'Nilay Agarwal',
        role: 'Frontend Developer',
        department: 'Web Development',
        image: '/assets/team images/nilayagarwal.jpg',
        bio: 'Passionate about building responsive and accessible web applications.',
        social: {
          linkedin: '#',
          github: '#',
          email: 'sophia.chen@example.com'
        },
        skills: ['React', 'TypeScript', 'Accessibility']
      }
    ]
  },
  {
    id: 'pr',
    name: 'PR & Logistics',
    description: 'Managing communications, building relationships, and handling logistics',
    members: [
      {
        id: 'p1',
        name: 'Devanjan Biswas',
        role: 'PR & Logistics Team Member',
        department: 'ETCE',
        image: '/assets/team images/devanjan.jpg',
        bio: 'Dedicated to managing public relations and ensuring smooth operations.',
        social: {
          linkedin: 'https://www.linkedin.com/in/devanjan-biswas',
          instagram: 'https://instagram.com/the.cliff19',
          email: 'devanjan.biswas100@gmail.com'
        },
        skills: ['Public Relations', 'Communication', 'Event Management']
      },
      
      {
        id: 'p3',
        name: 'Manish Kumar',
        role: 'PR & Logistics Team Member',
        department: 'ETCE',
        image: '/assets/team images/manish.jpg',
        bio: 'Skilled in media relations and strategic communications.',
        social: {
          email: 'mkmkumar282@gmail.com',
          instagram: 'https://instagram.com/mannish.kr'
        },
        skills: ['Media Relations', 'Communication', 'Social Media']
      },
      
      {
        id: 'p5',
        name: 'Sahana Sharmin',
        role: 'PR & Logistics Team Member',
        department: 'Architecture Engineering',
        image: '/assets/team images/sahanasharmin.jpg',
        bio: 'Passionate about building connections and managing public relations.',
        social: {
          email: 'sahanasarmin54@gmail.com',
          instagram: 'https://instagram.com/its_sahana.25'
        },
        skills: ['Public Relations', 'Event Planning', 'Communication']
      },
      
      
    ]
  },
  {
    id: 'tech',
    name: 'Technical Team',
    description: 'Driving innovation in AI/ML, hardware, and electronics',
    members: [
      {
        id: 't1',
        name: 'Maitreya Gupta',
        role: 'Tech Team Member',
        department: 'ETCE',
        image: '/assets/team images/maitreyoda.jpeg',
        bio: 'Passionate about AI/ML and its real-world applications.',
        social: {
          linkedin: 'https://www.linkedin.com/in/maitreya-gupta',
          github: 'https://github.com/Assam157',
          instagram: 'https://instagram.com/mgshadow12',
          email: 'maitreyaguptaa@gmail.com'
        },
        skills: ['AI/ML', 'Python', 'Data Science']
      },
      
      {
        id: 't3',
        name: 'Arnab Karmakar',
        role: 'Tech Team Member',
        department: 'ETCE',
        image: '/assets/team images/arnabkarmakar.jpg',
        bio: 'Expert in embedded systems and firmware development.',
        social: {
          linkedin: 'https://www.linkedin.com/in/arnab-karmakar',
          instagram: 'https://instagram.com/a.k_4_p',
          email: 'arnabk.2019@gmail.com'
        },
        skills: ['Embedded C', 'RTOS', 'Hardware Debugging']
      },
      {
        id: 't4',
        name: 'Subhojit Khatua',
        role: 'Tech Team Member',
        department: 'ETCE',
        image: '/assets/team images/subhojeetkhatua.jpeg',
        bio: 'Specialized in computer vision and machine learning applications.',
        social: {
          linkedin: 'https://www.linkedin.com/in/subhojit-khatua',
          github: 'https://github.com/zerebo-hub',
          instagram: 'https://instagram.com/frinken_stein',
          email: 'subhojitkhatua8@gmail.com'
        },
        skills: ['Computer Vision', 'Deep Learning', 'Python']
      },
      {
        id: 't5',
        name: 'Saikat Dutta',
        role: 'Tech Team Member',
        department: 'Chemical Engineering',
        image: '/assets/team images/saikat.png',
        bio: 'Focused on AI model optimization and deployment.',
        social: {
          linkedin: 'https://www.linkedin.com/in/saikat-dutta',
          instagram: 'https://instagram.com/saikatdutta598',
          email: 'saikatdutta598@gmail.com'
        },
        skills: ['Machine Learning', 'Neural Networks', 'Model Optimization']
      }
    ]
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Creating compelling visual identities and experiences',
    members: [
      {
        id: 'd1',
        name: 'Rohit Sharma',
        role: 'Design Team Member',
        department: 'ETCE',
        image: '/assets/team images/ROHITSHARMA.jpeg',
        bio: 'Creative designer passionate about creating impactful visual experiences.',
        social: { 
          github: 'https://github.com/Rohits-007',
          linkedin: 'https://www.linkedin.com/in/rohit-sharma',
          instagram: 'https://instagram.com/artistic.rohits',
          email: 'rohitsharma.9.c.1.2020@gmail.com'
        },
        skills: ['UI/UX', 'Figma', 'Illustration', 'Branding']
      },

      {
        id: 'd2',
        name: 'Ayantika Datta',
        role: 'Design Team Member',
        department: 'ETCE',
        image: '/assets/team images/ayantika.jpeg',
        bio: 'Passionate about creating intuitive and beautiful user experiences through design.',
        social: { 
          linkedin: 'https://www.linkedin.com/in/ayantika-datta',
          github: 'https://github.com/ayantika13',
          instagram: 'https://instagram.com/ayantika_core13',
          email: 'ayantikainbox@gmail.com'
        },
        skills: ['UI Design', 'User Research', 'Prototyping', 'Visual Design']
      }
      
    ]
  },
  {
    id: 'content',
    name: 'Content Team',
    description: 'Crafting engaging content and narratives',
    members: [
      {
        id: 'c1',
        name: 'Koushik Kar',
        role: 'Content Team Member',
        department: 'ETCE',
        image: '/assets/team images/koushikkar.jpeg',
        bio: 'Passionate about creating informative and engaging content about blockchain technology.',
        social: {
          github: 'https://github.com/kousik2006',
          linkedin: 'https://www.linkedin.com/in/koushik-kar',
          instagram: 'https://instagram.com/_kousik_kar',
          email: 'kousikkar40@gmail.com'
        },
        skills: ['Content Writing', 'Research', 'Blockchain']
      },
      {
        id: 'c2',
        name: 'Pranjal Deb',
        role: 'Content Team Member',
        department: 'Printing and Packaging Engineering',
        image: '/assets/team images/pranjal.jpeg',
        bio: 'Skilled in creating compelling narratives and visual content.',
        social: {
          linkedin: 'https://www.linkedin.com/in/pranjal-deb',
          email: 'debpranjal03@gmail.com'
        },
        skills: ['Content Creation', 'Editing', 'Visual Communication']
      },
      {
        id: 'c3',
        name: 'Mrittika Biswas',
        role: 'Content Team Member',
        department: 'Electrical Engineering',
        image: '/assets/team images/mrittikabiswas.jpeg',
        bio: 'Passionate about technical writing and content development.',
        social: {
          linkedin: 'https://www.linkedin.com/in/mrittika-biswas',
          email: 'mrittikabiswas2024@gmail.com'
        },
        skills: ['Technical Writing', 'Research', 'Content Strategy']
      },
      {
        id: 'c4',
        name: 'Aratrika Pahari',
        role: 'Content Team Member',
        department: 'ETCE',
        image: '/assets/team images/aratrikapahari.jpg',
        bio: 'Creating engaging and informative content about technology.',
        social: {
          linkedin: 'https://www.linkedin.com/in/aratrika-pahari',
          email: 'apbiswas15a06r2005g@gmail.com'
        },
        skills: ['Content Writing', 'Editing', 'Social Media']
      },
      {
        id: 'c5',
        name: 'Sandip Ghosh',
        role: 'Content Team Member',
        department: 'ETCE',
        image: '/assets/team images/Sandipghosh.jpeg',
        bio: 'Dedicated to creating high-quality technical content.',
        social: {
          linkedin: 'https://www.linkedin.com/in/sandip-ghosh',
          email: 'sandip.ghosh@example.com'
        },
        skills: ['Technical Writing', 'Documentation', 'Research']
      },

      {
        id: 'c6',
        name: 'Akashdeep Yadav',
        role: 'Content Team Member',
        department: 'ETCE',
        image: '/assets/team images/akashdeepyadav.jpeg',
        bio: 'Passionate about creating engaging and informative content about technology.',
        social: {
          linkedin: 'https://www.linkedin.com/in/akashdeep-yadav',
          email: 'sandip.ghosh@example.com'
        },
        skills: ['Content Writing', 'Editing', 'Social Media']
      }
    ]
  }
];

/**
 * TeamCard Component
 * 
 * Displays a single team member's information in a card format.
 * Features:
 * - Animated entry with staggered delay based on index
 * - Hover effects with additional details
 * - Social media links
 * - Skills tags
 * 
 * @param {Object} props - Component props
 * @param {TeamMember} props.member - Team member data to display
 * @param {number} props.index - Index used for staggered animations
 * @returns {JSX.Element} Rendered team member card
 */
const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  // Track hover state for interactive effects
  const [isHovered, setIsHovered] = useState(false);
  
  // Ref for the card element to check if it's in viewport
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Check if the card is in the viewport (only once)
  const isInView = useInView(cardRef, { once: true });

  return (
    // Main card container with animation and hover effects
    <motion.div
      ref={cardRef}
      // Initial state (hidden, slightly below)
      initial={{ opacity: 0, y: 20 }}
      // Animate when in view with staggered delay based on index
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 20,
        transition: { delay: index * 0.1 } // Staggered animation
      }}
      // Hover animation
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="relative group bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col items-center text-center w-[280px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Team member: ${member.name}, ${member.role}`}
    >
      {/* Card content container */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Member image - full width */}
        <div className="w-full aspect-square overflow-hidden">
          <img 
            src={member.image} 
            alt={`${member.name}'s profile picture`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Hover overlay effect */}
          <motion.div 
            className="absolute inset-0 bg-primary/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          />
        </div>
        
        {/* Content section */}
        <div className="p-2.5 w-full">
          {/* Member name and role */}
          <div className="space-y-1 w-full">
            <h3 className="text-base font-semibold">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
            <div className="mt-2">
              <span 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                aria-label={`Department: ${member.department}`}
              >
                {member.department}
              </span>
            </div>
          </div>
          
          {/* Member bio */}
          <div className="mt-2">
            <p className="text-sm text-muted-foreground text-center line-clamp-2" aria-label="Bio">
              {member.bio}
            </p>
          </div>
        </div>
        
        {/* Skills/tags section */}
        <div 
          className="flex flex-wrap justify-center gap-1.5 mb-4 mt-3 px-2"
          aria-label="Skills"
        >
          {member.skills.map((skill, i) => (
            <span 
              key={i}
              className="text-[11px] px-1.5 py-0.5 bg-muted/80 rounded-full"
              aria-label={skill}
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* Social media links */}
        <div 
          className="flex justify-center gap-3 mt-4"
          aria-label="Social media links"
        >
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
      
      {/* Animated background gradient that appears on hover */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          // Initial gradient position
          background: 'radial-gradient(circle at 75% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
        }}
        // Animate gradient position for subtle movement effect
        animate={{
          background: [
            'radial-gradient(circle at 75% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 25% 70%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 75% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10, // Longer duration for subtle animation
          repeat: Infinity, // Loop the animation
          ease: 'easeInOut', // Smooth easing
        }}
        aria-hidden="true" // Hide from screen readers as it's purely decorative
      />
    </motion.div>
  );
};

/**
 * TeamPage Component
 * 
 * Main page component that displays the entire team in an organized layout.
 * Features:
 * - Department-based filtering of team members
 * - Search functionality to find specific members
 * - Responsive grid layout
 * - Smooth animations and transitions
 * 
 * @returns {JSX.Element} The rendered team page
 */
export default function TeamPage() {
  // State for active department filter
  const [activeTeam, setActiveTeam] = useState('all');
  
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // Ref for the container element for scroll behavior
  const containerRef = useRef<HTMLDivElement>(null);
  
  /**
   * Get all team members across all departments
   * Used when 'All' filter is selected
   */
  const allMembers = teamDepartments.flatMap(dept => dept.members);

  /**
   * Filter members based on:
   * 1. Active department filter
   * 2. Search query (name, role, or skills)
   */
  const filteredMembers = (
    activeTeam === 'all' 
      ? allMembers 
      : teamDepartments.find(dept => dept.id === activeTeam)?.members || []
  ).filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.skills.some(skill => 
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  /**
   * Get the display name for the active team/department
   * Shows 'Our Team' when viewing all teams or the specific department name
   */
  const activeTeamName = activeTeam === 'all' 
    ? 'Our Team' 
    : teamDepartments.find(d => d.id === activeTeam)?.name || 'Team';

  /**
   * Group filtered members by their respective departments
   * This creates an array of departments that only includes departments
   * containing members that match the current search/filter criteria
   */
  const membersByTeam = teamDepartments.reduce((acc, team) => {
    // Find all members in this department that match the current filters
    const teamMembers = filteredMembers.filter(member => 
      team.members.some(m => m.id === member.id)
    );
    
    // Only include departments that have matching members
    if (teamMembers.length > 0) {
      acc.push({
        id: team.id,
        name: team.name,
        description: team.description,
        members: teamMembers
      });
    }
    return acc;
  }, [] as Array<{id: string, name: string, description: string, members: TeamMember[]}>);

  return (
    // Main container with minimum height to fill the viewport
    <div className="min-h-screen relative" ref={containerRef}>
      {/* Page content container with responsive padding */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Animated header section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* Main heading with gradient text */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Our IoT & Innovation Team
          </h1>
          
          {/* Subtitle/description */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse team of engineers, researchers, and developers driving innovation in IoT, machine learning, and distributed systems with IOTA technology
          </p>
          
          {/* Search and filter section */}
          <div className="mt-8 max-w-2xl mx-auto">
            {/* Search input with icon */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search team members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 rounded-full border border-input bg-background text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                aria-label="Search team members"
              />
              {/* Search icon */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
            
            {/* Department filter tabs */}
            <div className="mt-6 w-full flex justify-center">
              {/* Container for filter tabs with subtle background */}
              <div className="bg-muted/30 rounded-full p-0.5 inline-flex">
                {/* Inner container for the tabs */}
                <div className="flex rounded-full bg-background shadow-sm divide-x divide-muted/20 overflow-x-auto">
                  {/* 'All' filter button */}
                  <button
                    onClick={() => setActiveTeam('all')}
                    className={`px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap ${
                      activeTeam === 'all'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:bg-muted/50'
                    }`}
                    aria-pressed={activeTeam === 'all'}
                    aria-label="Show all team members"
                  >
                    All
                  </button>
                  {/* Department filter buttons */}
                  {teamDepartments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setActiveTeam(dept.id)}
                      className={`px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap ${
                        activeTeam === dept.id
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-muted-foreground hover:bg-muted/50'
                      }`}
                      aria-pressed={activeTeam === dept.id}
                      aria-label={`Show ${dept.name} team`}
                    >
                      {dept.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Team Filter Buttons */}

      {/* Animated container for team sections */}
      <AnimatePresence mode="wait">
        <motion.div 
          layout
          className="space-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Check if there are any members to display */}
          {membersByTeam.length > 0 ? (
            // Map through each department with members
            membersByTeam.map((team) => (
              <motion.div 
                key={team.id}
                className="w-full mb-12"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <motion.div 
                  className="relative mb-12 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-center">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {team.name}
                    </span>
                  </h3>
                </motion.div>
                <div className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 max-w-[900px] mx-auto" style={{ justifyItems: 'center' }}>
                    {team.members.map((member, index) => (
                      <TeamCard 
                        key={member.id}
                        member={member}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            // No results state
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
              aria-live="polite"
              aria-atomic="true"
            >
              {/* No results illustration */}
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
              
              {/* No results message */}
              <h3 className="text-xl font-semibold mb-2">No team members found</h3>
              <p className="text-muted-foreground">
                {searchQuery 
                  ? `No team members match "${searchQuery}"`
                  : 'No team members available at the moment.'
                }
              </p>
              
              {/* Clear search button (only shown when there's an active search) */}
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
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
  );
}