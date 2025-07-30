import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Directors = () => {
  const [expandedBio, setExpandedBio] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const directors = [
    {
      id: 1,
      name: 'Benzion Freshwater',
      position: 'Chairman & Managing Director',
      bio: 'Benzion joined the Freshwater Group in December 1971 with primary responsibility for the Freshwater Group\'s finances. He is a trained accountant and now has over 50 years of experience working in the property industry. In July 1976 he was appointed Managing Director and, additionally, became Chairman in July 1980. Benzion is the son of Osias Freshwater who founded the property business in London\'s East End after World War II having fled from his native Poland in 1939 to escape the holocaust.',
      email: 'benzion.freshwater@highdorn.co.uk',
      shortBio: 'Benzion joined the Freshwater Group in December 1971 with primary responsibility for the Freshwater Group\'s finances. He is a trained accountant and now has over 50 years of experience working in the property industry.'
    },
    {
      id: 2,
      name: 'Solomon Freshwater',
      position: 'Director & Head USA Operations',
      bio: 'Solomon was appointed to the Board of the main companies in the Freshwater Group in January 1986. He is primarily responsible for the Freshwater Group\'s operations in the USA and also has responsibility for the UK sales division. Solomon is the second son of Osias Freshwater and Benzion\'s brother. He is also a Rabbi in the Jewish Northwest London community.',
      email: 'solomon.freshwater@highdorn.co.uk',
      shortBio: 'Solomon was appointed to the Board of the main companies in the Freshwater Group in January 1986. He is primarily responsible for the Freshwater Group\'s operations in the USA and also has responsibility for the UK sales division.'
    }
  ];

  // Quick navigation
  const scrollToDirector = (index: number) => {
    const element = document.getElementById(`director-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleBio = (id: number) => {
    setExpandedBio(expandedBio === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-['Inter',sans-serif]">
      {/* Floating Navigation */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-3 shadow-lg border border-gray-200 dark:border-slate-700">
          {directors.map((director, index) => (
            <button
              key={director.id}
              onClick={() => scrollToDirector(index)}
              className="block w-3 h-3 mb-3 last:mb-0 bg-gray-300 dark:bg-slate-600 hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors duration-200"
              title={director.name}
            />
          ))}
        </div>
      </motion.div>

      {/* Hero Section with Dynamic Background */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative py-32 lg:py-40 overflow-hidden"
      >
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Directors
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
            >
              Meet the experienced leadership team guiding Highdorn's strategic direction
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Directors Grid Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 lg:py-32 bg-white dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {directors.map((director, index) => (
              <motion.div
                key={director.id}
                id={`director-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                      {director.name}
                    </h2>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-block"
                    >
                      <h3 className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 mb-6 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400 pb-1">
                        {director.position}
                      </h3>
                    </motion.div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <motion.p 
                      className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {expandedBio === director.id || window.innerWidth >= 768 
                        ? director.bio 
                        : director.shortBio
                      }
                    </motion.p>

                    {/* Mobile Read More Toggle */}
                    <div className="md:hidden mt-4">
                      <motion.button
                        onClick={() => toggleBio(director.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 flex items-center gap-2"
                      >
                        {expandedBio === director.id ? 'Read Less' : 'Read More'}
                        <motion.span
                          animate={{ rotate: expandedBio === director.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          ↓
                        </motion.span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center z-40"
      >
        ↑
      </motion.button>
    </div>
  );
};

export default Directors;