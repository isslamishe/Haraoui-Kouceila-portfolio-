export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  videoUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'AI/ML' | 'Robotics' | 'Software' | 'Tools';
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}