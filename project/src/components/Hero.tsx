'use client';

import { Download, ChevronDown } from 'lucide-react';
import { profileData } from '@/data/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative pt-16 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute w-full h-full bg-[url('/5881878049274841204.jpg')]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-2 md:order-1"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            <span className="text-primary-600 dark:text-primary-400">
              {profileData.name.split(' ')[0]}
            </span>{' '}
            {profileData.name.split(' ').slice(1).join(' ')}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-xl md:text-2xl font-medium mb-6 text-accent-600 dark:text-accent-400"
          >
            {profileData.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-lg"
          >
            {profileData.bio}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={profileData.resumeUrl}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              download
            >
              <Download size={18} className="mr-2" />
              Download CV
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-transparent border-2 border-accent-600 text-accent-600 dark:text-accent-400 dark:border-accent-400 font-medium hover:bg-accent-600 hover:text-white dark:hover:bg-accent-400 dark:hover:text-slate-900 transition-colors shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Decorative elements - robot/tech themed */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
              <Image
                src="/5881878049274841204.jpg"
                alt="AI Developer & Robotics Engineer"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                priority
                className="object-cover"
              />
            </div>
            
            {/* Tech-themed decorative elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-secondary-400 dark:bg-secondary-500 rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-2 -left-2 w-8 h-8 bg-accent-400 dark:bg-accent-500 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.a 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        href="#skills" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;