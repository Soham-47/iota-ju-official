import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import AboutSection from '@/components/AboutSection';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Advancing the Internet of Things
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          At IOTA JU, we're building the future of machine-to-machine communication and IoT infrastructure using IOTA's feeless, scalable distributed ledger technology.
        </p>
      </motion.div>
      
      
      
      <AboutSection extended={true} />
      
      <section className="my-24">
        <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/20 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Mission</h3>
            <p className="text-muted-foreground">
              To build a vibrant ecosystem of IoT engineers, ML researchers, and hardware developers 
              who are pioneering the next generation of machine economies using IOTA's feeless, scalable Tangle technology.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/20 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Vision</h3>
            <p className="text-muted-foreground">
              To be at the forefront of IoT and machine-to-machine communication, 
              creating tangible solutions that leverage IOTA's unique architecture for feeless microtransactions and secure data transfer between devices.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="my-24">
        <h2 className="text-3xl font-bold mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'IoT Innovation',
              description: 'We build at the intersection of hardware, software, and distributed systems.'
            },
            {
              title: 'Open Source',
              description: 'We believe in collaborative development and open knowledge sharing.'
            },
            {
              title: 'Edge Computing',
              description: 'We push processing to the edge for real-time, efficient IoT solutions.'
            },
            {
              title: 'Machine Learning',
              description: 'We leverage AI/ML to create intelligent, autonomous systems.'
            },
            {
              title: 'Sustainability',
              description: 'We develop solutions that are energy-efficient and environmentally conscious.'
            },
            {
              title: 'Interdisciplinary',
              description: 'We bring together experts from hardware, software, and research domains.'
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
