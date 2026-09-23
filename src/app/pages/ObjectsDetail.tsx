import image_8358ee8ccc57eab575acb6aa85486dbb0f67518d from 'figma:asset/8358ee8ccc57eab575acb6aa85486dbb0f67518d.jpg'
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// New product images from Figma
import img15 from "figma:asset/026c5a03c79211362696024424525d04b6d6ec84.jpg";
import img22224 from "figma:asset/c2a268fa99d50a9b78834ff9feb82ea755ec96f4.jpg";
import img333335 from "figma:asset/32fad50319b0a3bc0babdf69fef49a357ce4f55f.jpg";
import img42 from "figma:asset/8358ee8ccc57eab575acb6aa85486dbb0f67518d.jpg";
import img62 from "figma:asset/6f54ec063dcece9de1b97672e03bc803389ac98d.jpg";
import img52 from "figma:asset/78d4176b2c93de247679a829baa49a0b2291b0e7.jpg";
import { img41, img61 } from "../../imports/svg-tjf07";
import svgPaths from "../../imports/svg-9s8wmwny9n";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsArrow from "../../imports/svg-hoa6cbtyhx";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import imgEcommerce from "figma:asset/9b1ea9269295c28022e6996c4e6ac2d3db641573.jpg";
import imgPackaging from "figma:asset/16d22acce858ad5284fe362f64d18f034b1a9c7c.jpg";
import OurClients from "../../imports/Group8.tsx";

// Newly added photos
import imgObjectsNew01 from "figma:asset/objects-new-01.jpg";
import imgObjectsNew02 from "figma:asset/objects-new-02.jpg";
import imgObjectsNew03 from "figma:asset/objects-new-03.jpg";
import imgObjectsNew04 from "figma:asset/objects-new-04.jpg";
import imgObjectsNew05 from "figma:asset/objects-new-05.jpg";
import imgObjectsNew06 from "figma:asset/objects-new-06.jpg";
import imgObjectsNew07 from "figma:asset/objects-new-07.jpg";
import imgObjectsNew08 from "figma:asset/objects-new-08.jpg";
import imgObjectsNew09 from "figma:asset/objects-new-09.jpg";
import imgObjectsNew10 from "figma:asset/objects-new-10.jpg";
import imgObjectsNew11 from "figma:asset/objects-new-11.jpg";

const images = [
  { src: img15, alt: "Sunglasses 1" },
  { src: img22224, alt: "Sunglasses 2" },
  { src: img333335, alt: "Sunglasses 3" },
  { src: img62, alt: "Hasselblad Camera 1" },
  { src: img52, alt: "Hasselblad Camera 2" },
  { src: img42, alt: "Tom Ford Perfume" },
  { src: imgObjectsNew01, alt: "Objects 7" },
  { src: imgObjectsNew02, alt: "Objects 8" },
  { src: imgObjectsNew03, alt: "Objects 9" },
  { src: imgObjectsNew04, alt: "Objects 10" },
  { src: imgObjectsNew05, alt: "Objects 11" },
  { src: imgObjectsNew06, alt: "Objects 12" },
  { src: imgObjectsNew07, alt: "Objects 13" },
  { src: imgObjectsNew08, alt: "Objects 14" },
  { src: imgObjectsNew09, alt: "Objects 15" },
  { src: imgObjectsNew10, alt: "Objects 16" },
  { src: imgObjectsNew11, alt: "Objects 17" },
];

export default function ObjectsDetail() {
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
          Objects
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
        <div className="hidden md:block w-full relative" style={{ paddingBottom: '91.32%' }}>
          {/* 1222.81 / 1339 = 0.9132 or 91.32% aspect ratio */}
          <div className="absolute inset-0">
            {/* All 6 white background cells - EXACT SAME SIZE */}
            <div className="absolute bg-[#F5F5F5]" style={{ left: '0%', top: '0%', width: '31.52%', height: '48.49%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '34.13%', top: '0%', width: '31.52%', height: '48.49%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '68.49%', top: '0%', width: '31.59%', height: '48.49%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '0%', top: '51.52%', width: '31.52%', height: '48.49%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '34.13%', top: '51.52%', width: '31.45%', height: '48.49%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '68.49%', top: '51.52%', width: '31.52%', height: '48.49%' }} />

            {/* ALL 6 IMAGES - EXACT SAME SIZE AND POSITION */}
            
            {/* TOP ROW - Image 1 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '11.21%', width: '31.52%', height: '25.93%' }}
              onClick={() => setSelectedImageIndex(0)}
            >
              <img 
                alt="Sunglasses 1" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img15}
              />
            </div>

            {/* TOP ROW - Image 2 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.13%', top: '11.21%', width: '31.52%', height: '25.93%' }}
              onClick={() => setSelectedImageIndex(1)}
            >
              <img 
                alt="Sunglasses 2" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img22224}
              />
            </div>

            {/* TOP ROW - Image 3 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.49%', top: '11.21%', width: '31.59%', height: '25.93%' }}
              onClick={() => setSelectedImageIndex(2)}
            >
              <img 
                alt="Gentle Monster" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img333335}
              />
            </div>

            {/* BOTTOM ROW - Image 4 (FULL VERTICAL camera - NO CUTOFF) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '51.52%', width: '31.52%', height: '48.49%' }}
              onClick={() => setSelectedImageIndex(3)}
            >
              <img 
                alt="Hasselblad Camera 1" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src={img62}
              />
            </div>

            {/* BOTTOM ROW - Image 5 (camera middle) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.13%', top: '62.73%', width: '31.45%', height: '26.01%' }}
              onClick={() => setSelectedImageIndex(4)}
            >
              <img 
                alt="Hasselblad Camera 2" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img52}
              />
            </div>

            {/* BOTTOM ROW - Image 6 (FULL VERTICAL perfume - NO CUTOFF) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.49%', top: '51.52%', width: '31.52%', height: '48.49%' }}
              onClick={() => setSelectedImageIndex(5)}
            >
              <img 
                alt="Tom Ford Perfume" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src={image_8358ee8ccc57eab575acb6aa85486dbb0f67518d}
              />
            </div>
          </div>
        </div>

        {/* Additional Photos - Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8">
          {images.slice(6).map((image, i) => {
            const idx = 6 + i;
            const aspect = i % 3 === 1 ? '336/472' : '437/349';
            return (
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
            );
          })}
        </div>

        {/* Our Clients Section */}
        <div className="w-full mt-8 md:mt-12 relative h-[156px]\"> {/* Fixed height to match Figma */}
          {/* Removed OurClients component - moved to About page */}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="w-full max-w-[1512px] mx-auto px-4 md:px-16 pb-10 md:pb-24">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* E-Commerce Navigation */}
          <Link 
            to="/ecommerce"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('ecommerce')}
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
              E-Commerce
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'ecommerce' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '436/349' }}
                >
                  <img 
                    src={imgEcommerce} 
                    alt="E-Commerce" 
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