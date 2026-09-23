import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// E-Commerce images from Figma
import img19 from "figma:asset/aaf668970d11fb0f4258e3beeda6c06021750bd2.jpg";
import img22229 from "figma:asset/edec4854e1cd73e37f30a078977001122a61ce44.jpg";
import img333339 from "figma:asset/487b3a78e27c5e98ba52df452d2253936db88150.jpg";
import img48 from "figma:asset/e5f38c524929f10d22242375d17ed4eba89a33d4.jpg";
import img51 from "figma:asset/9b1ea9269295c28022e6996c4e6ac2d3db641573.jpg";
import img65 from "figma:asset/d361e5469cd584eb03dba082df28f27c97d4f31f.jpg";
import img84 from "figma:asset/37401a4e39da3457c2481394d1ad4390365e96bb.jpg";
import img75 from "figma:asset/265037db876a722f686d1d6c0bf59cb6d7a36599.jpg";
import imgWeb1Of41 from "figma:asset/0e695e17c3d48346cbd56a4f099795dc9037852a.jpg";
import imgWeb1Of21 from "figma:asset/0c7fc04f6f24df97cbb1c0f422bdbb9697520bd5.jpg";
import { img74 } from "../../imports/svg-auhy9";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import imgGambleHouse from "figma:asset/1966571180428a55c01fb46133ce1655d080df55.jpg";
import imgObjects from "figma:asset/33f1d1803db3ecb966fd4ee65a40ad9440621796.jpg";

// Newly added photos
import imgEcommerceNew01 from "figma:asset/ecommerce-new-01.jpg";
import imgEcommerceNew02 from "figma:asset/ecommerce-new-02.jpg";
import imgEcommerceNew03 from "figma:asset/ecommerce-new-03.jpg";
import imgEcommerceNew04 from "figma:asset/ecommerce-new-04.jpg";
import imgEcommerceNew05 from "figma:asset/ecommerce-new-05.jpg";
import imgEcommerceNew06 from "figma:asset/ecommerce-new-06.jpg";
import imgEcommerceNew07 from "figma:asset/ecommerce-new-07.jpg";
import imgEcommerceNew08 from "figma:asset/ecommerce-new-08.jpg";
import imgEcommerceNew09 from "figma:asset/ecommerce-new-09.jpg";
import imgEcommerceNew10 from "figma:asset/ecommerce-new-10.jpg";
import imgEcommerceNew11 from "figma:asset/ecommerce-new-11.jpg";

const images = [
  { src: img19, alt: "E-Commerce 1" },
  { src: img22229, alt: "E-Commerce 2" },
  { src: img333339, alt: "E-Commerce 3" },
  { src: img48, alt: "E-Commerce 4" },
  { src: img51, alt: "E-Commerce 5" },
  { src: img65, alt: "E-Commerce 6" },
  { src: img75, alt: "E-Commerce 7" },
  { src: img84, alt: "E-Commerce 8" },
  { src: imgWeb1Of41, alt: "E-Commerce 9" },
  { src: imgWeb1Of21, alt: "E-Commerce 10" },
  { src: imgEcommerceNew01, alt: "E-Commerce 11" },
  { src: imgEcommerceNew02, alt: "E-Commerce 12" },
  { src: imgEcommerceNew03, alt: "E-Commerce 13" },
  { src: imgEcommerceNew04, alt: "E-Commerce 14" },
  { src: imgEcommerceNew05, alt: "E-Commerce 15" },
  { src: imgEcommerceNew06, alt: "E-Commerce 16" },
  { src: imgEcommerceNew07, alt: "E-Commerce 17" },
  { src: imgEcommerceNew08, alt: "E-Commerce 18" },
  { src: imgEcommerceNew09, alt: "E-Commerce 19" },
  { src: imgEcommerceNew10, alt: "E-Commerce 20" },
  { src: imgEcommerceNew11, alt: "E-Commerce 21" },
];

export default function ECommerceDetail() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { returning: true, category: 'Product' } });
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
          E-Commerce
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
        <div className="hidden md:block w-full relative" style={{ paddingBottom: '143.92%' }}>
          <div className="absolute inset-0">
            {/* Background cells - 7 cells (592.81px = 23.87% of 2483px) */}
            {/* Column 1 (left: 0) */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0%', top: '0%', width: '31.52%', height: '23.87%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0%', top: '25.37%', width: '31.52%', height: '23.87%' }} />
            
            {/* Column 2 (left: 457px = 34.13%) */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.13%', top: '0%', width: '31.52%', height: '23.87%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.13%', top: '25.37%', width: '31.52%', height: '23.87%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.13%', top: '50.74%', width: '31.52%', height: '23.87%' }} />
            
            {/* Column 3 (left: 917px = 68.49%) */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.49%', top: '0%', width: '31.52%', height: '23.87%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.49%', top: '25.37%', width: '31.52%', height: '23.87%' }} />

            {/* Row 1 - Images */}
            {/* Image 1: 1 9 (left: 0, top: 85) - Square 422×422 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer flex items-center justify-center"
              style={{ left: '0%', top: '0%', width: '31.52%', height: '23.87%' }}
              onClick={() => setSelectedImageIndex(0)}
            >
              <div className="w-full" style={{ aspectRatio: '1/1' }}>
                <img 
                  alt="E-Commerce 1" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={img19}
                />
              </div>
            </div>

            {/* Image 2: 2 2229 (left: 457, top: 84) - Square 422×422 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer flex items-center justify-center"
              style={{ left: '34.13%', top: '0%', width: '31.52%', height: '23.87%' }}
              onClick={() => setSelectedImageIndex(1)}
            >
              <div className="w-full" style={{ aspectRatio: '1/1' }}>
                <img 
                  alt="E-Commerce 2" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={img22229}
                />
              </div>
            </div>

            {/* Image 3: 3 33339 (left: 917, top: 137) - Horizontal 421×316 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer flex items-center justify-center"
              style={{ left: '68.49%', top: '0%', width: '31.52%', height: '23.87%' }}
              onClick={() => setSelectedImageIndex(2)}
            >
              <div className="w-full" style={{ aspectRatio: '421/316' }}>
                <img 
                  alt="E-Commerce 3" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={img333339}
                />
              </div>
            </div>

            {/* Row 2 - Images */}
            {/* Image 4: 4 8 (left: 0, top: 767) - Horizontal 422×317 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer flex items-center justify-center"
              style={{ left: '0%', top: '25.37%', width: '31.52%', height: '23.87%' }}
              onClick={() => setSelectedImageIndex(3)}
            >
              <div className="w-full" style={{ aspectRatio: '422/317' }}>
                <img 
                  alt="E-Commerce 4" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={img48}
                />
              </div>
            </div>

            {/* Image 5: 5（首图） 1 (left: 457, top: 715) - Square 422×422 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer flex items-center justify-center"
              style={{ left: '34.13%', top: '25.37%', width: '31.52%', height: '23.87%' }}
              onClick={() => setSelectedImageIndex(4)}
            >
              <div className="w-full" style={{ aspectRatio: '1/1' }}>
                <img 
                  alt="E-Commerce 5" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={img51}
                />
              </div>
            </div>

            {/* Image 6: 6 5 (left: 917, top: 768) - Horizontal 422×316 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer flex items-center justify-center"
              style={{ left: '68.49%', top: '25.37%', width: '31.52%', height: '23.87%' }}
              onClick={() => setSelectedImageIndex(5)}
            >
              <div className="w-full" style={{ aspectRatio: '422/316' }}>
                <img 
                  alt="E-Commerce 6" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={img65}
                />
              </div>
            </div>

            {/* Row 3 - Masked Images and Regular */}
            {/* Masked Image 7: 7 4 (left: 0, top: 1260) - Vertical with mask 445×593 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '50.74%', width: '31.52%', height: '23.87%' }}
              onClick={() => setSelectedImageIndex(6)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img74}')`,
                  WebkitMaskImage: `url('${img74}')`,
                  maskSize: '94.83% 100%',
                  WebkitMaskSize: '94.83% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '0% 0%',
                  WebkitMaskPosition: '0% 0%',
                }}
              >
                <img 
                  alt="E-Commerce 7" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img75}
                />
              </div>
            </div>

            {/* Image 8: 8 4 (left: 456, top: 1397) - Horizontal 423×317 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer flex items-center justify-center"
              style={{ left: '34.13%', top: '50.74%', width: '31.52%', height: '23.87%' }}
              onClick={() => setSelectedImageIndex(7)}
            >
              <div className="w-full" style={{ aspectRatio: '423/317' }}>
                <img 
                  alt="E-Commerce 8" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={img84}
                />
              </div>
            </div>

            {/* Masked Image 10: Web (1 of 2) 1 (left: 895, top: 1260) - Vertical with mask 444×593 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.49%', top: '50.74%', width: '31.52%', height: '23.87%' }}
              onClick={() => setSelectedImageIndex(9)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img74}')`,
                  WebkitMaskImage: `url('${img74}')`,
                  maskSize: '95.05% 100%',
                  WebkitMaskSize: '95.05% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '4.95% 0%',
                  WebkitMaskPosition: '4.95% 0%',
                }}
              >
                <img 
                  alt="E-Commerce 10" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={imgWeb1Of21}
                />
              </div>
            </div>

            {/* Row 4 - Masked Image */}
            {/* Masked Image 9: Web (1 of 4) 1 (left: -12, top: 1890) - Vertical with mask 445×593 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '76.12%', width: '31.52%', height: '23.87%' }}
              onClick={() => setSelectedImageIndex(8)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img74}')`,
                  WebkitMaskImage: `url('${img74}')`,
                  maskSize: '94.83% 100%',
                  WebkitMaskSize: '94.83% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '2.70% 0%',
                  WebkitMaskPosition: '2.70% 0%',
                }}
              >
                <img 
                  alt="E-Commerce 9" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={imgWeb1Of41}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Photos - Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8">
          {images.slice(10).map((image, i) => {
            const idx = 10 + i;
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

        {/* Spacing after grid */}
        <div className="w-full mt-8 md:mt-12 relative h-[156px]">
          {/* Empty space for layout */}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="w-full max-w-[1512px] mx-auto px-4 md:px-16 pb-10 md:pb-24">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Gamble House Navigation */}
          <Link 
            to="/gamblehouse"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('gamblehouse')}
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
              Gamble House
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'gamblehouse' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '436/349' }}
                >
                  <img 
                    src={imgGambleHouse} 
                    alt="Gamble House" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Objects Navigation */}
          <Link 
            to="/objects"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('objects')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black transition-opacity group-hover:opacity-70">
              Objects
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
              {hoveredNav === 'objects' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute right-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '437/349' }}
                >
                  <img 
                    src={imgObjects} 
                    alt="Objects" 
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