import { motion, AnimatePresence } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { fadeIn, fadeInUp, staggerContainer, pageTransition } from '@/lib/animations';

type EventType = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  type: 'workshop' | 'hackathon' | 'talk' | 'meetup';
  registrationLink?: string;
  attendees: number;
};

const getEventTypeColor = (type: EventType['type']) => {
  switch(type) {
    case 'workshop': return 'bg-blue-100 text-blue-800';
    case 'hackathon': return 'bg-purple-100 text-purple-800';
    case 'talk': return 'bg-green-100 text-green-800';
    case 'meetup': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

// Image gallery component with grid layout
const EventImageGallery = () => {
  // Array of image paths from the events folder
  const eventImages = [
    '/events/gallery pic 1.jpg',
    
    '/events/prizedistribution.jpg',
    
    '/events/carousel4.png',
    
    '/events/carousel6.jpg',
    '/events/carousel7.jpg',
    '/events/aboutus.jpg',
    
    
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {eventImages.map((image, index) => (
        <motion.div 
          key={index}
          className="relative group overflow-hidden rounded-lg aspect-square"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <img 
            src={image} 
            alt={`Event ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium">
              View Image {index + 1}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Keep the original EventGallery component for reference
const EventGallery = ({ events }: { events: EventType[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const eventsWithImages = events.filter(event => event.image);

  // ... rest of the EventGallery component remains the same ...
  return null; // We're not using this component anymore but keeping it for reference
};

export default function EventsPage() {
  const upcomingEvents: EventType[] = [
    {
      id: '1',
      title: 'Connexion 2025',
      description: 'Join us for an in-depth technical workshop on machine learning fundamentals and practical applications. Perfect for developers and researchers looking to enhance their AI/ML skills.',
      date: 'TBD',
      time: 'TBD',
      location: 'TBD',
      image: '/events/connexion.jpg',
      type: 'hackathon',
      registrationLink: '#',
      attendees: null
    },
    {
      id: '2',
      title: 'Orientation 2026',
      description: 'A panel discussion on how artificial intelligence and machine learning can be leveraged for social good and sustainable development goals.',
      date: 'TBD',
      time: 'TBD',
      location: 'TBD',
      image: '/events/orientation.jpg',
      type: 'talk',
      registrationLink: '#',
      attendees: null
    },
    {
      id: '3',
      title: 'Lord of the Rings 2026',
      description: 'A 48-hour hackathon where participants will build innovative solutions using AI/ML and hardware technologies. Prizes for the best projects!',
      date: 'TBD',
      time: 'TBD',
      location: 'TBD',
      image: '/events/lordftherings.jpg',
      type: 'hackathon',
      registrationLink: '#',
      attendees: null
    },
  ];

  const pastEvents: EventType[] = [
    {
      id: 'past-1',
      title: 'Innovatia 2025',
      description: 'INNOVATIA 2025 is the flagship event of IOTA (IoT Applications Club), bringing together innovators, tech enthusiasts, and industry experts for a celebration of technology and creativity. This year\'s theme focuses on "Sustainable Innovation for a Better Tomorrow.',
      date: '2025-07-10',
      time: '15:00 - 17:00',
      location: 'T-3-7 , Prayukti Bhavan , Jadavpur University',
      image: '/events/INNOVATIA.jpg',
      type: 'workshop',
      attendees: 50
    },
    {
      id: 'past-2',
      title: 'Lord of the Rings 2025',
      description: 'LORD OF THE RINGS is an exciting IoT competition that tests participants\' skills in building and programming IoT systems to solve real-world challenges. Inspired by the epic journey in the famous trilogy, participants will navigate through various technical challenges to reach the final goal.',
      date: '2025-05-22',
      time: '18:00 - 20:00',
      location: 'Jadavpur University Salt Lake Campus',
      image: '/events/lordftherings.jpg',
      type: 'hackathon',
      attendees: 50
    }
  ];

  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'all'>('upcoming');

  // Combine all events for the 'all' tab
  const allEvents = [...upcomingEvents, ...pastEvents].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter events based on active tab
  const getFilteredEvents = () => {
    switch(activeTab) {
      case 'upcoming':
        return upcomingEvents;
      case 'past':
        return pastEvents;
      case 'all':
      default:
        return allEvents;
    }
  };

  const filteredEvents = getFilteredEvents();
  const noEvents = filteredEvents.length === 0;

  return (
    <motion.div 
      className="container mx-auto px-4 py-16"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <motion.div
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Events
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Join us for workshops, hackathons, talks, and networking events
        </motion.p>
      </motion.div>
        
        {/* Event Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-muted/50'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'past'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-muted/50'
              }`}
            >
              Past Events
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'all'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-muted/50'
              }`}
            >
              All Events
            </button>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full"
          >
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {noEvents ? (
                <motion.div 
                  className="col-span-full text-center py-12"
                  variants={fadeInUp}
                >
                  <motion.h3 
                    className="text-xl font-medium text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {activeTab === 'upcoming' 
                      ? 'No upcoming events scheduled. Check back soon!'
                      : 'No past events to display.'}
                  </motion.h3>
                </motion.div>
              ) : (
                filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl overflow-hidden border flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
                  >
                    <motion.div 
                      className="h-48 bg-muted relative overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className={`w-full h-full object-contain bg-black ${
                          event.image.includes('orientation.jpg') ? '-mt-4' : ''
                        }`}
                        style={{ objectFit: 'contain' }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 0.5 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute top-4 right-4 z-20">
                        <span className={`text-xs px-3 py-1 rounded-full ${getEventTypeColor(event.type)}`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 z-20 text-white">
                        <h3 className="text-xl font-bold">{event.title}</h3>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="p-6 flex-1 flex flex-col"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="space-y-3 mb-4">
                        <motion.div 
                          className="flex items-center text-sm text-muted-foreground"
                          variants={fadeInUp}
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center text-sm text-muted-foreground"
                          variants={fadeInUp}
                        >
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{event.time}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center text-sm text-muted-foreground"
                          variants={fadeInUp}
                        >
                          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{event.location}</span>
                        </motion.div>
                        {event.attendees && (
                          <motion.div 
                            className="flex items-center text-sm text-muted-foreground"
                            variants={fadeInUp}
                          >
                            <Users className="h-4 w-4 mr-2" />
                            <span>{event.attendees} attendees</span>
                          </motion.div>
                        )}
                      </div>
                      <motion.p 
                        className="text-sm text-muted-foreground mb-4 line-clamp-3"
                        variants={fadeInUp}
                      >
                        {event.description}
                      </motion.p>
                      <motion.div 
                        className="mt-auto pt-4"
                        variants={fadeInUp}
                      >
                        {activeTab === 'upcoming' || event.date === 'TBD' ? (
                          <Button 
                            className="w-full" 
                            variant="outline" 
                            disabled 
                            onClick={(e) => {
                              e.preventDefault();
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                          >
                            Coming Soon
                          </Button>
                        ) : activeTab === 'past' ? (
                          <Button 
                            className="w-full" 
                            variant="outline" 
                            disabled
                            onClick={(e) => {
                              e.preventDefault();
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                          >
                            Registration Closed
                          </Button>
                        ) : (
                          <Button 
                            className="w-full" 
                            variant="outline" 
                            disabled
                            onClick={(e) => {
                              e.preventDefault();
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                          >
                            {new Date(event.date) > new Date() ? 'Coming Soon' : 'Registration Closed'}
                          </Button>
                        )}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Event Gallery Section */}
        <motion.section 
          className="mt-20 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Event Gallery</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Relive the best moments from our past events and workshops
          </p>
          <EventImageGallery />
        </motion.section>
      </motion.div>
    );
  }
