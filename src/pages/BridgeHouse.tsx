import { useRef, useEffect } from 'react';
import { Building2, MapPin, Users2, ArrowLeft, Phone, Mail, Calendar, Car } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BridgeHouse = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const property = {
    title: 'Bridge House',
    location: 'London Road, Twickenham, TW1 3QL',
    size: '33,400 sqft',
    floors: 5,
    images: ['/Twick-01.jpg', '/Twick-04.jpg', '/Twick-05.jpg', '/Twick-06.jpg'],
    description: 'A modern five-storey office building offering 33,400 square feet of flexible workspace. Built in the 1970s and extensively refurbished, this property features dedicated car parking and is currently home to Haymarket Media Group, demonstrating its appeal to leading businesses.',
    features: ['Car Parking', 'Modern Facilities', 'Flexible Workspace', 'Established Tenant'],
    highlights: ['On-site Parking', 'Flexible Floor Plates', 'Riverside Location', 'Media Hub'],
    details: {
      yearBuilt: '1970s',
      refurbished: 'Recently',
      tenant: 'Haymarket Media Group',
      parking: 'On-site car parking available',
      transport: 'Twickenham Station (0.5 miles), Richmond (2 miles)',
      amenities: ['Dedicated Car Parking', 'Flexible Floor Plates', 'Modern Facilities', 'Riverside Views']
    }
  };

  const useScrollAnimation = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });
    
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
    
    return { ref, controls };
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const heroAnimation = useScrollAnimation();
  const detailsAnimation = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:bg-gradient-to-br dark:from-navy-900 dark:via-navy-800 dark:to-navy-700">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              ref={heroAnimation.ref}
              initial="hidden"
              animate={heroAnimation.controls}
              variants={fadeInUp}
              className="text-white"
            >
              <button 
                onClick={() => navigate('/office')}
                className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Office Properties
              </button>
              
              <h1 className="text-6xl md:text-7xl font-black mb-6 font-['Inter']">
                {property.title}
              </h1>
              
              <div className="flex items-center gap-3 text-xl mb-8">
                <MapPin className="w-6 h-6 text-[#349bff]" />
                <span>{property.location}</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl">
                <div>
                  <div className="text-3xl font-bold text-[#349bff]">{property.size}</div>
                  <div className="text-white/80">Total Size</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#349bff]">{property.floors}</div>
                  <div className="text-white/80">Floors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#349bff]">{property.details.yearBuilt}</div>
                  <div className="text-white/80">Built</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={detailsAnimation.ref}
            initial="hidden"
            animate={detailsAnimation.controls}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Property Overview</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {property.description}
              </p>
              
              <div className="bg-[#349bff]/10 p-6 rounded-xl border border-[#349bff]/20">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="w-6 h-6 text-[#349bff]" />
                  <h4 className="font-semibold text-[#349bff]">Parking Available</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{property.details.parking}</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Current Tenant</h4>
                <p className="text-lg font-medium text-[#349bff]">{property.details.tenant}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Leading media and publishing company</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Key Features</h4>
                <div className="grid grid-cols-1 gap-3">
                  {property.details.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#349bff] rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-4">
                {property.images.slice(1).map((image, idx) => (
                  <div key={idx} className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${property.title} ${idx + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>


        </div>
      </section>
    </div>
  );
};

export default BridgeHouse;