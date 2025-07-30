import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, Calendar, Maximize2, AlertCircle } from 'lucide-react';

const Financials2023 = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [filteredDocuments, setFilteredDocuments] = useState<any[]>([]);
  
  const pdfDocuments = [
    {
      title: 'Financial Statements March 2023',
      file: '/2023 financials/Financial Statements March 23.pdf',
      category: 'Financial Statements',
      lastUpdated: 'March 2023',
      description: 'Comprehensive financial statements including balance sheet, income statement, and cash flow analysis.'
    },
    {
      title: 'Gender Pay Gap April 2023',
      file: '/2023 financials/Gender Pay Gap April 23.pdf',
      category: 'ESG Reports',
      lastUpdated: 'April 2023',
      description: 'Annual gender pay gap report demonstrating our commitment to equality and transparency.'
    }
  ];

  // useEffect(() => {
  //   const filtered = pdfDocuments.filter(doc =>
  //     doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     doc.category.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredDocuments(filtered);
  // }, [searchTerm]);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-primary-900/90 to-navy-800/95 dark:from-navy-950/98 dark:via-navy-900/95 dark:to-slate-900/98"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <FileText className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Official Financial Reports</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Financial Documents
              <span className="block text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mt-2">
                2023
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-100 leading-relaxed">
              Preview our official reports, disclosures, and financial summaries with interactive document viewing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section - Commented Out */}
      {/* <section className="py-8 bg-white/50 dark:bg-navy-900/50 backdrop-blur-sm border-b border-gray-200/50 dark:border-navy-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-md mx-auto"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </motion.div>
        </div>
      </section> */}

      {/* Documents Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {pdfDocuments.length === 0 ? (
              <motion.div
                variants={itemVariants}
                className="text-center py-12"
              >
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-600 dark:text-gray-400">No documents available.</p>
              </motion.div>
            ) : (
              pdfDocuments.map((document, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white dark:bg-navy-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-navy-700 overflow-hidden"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 md:p-8 text-left hover:bg-gray-50 dark:hover:bg-navy-700/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-teal-500 rounded-xl flex items-center justify-center">
                            <FileText className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                              {document.title}
                            </h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                                <Calendar className="w-4 h-4" />
                                {document.lastUpdated}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                                {document.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                          {document.description}
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 ml-4">
                        <motion.div
                          animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-8 h-8 bg-gray-100 dark:bg-navy-700 rounded-full flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors duration-200"
                        >
                          <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                        </motion.div>
                      </div>
                    </div>
                  </button>
                  
                  {/* Accordion Content */}
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="border-t border-gray-100 dark:border-navy-700"
                      >
                        <div className="p-6 md:p-8">
                          {/* Mobile PDF Viewer */}
                          <div className="block lg:hidden">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-navy-800 dark:to-navy-700 border border-blue-200 dark:border-navy-600 rounded-xl p-6 text-center">
                              <AlertCircle className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Mobile PDF Viewer
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                                For the best viewing experience on mobile devices, tap below to open the PDF in a new tab.
                              </p>
                              <a
                                href={document.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-teal-600 hover:from-primary-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                              >
                                <Maximize2 className="w-4 h-4" />
                                Open PDF
                              </a>
                            </div>
                          </div>

                          {/* Desktop PDF Viewer */}
                          <div className="hidden lg:block">
                            <div className="bg-white dark:bg-navy-900 rounded-xl shadow-inner border border-gray-200 dark:border-navy-600 overflow-hidden">
                              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-navy-800 border-b border-gray-200 dark:border-navy-700">
                                <div className="flex items-center gap-2">
                                  <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                                    {document.title}
                                  </span>
                                </div>
                                <a
                                  href={document.file}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                                >
                                  <Maximize2 className="w-4 h-4" />
                                  Open in new tab
                                </a>
                              </div>
                              
                              <div className="relative" style={{ height: '600px' }}>
                                <iframe
                                  src={document.file}
                                  width="100%"
                                  height="100%"
                                  style={{ border: 'none' }}
                                  title={document.title}
                                  className="rounded-b-xl"
                                >
                                  <div className="flex items-center justify-center h-full bg-gray-50 dark:bg-navy-800">
                                    <div className="text-center">
                                      <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        Your browser does not support PDF viewing.
                                      </p>
                                      <a
                                        href={document.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                      >
                                        <Maximize2 className="w-4 h-4" />
                                        Open PDF
                                      </a>
                                    </div>
                                  </div>
                                </iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Financials2023;