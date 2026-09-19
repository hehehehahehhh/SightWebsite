import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  skipAnimations?: boolean;
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const footer = document.getElementById('contact');
    if (!footer) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div 
      className={`sticky top-[72px] md:top-[80px] z-40 bg-[#f5f5f5]/95 backdrop-blur-sm transition-all duration-300 ${ 
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} 
      id="filter-bar"
    >
      <div className="max-w-[1512px] mx-auto px-4 md:px-16 py-4 md:py-8">
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 md:gap-x-8 gap-y-3 md:gap-y-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className="relative group py-2 touch-manipulation"
            >
              <span className={`
                font-['Plus_Jakarta_Sans',sans-serif] text-[16px] md:text-[18px] tracking-[-0.01em] transition-colors duration-300
                ${activeCategory === category ? 'text-black font-medium' : 'text-gray-400 hover:text-black'}
              `}>
                {category}
              </span>
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}