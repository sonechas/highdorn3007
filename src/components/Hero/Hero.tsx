import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  // Array of homepage images (matching actual files in the folder)
  const heroImages = [
    '/Home Page Images/7.png',
    '/Home Page Images/8.png',
    '/Home Page Images/9.png',
    '/Home Page Images/10.png',
    '/Home Page Images/12.png',
    '/Home Page Images/13.png',
    '/Home Page Images/15.png',
    '/Home Page Images/16.png'
  ];

  // Shuffle array function to randomize images
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Randomize images on component mount
  const [randomizedImages] = useState(() => shuffleArray(heroImages));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance images every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % randomizedImages.length
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [randomizedImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
    >
      {/* Background Image Slider with Crossfade */}
      <div className="absolute inset-0 z-0">
        {/* Base layer - always shows the current image */}
        <img
          src={randomizedImages[currentImageIndex]}
          alt="Highdorn Properties"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to first image if current fails to load
            e.currentTarget.src = randomizedImages[0];
          }}
        />
        
        {/* Crossfade layer - handles smooth transitions */}
        <AnimatePresence>
          <motion.img
            key={`transition-${currentImageIndex}`}
            src={randomizedImages[currentImageIndex]}
            alt="Highdorn Properties"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.0,
              ease: "easeInOut"
            }}
            onError={(e) => {
              // Fallback to first image if current fails to load
              e.currentTarget.src = randomizedImages[0];
            }}
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-black/35 z-10"></div>
        
        {/* Additional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-15"></div>
        
        {/* Subtle slide indicators */}
        <div className="absolute bottom-8 left-8 flex space-x-2 z-20">
          {randomizedImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 px-4 max-w-7xl mx-auto w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-left max-w-4xl ml-0 lg:ml-8"
        >
          {/* Line 1: Brand-level text */}
          <div className="text-gray-200 text-xs md:text-sm font-light tracking-widest uppercase mb-6 break-words"
               style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            HIGHDORN CO. LIMITED
          </div>
          
          {/* Line 2: Hero-style, large, bold */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-none tracking-tight font-sans break-words"
              style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)' }}>
            PROPERTY MANAGEMENT
          </h1>
          
          {/* Line 3: Medium-sized, lighter weight */}
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-relaxed tracking-wide break-words"
               style={{ color: '#60A5FA', textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.9)' }}>
            for the Freshwater Group
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;