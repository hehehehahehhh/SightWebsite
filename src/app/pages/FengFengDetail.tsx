import image_ac006fa6adfba750491dadf76e333d833910eca3 from 'figma:asset/ac006fa6adfba750491dadf76e333d833910eca3.jpg'
import image_83dda83f73fd133f46d94c7661a6504d8fca6c90 from 'figma:asset/83dda83f73fd133f46d94c7661a6504d8fca6c90.jpg'
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// Feng Feng images from Figma
import img83 from "figma:asset/ac006fa6adfba750491dadf76e333d833910eca3.jpg";
import img72 from "figma:asset/84fa63a408d8621fafdccf9c893d3c3668d0a119.jpg";
import img18 from "figma:asset/83dda83f73fd133f46d94c7661a6504d8fca6c90.jpg";
import img22227 from "figma:asset/0e24db84f45bba0461cd3acf3b1b8fc30cc2cd94.jpg";
import img46 from "figma:asset/2b99fed086d1117b02ada8382640637088241477.jpg";
import img31 from "figma:asset/e025732070920faf4ad9c8a34157bf5ebad91936.jpg";
import img54 from "figma:asset/d961c597c091336963e5efe7bab91fdbae8a6f2e.jpg";
import img63 from "figma:asset/8cb7b805c674a40a6bd14fd74c96003c7cf40405.jpg";
import { img82 } from "../../imports/svg-dym46";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import imgGambleHouse from "figma:asset/1966571180428a55c01fb46133ce1655d080df55.jpg";
import imgArtZen from "figma:asset/09242715ce88ebc642b6c9c602c11e7aa9309c7d.jpg";

const images = [
  { src: img18, alt: "Feng Feng 1" },
  { src: img22227, alt: "Feng Feng 2" },
  { src: img31, alt: "Feng Feng 3" },
  { src: img46, alt: "Feng Feng 4" },
  { src: img54, alt: "Feng Feng 5" },
  { src: img63, alt: "Feng Feng 6" },
  { src: img72, alt: "Feng Feng 7" },
  { src: img83, alt: "Feng Feng 8" },
];

export default function FengFengDetail() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { returning: true } });
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-[#f5f5f5]"
    >
      {/* Main Content Container */}
      <div className="w-full max-w-[1512px] mx-auto px-4 md:px-16 relative">
        {/* Close Button - Absolute positioned relative to content */}
        <button
          onClick={handleClose}
          className="fixed top-4 right-4 md:top-12 md:right-16 cursor-pointer group z-50 touch-manipulation"
        >
          <div className="size-[50px] md:size-[65px] flex items-center justify-center relative">
            {/* Backdrop circle with background blur */}
            <div className="absolute inset-0 size-full rounded-full bg-[rgba(245,245,245,0.3)] backdrop-blur-[13.3px]" />
            
            {/* X icon */}
            <div className="relative size-[18px] md:size-[22px] flex items-center justify-center">
              <div className="absolute rotate-45">
                <div className="bg-black h-[2.5px] md:h-[3px] w-[22px] md:w-[28px] transition-colors group-hover:bg-gray-700" />
              </div>
              <div className="absolute -scale-y-100 rotate-135">
                <div className="bg-black h-[2.5px] md:h-[3px] w-[22px] md:w-[28px] transition-colors group-hover:bg-gray-700" />
              </div>
            </div>
          </div>
        </button>

        {/* Content */}
        <div className="py-10 md:py-24">
          {/* Title */}
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] md:text-[48px] tracking-[-0.01em] text-black mb-8 md:mb-20">
            Feng Feng
          </h1>

          {/* Mobile Layout - Single Column */}
          <div className="md:hidden flex flex-col gap-4">
            {images.map((image, index) => (
              <div 
                key={index}
                className="w-full overflow-hidden cursor-pointer touch-manipulation"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 active:scale-95"
                  src={image.src}
                />
              </div>
            ))}
          </div>

          {/* Desktop Layout - Exact Figma Layout - Responsive Container */}
          <div className="hidden md:block w-full relative" style={{ paddingBottom: '187.54%' }}>
            {/* 1853 / 1339 = 1.384 or 138.4% aspect ratio */}
            <div className="absolute inset-0">
              {/* Background cells - create consistent grid structure */}
              <div className="absolute bg-[#f5f5f5]" style={{ height: '31.99%', left: '68.51%', top: '0%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '31.99%', left: '0%', top: '0%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '31.99%', left: '34.13%', top: '0%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '31.99%', left: '68.51%', top: '34.00%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '31.99%', left: '0%', top: '34.00%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '31.99%', left: '34.13%', top: '34.00%', width: '31.52%' }} />

              {/* Image 1 - 1 8 (top left, shorter height) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '8.09%', left: '0%', top: '11.93%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(0)}
              >
                <img 
                  alt="Feng Feng 1" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={image_83dda83f73fd133f46d94c7661a6504d8fca6c90}
                />
              </div>

              {/* Image 2 - 2 2227 (middle top) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '22.77%', left: '34.13%', top: '4.59%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(1)}
              >
                <img 
                  alt="Feng Feng 2" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img22227}
                />
              </div>

              {/* Image 3 - 3（首图） 1 (top right) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '22.77%', left: '68.51%', top: '4.59%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(2)}
              >
                <img 
                  alt="Feng Feng 3" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img31}
                />
              </div>

              {/* Image 4 - 4 6 (bottom left) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '22.77%', left: '0%', top: '38.59%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(3)}
              >
                <img 
                  alt="Feng Feng 4" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img46}
                />
              </div>

              {/* Image 5 - 5 4 (bottom middle) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '22.77%', left: '34.13%', top: '38.59%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(4)}
              >
                <img 
                  alt="Feng Feng 5" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img54}
                />
              </div>

              {/* Image 6 - 6 3 (bottom right) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '22.77%', left: '68.51%', top: '38.59%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(5)}
              >
                <img 
                  alt="Feng Feng 6" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img63}
                />
              </div>

              {/* Mask Group 1 - 7 2 (left bottom with mask) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '32.00%', left: '0%', top: '68.00%', width: '33.24%' }}
                onClick={() => setSelectedImageIndex(6)}
              >
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    maskImage: `url('${img82}')`,
                    WebkitMaskImage: `url('${img82}')`,
                    maskSize: '94.94% 100%',
                    WebkitMaskSize: '94.94% 100%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: '5.17% 0%',
                    WebkitMaskPosition: '5.17% 0%'
                  }}
                >
                  <img 
                    alt="Feng Feng 7" 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                    src={img72}
                  />
                </div>
              </div>

              {/* Mask Group 2 - 8 2 (right bottom with mask) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '32.00%', left: '34.13%', top: '68.00%', width: '33.24%' }}
                onClick={() => setSelectedImageIndex(7)}
              >
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    maskImage: `url('${img82}')`,
                    WebkitMaskImage: `url('${img82}')`,
                    maskSize: '94.94% 100%',
                    WebkitMaskSize: '94.94% 100%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: '5.17% 0%',
                    WebkitMaskPosition: '5.17% 0%'
                  }}
                >
                  <img 
                    alt="Feng Feng 8" 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                    src={image_ac006fa6adfba750491dadf76e333d833910eca3}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Spacing after grid */}
          <div className="w-full mt-8 md:mt-12 relative h-[156px]">
            {/* Empty space for layout */}
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="w-full max-w-[1512px] mx-auto px-4 md:px-16 pb-10 md:pb-24">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Gamble House Navigation */}
          <Link 
            to="/gamblehouse"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('gamblehouse')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Left Arrow */}
            <div className="flex h-[14px] md:h-[18px] items-center justify-center w-[8px] md:w-[10px] flex-shrink-0">
              <div className="-scale-y-100 rotate-180">
                <svg className="block size-full transition-all duration-300 group-hover:scale-110" fill="none" preserveAspectRatio="none" viewBox="0 0 21 35.9863">
                  <g>
                    <path d={svgPathsNav.p18d0d700} fill="#353535" />
                  </g>
                </svg>
              </div>
            </div>
            
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black transition-opacity group-hover:opacity-70">
              Gamble House
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'gamblehouse' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '436/349' }}
                >
                  <img 
                    src={imgGambleHouse} 
                    alt="Gamble House" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* ArtZen Navigation */}
          <Link 
            to="/artzen"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('artzen')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black transition-opacity group-hover:opacity-70">
              ArtZen
            </p>
            
            {/* Right Arrow */}
            <div className="h-[14px] md:h-[18px] w-[8px] md:w-[10px] flex-shrink-0">
              <svg className="block size-full transition-all duration-300 group-hover:scale-110" fill="none" preserveAspectRatio="none" viewBox="0 0 21 35.9863">
                <g>
                  <path d={svgPathsNav.p18d0d700} fill="#353535" />
                </g>
              </svg>
            </div>

            {/* Hover Image - Right side */}
            <AnimatePresence>
              {hoveredNav === 'artzen' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute right-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '437/349' }}
                >
                  <img 
                    src={imgArtZen} 
                    alt="ArtZen" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black" />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="fixed top-6 right-6 md:top-12 md:right-16 cursor-pointer group z-[70]"
            >
              <div className="size-[65px] flex items-center justify-center relative">
                {/* Backdrop circle with background blur */}
                <div className="absolute inset-0 size-full rounded-full bg-[rgba(245,245,245,0.3)] backdrop-blur-[13.3px]" />
                
                {/* X icon - white colored */}
                <div className="relative size-[22px] flex items-center justify-center">
                  <div className="absolute rotate-45">
                    <div className="bg-white h-[3px] w-[28px] transition-colors group-hover:bg-gray-300" />
                  </div>
                  <div className="absolute -scale-y-100 rotate-135">
                    <div className="bg-white h-[3px] w-[28px] transition-colors group-hover:bg-gray-300" />
                  </div>
                </div>
              </div>
            </button>

            {/* Full-size Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-[65] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                className="max-w-[90vw] max-h-[80vh] w-auto h-auto"
              />
            </motion.div>

            {/* Navigation Arrows */}
            {/* Previous Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-[65] cursor-pointer group"
            >
              <div className="size-[70px] flex items-center justify-center relative rounded-full bg-[#ffffff00]">
                {/* Arrow icon - rotated 180deg for left */}
                <div className="relative h-[38px] w-[22px] rotate-180">
                  <svg className="block size-full transition-transform group-hover:scale-110" fill="none" preserveAspectRatio="none" viewBox="0 0 31 53.123">
                    <g clipPath="url(#clip0_34_1397)">
                      <path d={svgPathsLeftArrow.p9d43f00} fill="white" />
                    </g>
                    <defs>
                      <clipPath id="bgblur_1_34_1397_clip_path" transform="translate(4 4)">
                        <path d={svgPathsLeftArrow.p9d43f00} />
                      </clipPath>
                      <clipPath id="clip0_34_1397">
                        <rect fill="white" height="53.123" width="31" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[65] cursor-pointer group"
            >
              <div className="size-[70px] flex items-center justify-center relative rounded-full bg-[#ffffff00]">
                {/* Arrow icon */}
                <div className="relative h-[38px] w-[22px]">
                  <svg className="block size-full transition-transform group-hover:scale-110" fill="none" preserveAspectRatio="none" viewBox="0 0 31 53.123">
                    <g clipPath="url(#clip0_34_1374)">
                      <path d={svgPathsNewArrow.p9d43f00} fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_34_1374">
                        <rect fill="white" height="53.123" width="31" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}