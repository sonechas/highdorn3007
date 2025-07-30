import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Building2, Users2, TrendingUp, ScrollText, PhoneCall, ChevronDown } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isDarkMode, toggleTheme } = useTheme();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container') && !mobileMenuRef.current?.contains(target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    {
      name: 'Properties',
      href: '#properties',
      icon: Building2,
      color: 'teal',
      dropdown: [
        { name: 'Office', href: '/office', description: 'Commercial office spaces and business properties', image: '/Dean-02.jpg' },
        { name: 'Residential', href: '/residential', description: 'Luxury homes and residential developments', image: '/Cloisters-01.jpg' }
      ]
    },
    {
      name: 'People',
      href: '#people',
      icon: Users2,
      color: 'amber',
      dropdown: [
        { name: 'Directors', href: '/directors', description: 'Board of directors and leadership team', image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { name: 'Executive Team', href: '/executive', description: 'Senior management and executives', image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { name: 'Management Team', href: '/management', description: 'Department heads and managers', image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400' }
      ]
    },
    {
      name: 'Financials',
      href: '#financials',
      icon: TrendingUp,
      color: 'rose',
      dropdown: [
        { name: 'Financial Results 2024', href: '/financials-2024', description: 'Latest financial performance and annual report', image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { name: 'Financial Results 2023', href: '/financials-2023', description: 'Previous year financial performance', image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { name: 'Financial Results 2022', href: '/financials-2022', description: 'Historical financial data and analysis', image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400' }
      ]
    },
    {
      name: 'Pensions',
      href: '#pensions',
      icon: ScrollText,
      color: 'indigo',
      dropdown: [
        { name: 'Pensions 2024', href: '/pensions-2024', description: 'Latest pension schemes and retirement plans', image: 'https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Pensions 2023', href: '/pensions-2023', description: 'Previous year pension performance and updates', image: 'https://images.pexels.com/photos/7821715/pexels-photo-7821715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Pensions 2022', href: '/pensions-2022', description: 'Historical pension data and analysis', image: 'https://images.pexels.com/photos/7821464/pexels-photo-7821464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Pensions 2020', href: '/pensions-2020', description: 'Archive of pension schemes from 2020', image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
      ]
    },
    { name: 'Contact Us', href: '/contact', icon: PhoneCall },
  ];

  const getDropdownColors = (color: string) => {
    switch (color) {
      case 'teal':
        return {
          bg: 'bg-teal-50 dark:bg-teal-900/20',
          border: 'border-teal-200 dark:border-teal-700',
          accent: 'text-teal-600 dark:text-teal-400',
          hover: 'hover:bg-teal-100 dark:hover:bg-teal-800/30'
        };
      case 'amber':
        return {
          bg: 'bg-amber-50 dark:bg-amber-900/20',
          border: 'border-amber-200 dark:border-amber-700',
          accent: 'text-amber-600 dark:text-amber-400',
          hover: 'hover:bg-amber-100 dark:hover:bg-amber-800/30'
        };
      case 'rose':
        return {
          bg: 'bg-rose-50 dark:bg-rose-900/20',
          border: 'border-rose-200 dark:border-rose-700',
          accent: 'text-rose-600 dark:text-rose-400',
          hover: 'hover:bg-rose-100 dark:hover:bg-rose-800/30'
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-50 dark:bg-indigo-900/20',
          border: 'border-indigo-200 dark:border-indigo-700',
          accent: 'text-indigo-600 dark:text-indigo-400',
          hover: 'hover:bg-indigo-100 dark:hover:bg-indigo-800/30'
        };
      default:
        return {
          bg: 'bg-gray-50 dark:bg-gray-800',
          border: 'border-gray-200 dark:border-gray-700',
          accent: 'text-gray-600 dark:text-gray-400',
          hover: 'hover:bg-gray-100 dark:hover:bg-gray-700'
        };
    }
  };

  const handleNavigation = (href: string, closeMobileMenu: boolean = true) => {
    const isSamePageScroll = href.startsWith('#') || (href === '/contact' && (window.location.pathname === '/' || window.location.pathname === '/index.html'));

    if (isSamePageScroll) {
      const targetId = href === '/contact' ? '#contact' : href;
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href.startsWith('#') ? `/${href}` : href;
    }

    if (closeMobileMenu) {
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  const handleLogoClick = () => {
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleNavigation('/');
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    // Immediately set the active dropdown without delay for better menu switching
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    // Longer delay when leaving to prevent accidental dropdown closing
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 300);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  useEffect(() => () => { if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current) }, []);
  useEffect(() => { document.documentElement.classList.remove('is-navigating') }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={handleLogoClick} className="transition-transform duration-300 hover:scale-105 active:scale-100">
              <img src="/Freshwater.png" alt="Highdorn Co. Limited" className="h-12 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center justify-center flex-1">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative dropdown-container"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                  onMouseLeave={() => item.dropdown && handleMouseLeave()}
                >
                  <button
                    onClick={() => item.dropdown ? toggleDropdown(item.name) : handleNavigation(item.href)}
                    className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-5 py-6 text-base font-medium transition-all duration-300 ease-in-out flex items-center gap-3 group relative overflow-hidden ${activeDropdown === item.name ? 'text-blue-600 dark:text-blue-400' : ''}`}
                  >
                    <item.icon className={`w-5 h-5 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-3`} />
                    <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:translate-x-0.5">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </span>
                    {item.dropdown && <ChevronDown className={`w-5 h-5 ml-1 transition-all duration-300 ease-in-out ${activeDropdown === item.name ? 'rotate-180' : 'group-hover:translate-y-0.5 group-hover:text-blue-500 dark:group-hover:text-blue-400'}`} />}
                  </button>

                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${activeDropdown === item.name ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'}`}
                      style={{ position: 'fixed', left: 0, width: '100vw', marginTop: '0', top: '80px' }}
                      onMouseEnter={() => handleMouseEnter(item.name)}
                    >
                      <div className="w-full">
                        {/* Two-column layout with sidebar and content */}
                        <div className="flex transform transition-all duration-500 ease-in-out">
                          {/* Left Sidebar */}
                          <div className="w-80 bg-white dark:bg-gray-900">
                            <div className="py-8 px-12">
                              <div className="mb-10">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                                  {item.name}
                                </h3>
                              </div>
                              <div className="space-y-6">
                                {item.dropdown.map((dropdownItem, idx) => (
                                  <button
                                    key={dropdownItem.name}
                                    onClick={() => handleNavigation(dropdownItem.href)}
                                    className={`block w-full text-left text-lg font-semibold ${getDropdownColors(item.color || 'blue').accent} hover:underline transition-colors duration-300 animate-in fade-in slide-in-from-left duration-500 group`}
                                    style={{ animationDelay: `${idx * 75}ms` }}
                                  >
                                    <span className="group-hover:underline">{dropdownItem.name}</span>
                                    <svg className="w-5 h-5 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right Content Area */}
                          <div className={`flex-1 py-10 px-12 ${item.name === 'Properties' ? 'bg-teal-50 dark:bg-teal-900' :
                            item.name === 'People' ? 'bg-amber-50 dark:bg-amber-900' :
                              item.name === 'Financials' ? 'bg-rose-50 dark:bg-rose-900' :
                                item.name === 'Pensions' ? 'bg-indigo-50 dark:bg-indigo-900' :
                                  'bg-gray-50 dark:bg-gray-900'
                            }`}>
                            <div className="container mx-auto px-4">
                              <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-10 animate-in fade-in duration-500">
                                FEATURED IN {item.name.toUpperCase()}
                              </h4>
                              <div className={`grid ${item.dropdown.length === 4 ? 'grid-cols-4 gap-6' :
                                  item.dropdown.length === 3 ? 'grid-cols-3 gap-8' :
                                    item.dropdown.length === 2 ? 'grid-cols-2 gap-10' :
                                      'grid-cols-1 max-w-md'
                                }`}>
                                {item.dropdown.map((dropdownItem, idx) => (
                                  <button
                                    key={dropdownItem.name}
                                    onClick={() => handleNavigation(dropdownItem.href)}
                                    className="group bg-white dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 text-left animate-in fade-in slide-in-from-bottom-4 duration-500"
                                    style={{ animationDelay: `${idx * 75}ms` }}
                                  >
                                    <div className="aspect-[16/9] overflow-hidden">
                                      <img
                                        src={dropdownItem.image}
                                        alt={dropdownItem.name}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                          const img = e.target as HTMLImageElement;
                                          img.src = 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400';
                                        }}
                                      />
                                    </div>
                                    <div className="p-5 flex items-center justify-between border-t border-gray-100 dark:border-gray-700">
                                      <h5 className={`font-semibold text-lg ${getDropdownColors(item.color || 'blue').accent} group-hover:underline transition-all duration-300`}>
                                        {dropdownItem.name}
                                      </h5>
                                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                      </svg>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-5 py-6 text-base font-medium transition-all duration-300 ease-in-out flex items-center gap-3 group relative overflow-hidden"
              >
                {isDarkMode ?
                  <Sun className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:rotate-45 group-hover:scale-110" /> :
                  <Moon className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110" />
                }
                <span className="relative z-10 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5">
                  {isDarkMode ? "Light" : "Dark"}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center justify-end">
            <div className="xl:hidden flex items-center gap-2">
              <button onClick={toggleTheme} className="p-2 text-gray-700 dark:text-gray-300">
                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 relative overflow-hidden"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'}`}></span>
                  <span className={`absolute left-0 top-2.5 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
                  <span className={`absolute left-0 top-4 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="xl:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm max-h-[calc(100vh-4rem)] overflow-y-auto transition-all duration-400 ease-out border-t border-gray-200 dark:border-gray-700"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <div key={item.name} className="animate-in slide-in-from-left duration-300 ease-out" style={{ animationDelay: `${index * 50}ms` }}>
                <button
                  onClick={() => item.dropdown ? toggleDropdown(item.name) : handleNavigation(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-base font-medium transition-all duration-300 ease-out flex items-center gap-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 hover:translate-x-1"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                  {item.dropdown && <ChevronDown className={`w-5 h-5 transition-transform duration-400 ease-out ml-auto ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                </button>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="ml-6 mt-2 space-y-2 transition-all duration-400 ease-out">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <button
                        key={dropdownItem.name}
                        onClick={() => handleNavigation(dropdownItem.href)}
                        className="flex items-start gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-out w-full text-left active:bg-gray-200 dark:active:bg-gray-700 hover:scale-[1.02] active:scale-[0.98] transform hover:shadow-md hover:translate-x-1 animate-in slide-in-from-left border border-gray-200 dark:border-gray-700"
                        style={{ animationDelay: `${dropdownIndex * 75}ms` }}
                      >
                        <div className="w-32 h-24 flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-700">
                          <img
                            src={dropdownItem.image}
                            alt={dropdownItem.name}
                            className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-110"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.src = 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400';
                            }}
                          />
                        </div>
                        <div className="text-left flex-grow">
                          <h4 className="text-base font-medium text-gray-900 dark:text-white mb-1">{dropdownItem.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 transition-colors duration-200">{dropdownItem.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
