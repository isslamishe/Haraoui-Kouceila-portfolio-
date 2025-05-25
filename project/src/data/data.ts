import { Project, Skill, GalleryImage, SocialLink, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const profileData = {
  name: 'Haraoui Kouceila',
  title: 'AI Developer & Robotics Engineer',
  bio: 'Passionate about building intelligent systems that bridge the gap between the digital world and physical machines. Experienced in AI model development, computer vision, embedded systems, and robotics.',
  resumeUrl: '/resume.pdf',
};

export const skills: Skill[] = [
  // AI/ML Skills
  { name: 'Python', level: 95, category: 'AI/ML' },
  { name: 'TensorFlow', level: 90, category: 'AI/ML' },
  { name: 'PyTorch', level: 85, category: 'AI/ML' },
  { name: 'Scikit-learn', level: 80, category: 'AI/ML' },
  
  // Robotics Skills
  { name: 'ROS', level: 90, category: 'Robotics' },
  { name: 'Arduino', level: 85, category: 'Robotics' },
  { name: 'Raspberry Pi', level: 90, category: 'Robotics' },
  { name: 'C', level: 85, category: 'Robotics' },
  
  


];

export const projects: Project[] = [
  {
    id: 'autonomous-delivery-robot',
    title: 'MotherFucker robot',
    description: 'Built and programmed a robot using ROS for campus delivery tasks. The robot uses SLAM for navigation, obstacle avoidance, and can carry packages up to 5kg. It features a touchscreen interface for recipient verification.',
    techStack: [ 'Python', 'C','ROS'],
    imageUrl: '/5881878049274841208.jpg',

  },
  {
    id: 'ai-chatbot-companion',
    title: 'IRTH AI Chatbot Companion',
    description: 'A conversational AI trained using transformers for home robotics. The chatbot can control smart home devices, answer queries, and provide companionship. It continuously learns from interactions to improve responses.',
    techStack: ['PyTorch', 'Transformers', 'NLP', 'Python', 'TTS'],
    imageUrl: '/Screenshot 2025-05-25 232323.png',
   
  },
/*  {
    id: 'face-recognition-drone',
    title: 'Face Recognition Drone',
    description: 'Integrated facial recognition into a drone for smart surveillance. The drone can identify individuals in a database, track their movements, and report unusual activities. Built with privacy features and secure data handling.',
    techStack: ['OpenCV', 'TensorFlow', 'Drone API', 'Python', 'YOLO'],
    imageUrl: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg',
    
  },
{
    id: 'robotic-arm-vision',
    title: 'Robotic Arm with Vision',
    description: 'Designed a robotic arm that picks and places objects using AI vision. The system can identify objects of various shapes and sizes, calculate optimal grasping points, and place them with precision.',
    techStack: ['OpenCV', 'ROS', 'Python', 'Arduino', '3D Printing'],
    imageUrl: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
  
  },*/
];

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: '/5881878049274841208.jpg',
    title: 'Lab Setup',
    description: 'My robotics workbench with various prototypes in development',
  },
  {
    id: '2',
    url: '/5881878049274841208.jpg',
    title: 'Robotic Arm Testing',
    description: 'Fine-tuning the precision of the robotic arm',
  },
  {
    id: '3',
    url: '/5881878049274841208.jpg',
    title: 'Drone Testing',
    description: 'Field testing the facial recognition drone',
  },
  {
    id: '4',
    url: '/5881878049274841208.jpg',
    title: 'AI Assistant Prototype',
    description: 'Early prototype of the AI assistant',
  },
  {
    id: '5',
    url: '/5881878049274841208.jpg',
    title: 'Component Assembly',
    description: 'Assembling electronic components for a new prototype',
  },
  {
    id: '6',
    url: '/5881878049274841208.jpg',
    title: 'PCB Design Testing',
    description: 'Testing a custom PCB for a new robotics project',
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'Twitter',
  },
  {
    platform: 'Instegram',
    url: 'https://www.instagram.com/ax_el.dz',
    icon: 'Instagram',
  },
];