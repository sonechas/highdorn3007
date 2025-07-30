import { useRef, useEffect } from 'react';
import { Building2, MapPin, Users2, ArrowLeft, Phone, Mail, Calendar } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DeanBradleyHouse = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const property = {
    title: 'Dean Bradley House',
    location: 'Horseferry Road, Westminster, SW1P 2AF',
    size: '30,500 sqft',
    floors: 9,
    images: ['/Dean-02.jpg', '/Dean-03.jpg', '/Dean-04.jpg'],
    description: 'A distinguished mixed-use office and retail building spread over 9 floors, built in the 1930s. Located in the heart of Westminster, this prestigious property offers over 23,300 square feet of premium office space with an additional 7,200 square feet of retail space across 10 shop units.',
    features: ['Mixed Use', 'Retail Space', 'Premium Location', 'Historic Building'],
    highlights: ['Central Westminster Location', '24/7 Security', 'Period Features', 'Excellent Transport Links'],
    details: {
      yearBuilt: '1930s',
      officeSpace: '23,300 sqft',
      retailSpace: '7,200 sqft',
      retailUnits: '10 shop units',
      transport: 'Victoria Station (0.3 miles), St. James\'s Park (0.2 miles)',
      parking: 'Limited on-street parking',
      amenities: ['24/7 Security', 'Period Features', 'Air Conditioning', 'Lift Access']
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:bg-gradient-to-br dark:from-navy-900 dark:via-navy-800 dark:to-navy-700">
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
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#349bff]/10 p-6 rounded-xl border border-[#349bff]/20">
                  <h4 className="font-semibold text-[#349bff] mb-2">Office Space</h4>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{property.details.officeSpace}</p>
                </div>
                <div className="bg-[#349bff]/10 p-6 rounded-xl border border-[#349bff]/20">
                  <h4 className="font-semibold text-[#349bff] mb-2">Retail Space</h4>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{property.details.retailSpace}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
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

export default DeanBradleyHouse;