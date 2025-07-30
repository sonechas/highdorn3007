import { useRef, useEffect } from 'react';
import { Building2, MapPin, Users2, ArrowRight, ChevronDown, Shield, Zap } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Residential = () => {
  const navigate = useNavigate();

  const residentialProperties = [
    {
      id: 1,
      title: 'The Cloisters',
      location: 'Endsleigh Gardens, Euston, NW1 4NS',
      size: '45 Units',
      floors: 6,
      images: ['/Cloisters-01.jpg', '/Cloisters-02.jpg', '/Cloisters-04.jpg'],
      description: 'An elegant residential development featuring 45 premium apartments across 6 floors. Located in the prestigious Endsleigh Gardens area near Euston, this distinguished property offers modern living spaces with period charm in one of London\'s most sought-after neighborhoods.',
      features: ['Premium Apartments', 'Period Features', 'Central Location', 'Modern Amenities'],
      highlights: ['Central London Location', '24/7 Concierge', 'Garden Views', 'Transport Links'],
      slug: 'the-cloisters'
    },
    {
      id: 2,
      title: 'Endsleigh Court',
      location: 'Endsleigh Gardens, Euston, NW1 4NS',
      size: '52 Units',
      floors: 7,
      images: ['/Endsleigh-01.jpg', '/Endsleigh-02.jpg', '/Endsleigh-03.jpg', '/Endsleigh-04.jpg'],
      description: 'A sophisticated residential complex offering 52 luxury apartments spread across 7 floors. This premium development combines contemporary design with classic architecture, providing residents with exceptional living spaces in the heart of Bloomsbury.',
      features: ['Luxury Apartments', 'Contemporary Design', 'Bloomsbury Location', 'Premium Finishes'],
      highlights: ['Luxury Finishes', 'Secure Entry', 'Garden Square', 'Excellent Transport'],
      slug: 'endsleigh-court'
    },
    {
      id: 3,
      title: 'Empire House',
      location: 'Thurloe Place, South Kensington, SW7 2HQ',
      size: '38 Units',
      floors: 8,
      images: ['/Empire-02.jpg', '/Empire-05.jpg', '/Empire-08.jpg', '/Empire-09.jpg'],
      description: 'A prestigious residential building offering 38 luxury apartments across 8 floors in the heart of South Kensington. This distinguished Victorian property has been meticulously restored to provide contemporary living while preserving its historic character and charm.',
      features: ['Victorian Heritage', 'South Kensington', 'Luxury Living', 'Historic Character'],
      highlights: ['Museum District', 'Period Features', 'Premium Location', 'Cultural Hub'],
      slug: 'empire-house'
    }
  ];

  // Refs for scroll sections
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Function to handle smooth scrolling
  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation for scroll-triggered elements - faster animations
  const useScrollAnimation = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 }); // Lower threshold for faster triggering

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    return { ref, controls };
  };

  // Faster animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  // Quick community animation for faster loading
  const quickFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  // Animation hooks for each section
  const heroAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const communityAnimation = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 scroll-smooth overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={el => sectionRefs.current[0] = el}
        className="min-h-screen flex items-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:bg-gradient-to-br dark:from-navy-900 dark:via-navy-800 dark:to-navy-700"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23349bff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={heroAnimation.ref}
              initial="hidden"
              animate={heroAnimation.controls}
              variants={staggerChildren}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-gray-900 dark:text-white font-['Inter']">
                  Residential <span className="text-[#349bff]">Properties</span>
                </h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-lg font-light leading-relaxed">
                Premium residential living in prestigious London locations
              </motion.p>

              <motion.div variants={fadeInUp} className="pt-6">
                <button
                  onClick={() => scrollToSection(1)}
                  className="bg-[#349bff] hover:bg-[#2980e6] text-white px-8 sm:px-10 py-4 sm:py-5 font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:gap-4 hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  Explore Properties <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6" />
                </button>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-3 sm:gap-6 pt-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#349bff]">135</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Units Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#349bff]">98%</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Occupancy</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#349bff]">21</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Floors</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={heroAnimation.controls}
              variants={fadeIn}
              className="relative"
            >
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/Cloisters-01.jpg"
                  alt="Premium Residential Property"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-4 sm:p-6">
                    <span className="bg-[#349bff] text-white px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold">
                      Featured Property
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mt-2 sm:mt-3">The Cloisters</h3>
                    <p className="text-gray-600 dark:text-[#349bff] flex items-center gap-2 mt-1 text-sm sm:text-base">
                      <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
                      Euston, London
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex justify-center mt-20"
          >
            <button
              onClick={() => scrollToSection(1)}
              className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-[#349bff] transition-colors duration-300 group"
            >
              <span className="text-sm font-medium mb-3">Discover Our Properties</span>
              <ChevronDown className="w-8 h-8 animate-bounce group-hover:animate-pulse" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Property Sections - Alternating Layout */}
      {residentialProperties.map((property, index) => {
        const propertyAnimation = useScrollAnimation();
        const isEven = index % 2 === 0;

        return (
          <section
            key={property.id}
            ref={el => sectionRefs.current[index + 1] = el}
            className={`min-h-[80vh] sm:min-h-screen flex items-center py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20 ${isEven
              ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:bg-gradient-to-br dark:from-navy-900 dark:via-navy-800 dark:to-navy-700'
              : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:bg-gradient-to-br dark:from-navy-800 dark:via-navy-700 dark:to-navy-600'
              }`}
          >
            <div className="max-w-7xl mx-auto w-full">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                <motion.div
                  ref={propertyAnimation.ref}
                  initial="hidden"
                  animate={propertyAnimation.controls}
                  variants={isEven ? slideInLeft : slideInRight}
                  className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
                >
                  <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden shadow-2xl group">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>

                <motion.div
                  ref={propertyAnimation.ref}
                  initial="hidden"
                  animate={propertyAnimation.controls}
                  variants={isEven ? slideInRight : slideInLeft}
                  className={`space-y-6 sm:space-y-8 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                >
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 font-['Inter']">
                      {property.title}
                    </h2>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                      <MapPin className="w-5 sm:w-6 h-5 sm:h-6 mr-3 text-[#349bff]" />
                      <span>{property.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-[#349bff]/10 dark:bg-[#349bff]/20 p-4 sm:p-6 border border-[#349bff]/20 dark:border-[#349bff]/30">
                      <div className="flex items-center gap-2 sm:gap-3 text-[#349bff] font-semibold mb-2">
                        <Building2 className="w-5 sm:w-6 h-5 sm:h-6" />
                        <span className="text-sm sm:text-base">Total Units</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{property.size}</p>
                    </div>
                    <div className="bg-[#349bff]/10 dark:bg-[#349bff]/20 p-4 sm:p-6 border border-[#349bff]/20 dark:border-[#349bff]/30">
                      <div className="flex items-center gap-2 sm:gap-3 text-[#349bff] font-semibold mb-2">
                        <Users2 className="w-5 sm:w-6 h-5 sm:h-6" />
                        <span className="text-sm sm:text-base">Floors</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{property.floors}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                    {property.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {property.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-[#349bff] flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {property.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => navigate(`/residential/${property.slug}`)}
                      className="bg-[#349bff] hover:bg-[#2980e6] text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold flex items-center gap-3 transition-all duration-300 hover:gap-4 hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center sm:justify-start"
                    >
                      Learn More <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Customer/Community Section */}
      <section
        ref={el => sectionRefs.current[residentialProperties.length + 2] = el}
        className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:bg-gradient-to-br dark:from-navy-900 dark:via-navy-800 dark:to-navy-700 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={communityAnimation.ref}
            initial="hidden"
            animate={communityAnimation.controls}
            variants={quickFadeIn}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 font-['Inter']">Our Commitment</h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-light">
              We're dedicated to creating exceptional homes that benefit our residents and contribute positively to the communities we serve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
            <motion.div
              ref={communityAnimation.ref}
              initial="hidden"
              animate={communityAnimation.controls}
              variants={quickFadeIn}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#349bff]/10 to-[#2980e6]/10 dark:from-[#349bff]/20 dark:to-[#2980e6]/20 p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#349bff]/20 dark:border-[#349bff]/30">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-[#349bff] p-2 sm:p-3">
                    <Zap className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Supporting our Residents</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg font-light">
                  Our residential properties are thoughtfully designed with our residents at the heart of everything we do. We provide comfortable living spaces, modern amenities, and responsive property management to ensure residents feel truly at home. From secure entry systems to well-maintained common areas, we invest in features that enhance quality of life and peace of mind.
                </p>
                <div className="aspect-[16/9] overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="/residential.jpg"
                    alt="Modern Residential Interior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={communityAnimation.ref}
              initial="hidden"
              animate={communityAnimation.controls}
              variants={quickFadeIn}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#349bff]/10 to-[#2980e6]/10 dark:from-[#349bff]/20 dark:to-[#2980e6]/20 p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#349bff]/20 dark:border-[#349bff]/30">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-[#349bff] p-2 sm:p-3">
                    <Shield className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Supporting our Communities</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg font-light">
                  We believe in being responsible community stewards. Our residential properties incorporate sustainable practices, support local businesses, and contribute to neighborhood character. We actively engage with community stakeholders to ensure our developments enhance the areas where we operate, creating vibrant neighborhoods where people are proud to call home.
                </p>
                <div className="aspect-[16/9] overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="/Cloisters-04.jpg"
                    alt="Community Engagement"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residential;