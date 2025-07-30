import { useEffect } from 'react';
import { Building2, MapPin, Users2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DeanBradleyHouse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const propertyImages = [
    '/Dean-02.jpg',
    '/Dean-03.jpg', 
    '/Dean-04.jpg'
  ];

  const features = [
    { icon: Building2, title: '30,500 sqft Total', description: 'Mixed-use office and retail space' },
    { icon: MapPin, title: 'Westminster Location', description: 'Heart of Central London' },
    { icon: Users2, title: '9 Floors', description: 'Spread across multiple levels' },
    { icon: Building2, title: '10 Retail Units', description: '7,200 sqft of retail space' }
  ];

  const highlights = [
    'Central Westminster Location',
    '24/7 Security',
    'Period Features',
    'Excellent Transport Links',
    'Mixed Use Building',
    'Historic 1930s Architecture',
    'Air Conditioning',
    'Lift Access'
  ];



  return (
    <div className="min-h-screen bg-white dark:bg-navy-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:bg-gradient-to-br dark:from-navy-900 dark:via-navy-800 dark:to-navy-700">
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
            onClick={() => navigate('/office')}
            className="mb-8 flex items-center gap-2 text-[#349bff] hover:text-[#2980e6] transition-colors duration-300 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Office Properties
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
                  Dean Bradley House
                </h1>
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-lg mb-6">
                  <MapPin className="w-6 h-6 mr-3 text-[#349bff]" />
                  <span>Horseferry Road, Westminster, SW1P 2AF</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#349bff]/10 dark:bg-[#349bff]/20 p-6 border border-[#349bff]/20 dark:border-[#349bff]/30">
                  <div className="flex items-center gap-3 text-[#349bff] font-semibold mb-2">
                    <Building2 className="w-6 h-6" />
                    <span>Total Size</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">30,500 sqft</p>
                </div>
                <div className="bg-[#349bff]/10 dark:bg-[#349bff]/20 p-6 border border-[#349bff]/20 dark:border-[#349bff]/30">
                  <div className="flex items-center gap-3 text-[#349bff] font-semibold mb-2">
                    <Users2 className="w-6 h-6" />
                    <span>Floors</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">9</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light">
                A distinguished mixed-use office and retail building spread over 9 floors, built in the 1930s. Located in the heart of Westminster, this prestigious property offers over 23,300 square feet of premium office space with an additional 7,200 square feet of retail space across 10 shop units.
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
                  alt="Dean Bradley House"
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
              Discover the exceptional amenities and features that make Dean Bradley House a premier office destination
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
                  alt={`Dean Bradley House ${index + 1}`}
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
              Everything you need for successful business operations in central Westminster
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
                <Building2 className="w-5 h-5 text-[#349bff] flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeanBradleyHouse;