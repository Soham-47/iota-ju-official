import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
const iotaLogo = '/assets/common/iota-logo.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={iotaLogo} alt="IOTA Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold text-primary">IOTA</h3>
                <p className="text-sm text-muted-foreground">Jadavpur University</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Internet of Things Applications Club at Jadavpur University. 
              Exploring the future of connected technology and smart systems.
            </p>
            <div className="flex space-x-2">
              <a 
                href="https://www.facebook.com/people/IOT-Applications-Club-Jadavpur-University/61550560228682/?mibextid=ZbWKwL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/iota_ju/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/iot-applications-club-jadavpur-university/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com/IoTA-Jadavpur-Univeristy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About Us', 'Events', 'Projects', 'Team', 'Gallery', 'Blog'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Jadavpur University<br />
                    188, Raja S.C. Mallick Rd<br />
                    Kolkata, West Bengal 700032
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contact@iotaju.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  contact@iotaju.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+911234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 12345 67890
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates on events and projects.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="w-full"
              />
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-500">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 IOTA - Jadavpur University. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;