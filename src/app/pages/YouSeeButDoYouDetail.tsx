import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// You see, but do you? exhibition images from Figma
import img111 from "figma:asset/5b27017bdb6da499d24f64343d38e848978babdf.jpg";
import img21 from "figma:asset/ef5051edb6f8f44619b65e2330c2abce1cfd44f9.jpg";
import img333345 from "figma:asset/cb1113056ac647a4583c70fedab9a6058f3488a0.jpg";
import img412 from "figma:asset/f4f6d046e7f83f95620cf2d30bee7185057243a6.jpg";
import img510 from "figma:asset/88cbc45b082e6ef0727080f9300be9fb09f9b9b9.jpg";
import img69 from "figma:asset/7f4db17ea147492619430d3294d1453c45998a00.jpg";
import img77 from "figma:asset/2c7ce7bdb2bc8ae1569b3cf0c4dc5cc5c29b9614.jpg";
import img87 from "figma:asset/e2efcf286c6a26a5dfaaf6bb5c6b9e88c105e803.jpg";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import imgWeAreClouds from "figma:asset/11237c7ee0f8e7c7de987029ee5590c79b7cf01d.jpg";
import imgLatency from "figma:asset/3c77ea10bb8d39bd10bf86bfc1c24bb73b69982a.jpg";

const images = [
  { src: img111, alt: "You see, but do you? 1" },
  { src: img21, alt: "You see, but do you? 2" },
  { src: img333345, alt: "You see, but do you? 3" },
  { src: img412, alt: "You see, but do you? 4" },
  { src: img510, alt: "You see, but do you? 5" },
  { src: img69, alt: "You see, but do you? 6" },
  { src: img77, alt: "You see, but do you? 7" },
  { src: img87, alt: "You see, but do you? 8" },
];

export default function YouSeeButDoYouDetail() {
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
          You see, but do you?
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

        {/* Desktop Layout - Exact Figma Layout - 1343px × 1852.81px */}
        {/* Responsive container maintaining aspect ratio */}
        <div className="hidden md:block w-full relative" style={{ paddingBottom: '137.96%' }}>
          <div className="absolute inset-0">
            {/* Background cells - 592.81px high (32.00% of container) */}
            {/* Row 1 - top: 0% */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0.07%', top: '0%', width: '31.42%', height: '32.00%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.33%', top: '0%', width: '31.42%', height: '32.00%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.58%', top: '0%', width: '31.42%', height: '32.00%' }} />
            
            {/* Row 2 - top: 34.00% */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0.07%', top: '34.00%', width: '31.42%', height: '32.00%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.33%', top: '34.00%', width: '31.42%', height: '32.00%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.58%', top: '34.00%', width: '31.42%', height: '32.00%' }} />
            
            {/* Row 3 - top: 68.00% */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0%', top: '68.00%', width: '31.49%', height: '32.00%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.33%', top: '68.00%', width: '31.42%', height: '32.00%' }} />

            {/* Row 1 Images - All at top: 7.39% (137px), height: 17.11% (317px) */}
            {/* Image 1 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0.07%', top: '7.39%', width: '31.42%', height: '17.11%' }}
              onClick={() => setSelectedImageIndex(0)}
            >
              <img 
                alt="You see, but do you? 1" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img111}
              />
            </div>

            {/* Image 2 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.33%', top: '7.39%', width: '31.42%', height: '17.11%' }}
              onClick={() => setSelectedImageIndex(1)}
            >
              <img 
                alt="You see, but do you? 2" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img21}
              />
            </div>

            {/* Image 3 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.58%', top: '7.39%', width: '31.49%', height: '17.11%' }}
              onClick={() => setSelectedImageIndex(2)}
            >
              <img 
                alt="You see, but do you? 3" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img333345}
              />
            </div>

            {/* Row 2 Images - All at top: 41.39% (767px), height: 17.06-17.11% (316-317px) */}
            {/* Image 4 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0.07%', top: '41.39%', width: '31.42%', height: '17.06%' }}
              onClick={() => setSelectedImageIndex(3)}
            >
              <img 
                alt="You see, but do you? 4" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img412}
              />
            </div>

            {/* Image 5 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.33%', top: '41.39%', width: '31.42%', height: '17.11%' }}
              onClick={() => setSelectedImageIndex(4)}
            >
              <img 
                alt="You see, but do you? 5" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img510}
              />
            </div>

            {/* Image 6 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.58%', top: '41.39%', width: '31.42%', height: '17.06%' }}
              onClick={() => setSelectedImageIndex(5)}
            >
              <img 
                alt="You see, but do you? 6" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img69}
              />
            </div>

            {/* Row 3 Images */}
            {/* Image 7 - Horizontal (col 1, top: 75.33% = 1396px, height: 17.16% = 318px) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '75.33%', width: '31.49%', height: '17.16%' }}
              onClick={() => setSelectedImageIndex(6)}
            >
              <img 
                alt="You see, but do you? 7" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img77}
              />
            </div>

            {/* Image 8 - Small horizontal (col 2, top: 78.36% = 1452px, height: 11.17% = 207px) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.33%', top: '78.36%', width: '31.42%', height: '11.17%' }}
              onClick={() => setSelectedImageIndex(7)}
            >
              <img 
                alt="You see, but do you? 8" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img87}
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
          {/* We Are Becoming Clouds Navigation */}
          <Link 
            to="/weareclouds"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('weareclouds')}
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
              We Are Becoming Clouds
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'weareclouds' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '402.719/565.724' }}
                >
                  <img 
                    src={imgWeAreClouds} 
                    alt="We Are Becoming Clouds" 
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
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black md:transition-opacity md:group-hover:opacity-70">
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