import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'; 
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import eventsImage from '@/assets/events.jpg';

const EventsSection = () => {
  const upcomingEvents = [
    {
      title: 'Connexion 2025',
      date: 'December, 2025',
      location: 'Jadavpur University, Kolkata',
      description: 'Build innovative IoT solutions for given problem statements',
      status: 'Upcoming'
    },
    {
      title: 'Orientation 2025',
      date: 'November, 2025',
      location: 'Jadavpur University, Kolkata',
      description: 'Orientation of new members',
      status: 'Upcoming'
    },
    {
      title: 'Lord of the Rings',
      date: 'June, 2025',
      location: 'Jadavpur University, Kolkata',
      participants: '100+ participants',
      description: 'Compete with your remote-controlled cars in a contest ',
      status: 'Completed'
    },
    {
      title: 'Innovatia 2025',
      date: 'July, 2025',
      location: 'Jadavpur University, Kolkata',
      participants: '50+ participants',
      description: 'Hands-on workshop on IoT ',
      status: 'Completed'
    }
  ];

  return (
    <section id="events" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Recent Events Hero */}
        <div className="relative rounded-2xl overflow-hidden mb-16 h-96">
          <img
            src={'/events/homeevnts.jpg'}
            alt="Prize distribution event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
            <div className="max-w-2xl mx-8 text-white">
              <h2 className="text-4xl font-bold mb-4">Recent Events</h2>
              <p className="text-xl mb-6">
                From adrenaline-pumping hackathons to idea-fueled seminars, 
                we bring the IoT revolution to life — all year long.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-500"
              >
                <Trophy className="mr-2 h-5 w-5" />
                View All Events
              </Button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Events, Seminars and Hackathons
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Be where innovation meets action. Join us for exciting events throughout the year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.status === 'Upcoming' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {event.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">{event.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {event.participants}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;