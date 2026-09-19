import image_d225e9f33e3ef14e430e2b4ec3ba20058a1fc903 from 'figma:asset/d225e9f33e3ef14e430e2b4ec3ba20058a1fc903.jpg'
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// ArtZen images from Figma
import img16 from "figma:asset/09242715ce88ebc642b6c9c602c11e7aa9309c7d.jpg";
import img22228 from "figma:asset/4ef42d8d959d7703cfe70f87a21b3eff41ea2013.jpg";
import img333338 from "figma:asset/2488d1b132dbc1b550a2b65b90beb9ca3b006abf.jpg";
import img47 from "figma:asset/bbb7b04aa4d6b94b85e1778e143ede44935ed09d.jpg";
import img55 from "figma:asset/eaeaf61397a1c8b24b89e664bce2651e8cf3e3e7.jpg";
import img64 from "figma:asset/04fc740393afb855b0680f918d107263ad6083d4.jpg";
import img83 from "figma:asset/8ce0ad01851da59f2edf37993b1a7029a2dad420.jpg";
import img73 from "figma:asset/efa934016bf6d6178fea3b73561ab279310dff9c.jpg";
import img92 from "figma:asset/dbdbf41c3ae6173d0fc70299580093e1e217916c.jpg";
import img112 from "figma:asset/d225e9f33e3ef14e430e2b4ec3ba20058a1fc903.jpg";
import img102 from "figma:asset/8d6fc93ca8aa670561324479143f8a2041458383.jpg";
import img122 from "figma:asset/cf154c5eac0d5bf5cbddd21ba9aa2d806367e7b8.jpg";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import imgFengFeng from "figma:asset/e025732070920faf4ad9c8a34157bf5ebad91936.jpg";
import imgPackaging from "figma:asset/16d22acce858ad5284fe362f64d18f034b1a9c7c.jpg";

const images = [
  { src: img16, alt: "ArtZen 1" },
  { src: img22228, alt: "ArtZen 2" },
  { src: img333338, alt: "ArtZen 3" },
  { src: img47, alt: "ArtZen 4" },
  { src: img55, alt: "ArtZen 5" },
  { src: img64, alt: "ArtZen 6" },
  { src: img73, alt: "ArtZen 7" },
  { src: img83, alt: "ArtZen 8" },
  { src: img92, alt: "ArtZen 9" },
  { src: img102, alt: "ArtZen 10" },
  { src: img112, alt: "ArtZen 11" },
  { src: img122, alt: "ArtZen 12" },
];

export default function ArtZenDetail() {
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

        {/* Content */}
        <div className="py-10 md:py-24">
          {/* Title */}
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] md:text-[48px] tracking-[-0.01em] text-black mb-8 md:mb-20">
            ArtZen
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
            {/* 2397.5 / 1339 = 1.7909 or 179.09% aspect ratio */}
            <div className="absolute inset-0">
              {/* Background cells */}
              <div className="absolute bg-[#f5f5f5]" style={{ height: '24.72%', left: '68.51%', top: '0%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '24.72%', left: '68.51%', top: '26.27%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '24.72%', left: '68.51%', top: '52.55%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '24.72%', left: '68.51%', top: '78.82%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '24.72%', left: '34.13%', top: '0%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '24.72%', left: '34.13%', top: '26.27%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '24.72%', left: '34.13%', top: '52.55%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '24.72%', left: '34.13%', top: '78.82%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '24.72%', left: '0%', top: '0%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '24.72%', left: '0%', top: '26.27%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '24.72%', left: '0%', top: '52.55%', width: '31.52%' }} />
              <div className="absolute bg-[#f5f5f5]" style={{ height: '24.72%', left: '0%', top: '78.82%', width: '31.52%' }} />

              {/* Image 1 - 1（首图） 6 (top left) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '13.18%', left: '0%', top: '5.71%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(0)}
              >
                <img 
                  alt="ArtZen 1" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img16}
                />
              </div>

              {/* Image 2 - 2 2228 (top middle) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '13.18%', left: '34.13%', top: '5.71%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(1)}
              >
                <img 
                  alt="ArtZen 2" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img22228}
                />
              </div>

              {/* Image 3 - 3 33338 (top right) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '13.18%', left: '68.51%', top: '5.71%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(2)}
              >
                <img 
                  alt="ArtZen 3" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img333338}
                />
              </div>

              {/* Image 4 - 4 7 (second row left) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '13.22%', left: '0%', top: '31.99%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(3)}
              >
                <img 
                  alt="ArtZen 4" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img47}
                />
              </div>

              {/* Image 5 - 5 5 (second row middle) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '13.22%', left: '34.13%', top: '31.99%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(4)}
              >
                <img 
                  alt="ArtZen 5" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img55}
                />
              </div>

              {/* Image 6 - 6 4 (second row right) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '13.22%', left: '68.51%', top: '31.99%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(5)}
              >
                <img 
                  alt="ArtZen 6" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img64}
                />
              </div>

              {/* Image 7 - 7 3 (third row left) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '13.18%', left: '0%', top: '58.30%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(6)}
              >
                <img 
                  alt="ArtZen 7" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img73}
                />
              </div>

              {/* Image 8 - 8 3 (third row middle) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '17.60%', left: '34.13%', top: '56.11%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(7)}
              >
                <img 
                  alt="ArtZen 8" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img83}
                />
              </div>

              {/* Image 9 - 9 2 (third row right) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '17.60%', left: '68.51%', top: '56.11%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(8)}
              >
                <img 
                  alt="ArtZen 9" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img92}
                />
              </div>

              {/* Image 10 - 10 2 (fourth row left) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '17.60%', left: '0%', top: '82.38%', width: '31.52%' }}
                onClick={() => setSelectedImageIndex(9)}
              >
                <img 
                  alt="ArtZen 10" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img102}
                />
              </div>

              {/* Image 11 - 11 2 (fourth row middle) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '17.64%', left: '34.06%', top: '82.36%', width: '31.59%' }}
                onClick={() => setSelectedImageIndex(10)}
              >
                <img 
                  alt="ArtZen 11" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={image_d225e9f33e3ef14e430e2b4ec3ba20058a1fc903}
                />
              </div>

              {/* Image 12 - 12 2 (fourth row right) */}
              <div 
                className="absolute overflow-hidden group cursor-pointer"
                style={{ height: '17.64%', left: '68.51%', top: '82.38%', width: '31.59%' }}
                onClick={() => setSelectedImageIndex(11)}
              >
                <img 
                  alt="ArtZen 12" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img122}
                />
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
          {/* Feng Feng Navigation */}
          <Link 
            to="/fengfeng"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('fengfeng')}
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
              Feng Feng
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'fengfeng' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '336/472' }}
                >
                  <img 
                    src={imgFengFeng} 
                    alt="Feng Feng" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Packaging Designs Navigation */}
          <Link 
            to="/packaging"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('packaging')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black transition-opacity group-hover:opacity-70">
              Packaging Designs
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
              {hoveredNav === 'packaging' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute right-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '336/472' }}
                >
                  <img 
                    src={imgPackaging} 
                    alt="Packaging Designs" 
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