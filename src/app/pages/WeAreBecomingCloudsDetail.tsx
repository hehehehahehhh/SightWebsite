import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// We are becoming clouds exhibition images from Figma
import img113 from "figma:asset/ca0425ebda991a0863d2e3bd0ef9ec51cd082c15.jpg";
import img22236 from "figma:asset/2c1b8441097d4cece5efc0208c522a5ca1cb095d.jpg";
import img333349 from "figma:asset/e620e52d43ebb06e057e7043ab01cbe39fc2c235.jpg";
import img416 from "figma:asset/d64bc91eac5ea987abc24a388ae642d70afbaab2.jpg";
import imgWeAreBecomingClouds1 from "figma:asset/11237c7ee0f8e7c7de987029ee5590c79b7cf01d.jpg";
import img613 from "figma:asset/281205eaa14b8a1effe547f891664804548c324e.jpg";
import { img22235 } from "../../imports/svg-yz9tr";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import imgProxyChimerOracle from "figma:asset/6674bcfff676ae3592b76aa48633c272a6cc9aa5.jpg";
import imgYouSee from "figma:asset/ef5051edb6f8f44619b65e2330c2abce1cfd44f9.jpg";

const images = [
  { src: img113, alt: "We are becoming clouds 1" },
  { src: img22236, alt: "We are becoming clouds 2" },
  { src: img333349, alt: "We are becoming clouds 3" },
  { src: img416, alt: "We are becoming clouds 4" },
  { src: imgWeAreBecomingClouds1, alt: "We are becoming clouds 5" },
  { src: img613, alt: "We are becoming clouds 6" },
];

export default function WeAreBecomingCloudsDetail() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { returning: true, category: 'Exhibition' } });
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
        className="fixed top-6 right-6 md:top-12 md:right-[100px] cursor-pointer group z-50 touch-manipulation"
      >
        <div className="size-[50px] md:size-[65px] flex items-center justify-center relative">
          {/* Backdrop circle with background blur */}
          <div className="absolute inset-0 size-full rounded-full bg-[rgba(245,245,245,0.3)] backdrop-blur-[13.3px]" />
          
          {/* X icon */}
          <div className="relative size-[18px] md:size-[22px] flex items-center justify-center">
            <div className="absolute rotate-45">
              <div className="bg-black h-[2.5px] md:h-[3px] w-[22px] md:w-[28px] md:transition-colors md:group-hover:bg-gray-700" />
            </div>
            <div className="absolute -scale-y-100 rotate-135">
              <div className="bg-black h-[2.5px] md:h-[3px] w-[22px] md:w-[28px] md:transition-colors md:group-hover:bg-gray-700" />
            </div>
          </div>
        </div>
      </button>

      {/* Main Content */}
      <div className="w-full max-w-[1512px] mx-auto px-4 md:px-16 py-10 md:py-24">
        {/* Title */}
        <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] md:text-[48px] tracking-[-0.01em] text-black mb-8 md:mb-20">
          We are becoming clouds
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

        {/* Desktop Layout - Exact Figma Layout - 1342px × 1222.81px */}
        {/* Responsive container maintaining aspect ratio */}
        <div className="hidden md:block w-full relative" style={{ paddingBottom: '91.12%' }}>
          <div className="absolute inset-0">
            {/* Background cells - 592.81px high (48.49% of container) */}
            {/* Row 1 */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0%', top: '0%', width: '31.45%', height: '48.49%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.56%', top: '0%', width: '31.45%', height: '48.49%' }} />
            
            {/* Row 2 */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.56%', top: '51.51%', width: '31.45%', height: '48.49%' }} />

            {/* Row 1 Images */}
            {/* Image 1 - Horizontal (col 1, top: 11.20%, height: 25.92%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '11.20%', width: '31.45%', height: '25.92%' }}
              onClick={() => setSelectedImageIndex(0)}
            >
              <img 
                alt="We are becoming clouds 1" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img113}
              />
            </div>

            {/* Image 2 - Masked vertical (col 2, top: 0%, height: 48.49%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.28%', top: '0%', width: '33.17%', height: '48.49%' }}
              onClick={() => setSelectedImageIndex(1)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img22235}')`,
                  WebkitMaskImage: `url('${img22235}')`,
                  maskSize: '94.83% 99.96%',
                  WebkitMaskSize: '94.83% 99.96%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '2.69% 0%',
                  WebkitMaskPosition: '2.69% 0%',
                }}
              >
                <img 
                  alt="We are becoming clouds 2" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img22236}
                />
              </div>
            </div>

            {/* Image 3 - Horizontal (col 3, top: 11.20%, height: 25.92%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.56%', top: '11.20%', width: '31.45%', height: '25.92%' }}
              onClick={() => setSelectedImageIndex(2)}
            >
              <img 
                alt="We are becoming clouds 3" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img333349}
              />
            </div>

            {/* Row 2 Images */}
            {/* Image 4 - Masked vertical (col 1, top: 51.51%, height: 48.49%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '51.51%', width: '33.17%', height: '48.49%' }}
              onClick={() => setSelectedImageIndex(3)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img22235}')`,
                  WebkitMaskImage: `url('${img22235}')`,
                  maskSize: '94.83% 99.96%',
                  WebkitMaskSize: '94.83% 99.96%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '0% 0%',
                  WebkitMaskPosition: '0% 0%',
                }}
              >
                <img 
                  alt="We are becoming clouds 4" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img416}
                />
              </div>
            </div>

            {/* Image 5 - Masked vertical (col 2, top: 51.51%, height: 48.49%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.28%', top: '51.51%', width: '33.17%', height: '48.49%' }}
              onClick={() => setSelectedImageIndex(4)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img22235}')`,
                  WebkitMaskImage: `url('${img22235}')`,
                  maskSize: '94.83% 99.96%',
                  WebkitMaskSize: '94.83% 99.96%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '5.17% 0%',
                  WebkitMaskPosition: '5.17% 0%',
                }}
              >
                <img 
                  alt="We are becoming clouds 5" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={imgWeAreBecomingClouds1}
                />
              </div>
            </div>

            {/* Image 6 - Horizontal (col 3, top: 62.72%, height: 25.92%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.56%', top: '62.72%', width: '31.45%', height: '25.92%' }}
              onClick={() => setSelectedImageIndex(5)}
            >
              <img 
                alt="We are becoming clouds 6" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img613}
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
          {/* PROXY, CHIMER, ORACLE Navigation */}
          <Link 
            to="/proxychimeroracle"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('proxy')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Left Arrow */}
            <div className="flex h-[14px] md:h-[18px] items-center justify-center w-[8px] md:w-[10px] flex-shrink-0">
              <div className="-scale-y-100 rotate-180">
                <svg className="block size-full md:transition-all md:duration-300 md:group-hover:scale-110" fill="none" preserveAspectRatio="none" viewBox="0 0 21 35.9863">
                  <g>
                    <path d={svgPathsNav.p18d0d700} fill="#353535" />
                  </g>
                </svg>
              </div>
            </div>
            
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black md:transition-opacity md:group-hover:opacity-70">
              PROXY, CHIMER, ORACLE
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'proxy' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '402.719/565.724' }}
                >
                  <img 
                    src={imgProxyChimerOracle} 
                    alt="PROXY, CHIMER, ORACLE" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* You see, but do you? Navigation */}
          <Link 
            to="/youseebutdoyou"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('yousee')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black md:transition-opacity md:group-hover:opacity-70">
              You see, but do you?
            </p>
            
            {/* Right Arrow */}
            <div className="h-[14px] md:h-[18px] w-[8px] md:w-[10px] flex-shrink-0">
              <svg className="block size-full md:transition-all md:duration-300 md:group-hover:scale-110" fill="none" preserveAspectRatio="none" viewBox="0 0 21 35.9863">
                <g>
                  <path d={svgPathsNav.p18d0d700} fill="#353535" />
                </g>
              </svg>
            </div>

            {/* Hover Image - Right side */}
            <AnimatePresence>
              {hoveredNav === 'yousee' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute right-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '402.719/565.724' }}
                >
                  <img 
                    src={imgYouSee} 
                    alt="You see, but do you?" 
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