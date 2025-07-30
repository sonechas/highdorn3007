import { useEffect } from 'react';
import { Building2, MapPin, Users2, ArrowLeft, Shield, Zap, Home, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EmpireHouse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const propertyImages = [
    '/Empire-02.jpg',
    '/Empire-05.jpg', 
    '/Empire-08.jpg',
    '/Empire-09.jpg',
    '/Empire-11.jpg',
    '/Empire-13.jpg'
  ];

  const features = [
    { icon: Building2, title: '38 Luxury Units', description: 'Premium apartments across 8 floors' },
    { icon: MapPin, title: 'South Kensington', description: 'Thurloe Place, Museum District' },
    { icon: Shield, title: 'Period Features', description: 'Victorian heritage preserved' },
    { icon: Home, title: 'Historic Character', description: 'Contemporary living with charm' }
  ];

  const highlights = [
    'Museum District Location',
    'Victorian Period Features',
    'Premium South Kensington',
    'Cultural Hub Access',
    'Historic Architecture',
    'Luxury Amenities',
    'Prestigious Address',
    'Transport Excellence'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:bg-gradient-to-br dark:from-navy-900 dark:via-navy-800 dark:to-navy-700">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23349bff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/residential')}
            className="mb-8 flex items-center gap-2 text-[#349bff] hover:text-[#2980e6] transition-colors duration-300 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Residential Properties
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white mb-6 font-['Inter']">
                  Empire House
                </h1>
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-lg mb-6">
                  <MapPin className="w-6 h-6 mr-3 text-[#349bff]" />
                  <span>Thurloe Place, South Kensington, SW7 2HQ</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#349bff]/10 dark:bg-[#349bff]/20 p-6 border border-[#349bff]/20 dark:border-[#349bff]/30">
                  <div className="flex items-center gap-3 text-[#349bff] font-semibold mb-2">
                    <Building2 className="w-6 h-6" />
                    <span>Total Units</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">38</p>
                </div>
                <div className="bg-[#349bff]/10 dark:bg-[#349bff]/20 p-6 border border-[#349bff]/20 dark:border-[#349bff]/30">
                  <div className="flex items-center gap-3 text-[#349bff] font-semibold mb-2">
                    <Users2 className="w-6 h-6" />
                    <span>Floors</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">8</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light">
                A prestigious residential building offering 38 luxury apartments across 8 floors in the heart of South Kensington. This distinguished Victorian property has been meticulously restored to provide contemporary living while preserving its historic character and charm.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] lg:h-[600px] overflow-hidden shadow-2xl">
                <img
                  src={propertyImages[0]}
                  alt="Empire House"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:bg-gradient-to-br dark:from-navy-800 dark:via-navy-700 dark:to-navy-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 font-['Inter']">Property Features</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-light">
              Victorian elegance meets modern luxury in South Kensington's prestigious museum district
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="bg-[#349bff] p-3 w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 font-['Inter']">Property Gallery</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertyImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-80 overflow-hidden shadow-xl group"
              >
                <img
                  src={image}
                  alt={`Empire House ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:bg-gradient-to-br dark:from-navy-900 dark:via-navy-800 dark:to-navy-700">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 font-['Inter']">Key Highlights</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-light">
              Experience the best of South Kensington living with unparalleled access to culture and luxury
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 shadow-md border border-gray-200/50 dark:border-gray-700/50"
              >
                <Shield className="w-5 h-5 text-[#349bff] flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpireHouse;