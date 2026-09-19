import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// Latency exhibition images from Figma
import img18 from "figma:asset/3c77ea10bb8d39bd10bf86bfc1c24bb73b69982a.jpg";
import img22236 from "figma:asset/40f51b198590fde5143fed2fbbaadd87f761f6e5.jpg";
import img351 from "figma:asset/679323f2557b8c1e28bc0707efb6b9c729ef145a.jpg";
import img333346 from "figma:asset/0afe97716c83da73c13411c255d254483164c7ca.jpg";
import img413 from "figma:asset/8e33a80469c875112b9ac752a47c9fedea5eeaf1.jpg";
import img511 from "figma:asset/c7374df2e997f9a02431b578a3531876fc37e957.jpg";
import img610 from "figma:asset/cfa2457828cc802eecbdba5d79003c29e5a69e9d.jpg";
import img78 from "figma:asset/f57412a9c35d49e0693740d4274a6bb6da05d5f9.jpg";
import img88 from "figma:asset/a395f2c27db895149d74d78008c3b6e767ef2083.jpg";
import { img22242, img351 as maskImg351 } from "../../imports/svg-7meat";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import imgYouSee from "figma:asset/ef5051edb6f8f44619b65e2330c2abce1cfd44f9.jpg";
import imgTongueInTongue from "figma:asset/30a32673a0887c3e86593f457319a45dace2fb46.jpg";

const images = [
  { src: img18, alt: "Latency 1" },
  { src: img22236, alt: "Latency 2" },
  { src: img351, alt: "Latency 3" },
  { src: img333346, alt: "Latency 4" },
  { src: img413, alt: "Latency 5" },
  { src: img511, alt: "Latency 6" },
  { src: img610, alt: "Latency 7" },
  { src: img78, alt: "Latency 8" },
  { src: img88, alt: "Latency 9" },
];

export default function LatencyDetail() {
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
          Latency
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

        {/* Desktop Layout - Exact Figma Layout - 1343px × 1890px */}
        {/* Responsive container maintaining aspect ratio */}
        <div className="hidden md:block w-full relative" style={{ paddingBottom: '140.73%' }}>
          <div className="absolute inset-0">
            {/* Background cells - 592.81px high (31.37% of container) */}
            {/* Row 1 - top: 0% */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0%', top: '0%', width: '31.43%', height: '31.37%' }} />
            
            {/* Row 2 - top: 33.33% (630px) */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.51%', top: '33.33%', width: '31.43%', height: '31.37%' }} />
            
            {/* Row 3 - top: 66.67% (1260px) */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.51%', top: '66.67%', width: '31.43%', height: '31.37%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.26%', top: '66.67%', width: '31.43%', height: '31.37%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0%', top: '66.67%', width: '31.43%', height: '31.37%' }} />
            
            {/* Row 2 background cells */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.26%', top: '33.33%', width: '31.43%', height: '31.37%' }} />

            {/* Row 1 Images */}
            {/* Image 1 - Horizontal (col 1, top: 7.25% = 137px, height: 16.77% = 317px) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '7.25%', width: '31.43%', height: '16.77%' }}
              onClick={() => setSelectedImageIndex(0)}
            >
              <img 
                alt="Latency 1" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img18}
              />
            </div>

            {/* Image 2 - Masked vertical (col 2, top: 0%, height: 31.37% = 593px) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.26%', top: '0%', width: '33.14%', height: '31.37%' }}
              onClick={() => setSelectedImageIndex(1)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img22242}')`,
                  WebkitMaskImage: `url('${img22242}')`,
                  maskSize: '94.83% 100%',
                  WebkitMaskSize: '94.83% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '0% 0%',
                  WebkitMaskPosition: '0% 0%',
                }}
              >
                <img 
                  alt="Latency 2" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img22236}
                />
              </div>
            </div>

            {/* Image 3 - Masked vertical (col 3, top: 0%, height: 31.37% = 593px) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.51%', top: '0%', width: '33.14%', height: '31.37%' }}
              onClick={() => setSelectedImageIndex(2)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${maskImg351}')`,
                  WebkitMaskImage: `url('${maskImg351}')`,
                  maskSize: '94.83% 100%',
                  WebkitMaskSize: '94.83% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '0% 0%',
                  WebkitMaskPosition: '0% 0%',
                }}
              >
                <img 
                  alt="Latency 3" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img351}
                />
              </div>
            </div>

            {/* Row 2 Images */}
            {/* Image 4 - Masked vertical (col 1, top: 33.33% = 630px, height: 31.37% = 593px) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0.07%', top: '33.33%', width: '33.14%', height: '31.37%' }}
              onClick={() => setSelectedImageIndex(3)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img22242}')`,
                  WebkitMaskImage: `url('${img22242}')`,
                  maskSize: '94.83% 100%',
                  WebkitMaskSize: '94.83% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '-0.22% 0%',
                  WebkitMaskPosition: '-0.22% 0%',
                }}
              >
                <img 
                  alt="Latency 4" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img333346}
                />
              </div>
            </div>

            {/* Image 5 - Horizontal (col 2, top: 40.58% = 767px, height: 16.77% = 317px) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.26%', top: '40.58%', width: '31.43%', height: '16.77%' }}
              onClick={() => setSelectedImageIndex(4)}
            >
              <img 
                alt="Latency 5" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img413}
              />
            </div>

            {/* Image 6 - Horizontal (col 3, top: 40.58% = 767px, height: 16.77% = 317px) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.51%', top: '40.58%', width: '31.43%', height: '16.77%' }}
              onClick={() => setSelectedImageIndex(5)}
            >
              <img 
                alt="Latency 6" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img511}
              />
            </div>

            {/* Row 3 Images - All at top: 73.92% = 1397px, height: 16.77% = 317px */}
            {/* Image 7 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '73.92%', width: '31.43%', height: '16.77%' }}
              onClick={() => setSelectedImageIndex(6)}
            >
              <img 
                alt="Latency 7" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img610}
              />
            </div>

            {/* Image 8 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.26%', top: '73.92%', width: '31.43%', height: '16.77%' }}
              onClick={() => setSelectedImageIndex(7)}
            >
              <img 
                alt="Latency 8" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img78}
              />
            </div>

            {/* Image 9 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.51%', top: '73.92%', width: '31.43%', height: '16.77%' }}
              onClick={() => setSelectedImageIndex(8)}
            >
              <img 
                alt="Latency 9" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img88}
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
          {/* You see, but do you? Navigation */}
          <Link 
            to="/youseebutdoyou"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('yousee')}
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
              You see, but do you?
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'yousee' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
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

          {/* Tongue In Tongue Navigation */}
          <Link 
            to="/tongueintongue"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('tongue')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black md:transition-opacity md:group-hover:opacity-70">
              Tongue In Tongue
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
              {hoveredNav === 'tongue' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute right-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '402.719/565.724' }}
                >
                  <img 
                    src={imgTongueInTongue} 
                    alt="Tongue In Tongue" 
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