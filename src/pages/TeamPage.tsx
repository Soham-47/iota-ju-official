import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Mail, Twitter, Instagram, Youtube, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

// Simple fallback for social icons
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


type TeamMember = {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
    behance?: string;
    dribbble?: string;
    youtube?: string;
    instagram?: string;
    medium?: string;
    spotify?: string;
  };
  skills: string[];
};

type TeamDepartment = {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
};

const teamDepartments: TeamDepartment[] = [
  {
    id: 'advisors',
    name: 'Faculty Advisors',
    description: 'Guiding the chapter with their expertise and wisdom',
    members: [
      {
        id: 'a1',
        name: 'Dr. Chinmoy Ghorai',
        role: 'Faculty Advisor',
        department: 'ETCE',
        image: '/assets/team images/chinmoysir.jpeg',
        bio: 'Faculty advisor providing guidance and support for the IOTA JU Chapter.',
        social: {
          linkedin: 'https://www.linkedin.com/in/dr-chinmoy-ghorai',
          email: 'chinmoy.ghorai@gmail.com'
        },
        skills: ['Mentorship', 'Research', 'Blockchain']
      },
      {
        id: 'a2',
        name: 'Dr. Sheli Sinha Chaudhuri',
        role: 'Faculty Co-Advisor',
        department: 'ETCE',
        image: '/assets/team images/shelimaam.jpeg',
        bio: 'Faculty co-advisor supporting the IOTA JU Chapter initiatives and activities.',
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
        bio: 'Leading public relations and operational strategies for IOTA JU Chapter.',
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
        image: '/public/assets/team images/Koach.png',
        bio: 'Overseeing content strategy and development for IOTA JU Chapter.',
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
        bio: 'Leading the technical initiatives and development at IOTA JU Chapter.',
        social: {
          linkedin: 'https://www.linkedin.com/in/anurag-kar',
          github: 'https://github.com/Anurag369-create',
          instagram: 'https://instagram.com/anuragkar52',
          email: 'anuragkar660@gmail.com'
        },
        skills: ['Technical Leadership', 'Blockchain', 'Development']
      },
      {
        id: 'b4',
        name: 'Nayan Singha',
        role: 'Head of Design',
        department: 'ETCE',
        image: '/assets/team images/Nayan.png',
        bio: 'Leading the design vision and creative direction for IOTA JU Chapter.',
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
        bio: 'Contributing to the strategic direction and initiatives of IOTA JU Chapter.',
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
    id: 'web',
    name: 'Web Development',
    description: 'Building and maintaining the digital presence of IOTA JU',
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
        role: 'Blockchain Developer',
        department: 'Web Development',
        image: '/public/assets/team images/abhay.jpg',
        bio: 'Specialized in blockchain integration and smart contracts.',
        social: {
          linkedin: '#',
          github: '#',
          email: 'carlos.rodriguez@example.com'
        },
        skills: ['Solidity', 'Ethereum', 'Smart Contracts']
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
        id: 'p2',
        name: 'Arka Chatterjee',
        role: 'PR & Logistics Team Member',
        department: 'ETCE',
        image: '/assets/team images/arka.jpg',
        bio: 'Passionate about building relationships and managing communications.',
        social: {
          email: 'arkachatterjee857@gmail.com',
          instagram: 'https://instagram.com/call_mearka'
        },
        skills: ['Public Relations', 'Networking', 'Coordination']
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
        id: 'p4',
        name: 'Sudipto Biswas',
        role: 'PR & Logistics Team Member',
        department: 'Chemical Engineering',
        image: '/assets/team images/sudiptobiswas.jpeg',
        bio: 'Committed to effective communication and public relations.',
        social: {
          linkedin: 'https://www.linkedin.com/in/sudipto-biswas',
          instagram: 'https://instagram.com/s.i.d.b.i.s.12',
          email: 'sudiptobiswas101@gmail.com'
        },
        skills: ['Public Relations', 'Content Creation', 'Networking']
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
      {
        id: 'p6',
        name: 'Munmun Biswas',
        role: 'PR & Logistics Team Member',
        department: 'ETCE',
        image: '/assets/team images/mumunbiswas.jpg',
        bio: 'Dedicated to managing logistics and public relations effectively.',
        social: {
          linkedin: 'https://www.linkedin.com/in/munmun-biswas',
          instagram: 'https://instagram.com/munmunbiswas530',
          email: 'munmunbiswas530@gmail.com'
        },
        skills: ['Logistics', 'Coordination', 'Public Relations']
      },
      {
        id: 'p7',
        name: 'Avik Das',
        role: 'PR & Logistics Team Member',
        department: 'ETCE',
        image: '/assets/team images/avik.jpg',
        bio: 'Skilled in managing public relations and logistics operations.',
        social: {
          linkedin: 'https://www.linkedin.com/in/avik-das',
          instagram: 'https://instagram.com/avik.das',
          email: 'avik35797@gmail.com'
        },
        skills: ['Public Relations', 'Logistics', 'Event Management']
      }
    ]
  },
  {
    id: 'tech',
    name: 'Tech',
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
        id: 't2',
        name: 'Deepra Basak',
        role: 'Tech Team Member',
        department: 'Electrical Engineering',
        image: '/assets/team images/Deepra Basak.jpeg',
        bio: 'Focused on hardware design and embedded systems development.',
        social: {
          instagram: 'https://instagram.com/basakdeepra',
          email: 'basakdeepra@gmail.com'
        },
        skills: ['Circuit Design', 'Microcontrollers', 'Signal Processing']
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
      },
      {
        id: 'd3',
        name: 'Shoumik Mukherjee',
        role: 'Design Team Member',
        department: 'Mechanical Engineering',
        image: '/assets/team images/shoumikmukherjee.jpg',
        bio: 'Bringing creative solutions to life through thoughtful design and innovation.',
        social: {
          linkedin: 'https://www.linkedin.com/in/shoumik-mukherjee',
          email: 'mshoumik232@gmail.com',
          instagram: 'https://instagram.com/mshoumik232'
        },
        skills: ['Graphic Design', '3D Modeling', 'Product Design']
      }
    ]
  },
  {
    id: 'content',
    name: 'Content',
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

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 20,
        transition: { delay: index * 0.1 }
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="relative group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <motion.div 
              className="absolute inset-0 bg-primary/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold">{member.name}</h3>
            <div className="mt-1">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {member.department}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-sm mb-4 line-clamp-3 mt-2">{member.bio}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {member.skills.map((skill, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 bg-muted rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 mt-3">
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
                <SocialIcon platform={platform} className="w-4 h-4" />
              </a>
            )
          ))}
        </div>
      </div>
      
      {/* Animated background elements */}
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
      />
    </motion.div>
  );
};

export default function TeamPage() {
  const [activeTeam, setActiveTeam] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get all team departments for filtering
  const allMembers = teamDepartments.flatMap(dept => dept.members);

  // Filter members based on active team and search query
  const filteredMembers = (activeTeam === 'all' 
    ? allMembers 
    : teamDepartments.find(dept => dept.id === activeTeam)?.members || []
  ).filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.skills.some(skill => 
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Get the active team's name for the heading
  const activeTeamName = activeTeam === 'all' 
    ? 'Our Team' 
    : teamDepartments.find(d => d.id === activeTeam)?.name || 'Team';

  // Group members by their team for display
  const membersByTeam = teamDepartments.reduce((acc, team) => {
    const teamMembers = filteredMembers.filter(member => 
      team.members.some(m => m.id === member.id)
    );
    
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
    <div className="min-h-screen bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Our IoT & Innovation Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse team of engineers, researchers, and developers driving innovation in IoT, machine learning, and distributed systems with IOTA technology
          </p>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search team members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 rounded-full border border-input bg-background text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
            
            <div className="mt-6 w-full flex justify-center">
              <div className="bg-muted/30 rounded-full p-0.5 inline-flex">
                <div className="flex rounded-full bg-background shadow-sm divide-x divide-muted/20">
                  <button
                    onClick={() => setActiveTeam('all')}
                    className={`px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap ${
                      activeTeam === 'all'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:bg-muted/50'
                    }`}
                  >
                    All
                  </button>
                  {teamDepartments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setActiveTeam(dept.id)}
                      className={`px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap ${
                        activeTeam === dept.id
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-muted-foreground hover:bg-muted/50'
                      }`}
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

      <AnimatePresence>
        <motion.div 
          layout
          className="space-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {membersByTeam.length > 0 ? (
            membersByTeam.map((team) => (
              <motion.div 
                key={team.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    {team.name}
                  </h2>
                  {team.description && (
                    <p className="text-muted-foreground mt-2">{team.description}</p>
                  )}
                </div>
                
                <motion.div 
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6"
                >
                  {team.members.map((member, index) => (
                    <TeamCard 
                      key={member.id} 
                      member={member} 
                      index={index}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="mx-auto w-24 h-24 mb-6 rounded-full bg-muted flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="23" y1="21" x2="16" y2="14"></line>
                  <line x1="16" y1="21" x2="23" y2="14"></line>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">No members found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setActiveTeam('all');
                }}
              >
                Clear filters
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
  );
}