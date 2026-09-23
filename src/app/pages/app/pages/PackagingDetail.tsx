import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
// Packaging design images from Figma
import img12 from "figma:asset/16d22acce858ad5284fe362f64d18f034b1a9c7c.jpg";
import img22225 from "figma:asset/3155eeea121a310aed28493402be977a8977e0f1.jpg";
import img333336 from "figma:asset/7bb733fd902de0d0deb2f33a538ad9a7ea6807ba.jpg";
import img42 from "figma:asset/8b95aca1f080005b6d845b62b261930303f07ff0.jpg";
import img53 from "figma:asset/eebc2f3e1e914ec9cae480c967d3751561a34302.jpg";
import img62 from "figma:asset/71d6764f92a4bc645382d574a29acd4463166083.jpg";
import img91 from "figma:asset/253d1412424e4eca462c9e3f475e124d69523bb1.jpg";
import img81 from "figma:asset/0137be2b5b9e6f621637d1ea1ea73d72e2f3f016.jpg";
import img101 from "figma:asset/f6ed576a3e576e2a61d2a1960029c3fe8c5fc0f1.jpg";
import img131 from "figma:asset/cd2460f7511e5655cbd6e769181e8b52d330c222.jpg";
import img71 from "figma:asset/adb716877a7c1039ccc43c6854d02bd8d3b5668f.jpg";
import img111 from "figma:asset/93403cd57f7eeb935294ca1d9128d6f05b9f6a7d.jpg";
import img121 from "figma:asset/435f6c62f8e12545989f3dcf6db0186e04937b8b.jpg";
import img141 from "figma:asset/406a8e246348defb4fa0103e477ed132377255a1.jpg";
import img161 from "figma:asset/507538c3828fa7ca1165e4dbd2104af49016f495.jpg";
import img151 from "figma:asset/0a776798be986dffaf629a4d7a1d8482eb7427a7.jpg";
import img171 from "figma:asset/72e70c9db91cc7d655f06c628e42e30d66c75903.jpg";
import { img11 } from "../../imports/svg-njur8";
import svgPathsNav from "../../imports/svg-ley7m9vqbp";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

// Navigation images
import imgObjects from "figma:asset/33f1d1803db3ecb966fd4ee65a40ad9440621796.jpg";
import imgGambleHouse from "figma:asset/1966571180428a55c01fb46133ce1655d080df55.jpg";

// Newly added photos
import imgPackagingNew01 from "figma:asset/packaging-new-01.jpg";
import imgPackagingNew02 from "figma:asset/packaging-new-02.jpg";
import imgPackagingNew03 from "figma:asset/packaging-new-03.jpg";
import imgPackagingNew04 from "figma:asset/packaging-new-04.jpg";
import imgPackagingNew05 from "figma:asset/packaging-new-05.jpg";

const images = [
  { src: img12, alt: "Packaging 1" },
  { src: img22225, alt: "Packaging 2" },
  { src: img333336, alt: "Packaging 3" },
  { src: img42, alt: "Packaging 4" },
  { src: img53, alt: "Packaging 5" },
  { src: img62, alt: "Packaging 6" },
  { src: img71, alt: "Packaging 7" },
  { src: img81, alt: "Packaging 8" },
  { src: img91, alt: "Packaging 9" },
  { src: img101, alt: "Packaging 10" },
  { src: img111, alt: "Packaging 11" },
  { src: img121, alt: "Packaging 12" },
  { src: img131, alt: "Packaging 13" },
  { src: img141, alt: "Packaging 14" },
  { src: img151, alt: "Packaging 15" },
  { src: img161, alt: "Packaging 16" },
  { src: img171, alt: "Packaging 17" },
  { src: imgPackagingNew01, alt: "Packaging 18" },
  { src: imgPackagingNew02, alt: "Packaging 19" },
  { src: imgPackagingNew03, alt: "Packaging 20" },
  { src: imgPackagingNew04, alt: "Packaging 21" },
  { src: imgPackagingNew05, alt: "Packaging 22" },
];

export default function PackagingDetail() {
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
          Packaging Designs
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

        {/* Desktop Layout - Exact Figma positioning with responsive scaling */}
        <div className="hidden md:block w-full relative" style={{ paddingBottom: '269.13%' }}>
          {/* Container aspect ratio: 3604/1339 = 2.6913 */}
          <div className="absolute inset-0">
            {/* Background cells - exact Figma positions */}
            <div className="absolute bg-[#f5f5f5]" style={{ 
              left: 'calc(457 / 1339 * 100%)', 
              top: 'calc(630 / 3604 * 100%)', 
              width: 'calc(422 / 1339 * 100%)', 
              height: 'calc(592.81 / 3604 * 100%)' 
            }} />
            <div className="absolute bg-[#f5f5f5]" style={{ 
              left: 'calc(457 / 1339 * 100%)', 
              top: 'calc(1890 / 3604 * 100%)', 
              width: 'calc(424 / 1339 * 100%)', 
              height: 'calc(593 / 3604 * 100%)' 
            }} />
            <div className="absolute bg-[#f5f5f5]" style={{ 
              left: 'calc(918 / 1339 * 100%)', 
              top: 'calc(1890 / 3604 * 100%)', 
              width: 'calc(424 / 1339 * 100%)', 
              height: 'calc(593 / 3604 * 100%)' 
            }} />
            <div className="absolute bg-[#f5f5f5]" style={{ 
              left: 'calc(457 / 1339 * 100%)', 
              top: 'calc(2520 / 3604 * 100%)', 
              width: 'calc(422 / 1339 * 100%)', 
              height: 'calc(592.81 / 3604 * 100%)' 
            }} />
            <div className="absolute bg-[#f5f5f5]" style={{ 
              left: '0%', 
              top: 'calc(3150 / 3604 * 100%)', 
              width: 'calc(422 / 1339 * 100%)', 
              height: 'calc(592.81 / 3604 * 100%)' 
            }} />
            <div className="absolute bg-[#f5f5f5]" style={{ 
              left: 'calc(918 / 1339 * 100%)', 
              top: 'calc(2520 / 3604 * 100%)', 
              width: 'calc(424 / 1339 * 100%)', 
              height: 'calc(593 / 3604 * 100%)' 
            }} />
            <div className="absolute bg-[#f5f5f5]" style={{ 
              left: 'calc(461 / 1339 * 100%)', 
              top: 'calc(3150 / 3604 * 100%)', 
              width: 'calc(424 / 1339 * 100%)', 
              height: 'calc(593 / 3604 * 100%)' 
            }} />
            <div className="absolute bg-[#f5f5f5]" style={{ 
              left: 'calc(917 / 1339 * 100%)', 
              top: '0%', 
              width: 'calc(422 / 1339 * 100%)', 
              height: 'calc(592.81 / 3604 * 100%)' 
            }} />
            <div className="absolute bg-[#f5f5f5]" style={{ 
              left: '0%', 
              top: 'calc(630 / 3604 * 100%)', 
              width: 'calc(422 / 1339 * 100%)', 
              height: 'calc(592.81 / 3604 * 100%)' 
            }} />
            <div className="absolute bg-[#f5f5f5]" style={{ 
              left: '0%', 
              top: 'calc(1260 / 3604 * 100%)', 
              width: 'calc(422 / 1339 * 100%)', 
              height: 'calc(592.81 / 3604 * 100%)' 
            }} />

            {/* Image 1 - Mask Group */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(-12 / 1339 * 100%)', 
                top: '0%', 
                width: 'calc(445 / 1339 * 100%)', 
                height: 'calc(593 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(0)}
            >
              <div 
                className="absolute w-full h-full"
                style={{ 
                  left: 'calc(12 / 445 * 100%)',
                  top: '0%',
                  width: 'calc(422 / 445 * 100%)',
                  height: 'calc(592.81 / 593 * 100%)',
                  maskImage: `url('${img11}')`,
                  WebkitMaskImage: `url('${img11}')`,
                  maskSize: '100% 100%',
                  WebkitMaskSize: '100% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              >
                <img 
                  alt="Packaging 1" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img12}
                />
              </div>
            </div>

            {/* Image 2 - Mask Group */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(445 / 1339 * 100%)', 
                top: '0%', 
                width: 'calc(446 / 1339 * 100%)', 
                height: 'calc(595 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(1)}
            >
              <div 
                className="absolute w-full h-full"
                style={{ 
                  left: 'calc(12 / 446 * 100%)',
                  top: '0%',
                  width: 'calc(422 / 446 * 100%)',
                  height: 'calc(592.81 / 595 * 100%)',
                  maskImage: `url('${img11}')`,
                  WebkitMaskImage: `url('${img11}')`,
                  maskSize: '100% 100%',
                  WebkitMaskSize: '100% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              >
                <img 
                  alt="Packaging 2" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img22225}
                />
              </div>
            </div>

            {/* Image 3 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(917 / 1339 * 100%)', 
                top: 'calc(137 / 3604 * 100%)', 
                width: 'calc(422 / 1339 * 100%)', 
                height: 'calc(317 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(2)}
            >
              <img 
                alt="Packaging 3" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img333336}
              />
            </div>

            {/* Image 4 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: '0%', 
                top: 'calc(767 / 3604 * 100%)', 
                width: 'calc(422 / 1339 * 100%)', 
                height: 'calc(318 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(3)}
            >
              <img 
                alt="Packaging 4" 
                className="absolute max-w-none pointer-events-none transition-transform duration-500 group-hover:scale-105" 
                style={{
                  height: '100.31%',
                  left: '-0.51%',
                  top: '-0.31%',
                  width: '100.79%'
                }}
                src={img42}
              />
            </div>

            {/* Image 5 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(457 / 1339 * 100%)', 
                top: 'calc(767 / 3604 * 100%)', 
                width: 'calc(422 / 1339 * 100%)', 
                height: 'calc(318 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(4)}
            >
              <img 
                alt="Packaging 5" 
                className="absolute max-w-none pointer-events-none transition-transform duration-500 group-hover:scale-105" 
                style={{
                  height: '100.01%',
                  left: '-1.18%',
                  top: '-0.01%',
                  width: '102.37%'
                }}
                src={img53}
              />
            </div>

            {/* Image 6 - Mask Group */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(907 / 1339 * 100%)', 
                top: 'calc(630 / 3604 * 100%)', 
                width: 'calc(444 / 1339 * 100%)', 
                height: 'calc(592 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(5)}
            >
              <div 
                className="absolute w-full h-full"
                style={{ 
                  left: 'calc(11 / 444 * 100%)',
                  top: '0%',
                  width: 'calc(422 / 444 * 100%)',
                  height: 'calc(592.81 / 592 * 100%)',
                  maskImage: `url('${img11}')`,
                  WebkitMaskImage: `url('${img11}')`,
                  maskSize: '100% 100%',
                  WebkitMaskSize: '100% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              >
                <img 
                  alt="Packaging 6" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img62}
                />
              </div>
            </div>

            {/* Image 7 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: '0%', 
                top: 'calc(1397 / 3604 * 100%)', 
                width: 'calc(422 / 1339 * 100%)', 
                height: 'calc(317 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(6)}
            >
              <img 
                alt="Packaging 7" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img71}
              />
            </div>

            {/* Image 8 - Mask Group */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(446 / 1339 * 100%)', 
                top: 'calc(1260 / 3604 * 100%)', 
                width: 'calc(444 / 1339 * 100%)', 
                height: 'calc(592 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(7)}
            >
              <div 
                className="absolute w-full h-full"
                style={{ 
                  left: 'calc(11 / 444 * 100%)',
                  top: '0%',
                  width: 'calc(422 / 444 * 100%)',
                  height: 'calc(592.81 / 592 * 100%)',
                  maskImage: `url('${img11}')`,
                  WebkitMaskImage: `url('${img11}')`,
                  maskSize: '100% 100%',
                  WebkitMaskSize: '100% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              >
                <img 
                  alt="Packaging 8" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img81}
                />
              </div>
            </div>

            {/* Image 9 - Mask Group */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(907 / 1339 * 100%)', 
                top: 'calc(1260 / 3604 * 100%)', 
                width: 'calc(445 / 1339 * 100%)', 
                height: 'calc(593 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(8)}
            >
              <div 
                className="absolute w-full h-full"
                style={{ 
                  left: 'calc(11 / 445 * 100%)',
                  top: '0%',
                  width: 'calc(422 / 445 * 100%)',
                  height: 'calc(592.81 / 593 * 100%)',
                  maskImage: `url('${img11}')`,
                  WebkitMaskImage: `url('${img11}')`,
                  maskSize: '100% 100%',
                  WebkitMaskSize: '100% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              >
                <img 
                  alt="Packaging 9" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img91}
                />
              </div>
            </div>

            {/* Image 10 - Mask Group */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(-11 / 1339 * 100%)', 
                top: 'calc(1890 / 3604 * 100%)', 
                width: 'calc(445 / 1339 * 100%)', 
                height: 'calc(593 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(9)}
            >
              <div 
                className="absolute w-full h-full"
                style={{ 
                  left: 'calc(11 / 445 * 100%)',
                  top: '0%',
                  width: 'calc(422 / 445 * 100%)',
                  height: 'calc(592.81 / 593 * 100%)',
                  maskImage: `url('${img11}')`,
                  WebkitMaskImage: `url('${img11}')`,
                  maskSize: '100% 100%',
                  WebkitMaskSize: '100% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              >
                <img 
                  alt="Packaging 10" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img101}
                />
              </div>
            </div>

            {/* Image 11 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(457 / 1339 * 100%)', 
                top: 'calc(2027 / 3604 * 100%)', 
                width: 'calc(424 / 1339 * 100%)', 
                height: 'calc(318 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(10)}
            >
              <img 
                alt="Packaging 11" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img111}
              />
            </div>

            {/* Image 12 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(918 / 1339 * 100%)', 
                top: 'calc(2027 / 3604 * 100%)', 
                width: 'calc(424 / 1339 * 100%)', 
                height: 'calc(318 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(11)}
            >
              <img 
                alt="Packaging 12" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img121}
              />
            </div>

            {/* Image 13 - Mask Group */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(-12 / 1339 * 100%)', 
                top: 'calc(2520 / 3604 * 100%)', 
                width: 'calc(445 / 1339 * 100%)', 
                height: 'calc(593 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(12)}
            >
              <div 
                className="absolute w-full h-full"
                style={{ 
                  left: 'calc(12 / 445 * 100%)',
                  top: '0%',
                  width: 'calc(422 / 445 * 100%)',
                  height: 'calc(592.81 / 593 * 100%)',
                  maskImage: `url('${img11}')`,
                  WebkitMaskImage: `url('${img11}')`,
                  maskSize: '100% 100%',
                  WebkitMaskSize: '100% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              >
                <img 
                  alt="Packaging 13" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                  src={img131}
                />
              </div>
            </div>

            {/* Image 14 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(457 / 1339 * 100%)', 
                top: 'calc(2657 / 3604 * 100%)', 
                width: 'calc(422 / 1339 * 100%)', 
                height: 'calc(318 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(13)}
            >
              <img 
                alt="Packaging 14" 
                className="absolute max-w-none pointer-events-none transition-transform duration-500 group-hover:scale-105" 
                style={{
                  height: '100.03%',
                  left: '0%',
                  top: '-0.02%',
                  width: '100.47%'
                }}
                src={img141}
              />
            </div>

            {/* Image 15 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(918 / 1339 * 100%)', 
                top: 'calc(2657 / 3604 * 100%)', 
                width: 'calc(424 / 1339 * 100%)', 
                height: 'calc(318 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(14)}
            >
              <img 
                alt="Packaging 15" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img151}
              />
            </div>

            {/* Image 16 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: '0%', 
                top: 'calc(3287 / 3604 * 100%)', 
                width: 'calc(423 / 1339 * 100%)', 
                height: 'calc(317 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(15)}
            >
              <img 
                alt="Packaging 16" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img161}
              />
            </div>

            {/* Image 17 */}
            <div 
              className="absolute overflow-hidden group cursor-pointer"
              style={{ 
                left: 'calc(457 / 1339 * 100%)', 
                top: 'calc(3287 / 3604 * 100%)', 
                width: 'calc(423 / 1339 * 100%)', 
                height: 'calc(317 / 3604 * 100%)' 
              }}
              onClick={() => setSelectedImageIndex(16)}
            >
              <img 
                alt="Packaging 17" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105" 
                src={img171}
              />
            </div>
          </div>
        </div>

        {/* Additional Photos - Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-4 mt-8">
          {images.slice(17).map((image, i) => (
            <div
              key={i + 17}
              className="relative overflow-hidden cursor-pointer group"
              style={{ aspectRatio: '4/5' }}
              onClick={() => setSelectedImageIndex(i + 17)}
            >
              <img
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={image.src}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Spacing after grid */}
        <div className="w-full mt-8 md:mt-12 relative h-[156px]">
          {/* Empty space for layout */}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="w-full max-w-[1512px] mx-auto px-4 md:px-16 pb-10 md:pb-24">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Objects Navigation */}
          <Link 
            to="/objects"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('objects')}
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
              Objects
            </p>

            {/* Hover Image - Left side */}
            <AnimatePresence>
              {hoveredNav === 'objects' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute left-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
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

          {/* Gamble House Navigation */}
          <Link 
            to="/gamblehouse"
            className="group relative flex items-center gap-2 md:gap-4 cursor-pointer touch-manipulation"
            onMouseEnter={() => setHoveredNav('gamblehouse')}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Text */}
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] md:text-[36px] text-black transition-opacity group-hover:opacity-70">
              Gamble House
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
              {hoveredNav === 'gamblehouse' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute right-0 bottom-full mb-4 w-[200px] md:w-[280px] overflow-hidden pointer-events-none"
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
