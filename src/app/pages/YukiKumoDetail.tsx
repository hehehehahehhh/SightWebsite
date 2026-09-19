import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// Yuki & Kumo images from Figma
import imgYukiKumo1 from "figma:asset/33f6a21ea310422cc495b496fef1481bf4039ecf.jpg";
import img22237 from "figma:asset/e974e2cac8f8ebf7788e0348c15918d60d5125ca.jpg";
import img333351 from "figma:asset/83be5ef593a19b00d89579321e9abb4333386372.jpg";
import img418 from "figma:asset/69b5d7639b895018bbc4dfd33dbc46deea13d73c.jpg";
import img515 from "figma:asset/5970acf1111844e1567edf6afe506dfd4f07accf.jpg";
import img615 from "figma:asset/23ef797426848fbba850c249466012551f8b92bf.jpg";
import img712 from "figma:asset/fde70076786e98e67bb22af661d073436f8aae31.jpg";
import img810 from "figma:asset/6abbfb99dcd7d5efb83e883364100b1001a11d12.jpg";
import img97 from "figma:asset/122391f2b369a78d577ab5e6c03b12c1e54c7c86.jpg";
import img107 from "figma:asset/02085d16487e50f94ab9f39985d544612ce9ddda.jpg";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import { imgSumei, imgThreeCats } from "../constants/navigationImages";

const images = [
  { src: imgYukiKumo1, alt: "Yuki & Kumo 1" },
  { src: img22237, alt: "Yuki & Kumo 2" },
  { src: img333351, alt: "Yuki & Kumo 3" },
  { src: img418, alt: "Yuki & Kumo 4" },
  { src: img515, alt: "Yuki & Kumo 5" },
  { src: img615, alt: "Yuki & Kumo 6" },
  { src: img712, alt: "Yuki & Kumo 7" },
  { src: img810, alt: "Yuki & Kumo 8" },
  { src: img97, alt: "Yuki & Kumo 9" },
  { src: img107, alt: "Yuki & Kumo 10" },
];

export default function YukiKumoDetail() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { returning: true, category: 'Food' } });
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
      {/* Close Button - Fixed to viewport */}
      <button
        onClick={handleClose}
        className="fixed top-4 right-4 md:top-12 md:right-[100px] cursor-pointer group z-50 touch-manipulation"
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

      {/* Main Content */}
      <div className="w-full max-w-[1512px] mx-auto px-4 md:px-16 py-10 md:py-24">
        {/* Title */}
        <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] md:text-[48px] tracking-[-0.01em] text-black mb-8 md:mb-20">
          Yuki & Kumo
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
        <div className="hidden md:block w-full relative" style={{ paddingBottom: '178.88%' }}>
          {/* 2397 / 1340 = 1.7888 or 178.88% aspect ratio */}
          <div className="absolute inset-0">
            {/* Background cells */}
            <div className="absolute bg-[#F5F5F5]" style={{ left: '68.51%', top: '0%', width: '31.49%', height: '17.61%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '68.51%', top: '26.28%', width: '31.49%', height: '17.61%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '68.51%', top: '52.56%', width: '31.49%', height: '17.61%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '34.10%', top: '26.28%', width: '31.49%', height: '17.61%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '34.10%', top: '0%', width: '31.49%', height: '17.61%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '0%', top: '26.28%', width: '31.49%', height: '17.61%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '34.10%', top: '52.56%', width: '31.49%', height: '17.61%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '0%', top: '0%', width: '31.49%', height: '17.61%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '0%', top: '52.56%', width: '31.49%', height: '17.61%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '0%', top: '78.84%', width: '31.49%', height: '17.61%' }} />

            {/* Image 1 - Row 1, Col 1 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '3.55%', width: '31.49%', height: '17.61%' }}
              onClick={() => setSelectedImageIndex(0)}
            >
              <img 
                alt="Yuki & Kumo 1" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={imgYukiKumo1}
              />
            </div>

            {/* Image 2 - Row 1, Col 2 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.10%', top: '3.55%', width: '31.49%', height: '17.61%' }}
              onClick={() => setSelectedImageIndex(1)}
            >
              <img 
                alt="Yuki & Kumo 2" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img22237}
              />
            </div>

            {/* Image 3 - Row 1, Col 3 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.51%', top: '3.55%', width: '31.49%', height: '17.61%' }}
              onClick={() => setSelectedImageIndex(2)}
            >
              <img 
                alt="Yuki & Kumo 3" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img333351}
              />
            </div>

            {/* Image 4 - Row 2, Col 1 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '29.87%', width: '31.49%', height: '17.61%' }}
              onClick={() => setSelectedImageIndex(3)}
            >
              <img 
                alt="Yuki & Kumo 4" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img418}
              />
            </div>

            {/* Image 5 - Row 2, Col 2 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.10%', top: '29.87%', width: '31.49%', height: '17.61%' }}
              onClick={() => setSelectedImageIndex(4)}
            >
              <img 
                alt="Yuki & Kumo 5" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img515}
              />
            </div>

            {/* Image 6 - Row 2, Col 3 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.51%', top: '29.87%', width: '31.49%', height: '17.61%' }}
              onClick={() => setSelectedImageIndex(5)}
            >
              <img 
                alt="Yuki & Kumo 6" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img615}
              />
            </div>

            {/* Image 7 - Row 3, Col 1 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '56.11%', width: '31.49%', height: '17.61%' }}
              onClick={() => setSelectedImageIndex(6)}
            >
              <img 
                alt="Yuki & Kumo 7" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img712}
              />
            </div>

            {/* Image 8 - Row 3, Col 2 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.10%', top: '56.11%', width: '31.49%', height: '17.61%' }}
              onClick={() => setSelectedImageIndex(7)}
            >
              <img 
                alt="Yuki & Kumo 8" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img810}
              />
            </div>

            {/* Image 9 - Row 3, Col 3 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.51%', top: '56.11%', width: '31.49%', height: '17.61%' }}
              onClick={() => setSelectedImageIndex(8)}
            >
              <img 
                alt="Yuki & Kumo 9" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img97}
              />
            </div>

            {/* Image 10 - Row 4, Col 1 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '82.39%', width: '31.49%', height: '17.61%' }}
              onClick={() => setSelectedImageIndex(9)}
            >
              <img 
                alt="Yuki & Kumo 10" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img107}
              />
            </div>
          </div>
        </div>

        {/* Spacing after grid */}
        <div className="w-full mt-8 md:mt-12 relative h-[156px]">
          {/* Empty space for layout */}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="w-full max-w-[1512px] mx-auto px-4 md:px-16 pb-10 md:pb-24">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Sumei Navigation */}
          <Link 
            to="/sumei"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('sumei')}
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
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[24px] md:text-[36px] text-black transition-opacity group-hover:opacity-70">
              Sumei
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'sumei' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '437/349' }}
                >
                  <img 
                    src={imgSumei} 
                    alt="Sumei" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Three Cats Navigation */}
          <Link 
            to="/threecats"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('threecats')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[24px] md:text-[36px] text-black transition-opacity group-hover:opacity-70">
              ThreeCat
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
              {hoveredNav === 'threecats' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute right-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '437/349' }}
                >
                  <img 
                    src={imgThreeCats} 
                    alt="Three Cats" 
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