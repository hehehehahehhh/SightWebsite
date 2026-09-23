import image_e938cdc860aefa6e75e0afc983e88decca9f1da0 from 'figma:asset/e938cdc860aefa6e75e0afc983e88decca9f1da0.jpg'
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";

// Wushiland content images from Figma
import imgWushiland2 from "figma:asset/94928c6342b4a5fd1e3d3c87b5571bae7b14423f.jpg";
import img114 from "figma:asset/e1b24b401fc19bdd13f331682b5aac3263fc1e81.jpg";
import img22238 from "figma:asset/62e5dc0d7c37fb6a0fc3fc8cb6d1f87f942e6d0f.jpg";
import img333352 from "figma:asset/ab6565d002a407ad09160fb8043095ed507de548.jpg";
import img419 from "figma:asset/28c38cbdaa88a7c9f9c3c1e48b3f07a3c6cd7b85.jpg";
import img517 from "figma:asset/a3f57ac9742f08861946ced9a009732a31f7dd7e.jpg";
import img616 from "figma:asset/4fdf1c32202d7f8ffdb4685a7453717c6242eafe.jpg";
import img714 from "figma:asset/e3f958a538344dabca6bf2624061d94068947c15.jpg";
import { imgWushiland1, img516, img713 } from "../../imports/svg-xndfp";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import { imgThreeCats, imgSumei } from "../constants/navigationImages";

// Additional image imports used in the grid
import image_62e5dc0d7c37fb6a0fc3fc8cb6d1f87f942e6d0f from "figma:asset/62e5dc0d7c37fb6a0fc3fc8cb6d1f87f942e6d0f.jpg";
import image_a3f57ac9742f08861946ced9a009732a31f7dd7e from "figma:asset/a3f57ac9742f08861946ced9a009732a31f7dd7e.jpg";

// Newly added photos
import imgWushilandNew01 from "figma:asset/wushiland-new-01.jpg";
import imgWushilandNew02 from "figma:asset/wushiland-new-02.jpg";
import imgWushilandNew03 from "figma:asset/wushiland-new-03.jpg";
import imgWushilandNew04 from "figma:asset/wushiland-new-04.jpg";
import imgWushilandNew05 from "figma:asset/wushiland-new-05.jpg";
import imgWushilandNew06 from "figma:asset/wushiland-new-06.jpg";
import imgWushilandNew07 from "figma:asset/wushiland-new-07.jpg";
import imgWushilandNew08 from "figma:asset/wushiland-new-08.jpg";
import imgWushilandNew09 from "figma:asset/wushiland-new-09.jpg";
import imgWushilandNew10 from "figma:asset/wushiland-new-10.jpg";
import imgWushilandNew11 from "figma:asset/wushiland-new-11.jpg";
import imgWushilandNew12 from "figma:asset/wushiland-new-12.jpg";
import imgWushilandNew13 from "figma:asset/wushiland-new-13.jpg";
import imgWushilandNew14 from "figma:asset/wushiland-new-14.jpg";
import imgWushilandNew15 from "figma:asset/wushiland-new-15.jpg";
import imgWushilandNew16 from "figma:asset/wushiland-new-16.jpg";
import imgWushilandNew17 from "figma:asset/wushiland-new-17.jpg";
import imgWushilandNew18 from "figma:asset/wushiland-new-18.jpg";
import imgWushilandNew19 from "figma:asset/wushiland-new-19.jpg";
import imgWushilandNew20 from "figma:asset/wushiland-new-20.jpg";
import imgWushilandNew21 from "figma:asset/wushiland-new-21.jpg";

const images = [
  { src: imgWushiland2, alt: "Wushiland 1" },
  { src: img114, alt: "Wushiland 2" },
  { src: img22238, alt: "Wushiland 3" },
  { src: img333352, alt: "Wushiland 4" },
  { src: img419, alt: "Wushiland 5" },
  { src: img517, alt: "Wushiland 6" },
  { src: img616, alt: "Wushiland 7" },
  { src: img714, alt: "Wushiland 8" },
  { src: imgWushilandNew01, alt: "Wushiland 9" },
  { src: imgWushilandNew02, alt: "Wushiland 10" },
  { src: imgWushilandNew03, alt: "Wushiland 11" },
  { src: imgWushilandNew04, alt: "Wushiland 12" },
  { src: imgWushilandNew05, alt: "Wushiland 13" },
  { src: imgWushilandNew06, alt: "Wushiland 14" },
  { src: imgWushilandNew07, alt: "Wushiland 15" },
  { src: imgWushilandNew08, alt: "Wushiland 16" },
  { src: imgWushilandNew09, alt: "Wushiland 17" },
  { src: imgWushilandNew10, alt: "Wushiland 18" },
  { src: imgWushilandNew11, alt: "Wushiland 19" },
  { src: imgWushilandNew12, alt: "Wushiland 20" },
  { src: imgWushilandNew13, alt: "Wushiland 21" },
  { src: imgWushilandNew14, alt: "Wushiland 22" },
  { src: imgWushilandNew15, alt: "Wushiland 23" },
  { src: imgWushilandNew16, alt: "Wushiland 24" },
  { src: imgWushilandNew17, alt: "Wushiland 25" },
  { src: imgWushilandNew18, alt: "Wushiland 26" },
  { src: imgWushilandNew19, alt: "Wushiland 27" },
  { src: imgWushilandNew20, alt: "Wushiland 28" },
  { src: imgWushilandNew21, alt: "Wushiland 29" },
];

export default function WushilandDetail() {
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
          Wushiland
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
        <div className="hidden md:block w-full relative" style={{ paddingBottom: '138.28%' }}>
          {/* 1853 / 1340 = 1.3828 or 138.28% aspect ratio */}
          <div className="absolute inset-0">
            {/* Background cells */}
            <div className="absolute bg-[#F5F5F5]" style={{ left: '68.51%', top: '0%', width: '31.49%', height: '32.00%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '34.10%', top: '34.00%', width: '31.49%', height: '32.00%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '34.10%', top: '0%', width: '31.49%', height: '32.00%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '0%', top: '34.00%', width: '31.49%', height: '32.00%' }} />
            <div className="absolute bg-[#F5F5F5]" style={{ left: '0%', top: '68.00%', width: '31.49%', height: '32.00%' }} />

            {/* Image 1 - Mask Group (Column 1, Row 1) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '0%', width: '31.49%', height: '32.00%' }}
              onClick={() => setSelectedImageIndex(0)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${imgWushiland1}')`,
                  WebkitMaskImage: `url('${imgWushiland1}')`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              >
                <img 
                  alt="Wushiland 1" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={imgWushiland2}
                />
              </div>
            </div>

            {/* Image 2 - Square (Column 2, Row 1) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.10%', top: '4.59%', width: '31.49%', height: '22.77%' }}
              onClick={() => setSelectedImageIndex(1)}
            >
              <img 
                alt="Wushiland 2" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={image_62e5dc0d7c37fb6a0fc3fc8cb6d1f87f942e6d0f}
              />
            </div>

            {/* Image 3 - Square (Column 3, Row 1) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.51%', top: '4.59%', width: '31.49%', height: '22.77%' }}
              onClick={() => setSelectedImageIndex(2)}
            >
              <img 
                alt="Wushiland 3" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img22238}
              />
            </div>

            {/* Image 4 - Square (Column 1, Row 2) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '38.64%', width: '31.49%', height: '22.77%' }}
              onClick={() => setSelectedImageIndex(3)}
            >
              <img 
                alt="Wushiland 4" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img333352}
              />
            </div>

            {/* Image 5 - Square (Column 2, Row 2) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.10%', top: '38.59%', width: '31.49%', height: '22.77%' }}
              onClick={() => setSelectedImageIndex(4)}
            >
              <img 
                alt="Wushiland 5" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={image_e938cdc860aefa6e75e0afc983e88decca9f1da0}
              />
            </div>

            {/* Image 6 - Mask Group (Column 3, Row 2) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.51%', top: '34.00%', width: '31.49%', height: '32.00%' }}
              onClick={() => setSelectedImageIndex(5)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img516}')`,
                  WebkitMaskImage: `url('${img516}')`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              >
                <img 
                  alt="Wushiland 6" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={image_a3f57ac9742f08861946ced9a009732a31f7dd7e}
                />
              </div>
            </div>

            {/* Image 7 - Square (Column 1, Row 3) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '72.59%', width: '31.49%', height: '22.77%' }}
              onClick={() => setSelectedImageIndex(6)}
            >
              <img 
                alt="Wushiland 7" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img616}
              />
            </div>

            {/* Image 8 - Mask Group (Column 2, Row 3) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.10%', top: '68.00%', width: '31.49%', height: '32.00%' }}
              onClick={() => setSelectedImageIndex(7)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img713}')`,
                  WebkitMaskImage: `url('${img713}')`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              >
                <img 
                  alt="Wushiland 8" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img714}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Photos - Desktop */}
        {(() => {
          const extra = images.slice(8).map((image, i) => ({ image, idx: 8 + i }));
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
          {/* Three Cats Navigation */}
          <Link 
            to="/threecats"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('threecats')}
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
              ThreeCat
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'threecats' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
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

          {/* Sumei Navigation */}
          <Link 
            to="/sumei"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('sumei')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black transition-opacity group-hover:opacity-70">
              Sumei
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
              {hoveredNav === 'sumei' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute right-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
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