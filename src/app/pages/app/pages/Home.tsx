import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import PortfolioGrid from '../components/PortfolioGrid';
import Footer from '../components/Footer';
import CustomCursorNext from '../../imports/Group9';
import CustomCursorPrev from '../../imports/Group10';
import heroImage1 from 'figma:asset/5c99f6c11aa5caebc0688b3870cfe650fedc385b.jpg';
import heroImage2 from 'figma:asset/874bec7461c819c346310183c35eb4f249924b96.jpg';
import heroImageNew1 from 'figma:asset/hero-new-1.jpg';
import heroImageNew2 from 'figma:asset/hero-new-2.jpg';
import heroImageNew3 from 'figma:asset/hero-new-3.jpg';
import heroImageNew4 from 'figma:asset/hero-new-4.jpg';
import heroImageNew5 from 'figma:asset/hero-new-5.jpg';
import heroImageNew6 from 'figma:asset/hero-new-6.jpg';
import heroImageNew7 from 'figma:asset/hero-new-7.jpg';
import heroImageNew8 from 'figma:asset/hero-new-8.jpg';

const heroImages = [
  heroImage1,
  heroImage2,
  heroImageNew1,
  heroImageNew2,
  heroImageNew3,
  heroImageNew4,
  heroImageNew5,
  heroImageNew6,
  heroImageNew7,
  heroImageNew8
];

const portfolioData = [
  // Product
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1714218707756-173966d250b7', category: 'Product', title: 'Luxury Watch' },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1627560004323-86d6e0ac8cc7', category: 'Product', title: 'Premium Headphones' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1632222623518-bbbd5f1f2489', category: 'Product', title: 'Vintage Camera' },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1626953313883-9d031d98307e', category: 'Product', title: 'Designer Perfume' },
  { id: 5, imageUrl: 'https://images.unsplash.com/photo-1726133731374-31f3ab7d29d9', category: 'Product', title: 'Sneaker Collection' },
  { id: 6, imageUrl: 'https://images.unsplash.com/photo-1707539159913-c905e3f80b99', category: 'Product', title: 'Cosmetics Line' },
  
  // Fashion
  { id: 7, imageUrl: 'https://images.unsplash.com/photo-1618908623278-dfcf55e6f687', category: 'Fashion', title: 'Fashion Portrait' },
  { id: 8, imageUrl: 'https://images.unsplash.com/photo-1760518221657-4cc66c12f68b', category: 'Fashion', title: 'Runway Collection' },
  { id: 9, imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d', category: 'Fashion', title: 'Street Style' },
  
  // Exhibition
  { id: 10, imageUrl: 'https://images.unsplash.com/photo-1569342380852-035f42d9ca41', category: 'Exhibition', title: 'Art Gallery' },
  { id: 11, imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912', category: 'Exhibition', title: 'Museum Installation' },
  { id: 12, imageUrl: 'https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6', category: 'Exhibition', title: 'Contemporary Art' },
  
  // Food
  { id: 13, imageUrl: 'https://images.unsplash.com/photo-1757358938541-c56a0c7c5846', category: 'Food', title: 'Gourmet Cuisine' },
  { id: 14, imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', category: 'Food', title: 'Fine Dining' },
  { id: 15, imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38', category: 'Food', title: 'Artisan Pizza' },
];

export default function Home() {
  const categories = ['Product', 'Fashion', 'Exhibition', 'Food'];
  const [activeCategory, setActiveCategory] = useState('Product');
  const location = useLocation();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOverHeader, setIsOverHeader] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');
  const hasMouseSupport = useRef(false);

  // Check if device has mouse support
  useEffect(() => {
    hasMouseSupport.current = window.matchMedia('(pointer: fine)').matches;
  }, []);

  // Check if returning from another page
  useEffect(() => {
    const isReturning = location.state?.returning === true;
    const returnCategory = location.state?.category;
    
    // Set active category if provided
    if (returnCategory && categories.includes(returnCategory)) {
      setActiveCategory(returnCategory);
    }
    
    // If returning, scroll to work section
    if (isReturning) {
      setTimeout(() => {
        const filterBar = document.getElementById('filter-bar');
        if (filterBar) {
          // Scroll to the content wrapper
          const contentWrapper = document.getElementById('main-content');
          if (contentWrapper) {
            contentWrapper.scrollIntoView({ behavior: 'instant' });
          }
        }
      }, 0);
    }
  }, [location]);

  // Track if user is hovering over hero section
  useEffect(() => {
    if (!hasMouseSupport.current) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Hide cursor if scrolled past hero section
      if (scrollY > heroHeight * 0.1) {
        setIsOverHero(false);
      } else {
        setIsOverHero(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add custom cursor styling only for this page
  useEffect(() => {
    if (!hasMouseSupport.current) return;

    // Hide default cursor only when over hero
    const updateCursor = () => {
      document.body.style.cursor = isOverHero ? 'none' : '';
    };
    
    updateCursor();

    // Track mouse position and check if over header elements
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Check if mouse is over header/nav elements
      const target = e.target as HTMLElement;
      const isOverNav = target.closest('header') !== null || 
                        target.closest('nav') !== null || 
                        target.closest('a') !== null ||
                        target.closest('button') !== null;
      
      setIsOverHeader(isOverNav);
      
      // Show cursor only if over hero AND not over header elements
      setShowCursor(isOverHero && !isOverNav);
    };

    // Handle mouse enter/leave
    const handleMouseLeave = () => {
      setShowCursor(false);
      setIsOverHeader(false);
    };

    const handleMouseEnter = () => {
      setShowCursor(isOverHero && !isOverHeader);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup on unmount
    return () => {
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isOverHero, isOverHeader]);

  const filteredItems = useMemo(() => {
    return portfolioData.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  // Determine if cursor is on the left or right side of the screen
  const isLeftSide = cursorPosition.x < window.innerWidth / 2;

  const handleHeroClick = (e: React.MouseEvent) => {
    // Don't trigger if clicking on header
    const target = e.target as HTMLElement;
    if (target.closest('header')) {
      return;
    }

    // Check if clicked on left or right side
    if (e.clientX < window.innerWidth / 2) {
      // Left side - previous image
      setCurrentImageIndex((prev) => {
        const newIndex = (prev - 1 + heroImages.length) % heroImages.length;
        console.log('Previous image clicked, new index:', newIndex);
        return newIndex;
      });
      setSlideDirection('left');
    } else {
      // Right side - next image
      setCurrentImageIndex((prev) => {
        const newIndex = (prev + 1) % heroImages.length;
        console.log('Next image clicked, new index:', newIndex);
        return newIndex;
      });
      setSlideDirection('right');
    }
  };

  return (
    <motion.div
      key="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen"
    >
      <Header 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      {/* Sticky Hero Section with Clickable Overlay */}
      <div className="relative w-full h-screen overflow-hidden bg-white sticky top-0">
        {/* Animated Background Images */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
            loading="eager"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0.0, 0.2, 1],
            }}
          />
        </AnimatePresence>
        
        {/* Clickable Overlay - Positioned above image but below header */}
        {isOverHero && (
          <div 
            className="absolute inset-0 z-0"
            onClick={handleHeroClick}
            style={{ cursor: 'none' }}
          />
        )}
      </div>
      
      {/* Main Content - Slides over hero */}
      <div id="main-content" className="relative z-10 bg-[#f5f5f5] min-h-screen shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div id="work" className="pt-2 md:pt-4">
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          {filteredItems.length > 0 && <PortfolioGrid items={filteredItems} />}
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
      {showCursor && (
        <div
          id="custom-cursor"
          style={{
            position: 'fixed',
            width: '237px',
            height: '68px',
            pointerEvents: 'none',
            zIndex: 9999,
            transform: `translate(-50%, -50%)`,
            transition: 'opacity 0.2s ease-out',
            opacity: '1',
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            color: '#000000',
          }}
        >
          {isLeftSide ? <CustomCursorPrev /> : <CustomCursorNext />}
        </div>
      )}
    </motion.div>
  );
}