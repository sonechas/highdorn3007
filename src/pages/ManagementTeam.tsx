import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ManagementTeam = () => {
  const [expandedBio, setExpandedBio] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const managers = [
    {
      id: 1,
      name: 'Grant Barrell',
      position: 'Head of Operational Finance',
      bio: 'Grant is the Head of Operational Finance. His main responsibility is to oversee the management of all aspects of accounts receivable, accounts payable and service charges. He joined the group in April 2018, having been involved within the property industry, focusing on block management and account compliance, since arriving from South Africa at the beginning of 2007.\n\nGrant completed his Master of Business Administration whilst in South Africa and is currently a member of The Property Institute and an associate of RICS.',
      shortBio: 'Grant is the Head of Operational Finance. His main responsibility is to oversee the management of all aspects of accounts receivable, accounts payable and service charges. He joined the group in April 2018, having been involved within the property industry since 2007.',
      specialization: 'Operational Finance',
      location: 'Head Office',
      experience: '15+ years'
    },
    {
      id: 2,
      name: 'Mike McCarthy',
      position: 'Manager Commercial Property',
      bio: 'Mike has over 30 years of property experience and currently has operational responsibility for property and asset management of the commercial portfolio. He has been part of the development management team for various schemes including office to residential projects, retail warehousing and development of Central London offices.\n\nMike is a Chartered Surveyor and formerly worked at Hamptons and Dorrington PLC',
      shortBio: 'Mike has over 30 years of property experience and currently has operational responsibility for property and asset management of the commercial portfolio. He has been part of the development management team for various schemes.',
      specialization: 'Commercial Property & Asset Management',
      location: 'London Wide',
      experience: '30+ years'
    },
    {
      id: 3,
      name: 'Kalpesh Sonecha',
      position: 'Head of Information Technology',
      bio: 'Kalpesh is our Head of IT, responsible for leading and overseeing all aspects of Freshwater\'s information technology operations. With over 25 years of experience in the IT sector, he brings a wealth of expertise, from hands-on support to strategic decision-making.\n\nKalpesh\'s primary focus is to develop and implement IT strategies that align with our business objectives, ensuring that our systems, networks, and digital services are secure, reliable, and efficient. He joined Freshwater in 2022, following a distinguished 21-year career at the National Housing Federation.',
      shortBio: 'Kalpesh is our Head of IT, responsible for leading and overseeing all aspects of Freshwater\'s information technology operations. With over 25 years of experience in the IT sector, he brings a wealth of expertise from hands-on support to strategic decision-making.',
      specialization: 'Information Technology',
      location: 'Head Office',
      experience: '25+ years'
    },
    {
      id: 4,
      name: 'Sarah Tate',
      position: 'Deputy General Counsel',
      bio: 'Sarah is the Deputy General Counsel, qualifying as a solicitor in 2012 after 12 years as a paralegal. Her main duties are dealing with transactional property, litigation, finance, corporate and banking matters as well as managing and coordinating external law firms and assisting the finance and property departments in all aspects of the business. Sarah joined the Freshwater Group in November 2021, previously having dealt with the Freshwater Group\'s work as an external solicitor since 2017. Prior to that Sarah worked in the city as a real estate solicitor acting for large institutional landlords including British Land, the Crown Estate and the Wellcome Trust.\n\nSarah is a trustee of West Harrow Community Forum Trust, a trust created to maintain and enhance the character of the area. She is also an active member of the West Harrow tube gardening group and Harrow Litter Pickers Charity.',
      shortBio: 'Sarah is the Deputy General Counsel, qualifying as a solicitor in 2012 after 12 years as a paralegal. Her main duties are dealing with transactional property, litigation, finance, corporate and banking matters as well as managing external law firms.',
      specialization: 'Legal & Property Transactions',
      location: 'Head Office',
      experience: '24+ years'
    }
  ];



  const toggleBio = (id: number) => {
    setExpandedBio(expandedBio === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-['Inter',sans-serif]">


      {/* Hero Section with Dynamic Background */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative py-32 lg:py-40 overflow-hidden"
      >
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-800 dark:from-slate-800 dark:via-purple-800 dark:to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -70, 0],
              y: [0, 80, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Management Team
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed"
            >
              Dedicated professionals managing our properties and ensuring exceptional service delivery
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Management Grid Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 lg:py-32 bg-white dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {managers.map((manager, index) => (
              <motion.div
                key={manager.id}
                id={`manager-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                      {manager.name}
                    </h2>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-block"
                    >
                      <h3 className="text-lg md:text-xl font-medium text-purple-600 dark:text-purple-400 mb-4 cursor-pointer hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200 border-b-2 border-transparent hover:border-purple-600 dark:hover:border-purple-400 pb-1">
                        {manager.position}
                      </h3>
                    </motion.div>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 px-3 py-1 text-sm font-semibold rounded-full">
                        {manager.specialization}
                      </span>
                      <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 px-3 py-1 text-sm font-semibold rounded-full">
                        {manager.location}
                      </span>
                      <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 px-3 py-1 text-sm font-semibold rounded-full">
                        {manager.experience}
                      </span>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <motion.div 
                      className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {(expandedBio === manager.id || window.innerWidth >= 768 
                        ? manager.bio 
                        : manager.shortBio
                      ).split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className={idx > 0 ? 'mt-4' : ''}>
                          {paragraph}
                        </p>
                      ))}
                    </motion.div>

                    {/* Mobile Read More Toggle */}
                    <div className="md:hidden mt-4">
                      <motion.button
                        onClick={() => toggleBio(manager.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200 flex items-center gap-2"
                      >
                        {expandedBio === manager.id ? 'Read Less' : 'Read More'}
                        <motion.span
                          animate={{ rotate: expandedBio === manager.id ? 180 : 0 }}
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
        className="fixed bottom-8 right-8 w-12 h-12 bg-purple-600 dark:bg-purple-500 text-white shadow-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200 flex items-center justify-center z-40"
      >
        ↑
      </motion.button>
    </div>
  );
};

export default ManagementTeam;