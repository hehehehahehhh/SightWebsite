import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// PROXY, CHIMER, ORACLE exhibition images from Figma
import img115 from "figma:asset/ae4796736ffcfa5dee950d772cd5cb24cd935ee8.jpg";
import img22241 from "figma:asset/ca71f0d391f356d2db5298a1c6a23dda88acf030.jpg";
import img333355 from "figma:asset/426f90770fecd37b9f4babdd32b8121fa2153181.jpg";
import img422 from "figma:asset/31501f083caedd659abc680aaaba3dcc1e4b853e.jpg";
import img518 from "figma:asset/de7f457e9a43a86ef27edb1c2739840f9a822eda.jpg";
import img618 from "figma:asset/d52e65c6e4206b2310eb78469c94b90844895ee4.jpg";
import img714 from "figma:asset/69b4ddfb46679dac2f48695c0b4ccdf858a31b14.jpg";
import img8Jpg1 from "figma:asset/6674bcfff676ae3592b76aa48633c272a6cc9aa5.jpg";
import img99 from "figma:asset/1c1a64a320975810552f33fdda04c993005f63b2.jpg";
import img108 from "figma:asset/9f5217fd07fb4fc21ef9ff9d82a606bccf117429.jpg";
import img116 from "figma:asset/d4485cdc52f7076583afbf9245e9a4f57a25e794.jpg";
import { img98 } from "../../imports/svg-efams";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import imgLatency from "figma:asset/cdef70b57ad0e6521107fbeac80cd544d59a87cd.jpg";
import imgSometimesAJourney from "figma:asset/845e66cd37b52c9ad805ecf2e836e03f7caaf0c3.jpg";

const images = [
  { src: img115, alt: "PROXY, CHIMER, ORACLE 1" },
  { src: img22241, alt: "PROXY, CHIMER, ORACLE 2" },
  { src: img333355, alt: "PROXY, CHIMER, ORACLE 3" },
  { src: img422, alt: "PROXY, CHIMER, ORACLE 4" },
  { src: img518, alt: "PROXY, CHIMER, ORACLE 5" },
  { src: img618, alt: "PROXY, CHIMER, ORACLE 6" },
  { src: img714, alt: "PROXY, CHIMER, ORACLE 7" },
  { src: img8Jpg1, alt: "PROXY, CHIMER, ORACLE 8" },
  { src: img99, alt: "PROXY, CHIMER, ORACLE 9" },
  { src: img108, alt: "PROXY, CHIMER, ORACLE 10" },
  { src: img116, alt: "PROXY, CHIMER, ORACLE 11" },
];

export default function ProxyChimerOracleDetail() {
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
          PROXY, CHIMER, ORACLE
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

        {/* Desktop Layout - Exact Figma Layout - 1342px × 2482.81px */}
        {/* Responsive container maintaining aspect ratio */}
        <div className="hidden md:block w-full relative" style={{ paddingBottom: '185.02%' }}>
          <div className="absolute inset-0">
            {/* Background cells - 592.81px high (23.88% of total) */}
            {/* Row 1 */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0%', top: '0%', width: '31.45%', height: '23.88%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.28%', top: '0%', width: '31.45%', height: '23.88%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.56%', top: '0%', width: '31.45%', height: '23.88%' }} />
            
            {/* Row 2 */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0%', top: '25.38%', width: '31.45%', height: '23.88%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.28%', top: '25.38%', width: '31.45%', height: '23.88%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.56%', top: '25.38%', width: '31.45%', height: '23.88%' }} />
            
            {/* Row 3 */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0%', top: '50.76%', width: '31.45%', height: '23.88%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.28%', top: '50.76%', width: '31.45%', height: '23.88%' }} />
            
            {/* Row 4 */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0%', top: '76.13%', width: '31.45%', height: '23.88%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.28%', top: '76.13%', width: '31.45%', height: '23.88%' }} />

            {/* Row 1 Images - All at top: 5.52%, height: 12.77% */}
            {/* Image 1 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '5.52%', width: '31.45%', height: '12.77%' }}
              onClick={() => setSelectedImageIndex(0)}
            >
              <img 
                alt="PROXY, CHIMER, ORACLE 1" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img115}
              />
            </div>

            {/* Image 2 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.28%', top: '5.52%', width: '31.45%', height: '12.77%' }}
              onClick={() => setSelectedImageIndex(1)}
            >
              <img 
                alt="PROXY, CHIMER, ORACLE 2" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img22241}
              />
            </div>

            {/* Image 3 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.56%', top: '5.52%', width: '31.45%', height: '12.77%' }}
              onClick={() => setSelectedImageIndex(2)}
            >
              <img 
                alt="PROXY, CHIMER, ORACLE 3" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img333355}
              />
            </div>

            {/* Row 2 Images - All at top: 30.90%, height: 12.77% */}
            {/* Image 4 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '30.90%', width: '31.45%', height: '12.77%' }}
              onClick={() => setSelectedImageIndex(3)}
            >
              <img 
                alt="PROXY, CHIMER, ORACLE 4" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img422}
              />
            </div>

            {/* Image 5 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.28%', top: '30.90%', width: '31.45%', height: '12.77%' }}
              onClick={() => setSelectedImageIndex(4)}
            >
              <img 
                alt="PROXY, CHIMER, ORACLE 5" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img518}
              />
            </div>

            {/* Image 6 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.56%', top: '30.90%', width: '31.45%', height: '12.77%' }}
              onClick={() => setSelectedImageIndex(5)}
            >
              <img 
                alt="PROXY, CHIMER, ORACLE 6" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img618}
              />
            </div>

            {/* Row 3 Images */}
            {/* Image 7 - Horizontal (col 1, top: 56.28%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '56.28%', width: '31.45%', height: '12.77%' }}
              onClick={() => setSelectedImageIndex(6)}
            >
              <img 
                alt="PROXY, CHIMER, ORACLE 7" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img714}
              />
            </div>

            {/* Image 8 - Horizontal (col 2, top: 56.28%, height: 12.81%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.28%', top: '56.28%', width: '31.45%', height: '12.81%' }}
              onClick={() => setSelectedImageIndex(7)}
            >
              <img 
                alt="PROXY, CHIMER, ORACLE 8" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img8Jpg1}
              />
            </div>

            {/* Image 9 - Masked vertical (col 3, top: 50.76%, height: 23.88%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.56%', top: '50.76%', width: '33.17%', height: '23.88%' }}
              onClick={() => setSelectedImageIndex(8)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img98}')`,
                  WebkitMaskImage: `url('${img98}')`,
                  maskSize: '94.83% 99.99%',
                  WebkitMaskSize: '94.83% 99.99%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '5.17% 0%',
                  WebkitMaskPosition: '5.17% 0%',
                }}
              >
                <img 
                  alt="PROXY, CHIMER, ORACLE 9" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img99}
                />
              </div>
            </div>

            {/* Row 4 Images */}
            {/* Image 10 - Masked vertical (col 1, top: 76.13%, height: 23.88%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '76.13%', width: '33.17%', height: '23.88%' }}
              onClick={() => setSelectedImageIndex(9)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img98}')`,
                  WebkitMaskImage: `url('${img98}')`,
                  maskSize: '94.83% 99.99%',
                  WebkitMaskSize: '94.83% 99.99%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '5.17% 0%',
                  WebkitMaskPosition: '5.17% 0%',
                }}
              >
                <img 
                  alt="PROXY, CHIMER, ORACLE 10" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img108}
                />
              </div>
            </div>

            {/* Image 11 - Masked vertical (col 2, top: 76.13%, height: 23.88%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.28%', top: '76.13%', width: '33.17%', height: '23.88%' }}
              onClick={() => setSelectedImageIndex(10)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img98}')`,
                  WebkitMaskImage: `url('${img98}')`,
                  maskSize: '94.83% 99.99%',
                  WebkitMaskSize: '94.83% 99.99%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '5.17% 0%',
                  WebkitMaskPosition: '5.17% 0%',
                }}
              >
                <img 
                  alt="PROXY, CHIMER, ORACLE 11" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img116}
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

      {/* Footer Navigation */}
      <div className="w-full max-w-[1512px] mx-auto px-4 md:px-16 pb-10 md:pb-24">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Sometimes a Journey Navigation */}
          <Link 
            to="/sometimesajourney"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('sometimes')}
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
              Sometimes a Journey Makes Itself Necessary
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'sometimes' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '402.719/565.724' }}
                >
                  <img 
                    src={imgSometimesAJourney} 
                    alt="Sometimes a Journey Makes Itself Necessary" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Latency Navigation */}
          <Link 
            to="/latency"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('latency')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black md:transition-opacity md:group-hover:opacity-70 text-center md:text-left">
              Latency
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
              {hoveredNav === 'latency' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute right-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '402.719/565.724' }}
                >
                  <img 
                    src={imgLatency} 
                    alt="Latency" 
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