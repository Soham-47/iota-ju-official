import { motion, AnimatePresence } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import AboutSection from '@/components/AboutSection';

// Define animation variants with proper Framer Motion types
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.1
    }
  })
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.1
    }
  })
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.1
    }
  })
};

export default function AboutPage() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-16"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }
        },
        exit: { 
          opacity: 0, 
          y: 20,
          transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-16"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Advancing the Internet of Things
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          At IOTA JU, we're building the future of machine-to-machine communication and IoT infrastructure using IOTA's feeless, scalable distributed ledger technology.
        </motion.p>
      </motion.div>
      
      
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <AboutSection extended={true} />
      </motion.div>
      
      <motion.section 
        className="my-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          viewport={{ once: true, margin: "-50px" }}
        >
          Our Mission & Vision
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={slideInFromLeft}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-secondary/20 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-4"
              variants={fadeInUp}
            >
              Mission
            </motion.h3>
            <motion.p 
              className="text-muted-foreground"
              variants={fadeInUp}
            >
              To build a vibrant ecosystem of IoT engineers, ML researchers, and hardware developers 
              who are pioneering the next generation of machine economies using IOTA's feeless, scalable Tangle technology.
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={slideInFromRight}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-secondary/20 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-4"
              variants={fadeInUp}
            >
              Vision
            </motion.h3>
            <motion.p 
              className="text-muted-foreground"
              variants={fadeInUp}
            >
              To be at the forefront of IoT and machine-to-machine communication, 
              creating tangible solutions that leverage IOTA's unique architecture for feeless microtransactions and secure data transfer between devices.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
      
      <motion.section 
        className="my-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          viewport={{ once: true, margin: "-50px" }}
        >
          Our Values
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
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
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                } 
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.h3 
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  } 
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {value.title}
              </motion.h3>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  } 
                }}
                viewport={{ once: true, margin: "-50px" }}
                // Animation handled by initial and whileInView props
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
