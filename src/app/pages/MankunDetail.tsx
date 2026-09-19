import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// Mankun images from Figma
import img111 from "figma:asset/afb2251a0c87aae4eb927e3798b5f2dd6314487a.jpg";
import img22232 from "figma:asset/0d30b6e5d83db1723e864b7c5f1832616839ca03.jpg";
import img333342 from "figma:asset/d9c4810bec42751ad3c300140d7802d7ba91ee43.jpg";
import img41 from "figma:asset/cf8754a44433912fa27fdd7118cc604f9630931e.jpg";
import img57 from "figma:asset/750a80f4de3c7bea8d9e6cdfbe4af212559986ce.jpg";
import img67 from "figma:asset/7b8dab69f0a3d1cf54aacb1823a2cc7969c751b2.jpg";
import { img110 } from "../../imports/svg-wow11";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import imgShirley from "figma:asset/fd4b7f435d7c46161233bd55f05d26a57108ca94.jpg";
import imgIvory from "figma:asset/268f8f6a159251e81251ae91745dabb6dea4cd50.jpg";

const images = [
  { src: img111, alt: "Mankun 1" },
  { src: img22232, alt: "Mankun 2" },
  { src: img333342, alt: "Mankun 3" },
  { src: img41, alt: "Mankun 4" },
  { src: img57, alt: "Mankun 5" },
  { src: img67, alt: "Mankun 6" },
];

export default function MankunDetail() {
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
      {/* Close Button - Fixed to viewport */}
      <button
        onClick={handleClose}
        className="fixed top-4 right-4 md:top-12 md:right-[100px] cursor-pointer group z-50 touch-manipulation"
      >
        <div className="size-[50px] md:size-[65px] flex items-center justify-center relative">
          {/* Backdrop circle with background blur */}
          <div className="absolute inset-0 size-full rounded-full bg-[rgba(245,245,245,0.3)] backdrop-blur-[13.3px]" />
          
          {/* X icon - white colored */}
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
          Mankun
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

        {/* Desktop Layout - Exact Figma Layout */}
        <div className="hidden md:block w-full relative" style={{ width: '1362px', height: '1223px', maxWidth: '100%' }}>
          {/* Mask group 1 - Top Left with img111 */}
          <div className="absolute contents left-0 top-0">
            <div 
              className="absolute cursor-pointer group"
              style={{
                height: '593px',
                left: '-23px',
                maskImage: `url('${img110}')`,
                WebkitMaskImage: `url('${img110}')`,
                maskMode: 'alpha',
                WebkitMaskMode: 'alpha',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: '23px 0px',
                WebkitMaskPosition: '23px 0px',
                maskSize: '422px 592.81px',
                WebkitMaskSize: '422px 592.81px',
                top: 0,
                width: '445px'
              }}
              onClick={() => setSelectedImageIndex(0)}
            >
              <img 
                alt="Mankun 1" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img111} 
              />
            </div>
          </div>

          {/* Mask group 2 - Top Middle with img22232 */}
          <div className="absolute contents left-[457px] top-0">
            <div 
              className="absolute cursor-pointer group"
              style={{
                height: '593px',
                left: '434px',
                maskImage: `url('${img110}')`,
                WebkitMaskImage: `url('${img110}')`,
                maskMode: 'alpha',
                WebkitMaskMode: 'alpha',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: '23px 0px',
                WebkitMaskPosition: '23px 0px',
                maskSize: '422px 592.81px',
                WebkitMaskSize: '422px 592.81px',
                top: 0,
                width: '445px'
              }}
              onClick={() => setSelectedImageIndex(1)}
            >
              <img 
                alt="Mankun 2" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img22232} 
              />
            </div>
          </div>

          {/* Bottom row container */}
          <div className="absolute contents left-0 top-[630px]">
            {/* Mask group 3 - Bottom Left with img41 */}
            <div className="absolute contents left-0 top-[630px]">
              <div 
                className="absolute cursor-pointer group"
                style={{
                  height: '594px',
                  left: '-12px',
                  maskImage: `url('${img110}')`,
                  WebkitMaskImage: `url('${img110}')`,
                  maskMode: 'alpha',
                  WebkitMaskMode: 'alpha',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '12px 1px',
                  WebkitMaskPosition: '12px 1px',
                  maskSize: '422px 592.81px',
                  WebkitMaskSize: '422px 592.81px',
                  top: '629px',
                  width: '446px'
                }}
                onClick={() => setSelectedImageIndex(3)}
              >
                <img 
                  alt="Mankun 4" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img41} 
                />
              </div>
            </div>

            {/* Mask group 4 - Bottom Middle with img57 */}
            <div className="absolute contents left-[457px] top-[630px]">
              <div 
                className="absolute cursor-pointer group"
                style={{
                  height: '593px',
                  left: '445px',
                  maskImage: `url('${img110}')`,
                  WebkitMaskImage: `url('${img110}')`,
                  maskMode: 'alpha',
                  WebkitMaskMode: 'alpha',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '12px 0px',
                  WebkitMaskPosition: '12px 0px',
                  maskSize: '422px 592.81px',
                  WebkitMaskSize: '422px 592.81px',
                  top: '630px',
                  width: '445px'
                }}
                onClick={() => setSelectedImageIndex(4)}
              >
                <img 
                  alt="Mankun 5" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img57} 
                />
              </div>
            </div>

            {/* Mask group 5 - Bottom Right with img67 */}
            <div className="absolute contents left-[918px] top-[630px]">
              <div 
                className="absolute cursor-pointer group"
                style={{
                  height: '593px',
                  left: '918px',
                  maskImage: `url('${img110}')`,
                  WebkitMaskImage: `url('${img110}')`,
                  maskMode: 'alpha',
                  WebkitMaskMode: 'alpha',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '0px 0px',
                  WebkitMaskPosition: '0px 0px',
                  maskSize: '422px 592.81px',
                  WebkitMaskSize: '422px 592.81px',
                  top: '630px',
                  width: '444px'
                }}
                onClick={() => setSelectedImageIndex(5)}
              >
                <img 
                  alt="Mankun 6" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img67} 
                />
              </div>
            </div>
          </div>

          {/* Top Right Background Rectangle */}
          <div 
            className="absolute bg-[#f5f5f5]" 
            style={{
              height: '592.81px',
              left: '918px',
              top: 0,
              width: '422px'
            }}
          />

          {/* Top Right Image - img333342 */}
          <div 
            className="absolute cursor-pointer group"
            style={{
              height: '317px',
              left: '918px',
              top: '137px',
              width: '422px'
            }}
            onClick={() => setSelectedImageIndex(2)}
          >
            <img 
              alt="Mankun 3" 
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
              src={img333342} 
            />
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="w-full max-w-[1512px] mx-auto px-4 md:px-16 pb-10 md:pb-24 mt-16 md:mt-32">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Shirley Navigation */}
          <Link 
            to="/shirley"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('shirley')}
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
              Shirley
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'shirley' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
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

          {/* Ivory Navigation */}
          <Link 
            to="/ivory"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('ivory')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black transition-opacity group-hover:opacity-70">
              Ivory
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
              {hoveredNav === 'ivory' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute right-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
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