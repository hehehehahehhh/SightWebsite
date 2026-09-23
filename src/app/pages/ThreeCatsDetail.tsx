import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// Three Cats images from Figma
import imgThreeCats2 from "figma:asset/8fdf90927fd04eb97c68be60ac2518a830842d04.jpg";
import img22236 from "figma:asset/ee7e19f6be68ee24b6211062e66c3e547fdaa912.jpg";
import img417 from "figma:asset/4ddc9fcc4b1b21470445bf51f42c67ba74a7c96d.jpg";
import img514 from "figma:asset/5787623abc1bfd4dd6cd1666cd47294f4b753b0e.jpg";
import img614 from "figma:asset/91f012e167f034cce57489c9fa6002305e3de413.jpg";
import img711 from "figma:asset/fa4d06889c58da2109dc572960c42d00807fd74f.jpg";
import img89 from "figma:asset/c729403b9e5447102054e9bc92c3f172ee0ed557.jpg";
import img114 from "figma:asset/e250535b709e2aaae0af05c523a1bde8399976fb.jpg";
import img96 from "figma:asset/39a59d2b6c0a6e780c971bf62b30cf57895a237e.jpg";
import img333350 from "figma:asset/18c3877225a13629f8ce64b7e74b35fa3cbeb4cc.jpg";
import img106 from "figma:asset/352b24690fbacfaaf5d82253be84baa53b9fc4fe.jpg";
import { imgThreeCats1 } from "../../imports/svg-foyn3";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import { imgYukiKumo, imgWushiland } from "../constants/navigationImages";

// Newly added photos
import imgThreeCatsNew01 from "figma:asset/threecats-new-01.jpg";

const images = [
  { src: imgThreeCats2, alt: "Three Cats 1" },
  { src: img22236, alt: "Three Cats 2" },
  { src: img333350, alt: "Three Cats 3" },
  { src: img417, alt: "Three Cats 4" },
  { src: img514, alt: "Three Cats 5" },
  { src: img614, alt: "Three Cats 6" },
  { src: img711, alt: "Three Cats 7" },
  { src: img89, alt: "Three Cats 8" },
  { src: img96, alt: "Three Cats 9" },
  { src: img106, alt: "Three Cats 10" },
  { src: img114, alt: "Three Cats 11" },
  { src: imgThreeCatsNew01, alt: "Three Cats 12" },
];

export default function ThreeCatsDetail() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { returning: true, category: 'Food', scrollToFood: true } });
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
          ThreeCat
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
          <div className="absolute inset-0">
            {/* Background cells (422px × 592.81px) */}
            {/* Top right cell */}
            <div className="absolute bg-[#f5f5f5]" style={{ 
              left: '68.51%', 
              top: '0%', 
              width: '31.49%', 
              height: '23.32%' 
            }} />
            
            {/* Bottom left cell */}
            <div className="absolute bg-[#f5f5f5]" style={{ 
              left: '0%', 
              top: '75.15%', 
              width: '31.49%', 
              height: '23.32%' 
            }} />

            {/* ROW 1 - top: 0 (0%) */}
            {/* Image 1 - Col 1 - Masked vertical centered in cell */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '0%', width: '31.49%', height: '23.32%' }}
              onClick={() => setSelectedImageIndex(0)}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2" style={{ width: '105.45%', height: '100%' }}>
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    maskImage: `url('${imgThreeCats1}')`,
                    WebkitMaskImage: `url('${imgThreeCats1}')`,
                    maskSize: '94.83% 99.97%',
                    WebkitMaskSize: '94.83% 99.97%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: '0% 0%',
                    WebkitMaskPosition: '0% 0%',
                  }}
                >
                  <img 
                    alt="Three Cats 1" 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                    src={imgThreeCats2}
                  />
                </div>
              </div>
            </div>

            {/* Image 2 - Col 2 - Masked vertical centered in cell */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '33.8%', top: '0%', width: '31.49%', height: '23.32%' }}
              onClick={() => setSelectedImageIndex(1)}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2" style={{ width: '105.45%', height: '100%' }}>
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    maskImage: `url('${imgThreeCats1}')`,
                    WebkitMaskImage: `url('${imgThreeCats1}')`,
                    maskSize: '94.83% 99.97%',
                    WebkitMaskSize: '94.83% 99.97%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: '2.47% 0%',
                    WebkitMaskPosition: '2.47% 0%',
                  }}
                >
                  <img 
                    alt="Three Cats 2" 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                    src={img22236}
                  />
                </div>
              </div>
            </div>

            {/* Image 3 - Col 3 - Square 422×422 centered vertically in cell */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '67.6%', top: '3.33%', width: '31.49%', height: '16.61%' }}
              onClick={() => setSelectedImageIndex(2)}
            >
              <img 
                alt="Three Cats 3" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img333350}
              />
            </div>

            {/* ROW 2 - top: 630px (25.37%) */}
            {/* Image 4 - Col 1 - Masked vertical */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '25.05%', width: '31.49%', height: '23.32%' }}
              onClick={() => setSelectedImageIndex(3)}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2" style={{ width: '105.45%', height: '100%' }}>
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    maskImage: `url('${imgThreeCats1}')`,
                    WebkitMaskImage: `url('${imgThreeCats1}')`,
                    maskSize: '94.83% 99.97%',
                    WebkitMaskSize: '94.83% 99.97%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: '5.17% 0%',
                    WebkitMaskPosition: '5.17% 0%',
                  }}
                >
                  <img 
                    alt="Three Cats 4" 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                    src={img417}
                  />
                </div>
              </div>
            </div>

            {/* Image 5 - Col 2 - Masked vertical (slightly different size) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '33.8%', top: '25.05%', width: '31.49%', height: '23.16%' }}
              onClick={() => setSelectedImageIndex(4)}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2" style={{ width: '104.51%', height: '100%' }}>
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    maskImage: `url('${imgThreeCats1}')`,
                    WebkitMaskImage: `url('${imgThreeCats1}')`,
                    maskSize: '95.69% 100.68%',
                    WebkitMaskSize: '95.69% 100.68%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: '2.27% 0%',
                    WebkitMaskPosition: '2.27% 0%',
                  }}
                >
                  <img 
                    alt="Three Cats 5" 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                    src={img514}
                  />
                </div>
              </div>
            </div>

            {/* Image 6 - Col 3 - Masked vertical */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '67.6%', top: '25.05%', width: '31.49%', height: '23.32%' }}
              onClick={() => setSelectedImageIndex(5)}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2" style={{ width: '105.45%', height: '100%' }}>
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    maskImage: `url('${imgThreeCats1}')`,
                    WebkitMaskImage: `url('${imgThreeCats1}')`,
                    maskSize: '94.83% 99.97%',
                    WebkitMaskSize: '94.83% 99.97%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: '5.17% 0.17%',
                    WebkitMaskPosition: '5.17% 0.17%',
                  }}
                >
                  <img 
                    alt="Three Cats 6" 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                    src={img614}
                  />
                </div>
              </div>
            </div>

            {/* ROW 3 - top: 1260px (50.74%) */}
            {/* Image 7 - Col 1 - Masked vertical (slightly different size) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '50.10%', width: '31.49%', height: '23.26%' }}
              onClick={() => setSelectedImageIndex(6)}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2" style={{ width: '105.21%', height: '100%' }}>
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    maskImage: `url('${imgThreeCats1}')`,
                    WebkitMaskImage: `url('${imgThreeCats1}')`,
                    maskSize: '95.05% 100.14%',
                    WebkitMaskSize: '95.05% 100.14%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: '2.48% 0%',
                    WebkitMaskPosition: '2.48% 0%',
                  }}
                >
                  <img 
                    alt="Three Cats 7" 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                    src={img711}
                  />
                </div>
              </div>
            </div>

            {/* Image 8 - Col 2 - Masked vertical */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '33.8%', top: '50.10%', width: '31.49%', height: '23.32%' }}
              onClick={() => setSelectedImageIndex(7)}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2" style={{ width: '105.45%', height: '100%' }}>
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    maskImage: `url('${imgThreeCats1}')`,
                    WebkitMaskImage: `url('${imgThreeCats1}')`,
                    maskSize: '94.83% 99.97%',
                    WebkitMaskSize: '94.83% 99.97%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: '5.17% 0%',
                    WebkitMaskPosition: '5.17% 0%',
                  }}
                >
                  <img 
                    alt="Three Cats 8" 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                    src={img89}
                  />
                </div>
              </div>
            </div>

            {/* Image 9 - Col 3 - Masked vertical (slightly different size) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '67.6%', top: '50.10%', width: '31.49%', height: '23.21%' }}
              onClick={() => setSelectedImageIndex(8)}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2" style={{ width: '104.98%', height: '100%' }}>
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    maskImage: `url('${imgThreeCats1}')`,
                    WebkitMaskImage: `url('${imgThreeCats1}')`,
                    maskSize: '95.26% 100.51%',
                    WebkitMaskSize: '95.26% 100.51%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: '4.74% -0.17%',
                    WebkitMaskPosition: '4.74% -0.17%',
                  }}
                >
                  <img 
                    alt="Three Cats 9" 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                    src={img96}
                  />
                </div>
              </div>
            </div>

            {/* ROW 4 - top: 1890px (76.12%) */}
            {/* Image 10 - Col 1 - Small horizontal 422×172 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '84.89%', width: '31.49%', height: '6.77%' }}
              onClick={() => setSelectedImageIndex(9)}
            >
              <img 
                alt="Three Cats 10" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img106}
              />
            </div>

            {/* Image 11 - Col 2 - Masked vertical */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '33.8%', top: '75.15%', width: '31.49%', height: '23.32%' }}
              onClick={() => setSelectedImageIndex(10)}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2" style={{ width: '105.45%', height: '100%' }}>
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    maskImage: `url('${imgThreeCats1}')`,
                    WebkitMaskImage: `url('${imgThreeCats1}')`,
                    maskSize: '94.83% 99.97%',
                    WebkitMaskSize: '94.83% 99.97%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: '0% 0%',
                    WebkitMaskPosition: '0% 0%',
                  }}
                >
                  <img 
                    alt="Three Cats 11" 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                    src={img114}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Photos - Desktop */}
        {(() => {
          const extra = images.slice(11).map((image, i) => ({ image, idx: 11 + i }));
          const col0 = extra.filter((_, i) => i % 3 === 0);
          const col1 = extra.filter((_, i) => i % 3 === 1);
          const col2 = extra.filter((_, i) => i % 3 === 2);
          const renderCol = (col: typeof extra, aspect: string) =>
            col.map(({ image, idx }) => (
              <div
                key={idx}
                className="relative overflow-hidden cursor-pointer group"
                style={{ aspectRatio: aspect }}
                onClick={() => setSelectedImageIndex(idx)}
              >
                <img
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={image.src}
                  loading="lazy"
                />
              </div>
            ));
          return (
            <div className="hidden md:flex gap-4 mt-8">
              <div className="flex-1 flex flex-col gap-4">{renderCol(col0, '437/349')}</div>
              <div className="flex-1 flex flex-col gap-4">{renderCol(col1, '336/472')}</div>
              <div className="flex-1 flex flex-col gap-4">{renderCol(col2, '437/349')}</div>
            </div>
          );
        })()}

        {/* Spacing after grid */}
        <div className="w-full mt-8 md:mt-12 relative h-[156px]">
          {/* Empty space for layout */}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="w-full max-w-[1512px] mx-auto px-4 md:px-16 pb-10 md:pb-24">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Yuki & Kumo Navigation */}
          <Link 
            to="/yukikumo"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('yukikumo')}
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
              Yuki & Kumo
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'yukikumo' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '437/349' }}
                >
                  <img 
                    src={imgYukiKumo} 
                    alt="Yuki & Kumo" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Wushiland Navigation */}
          <Link 
            to="/wushiland"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('wushiland')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[24px] md:text-[36px] text-black transition-opacity group-hover:opacity-70">
              Wushiland
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
              {hoveredNav === 'wushiland' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute right-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '437/349' }}
                >
                  <img 
                    src={imgWushiland} 
                    alt="Wushiland" 
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