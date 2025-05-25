'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '@/data/data';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (id: string) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const currentImage = selectedImage 
    ? galleryImages.find(img => img.id === selectedImage) 
    : null;

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Project <span className="text-secondary-600 dark:text-secondary-400">Gallery</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Visual documentation of my robots, prototypes, and lab work showcasing the development process.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-square relative">
                <Image 
                  src={image.url} 
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                {image.description && (
                  <p className="text-white/90 text-sm mt-1">{image.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && currentImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh]">
                <Image 
                  src={currentImage.url} 
                  alt={currentImage.title}
                  fill
                  sizes="(max-width: 1536px) 100vw, 1536px"
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-xl">{currentImage.title}</h3>
                {currentImage.description && (
                  <p className="text-white/80 mt-2">{currentImage.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;