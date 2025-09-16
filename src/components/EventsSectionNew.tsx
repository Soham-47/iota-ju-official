import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Calendar, MapPin, Users, Trophy, ArrowRight, Clock } from 'lucide-react';
import eventsImage from '@/assets/events.jpg';

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  const events = {
    upcoming: [
      {
        id: 1,
        title: 'Connexion 2025',
        date: 'December 15-17, 2025',
        time: '10:00 AM - 6:00 PM',
        location: 'Jadavpur University, Kolkata',
        description: 'Annual flagship hackathon where participants build innovative IoT solutions for real-world challenges. Win exciting prizes and get mentorship from industry experts.',
        participants: '200+ participants',
        status: 'upcoming',
        image: eventsImage,
        tags: ['Hackathon', '48 Hours', 'Prizes: ₹2L+']
      },
      {
        id: 2,
        title: 'IoT Workshop Series',
        date: 'November 5-10, 2025',
        time: '2:00 PM - 5:00 PM',
        location: 'IT Department, Jadavpur University',
        description: 'Hands-on workshops covering IoT fundamentals, sensor integration, and cloud connectivity. Perfect for beginners and enthusiasts.',
        participants: '50 seats',
        status: 'upcoming',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        tags: ['Workshop', 'Beginner Friendly', 'Hands-on']
      },
    ],
    past: [
      {
        id: 3,
        title: 'Lord of the Rings',
        date: 'June 20-22, 2025',
        location: 'Jadavpur University, Kolkata',
        description: 'A competitive coding event where participants battled it out to solve algorithmic problems with IoT applications.',
        participants: '120+ participants',
        status: 'completed',
        image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        tags: ['Competition', 'Coding', 'Prizes']
      },
      {
        id: 4,
        title: 'Tech Talk: Future of IoT',
        date: 'April 10, 2025',
        location: 'Online',
        description: 'An insightful session with industry leaders discussing the future trends and career opportunities in IoT.',
        participants: '85 attendees',
        status: 'completed',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80',
        tags: ['Webinar', 'Career', 'Networking']
      }
    ]
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary)/0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Our Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Upcoming & Past Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting workshops, hackathons, and tech talks that shape the future of IoT.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-muted">
            <Button
              variant={activeTab === 'upcoming' ? 'default' : 'ghost'}
              className={`rounded-lg px-6 py-2 font-medium transition-all ${activeTab === 'upcoming' ? 'shadow-md' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Events
            </Button>
            <Button
              variant={activeTab === 'past' ? 'default' : 'ghost'}
              className={`rounded-lg px-6 py-2 font-medium transition-all ${activeTab === 'past' ? 'shadow-md' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              Past Events
            </Button>
          </div>
        </div>

        {/* Events Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {events[activeTab].map((event) => (
              <motion.div
                key={event.id}
                variants={item}
                className="h-full"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-border/30 hover:border-primary/50 transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                      {event.time && (
                        <>
                          <span>•</span>
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    {event.participants && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.participants}</span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{event.description}</p>
                  </CardContent>
                  <CardFooter className="border-t border-border/30">
                    <Button variant="outline" className="group w-full">
                      {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">Want to organize an event with us?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always open to collaborations and sponsorships. Reach out to us to discuss how we can work together.
          </p>
          <Button size="lg" className="group">
            Partner With Us
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
