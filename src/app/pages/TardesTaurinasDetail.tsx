import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// Tardes Taurinas images from Figma
import img13 from "figma:asset/845e66cd37b52c9ad805ecf2e836e03f7caaf0c3.jpg";
import img22234 from "figma:asset/e98c258c2cf1e1c01005e3c8ed122447068e014d.jpg";
import img333344 from "figma:asset/6df9821a658d39b8160c3882780f794de110cad0.jpg";
import img411 from "figma:asset/2326657d8e35c70a04dcb5e30453d0e3884989bb.jpg";
import img59 from "figma:asset/55161e09192641450eb08aea44e371339646ee26.jpg";
import img68 from "figma:asset/b6381d01505aa76dd92abb3f62c6d7c6143aadbd.jpg";
import img77 from "figma:asset/95d42403abf0a1216c0de730375984fe03f224b9.jpg";
import img86 from "figma:asset/c43a27d1b2db2b447c7e045bcc446c82689b71ae.jpg";
import img94 from "figma:asset/d07e47a48b7a99335f5f1475e912d4e4956231a3.jpg";
import img104 from "figma:asset/c6a6e71652be50661187e410814b9c2fea900391.jpg";
import img113 from "figma:asset/8b7c0673a4044ab812a49c178f23cdcbde45239b.jpg";
import img132 from "figma:asset/27f30ea97f78b813010509e4f0c15687934f0ebe.jpg";
import img123 from "figma:asset/a096f5902a8be3a18f1a7e79d8d44916da69946c.jpg";
import { img76 } from "../../imports/svg-5yaas";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import imgTongueInTongue from "figma:asset/30a32673a0887c3e86593f457319a45dace2fb46.jpg";
import imgSometimesAJourney from "figma:asset/cdef70b57ad0e6521107fbeac80cd544d59a87cd.jpg";

const images = [
  { src: img13, alt: "Tardes Taurinas 1" },
  { src: img22234, alt: "Tardes Taurinas 2" },
  { src: img333344, alt: "Tardes Taurinas 3" },
  { src: img411, alt: "Tardes Taurinas 4" },
  { src: img59, alt: "Tardes Taurinas 5" },
  { src: img68, alt: "Tardes Taurinas 6" },
  { src: img77, alt: "Tardes Taurinas 7" },
  { src: img86, alt: "Tardes Taurinas 8" },
  { src: img94, alt: "Tardes Taurinas 9" },
  { src: img104, alt: "Tardes Taurinas 10" },
  { src: img113, alt: "Tardes Taurinas 11" },
  { src: img123, alt: "Tardes Taurinas 12" },
  { src: img132, alt: "Tardes Taurinas 13" },
];

export default function TardesTaurinasDetail() {
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
        className="fixed top-4 right-4 md:top-12 md:right-[100px] cursor-pointer group z-50 touch-manipulation"
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
          Tardes Taurinas
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

        {/* Desktop Layout - Exact Figma Layout - 1343px × 3113px */}
        {/* Responsive container maintaining aspect ratio */}
        <div className="hidden md:block w-full relative" style={{ paddingBottom: '231.8%' }}>
          <div className="absolute inset-0">
            {/* Background cells */}
            {/* Row 1 */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0.07%', top: '0%', width: '31.42%', height: '19.04%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.33%', top: '0%', width: '31.42%', height: '19.04%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.58%', top: '0%', width: '31.42%', height: '19.04%' }} />
            
            {/* Row 2 */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0.07%', top: '20.23%', width: '31.42%', height: '19.04%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.33%', top: '20.23%', width: '31.42%', height: '19.04%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.58%', top: '20.23%', width: '31.42%', height: '19.04%' }} />
            
            {/* Row 3 */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '34.33%', top: '40.46%', width: '31.42%', height: '19.04%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.58%', top: '40.46%', width: '31.42%', height: '19.04%' }} />
            
            {/* Row 4 */}
            <div className="absolute bg-[#f5f5f5]" style={{ left: '0.07%', top: '60.69%', width: '31.42%', height: '19.04%' }} />
            <div className="absolute bg-[#f5f5f5]" style={{ left: '68.58%', top: '60.69%', width: '31.42%', height: '19.04%' }} />

            {/* Row 1 Images - All at top: 4.40% */}
            {/* Image 1 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0.07%', top: '4.40%', width: '31.42%', height: '10.18%' }}
              onClick={() => setSelectedImageIndex(0)}
            >
              <img 
                alt="Tardes Taurinas 1" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img13}
              />
            </div>

            {/* Image 2 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.33%', top: '4.40%', width: '31.42%', height: '10.18%' }}
              onClick={() => setSelectedImageIndex(1)}
            >
              <img 
                alt="Tardes Taurinas 2" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img22234}
              />
            </div>

            {/* Image 3 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.58%', top: '4.40%', width: '31.42%', height: '10.18%' }}
              onClick={() => setSelectedImageIndex(2)}
            >
              <img 
                alt="Tardes Taurinas 3" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img333344}
              />
            </div>

            {/* Row 2 Images - All at top: 24.63% */}
            {/* Image 4 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0.07%', top: '24.63%', width: '31.42%', height: '10.18%' }}
              onClick={() => setSelectedImageIndex(3)}
            >
              <img 
                alt="Tardes Taurinas 4" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img411}
              />
            </div>

            {/* Image 5 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.33%', top: '24.63%', width: '31.42%', height: '10.18%' }}
              onClick={() => setSelectedImageIndex(4)}
            >
              <img 
                alt="Tardes Taurinas 5" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img59}
              />
            </div>

            {/* Image 6 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.58%', top: '24.63%', width: '31.42%', height: '10.18%' }}
              onClick={() => setSelectedImageIndex(5)}
            >
              <img 
                alt="Tardes Taurinas 6" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img68}
              />
            </div>

            {/* Row 3 Images */}
            {/* Image 7 - Masked vertical (col 1, top: 40.43%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0.07%', top: '40.43%', width: '33.14%', height: '19.05%' }}
              onClick={() => setSelectedImageIndex(6)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img76}')`,
                  WebkitMaskImage: `url('${img76}')`,
                  maskSize: '94.83% 99.83%',
                  WebkitMaskSize: '94.83% 99.83%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '2.69% 0.17%',
                  WebkitMaskPosition: '2.69% 0.17%',
                }}
              >
                <img 
                  alt="Tardes Taurinas 7" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img77}
                />
              </div>
            </div>

            {/* Image 8 - Horizontal (col 2, top: 44.86%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.33%', top: '44.86%', width: '31.42%', height: '10.18%' }}
              onClick={() => setSelectedImageIndex(7)}
            >
              <img 
                alt="Tardes Taurinas 8" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img86}
              />
            </div>

            {/* Image 9 - Horizontal (col 3, top: 44.86%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.58%', top: '44.86%', width: '31.42%', height: '10.18%' }}
              onClick={() => setSelectedImageIndex(8)}
            >
              <img 
                alt="Tardes Taurinas 9" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img94}
              />
            </div>

            {/* Row 4 Images */}
            {/* Image 10 - Horizontal (col 1, top: 65.11%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0%', top: '65.11%', width: '31.49%', height: '10.18%' }}
              onClick={() => setSelectedImageIndex(9)}
            >
              <img 
                alt="Tardes Taurinas 10" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img104}
              />
            </div>

            {/* Image 11 - Masked vertical (col 2, top: 60.69%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '34.33%', top: '60.69%', width: '33.14%', height: '19.05%' }}
              onClick={() => setSelectedImageIndex(10)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img76}')`,
                  WebkitMaskImage: `url('${img76}')`,
                  maskSize: '94.83% 99.87%',
                  WebkitMaskSize: '94.83% 99.87%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '5.17% 0%',
                  WebkitMaskPosition: '5.17% 0%',
                }}
              >
                <img 
                  alt="Tardes Taurinas 11" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img113}
                />
              </div>
            </div>

            {/* Image 12 - Horizontal (col 3, top: 65.11%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '68.58%', top: '65.11%', width: '31.42%', height: '10.18%' }}
              onClick={() => setSelectedImageIndex(11)}
            >
              <img 
                alt="Tardes Taurinas 12" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img123}
              />
            </div>

            {/* Row 5 Images */}
            {/* Image 13 - Masked vertical (col 1, top: 80.92%) */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ left: '0.07%', top: '80.92%', width: '33.14%', height: '19.05%' }}
              onClick={() => setSelectedImageIndex(12)}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maskImage: `url('${img76}')`,
                  WebkitMaskImage: `url('${img76}')`,
                  maskSize: '94.83% 99.83%',
                  WebkitMaskSize: '94.83% 99.83%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: '0% 0.17%',
                  WebkitMaskPosition: '0% 0.17%',
                }}
              >
                <img 
                  alt="Tardes Taurinas 13" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img132}
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
          {/* Tone in Tongue Navigation */}
          <Link 
            to="/tongueintongue"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('tongue')}
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
              Tone in Tongue
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'tongue' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
                  style={{ aspectRatio: '402.719/565.724' }}
                >
                  <img 
                    src={imgTongueInTongue} 
                    alt="Tone in Tongue" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Sometimes a Journey Makes Itself Necessary Navigation */}
          <Link 
            to="/sometimesajourney"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('journey')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black md:transition-opacity md:group-hover:opacity-70 text-center md:text-left">
              Sometimes a Journey Makes Itself Necessary
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
              {hoveredNav === 'journey' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute right-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
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