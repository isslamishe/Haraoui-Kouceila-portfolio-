import { socialLinks } from '@/data/data';
import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary-400">
              <span className="text-accent-400">AI</span>Robotics
            </a>
            <p className="mt-2 text-slate-400 max-w-md">
              Building the future with intelligent robots and AI systems. Let's create something amazing together.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const IconComponent = Icons[link.icon as IconName];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-300 hover:bg-primary-600 hover:text-white transition-colors"
                  aria-label={`Follow on ${link.platform}`}
                >
                  {IconComponent && <IconComponent size={18} />}
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Haraoui Kouceila. All rights reserved.
          </p>
             <a href='https://www.instagram.com/isslam._.hessaine'  className="text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
               >
            Portfolio  Developer  : Isslam hassaine
          </a>
          
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;