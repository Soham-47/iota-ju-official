import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

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

export default function EventsPage() {
  const upcomingEvents: EventType[] = [
    {
      id: '1',
      title: 'AI/ML Workshop Series',
      description: 'Join us for an in-depth technical workshop on machine learning fundamentals and practical applications. Perfect for developers and researchers looking to enhance their AI/ML skills.',
      date: '2023-11-15',
      time: '14:00 - 17:00',
      location: 'Tech Hub JU, Room 3.14',
      image: '/placeholder-event-1.jpg',
      type: 'workshop',
      registrationLink: '#',
      attendees: 24
    },
    {
      id: '2',
      title: 'AI for Social Impact',
      description: 'A panel discussion on how artificial intelligence and machine learning can be leveraged for social good and sustainable development goals.',
      date: '2023-12-05',
      time: '16:00 - 18:00',
      location: 'University Main Auditorium',
      image: '/placeholder-event-2.jpg',
      type: 'talk',
      registrationLink: '#',
      attendees: 150
    },
    {
      id: '3',
      title: 'AI & Hardware Hackathon 2023',
      description: 'A 48-hour hackathon where participants will build innovative solutions using AI/ML and hardware technologies. Prizes for the best projects!',
      date: '2024-01-20',
      time: '09:00',
      location: 'Innovation Center JU',
      image: '/placeholder-event-3.jpg',
      type: 'hackathon',
      registrationLink: '#',
      attendees: 80
    },
  ];

  const pastEvents: EventType[] = [
    {
      id: 'past-1',
      title: 'Introduction to IOTA for Beginners',
      description: 'An introductory session for students new to IOTA and distributed ledger technology.',
      date: '2023-09-10',
      time: '15:00 - 17:00',
      location: 'Computer Science Building, Room 101',
      image: '/placeholder-event-4.jpg',
      type: 'workshop',
      attendees: 45
    },
    {
      id: 'past-2',
      title: 'IOTA Meetup & Networking',
      description: 'Casual meetup for IOTA enthusiasts to network and share ideas.',
      date: '2023-08-22',
      time: '18:00 - 20:00',
      location: 'Campus Cafe',
      image: '/placeholder-event-5.jpg',
      type: 'meetup',
      attendees: 32
    }
  ];

  const getEventTypeColor = (type: EventType['type']) => {
    switch(type) {
      case 'workshop': return 'bg-blue-100 text-blue-800';
      case 'hackathon': return 'bg-purple-100 text-purple-800';
      case 'talk': return 'bg-green-100 text-green-800';
      case 'meetup': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join us for workshops, hackathons, talks, and networking events
        </p>
      </motion.div>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden border flex flex-col h-full"
            >
              <div className="h-48 bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <div className="absolute top-4 right-4 z-20">
                  <span className={`text-xs px-3 py-1 rounded-full ${getEventTypeColor(event.type)}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
                <div className="mt-auto pt-4">
                  {event.registrationLink ? (
                    <Button className="w-full" asChild>
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        Register Now <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  ) : (
                    <Button className="w-full" variant="outline" disabled>
                      Registration Closed
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Past Events</h2>
        <div className="space-y-6">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border flex flex-col md:flex-row gap-6"
            >
              <div className="w-full md:w-48 h-32 bg-muted rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${getEventTypeColor(event.type)} self-start sm:self-center`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
