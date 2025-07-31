import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  // Default starting image
  const defaultImage = '/Home Page Images/16.jpg';
  
  // Array of other homepage images (excluding the default)
  const otherImages = [
    '/Home Page Images/8.png',
    '/Home Page Images/9.png',
    '/Home Page Images/10.png',
    '/Home Page Images/15.png'
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

  // Create image array starting with default image, then randomized others
  const [imageSequence] = useState(() => [defaultImage, ...shuffleArray(otherImages)]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Detect if user is on mobile for performance optimizations
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload images for better performance with priority loading
  const preloadImage = useCallback((src: string, index: number, priority: boolean = false) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(index));
        resolve();
      };
      img.onerror = () => {
        // Still mark as "loaded" to prevent infinite loading
        setLoadedImages(prev => new Set(prev).add(index));
        resolve();
      };
      
      // Add a small delay for non-priority images to prevent overwhelming the network
      if (!priority && index > 0) {
        setTimeout(() => {
          img.src = src;
        }, index * 100); // Stagger loading by 100ms per image
      } else {
        img.src = src;
      }
    });
  }, []);

  // Preload images with optimized strategy for mobile
  useEffect(() => {
    const preloadAllImages = async () => {
      try {
        // Always start by loading the default image (16.png) immediately
        await preloadImage(imageSequence[0], 0, true);
        setIsLoading(false);
        
        // On mobile, be more conservative with preloading
        if (isMobile) {
          // Only preload the next 2 images on mobile to save bandwidth
          const mobilePreloadPromises = imageSequence
            .slice(1, 3)
            .map((src, index) => preloadImage(src, index + 1, false));
          
          await Promise.all(mobilePreloadPromises);
          
          // Load remaining images very slowly in background
          imageSequence.slice(3).forEach((src, index) => {
            setTimeout(() => {
              preloadImage(src, index + 3, false);
            }, (index + 1) * 2000); // 2 second delays between each
          });
        } else {
          // Desktop: preload next few images normally
          const preloadPromises = imageSequence
            .slice(1, 4)
            .map((src, index) => preloadImage(src, index + 1, false));
          
          await Promise.all(preloadPromises);
          
          // Load remaining images in background
          const remainingPromises = imageSequence
            .slice(4)
            .map((src, index) => preloadImage(src, index + 4, false));
          
          Promise.all(remainingPromises);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };

    preloadAllImages();
  }, [imageSequence, preloadImage, isMobile]);

  // Auto-advance images every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % imageSequence.length
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [imageSequence.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
    >
      {/* Background Image Slider with Crossfade */}
      <div className="absolute inset-0 z-0">
        {/* Loading placeholder - only show if no images are loaded */}
        {isLoading && loadedImages.size === 0 && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          </div>
        )}

        {/* Base layer - always shows the current image */}
        <img
          src={imageSequence[currentImageIndex]}
          alt="Highdorn Properties"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          style={{
            imageRendering: 'auto',
            transform: 'translateZ(0)', // Force hardware acceleration
            willChange: 'transform', // Optimize for animations
          }}
          onError={(e) => {
            // Fallback to default image if current fails to load
            const target = e.currentTarget;
            if (target.src !== defaultImage) {
              target.src = defaultImage;
            }
          }}
        />

        {/* Crossfade layer - handles smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.img
            key={`transition-${currentImageIndex}`}
            src={imageSequence[currentImageIndex]}
            alt="Highdorn Properties"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            style={{
              imageRendering: 'auto',
              transform: 'translateZ(0)', // Force hardware acceleration
              willChange: 'opacity, transform', // Optimize for animations
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: isMobile ? 0.3 : 0.8, // Even faster transitions on mobile
              ease: "easeInOut"
            }}
            onError={(e) => {
              // Fallback to default image if current fails to load
              const target = e.currentTarget;
              if (target.src !== defaultImage) {
                target.src = defaultImage;
              }
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/35 z-10"></div>

        {/* Additional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-15"></div>


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
            THE PROPERTY MANAGEMENT COMPANY
          </h1>

          {/* Line 3: Medium-sized, lighter weight */}
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-relaxed tracking-wide break-words"
            style={{ color: '#60A5FA', textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.9)' }}>
            for the Freshwater Group
          </div>
        </motion.div>

        {/* Related Companies Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 ml-0 lg:ml-8"
        >
          <div className="text-gray-300 text-sm font-light tracking-wide uppercase mb-4"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            Related Companies
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <motion.a
              href="https://daejanholdings.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            >
              Daejan Holdings
            </motion.a>
            <motion.a
              href="http://www.centremanor.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            >
              Centremanor Group
            </motion.a>
            <motion.a
              href="https://freshwatergroup.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            >
              Freshwater Group
            </motion.a>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;