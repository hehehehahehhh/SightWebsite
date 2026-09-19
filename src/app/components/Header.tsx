import svgPaths from "../../imports/svg-phmznegu8n";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";

interface HeaderProps {
  categories?: string[];
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

function Logo() {
  return (
    <div className="h-full w-full" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMinYMin meet" viewBox="0 0 111 42.1866">
        <g id="logo">
          <path d={svgPaths.p3756c900} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p312c2580} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2a300280} fill="var(--fill-0, black)" id="Vector_3" />
          <rect fill="var(--fill-0, black)" height="22.4995" id="Rectangle 1" width="5.62488" x="28.6869" y="10.1248" />
          <rect fill="var(--fill-0, black)" height="5.62488" id="Rectangle 2" width="5.62488" x="28.6869" />
          <path d={svgPaths.p1afa6f00} fill="var(--fill-0, black)" id="Union" />
          <path d={svgPaths.p3893b940} fill="var(--fill-0, black)" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

export default function Header({ categories, activeCategory, onCategoryChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const headerHeight = 72;
        const categoryFilterHeight = 120; // Account for category filter bar height
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - categoryFilterHeight;
        
        window.scrollTo({
          top: Math.max(0, offsetPosition), // Don't scroll to negative positions
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  const handleCategoryClick = (category: string) => {
    onCategoryChange?.(category);
    
    // Scroll to work section
    setTimeout(() => {
      const workSection = document.getElementById('work');
      if (workSection) {
        const headerHeight = 72;
        const categoryHeight = 100; // Approximate height of the mobile category bar
        const elementPosition = workSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - categoryHeight + 20;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    // If not on home page, the Link will navigate to "/" without state
    // This ensures the full landing page with hero is shown
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#f5f5f5]/95 backdrop-blur-md' : 'bg-transparent'
      }`}>
        {/* Desktop Header */}
        <div className="hidden md:block max-w-[1512px] mx-auto px-16 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={handleLogoClick} className="h-[24px] w-[64px]">
              <Logo />
            </Link>
            <nav className="flex gap-12">
              {isHomePage ? (
                <a 
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('work');
                  }}
                  className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#1f1f1f] hover:opacity-70 transition-opacity text-[20px] tracking-[-1%]"
                  style={{ cursor: 'pointer' }}
                >
                  Work
                </a>
              ) : (
                <Link
                  to="/"
                  state={{ returning: true }}
                  className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#1f1f1f] text-[20px] hover:opacity-70 transition-opacity tracking-[-1%]"
                  style={{ cursor: 'pointer' }}
                >
                  Work
                </Link>
              )}
              <Link 
                to="/about"
                className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#1f1f1f] text-[20px] hover:opacity-70 transition-opacity tracking-[-1%]"
                style={{ cursor: 'pointer' }}
              >
                About Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden px-5 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={handleLogoClick} className="h-[20px] w-[52px]">
              <Logo />
            </Link>
            {!isMobileMenuOpen && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] relative z-50"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-6 h-[2px] bg-black block"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-6 h-[2px] bg-black block"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-6 h-[2px] bg-black block"
                />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#f5f5f5] z-[60] md:hidden"
          >
            {/* Close Button (X) - Sticky at top */}
            <div className="fixed top-0 left-0 right-0 z-[70] px-5 py-4 bg-[#f5f5f5]">
              <div className="flex items-center justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex flex-col items-center justify-center gap-[6px] relative"
                  aria-label="Close menu"
                >
                  <motion.span
                    initial={{ rotate: 0, y: 0 }}
                    animate={{ rotate: 45, y: 9 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-7 h-[2px] bg-black block"
                  />
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-7 h-[2px] bg-black block"
                  />
                  <motion.span
                    initial={{ rotate: 0, y: 0 }}
                    animate={{ rotate: -45, y: -9 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-7 h-[2px] bg-black block"
                  />
                </button>
              </div>
            </div>

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {isHomePage ? (
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('work');
                  }}
                  className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#1f1f1f] text-[32px] hover:opacity-70 transition-opacity cursor-pointer tracking-[-1%]"
                >
                  Work
                </a>
              ) : (
                <Link
                  to="/"
                  state={{ returning: true }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#1f1f1f] text-[32px] hover:opacity-70 transition-opacity tracking-[-1%]"
                >
                  Work
                </Link>
              )}

              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#1f1f1f] text-[32px] hover:opacity-70 transition-opacity tracking-[-1%]"
              >
                About Us
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}