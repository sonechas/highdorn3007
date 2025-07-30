import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ExecutiveTeam = () => {
  const [expandedBio, setExpandedBio] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const executives = [
    {
      id: 1,
      name: 'James Southgate',
      position: 'Chief Financial Officer & Company Secretary',
      bio: 'James is the Chief Financial Officer and joint Company Secretary of the Freshwater Group. His main areas of responsibility are finance, treasury, IT, M&A, pension and tax strategy. He joined the Freshwater Group in 2015 after a 25 year career at PricewterhouseCoopers where he was an Assurance partner. He led many listed company audits including National Grid, ARM and British Steel and listed transactions including IPOs and Class 1 acquisitions. James is currently a Non-executive Director and Audit Committee Chairman of S P Jain London, a newly formed UK university specialising in business qualifications. Previously he was a member of the Audit Committee of the University of West London for 9 years and they awarded him an honorary doctorate in Business Administration.',
      shortBio: 'James is the Chief Financial Officer and joint Company Secretary of the Freshwater Group. His main areas of responsibility are finance, treasury, IT, M&A, pension and tax strategy. He joined the Freshwater Group in 2015 after a 25 year career at PricewterhouseCoopers where he was an Assurance partner.',
      experience: '25+ years',
      department: 'Finance'
    },
    {
      id: 2,
      name: 'Jonathan Ainsley',
      position: 'Director of Property',
      bio: 'Jonathan is the Director of Property, responsible for the performance of the Residential and Commercial assets held by the Freshwater Group. With over 30 years experience in the market, Jonathan has a wide range of responsibilities including, the strategic leadership of Development, Asset Management, Leasing and financial performance of the residential and commercial assets. Leading a team of professionals across both asset classes, Jonathan has been with Freshwater since 2020. Prior to joining Freshwater, he was at Battersea Power Station Development Company, CSC, Hammerson and JLL. Jonathan is a member of the RICS.',
      shortBio: 'Jonathan is the Director of Property, responsible for the performance of the Residential and Commercial assets held by the Freshwater Group. With over 30 years experience in the market, Jonathan has a wide range of responsibilities including strategic leadership of Development, Asset Management, and Leasing.',
      experience: '30+ years',
      department: 'Property'
    },
    {
      id: 3,
      name: 'Martin Bale',
      position: 'Group General Counsel & Company Secretary',
      bio: 'Martin heads the in-house legal team which provides legal services, advice and support to the companies within the Freshwater Group, their directors and shareholders. In addition, he is the focal point for the extensive panel of external legal firms that represent the Freshwater Group in legal matters. As part of the Freshwater Group\'s Executive Team, Martin is involved in many areas of the Freshwater Group\'s activities, its development schemes and strategic affairs, providing a link to the board as executive personal assistant to the Chairman. Martin was admitted as a Solicitor in 1982 and prior to joining the Freshwater Group in 2014 had been a partner in a Mayfair firm for 24 years, specialising in litigation and dispute resolution where he acted for Freshwater Group in a wide range of matters for 15 years.',
      shortBio: 'Martin heads the in-house legal team which provides legal services, advice and support to the companies within the Freshwater Group, their directors and shareholders. He is the focal point for the extensive panel of external legal firms that represent the Freshwater Group in legal matters.',
      experience: '40+ years',
      department: 'Legal'
    }
  ];

  // Quick navigation
  const scrollToExecutive = (index: number) => {
    const element = document.getElementById(`executive-${index}`);
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
          {executives.map((executive, index) => (
            <button
              key={executive.id}
              onClick={() => scrollToExecutive(index)}
              className="block w-3 h-3 mb-3 last:mb-0 bg-gray-300 dark:bg-slate-600 hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors duration-200"
              title={executive.name}
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-blue-900 to-slate-800 dark:from-slate-800 dark:via-emerald-800 dark:to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 120, 0],
              y: [0, -60, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 left-1/3 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -90, 0],
              y: [0, 70, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Executive Team
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed"
            >
              Our senior leadership team driving operational excellence and strategic growth
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Executive Grid Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 lg:py-32 bg-white dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {executives.map((executive, index) => (
              <motion.div
                key={executive.id}
                id={`executive-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                      {executive.name}
                    </h2>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-block"
                    >
                      <h3 className="text-lg md:text-xl font-medium text-emerald-600 dark:text-emerald-400 mb-4 cursor-pointer hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200 border-b-2 border-transparent hover:border-emerald-600 dark:hover:border-emerald-400 pb-1">
                        {executive.position}
                      </h3>
                    </motion.div>

                    {/* Department and Experience Tags */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 px-3 py-1 text-sm font-semibold rounded-full">
                        {executive.department}
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 text-sm font-semibold rounded-full">
                        {executive.experience}
                      </span>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <motion.p
                      className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {expandedBio === executive.id || window.innerWidth >= 768
                        ? executive.bio
                        : executive.shortBio
                      }
                    </motion.p>

                    {/* Mobile Read More Toggle */}
                    <div className="md:hidden mt-4">
                      <motion.button
                        onClick={() => toggleBio(executive.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2"
                      >
                        {expandedBio === executive.id ? 'Read Less' : 'Read More'}
                        <motion.span
                          animate={{ rotate: expandedBio === executive.id ? 180 : 0 }}
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
        className="fixed bottom-8 right-8 w-12 h-12 bg-emerald-600 dark:bg-emerald-500 text-white shadow-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors duration-200 flex items-center justify-center z-40"
      >
        ↑
      </motion.button>
    </div>
  );
};

export default ExecutiveTeam;