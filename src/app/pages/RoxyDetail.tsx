import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// Roxy images from Figma
import img18 from "figma:asset/d0b7aa769cb6178dd07545ce3c3674214d094045.jpg";
import img22231 from "figma:asset/5305064b47b8c1ca6dafc921266445b5c1d4bc9b.jpg";
import img333341 from "figma:asset/6f8df8b0b587fae7a3c81b46cd1da74c8b4394df.jpg";
import img49 from "figma:asset/3d2d61572433426f5dec6372377f0cbd99a67015.jpg";
import img56 from "figma:asset/b982c8a1d6a4b7d9dc6cb36755bf5e876defa250.jpg";
import img66 from "figma:asset/c3d7f650a876173769d9d15b416741fbeee718c0.jpg";
import img75 from "figma:asset/b8b88b54bf366cdc83d8fe8664738189960fe297.jpg";
import img85 from "figma:asset/bc320a8adbe2ee02f73d6f866695bf090c3e3cc2.jpg";
import img93 from "figma:asset/f89111f8bb7e20a07b81aef773c4c829811c1b1b.jpg";
import img103 from "figma:asset/0a3c22af62dc758ff9afb31c39031a75a0bb38ca.jpg";
import { img17 } from "../../imports/svg-xjpb6";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import imgIvory from "figma:asset/268f8f6a159251e81251ae91745dabb6dea4cd50.jpg";
import imgShirley from "figma:asset/fd4b7f435d7c46161233bd55f05d26a57108ca94.jpg";

const images = [
  { src: img18, alt: "Roxy 1" },
  { src: img22231, alt: "Roxy 2" },
  { src: img333341, alt: "Roxy 3" },
  { src: img49, alt: "Roxy 4" },
  { src: img56, alt: "Roxy 5" },
  { src: img66, alt: "Roxy 6" },
  { src: img75, alt: "Roxy 7" },
  { src: img85, alt: "Roxy 8" },
  { src: img93, alt: "Roxy 9" },
  { src: img103, alt: "Roxy 10" },
];

export default function RoxyDetail() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { returning: true, category: 'Fashion' } });
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
            Roxy
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
            <div className="absolute inset-0 w-full h-full">
              <div className="w-full grid grid-cols-3 gap-x-3 gap-y-[34px]">
                {/* Row 1 - 3 masked images */}
                <div 
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: '445/596' }}
                  onClick={() => setSelectedImageIndex(0)}
                >
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      maskImage: `url('${img17}')`,
                      WebkitMaskImage: `url('${img17}')`,
                      maskSize: '94.41% 99.50%',
                      WebkitMaskSize: '94.41% 99.50%',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: '2.91% 0.50%',
                      WebkitMaskPosition: '2.91% 0.50%',
                    }}
                  >
                    <img 
                      alt="Roxy 1" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                      src={img18}
                    />
                  </div>
                </div>

                <div 
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: '445/596' }}
                  onClick={() => setSelectedImageIndex(1)}
                >
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      maskImage: `url('${img17}')`,
                      WebkitMaskImage: `url('${img17}')`,
                      maskSize: '94.41% 99.50%',
                      WebkitMaskSize: '94.41% 99.50%',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: '5.59% 0.50%',
                      WebkitMaskPosition: '5.59% 0.50%',
                    }}
                  >
                    <img 
                      alt="Roxy 2" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                      src={img22231}
                    />
                  </div>
                </div>

                <div 
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: '445/596' }}
                  onClick={() => setSelectedImageIndex(2)}
                >
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      maskImage: `url('${img17}')`,
                      WebkitMaskImage: `url('${img17}')`,
                      maskSize: '94.41% 99.50%',
                      WebkitMaskSize: '94.41% 99.50%',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: '0% 0.50%',
                      WebkitMaskPosition: '0% 0.50%',
                    }}
                  >
                    <img 
                      alt="Roxy 3" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                      src={img333341}
                    />
                  </div>
                </div>

                {/* Row 2 - 3 masked images */}
                <div 
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: '445/596' }}
                  onClick={() => setSelectedImageIndex(3)}
                >
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      maskImage: `url('${img17}')`,
                      WebkitMaskImage: `url('${img17}')`,
                      maskSize: '94.41% 99.50%',
                      WebkitMaskSize: '94.41% 99.50%',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: '2.91% 0.50%',
                      WebkitMaskPosition: '2.91% 0.50%',
                    }}
                  >
                    <img 
                      alt="Roxy 4" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                      src={img49}
                    />
                  </div>
                </div>

                <div 
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: '445/596' }}
                  onClick={() => setSelectedImageIndex(4)}
                >
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      maskImage: `url('${img17}')`,
                      WebkitMaskImage: `url('${img17}')`,
                      maskSize: '94.41% 99.50%',
                      WebkitMaskSize: '94.41% 99.50%',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: '2.91% 0.50%',
                      WebkitMaskPosition: '2.91% 0.50%',
                    }}
                  >
                    <img 
                      alt="Roxy 5" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                      src={img56}
                    />
                  </div>
                </div>

                <div 
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: '445/596' }}
                  onClick={() => setSelectedImageIndex(5)}
                >
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      maskImage: `url('${img17}')`,
                      WebkitMaskImage: `url('${img17}')`,
                      maskSize: '94.41% 99.50%',
                      WebkitMaskSize: '94.41% 99.50%',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: '2.91% 0.50%',
                      WebkitMaskPosition: '2.91% 0.50%',
                    }}
                  >
                    <img 
                      alt="Roxy 6" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                      src={img66}
                    />
                  </div>
                </div>

                {/* Row 3 - 3 masked images */}
                <div 
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: '445/596' }}
                  onClick={() => setSelectedImageIndex(6)}
                >
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      maskImage: `url('${img17}')`,
                      WebkitMaskImage: `url('${img17}')`,
                      maskSize: '94.41% 99.50%',
                      WebkitMaskSize: '94.41% 99.50%',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: '2.91% 0.50%',
                      WebkitMaskPosition: '2.91% 0.50%',
                    }}
                  >
                    <img 
                      alt="Roxy 7" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                      src={img75}
                    />
                  </div>
                </div>

                <div 
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: '445/596' }}
                  onClick={() => setSelectedImageIndex(7)}
                >
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      maskImage: `url('${img17}')`,
                      WebkitMaskImage: `url('${img17}')`,
                      maskSize: '94.41% 99.50%',
                      WebkitMaskSize: '94.41% 99.50%',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: '2.91% 0.50%',
                      WebkitMaskPosition: '2.91% 0.50%',
                    }}
                  >
                    <img 
                      alt="Roxy 8" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                      src={img85}
                    />
                  </div>
                </div>

                <div 
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: '445/596' }}
                  onClick={() => setSelectedImageIndex(8)}
                >
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      maskImage: `url('${img17}')`,
                      WebkitMaskImage: `url('${img17}')`,
                      maskSize: '94.41% 99.50%',
                      WebkitMaskSize: '94.41% 99.50%',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: '2.91% 0.50%',
                      WebkitMaskPosition: '2.91% 0.50%',
                    }}
                  >
                    <img 
                      alt="Roxy 9" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                      src={img93}
                    />
                  </div>
                </div>

                {/* Row 4 - 1 masked image */}
                <div 
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: '445/596' }}
                  onClick={() => setSelectedImageIndex(9)}
                >
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      maskImage: `url('${img17}')`,
                      WebkitMaskImage: `url('${img17}')`,
                      maskSize: '94.41% 99.50%',
                      WebkitMaskSize: '94.41% 99.50%',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: '2.91% 0.50%',
                      WebkitMaskPosition: '2.91% 0.50%',
                    }}
                  >
                    <img 
                      alt="Roxy 10" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                      src={img103}
                    />
                  </div>
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
          {/* Ivory Navigation */}
          <Link 
            to="/ivory"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('ivory')}
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
              Ivory
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'ivory' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '402.719/565.724' }}
                >
                  <img 
                    src={imgIvory} 
                    alt="Ivory" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Shirley Navigation */}
          <Link 
            to="/shirley"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('shirley')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black transition-opacity group-hover:opacity-70">
              Shirley
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
              {hoveredNav === 'shirley' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute right-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '402.719/565.724' }}
                >
                  <img 
                    src={imgShirley} 
                    alt="Shirley" 
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