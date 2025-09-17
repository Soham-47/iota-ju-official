import { ProjectType } from '@/types';

const projects: ProjectType[] = [
  {
    id: '1',
    slug: '4-wheeler-automation',
    title: '4-Wheeler Automation',
    description: 'Revolutionizing autonomous transportation with cutting-edge technology',
    longDescription: 'Our 4-Wheeler Automation project represents a significant leap forward in autonomous vehicle technology. This innovative system combines advanced sensors, machine learning algorithms, and real-time data processing to create a safe and efficient self-driving experience.',
    tags: ['IoT', 'Edge Computing', 'ML', 'Raspberry Pi', 'Sensor Networks'],
    image: '/assets/projects images/4wheeler.jpg',
    githubUrl: '#',
    demoUrl: '#',
    team: ['Alex Johnson', 'Sarah Kim', 'Michael Chen'],
    status: 'active',
    startDate: '2023-06-15',
    technologies: ['Raspberry Pi', 'Python', 'TensorFlow', 'OpenCV', 'ROS'],
    challenges: [
      'Real-time object detection in varying weather conditions',
      'Path planning in dynamic environments',
      'Ensuring fail-safe mechanisms'
    ],
    solutions: [
      'Implemented YOLOv5 for robust object detection',
      'Developed a hybrid path planning algorithm',
      'Integrated redundant sensor systems for reliability'
    ]
  },
  {
    id: '2',
    slug: '2-wheeler-automation',
    title: '2-Wheeler Automation',
    description: 'An innovative autonomous vehicle project focusing on navigation, obstacle detection, and smart control systems.',
    longDescription: 'This project implements vibration and temperature sensors on industrial machinery to predict maintenance needs using machine learning. Data is processed at the edge using NVIDIA Jetson devices with secure data transmission and storage.',
    tags: ['IIoT', 'Machine Learning', 'Edge AI', 'Raspberry Pi', 'Predictive Analytics'],
    image: '/assets/projects images/2wheeler.jpg',
    githubUrl: '#',
    demoUrl: '#',
    team: ['David Wilson', 'Emma Garcia', 'James Brown'],
    status: 'active',
    startDate: '2023-08-01',
    technologies: ['NVIDIA Jetson', 'Python', 'PyTorch', 'MQTT', 'InfluxDB'],
    challenges: [
      'Balancing and stability control',
      'Low-latency sensor data processing',
      'Battery optimization for longer operation'
    ],
    solutions: [
      'Developed custom PID controller for stability',
      'Optimized neural networks for edge deployment',
      'Implemented power management system'
    ]
  },
  {
    id: '3',
    slug: 'autonomous-drone-technology',
    title: 'Advanced autonomous drone technology',
    description: 'Autonomous drone technology for various applications',
    longDescription: 'This project implements an autonomous drone system that can perform various tasks such as surveying, delivery, and inspection. The system uses IOTA for secure, feeless machine-to-machine communication and implements distributed decision-making algorithms for swarm intelligence.',
    tags: ['Autonomous Drone', 'Edge AI', 'Computer Vision', 'Raspberry Pi', 'Drone Technology'],
    image: '/assets/projects images/drone.jpg',
    githubUrl: '#',
    demoUrl: '#',
    team: ['Robert Taylor', 'Jennifer Lee', 'Daniel Martinez'],
    status: 'completed',
    startDate: '2023-01-10',
    endDate: '2023-05-20',
    technologies: ['DJI SDK', 'Python', 'ROS', 'IOTA', 'Computer Vision'],
    challenges: [
      'Swarm coordination and collision avoidance',
      'Battery life optimization',
      'Precise GPS navigation'
    ],
    solutions: [
      'Implemented distributed decision-making algorithms',
      'Developed power-aware path planning',
      'Integrated RTK GPS for centimeter-level accuracy'
    ]
  }
];

export default projects;
