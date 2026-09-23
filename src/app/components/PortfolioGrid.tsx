import image_16d22acce858ad5284fe362f64d18f034b1a9c7c from 'figma:asset/16d22acce858ad5284fe362f64d18f034b1a9c7c.jpg'
import image_8fdf90927fd04eb97c68be60ac2518a830842d04 from 'figma:asset/8fdf90927fd04eb97c68be60ac2518a830842d04.jpg'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import Responsivemasonry from 'react-responsive-masonry';

// Product images
import img12 from "figma:asset/33f1d1803db3ecb966fd4ee65a40ad9440621796.jpg";
import img13 from "figma:asset/09242715ce88ebc642b6c9c602c11e7aa9309c7d.jpg";
import img15 from "figma:asset/16d22acce858ad5284fe362f64d18f034b1a9c7c.jpg";
import img31 from "figma:asset/e025732070920faf4ad9c8a34157bf5ebad91936.jpg";
import img112 from "figma:asset/1966571180428a55c01fb46133ce1655d080df55.jpg";
import img51 from "figma:asset/9b1ea9269295c28022e6996c4e6ac2d3db641573.jpg";

// Fashion images
import fashionImg1 from "figma:asset/268f8f6a159251e81251ae91745dabb6dea4cd50.jpg";
import fashionImg2 from "figma:asset/d0b7aa769cb6178dd07545ce3c3674214d094045.jpg";
import fashionImg3 from "figma:asset/fd4b7f435d7c46161233bd55f05d26a57108ca94.jpg";
import fashionImg4 from "figma:asset/cf8754a44433912fa27fdd7118cc604f9630931e.jpg";
import { imgIvory } from "../../imports/svg-cy93s";

// Exhibition images
import img14 from "figma:asset/845e66cd37b52c9ad805ecf2e836e03f7caaf0c3.jpg";
import img4Latency1 from "figma:asset/cdef70b57ad0e6521107fbeac80cd544d59a87cd.jpg";
import img8Jpg1 from "figma:asset/6674bcfff676ae3592b76aa48633c272a6cc9aa5.jpg";
import imgWeAreBecomingClouds2 from "figma:asset/11237c7ee0f8e7c7de987029ee5590c79b7cf01d.jpg";
import img21 from "figma:asset/ef5051edb6f8f44619b65e2330c2abce1cfd44f9.jpg";
import img16 from "figma:asset/3c77ea10bb8d39bd10bf86bfc1c24bb73b69982a.jpg";
import imgTongueInTongue1 from "figma:asset/30a32673a0887c3e86593f457319a45dace2fb46.jpg";

// New Fashion images (added)
import imgLemurea1 from "figma:asset/lemurea-01.jpg";
import imgDualityRunway1 from "figma:asset/dualityrunway-01.jpg";

// New Exhibition images (added)
import imgTwoGirlsOneTweezer1 from "figma:asset/twogirlsonetweezer-01.jpg";
import imgUncoloredHoouse1 from "figma:asset/uncoloredhoouse-01.jpg";
import imgRehearsingSpace1 from "figma:asset/rehearsingspace-01.jpg";
import imgOutToPasture1 from "figma:asset/outtopasture-01.jpg";

// New Food images (added)
import imgPrinceOfPeace1 from "figma:asset/princeofpeace-01.jpg";
import imgEllyAmai1 from "figma:asset/ellyamai-01.jpg";
import imgAllAboutGinger1 from "figma:asset/allaboutginger-01.jpg";
import imgLAPreferida1 from "figma:asset/lapreferida-01.jpg";
import imgPicamas1 from "figma:asset/picamas-01.jpg";
import imgRien1 from "figma:asset/rien-01.jpg";
import imgTavola1 from "figma:asset/tavola-01.jpg";

// Food images
import imgThreeCats2 from "figma:asset/8fdf90927fd04eb97c68be60ac2518a830842d04.jpg";
import imgYukiKumo1 from "figma:asset/33f6a21ea310422cc495b496fef1481bf4039ecf.jpg";
import imgMicroingredient1 from "figma:asset/29e1249a67483cc19d13cdd5cbf1916bbc30c8c1.jpg";
import imgWushiland1 from "figma:asset/94928c6342b4a5fd1e3d3c87b5571bae7b14423f.jpg";
import imgSumei2 from "figma:asset/dbb15b31a4a94cf978478db1300982ab13c708b8.jpg";
import imgRectangle from "figma:asset/ef5051edb6f8f44619b65e2330c2abce1cfd44f9.jpg";

interface PortfolioItem {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const categoryImages = {
  Product: [
    { src: img12, title: 'Luxury Watch' },
    { src: img13, title: 'Premium Headphones' },
    { src: img15, title: 'Vintage Camera' },
    { src: img31, title: 'Designer Perfume' },
    { src: img112, title: 'Sneaker Collection' },
    { src: img51, title: 'Cosmetics Line' }
  ],
  Fashion: [
    { src: fashionImg1, title: 'Ivory' },
    { src: fashionImg2, title: 'Roxy' },
    { src: fashionImg3, title: 'Shirley' },
    { src: fashionImg4, title: 'Mankun' }
  ],
  Exhibition: [
    { src: img14, title: 'img' },
    { src: img4Latency1, title: 'Latency' },
    { src: img8Jpg1, title: 'img' },
    { src: imgWeAreBecomingClouds2, title: 'We Are Becoming Clouds' },
    { src: img21, title: 'img' },
    { src: img16, title: 'img' },
    { src: imgTongueInTongue1, title: 'Tongue In Tongue' }
  ],
  Food: [
    { src: imgYukiKumo1, title: 'Yuki & Kumo' },
    { src: imgMicroingredient1, title: 'Microingredient' },
    { src: imgThreeCats2, title: 'ThreeCat' },
    { src: imgWushiland1, title: 'Wushiland' },
    { src: imgSumei2, title: 'Sumei' },
    { src: imgRectangle, title: 'Installation' }
  ]
};

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const category = items[0]?.category || 'Product';
  const images = categoryImages[category as keyof typeof categoryImages] || categoryImages.Product;
  const isFashion = category === 'Fashion';
  const isExhibition = category === 'Exhibition';

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1512px] mx-auto px-4 md:px-16 pb-16 md:pb-32">
        <AnimatePresence mode="sync" initial={false}>
          {isFashion ? (
            // Fashion Layout - 4 items in grid (3 on top row, 1 on bottom left)
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8"
            >
              {/* Image 1 - Ivory */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="relative overflow-hidden cursor-pointer group touch-manipulation"
                style={{ aspectRatio: '402.719/565.724' }}
                onMouseEnter={() => setHoveredId(0)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to="/ivory" className="block w-full h-full">
                  <img
                    src={fashionImg1}
                    alt="Ivory"
                    className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                  />
                </Link>
                {hoveredId === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                  >
                    <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                      Ivory
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Image 2 - Roxy */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="relative overflow-hidden cursor-pointer group touch-manipulation"
                style={{ aspectRatio: '402.719/565.724' }}
                onMouseEnter={() => setHoveredId(1)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to="/roxy" className="block w-full h-full">
                  <img
                    src={fashionImg2}
                    alt="Roxy"
                    className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                  />
                </Link>
                {hoveredId === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                  >
                    <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                      Roxy
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Image 3 - Shirley */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="relative overflow-hidden cursor-pointer group touch-manipulation"
                style={{ aspectRatio: '402.719/565.724' }}
                onMouseEnter={() => setHoveredId(2)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to="/shirley" className="block w-full h-full">
                  <img
                    src={fashionImg3}
                    alt="Shirley"
                    className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                  />
                </Link>
                {hoveredId === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                  >
                    <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                      Shirley
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Image 4 - Mankun (bottom left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.25,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="relative overflow-hidden cursor-pointer group touch-manipulation"
                style={{ aspectRatio: '402.719/565.724' }}
                onMouseEnter={() => setHoveredId(3)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to="/mankun" className="block w-full h-full">
                  <img
                    src={fashionImg4}
                    alt="Mankun"
                    className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                  />
                </Link>
                {hoveredId === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                  >
                    <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                      Mankun
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Image 5 - Lemurea */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="relative overflow-hidden cursor-pointer group touch-manipulation"
                style={{ aspectRatio: '402.719/565.724' }}
                onMouseEnter={() => setHoveredId(4)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to="/lemurea" className="block w-full h-full">
                  <img
                    src={imgLemurea1}
                    alt="Lemurea"
                    className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                  />
                </Link>
                {hoveredId === 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                  >
                    <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                      Lemurea
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Image 6 - Duality Runway */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="relative overflow-hidden cursor-pointer group touch-manipulation"
                style={{ aspectRatio: '402.719/565.724' }}
                onMouseEnter={() => setHoveredId(5)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to="/dualityrunway" className="block w-full h-full">
                  <img
                    src={imgDualityRunway1}
                    alt="Duality Runway"
                    className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                  />
                </Link>
                {hoveredId === 5 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                  >
                    <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                      Duality Runway
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ) : isExhibition ? (
            // Exhibition Layout - 7 items
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            >
              {/* Column 1 - 3 images */}
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '437/349' }}
                  onMouseEnter={() => setHoveredId(0)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to="/tardestaurinas" className="block w-full h-full">
                    <img
                      src={images[0].src}
                      alt={images[0].title}
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        Tardes Taurinas
                      </p>
                    </motion.div>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.15,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '437/349' }}
                  onMouseEnter={() => setHoveredId(1)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to="/sometimesajourney" className="block w-full h-full">
                    <img
                      src={images[1].src}
                      alt={images[1].title}
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        Sometimes a Journey Makes Itself Necessary
                      </p>
                    </motion.div>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '437/349' }}
                  onMouseEnter={() => setHoveredId(2)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to="/proxychimeroracle" className="block w-full h-full">
                    <img
                      src={images[2].src}
                      alt={images[2].title}
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        PROXY, CHIMER, ORACLE
                      </p>
                    </motion.div>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.45,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '437/349' }}
                  onMouseEnter={() => setHoveredId(7)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to="/twogirlsonetweezer" className="block w-full h-full">
                    <img
                      src={imgTwoGirlsOneTweezer1}
                      alt="Two Girls One Tweezer"
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 7 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        Two Girls One Tweezer
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Column 2 - 2 images */}
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.25,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '336/472' }}
                  onMouseEnter={() => setHoveredId(3)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to="/weareclouds" className="block w-full h-full">
                    <img
                      src={images[3].src}
                      alt={images[3].title}
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        {images[3].title}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '336/472' }}
                  onMouseEnter={() => setHoveredId(4)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to="/youseebutdoyou" className="block w-full h-full">
                    <img
                      src={images[4].src}
                      alt={images[4].title}
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 4 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        You see, but do you?
                      </p>
                    </motion.div>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '336/472' }}
                  onMouseEnter={() => setHoveredId(8)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to="/uncoloredhoouse" className="block w-full h-full">
                    <img
                      src={imgUncoloredHoouse1}
                      alt="Uncolored Hoouse"
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 8 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        Uncolored Hoouse
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.35,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '436/349' }}
                  onMouseEnter={() => setHoveredId(5)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to={isExhibition ? '/latency' : (category === 'Product' ? '/gamblehouse' : undefined)} className="block w-full h-full">
                    <img
                      src={images[5].src}
                      alt={images[5].title}
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 5 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        {isExhibition ? 'Latency' : (category === 'Product' ? 'Gamble House' : 'Sumei')}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.4,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '436/349' }}
                  onMouseEnter={() => setHoveredId(6)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to="/tongueintongue" className="block w-full h-full">
                    <img
                      src={images[6].src}
                      alt={images[6].title}
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 6 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        Tone in Tongue
                      </p>
                    </motion.div>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.45,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '436/349' }}
                  onMouseEnter={() => setHoveredId(9)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to="/rehearsingspace" className="block w-full h-full">
                    <img
                      src={imgRehearsingSpace1}
                      alt="Rehearsing Space"
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 9 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        Rehearsing Space
                      </p>
                    </motion.div>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '436/349' }}
                  onMouseEnter={() => setHoveredId(10)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to="/outtopasture" className="block w-full h-full">
                    <img
                      src={imgOutToPasture1}
                      alt="Out to Pasture"
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 10 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        Out to Pasture
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ) : (
            // Default Layout - 6 items (Product & Food)
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            >
              {/* Column 1 */}
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '437/349' }}
                  onMouseEnter={() => setHoveredId(0)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to={category === 'Product' ? '/objects' : '/yukikumo'} className="block w-full h-full">
                    <img
                      src={images[0].src}
                      alt={images[0].title}
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        {category === 'Product' ? 'Objects' : images[0].title}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.15,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '437/349' }}
                  onMouseEnter={() => setHoveredId(1)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to={category === 'Product' ? '/artzen' : '/microingredient'} className="block w-full h-full">
                    <img
                      src={images[1].src}
                      alt={images[1].title}
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        {category === 'Product' ? 'ArtZen' : 'MicroIngredient'}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '336/472' }}
                  onMouseEnter={() => setHoveredId(2)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to={category === 'Product' ? '/packaging' : '/threecats'} className="block w-full h-full">
                    <img
                      src={images[2].src}
                      alt={images[2].title}
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        {category === 'Product' ? 'Packaging Designs' : 'ThreeCat'}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.25,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '336/472' }}
                  onMouseEnter={() => setHoveredId(3)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to={category === 'Product' ? '/fengfeng' : '/wushiland'} className="block w-full h-full">
                    <img
                      src={images[3].src}
                      alt={images[3].title}
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        {category === 'Product' ? 'Feng Feng' : 'Wushiland'}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative overflow-hidden cursor-pointer group touch-manipulation"
                  style={{ aspectRatio: '436/349' }}
                  onMouseEnter={() => setHoveredId(4)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to={category === 'Product' ? '/gamblehouse' : '/sumei'} className="block w-full h-full">
                    <img
                      src={images[4].src}
                      alt={images[4].title}
                      className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </Link>
                  {hoveredId === 4 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                    >
                      <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                        {category === 'Product' ? 'Gamble House' : 'Sumei'}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
                {category !== 'Food' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6,
                      delay: 0.35,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                    className="relative overflow-hidden cursor-pointer group touch-manipulation"
                    style={{ aspectRatio: '436/349' }}
                    onMouseEnter={() => setHoveredId(5)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={category === 'Product' ? '/ecommerce' : undefined} className="block w-full h-full">
                      <img
                        src={images[5].src}
                        alt={images[5].title}
                        className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                      />
                    </Link>
                    {hoveredId === 5 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                      >
                        <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                          {category === 'Product' ? 'E-commerce' : images[5].title}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>

              {/* New Food Projects */}
              {category === 'Food' && (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                  {/* Column 1 - landscape */}
                  <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
                      className="relative overflow-hidden cursor-pointer group touch-manipulation"
                      style={{ aspectRatio: '437/349' }}
                      onMouseEnter={() => setHoveredId(10)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <Link to="/princeofpeace" className="block w-full h-full">
                        <img
                          src={imgPrinceOfPeace1}
                          alt="Prince of Peace"
                          className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                        />
                      </Link>
                      {hoveredId === 10 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                        >
                          <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                            Prince of Peace
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.55, ease: [0.43, 0.13, 0.23, 0.96] }}
                      className="relative overflow-hidden cursor-pointer group touch-manipulation"
                      style={{ aspectRatio: '437/349' }}
                      onMouseEnter={() => setHoveredId(13)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <Link to="/lapreferida" className="block w-full h-full">
                        <img
                          src={imgLAPreferida1}
                          alt="LA Preferida"
                          className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                        />
                      </Link>
                      {hoveredId === 13 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                        >
                          <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                            LA Preferida
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
                      className="relative overflow-hidden cursor-pointer group touch-manipulation"
                      style={{ aspectRatio: '437/349' }}
                      onMouseEnter={() => setHoveredId(16)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <Link to="/tavola" className="block w-full h-full">
                        <img
                          src={imgTavola1}
                          alt="Tavola"
                          className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                        />
                      </Link>
                      {hoveredId === 16 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                        >
                          <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                            Tavola
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Column 2 - portrait */}
                  <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.45, ease: [0.43, 0.13, 0.23, 0.96] }}
                      className="relative overflow-hidden cursor-pointer group touch-manipulation"
                      style={{ aspectRatio: '336/472' }}
                      onMouseEnter={() => setHoveredId(11)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <Link to="/ellyamai" className="block w-full h-full">
                        <img
                          src={imgEllyAmai1}
                          alt="Elly Amai"
                          className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                        />
                      </Link>
                      {hoveredId === 11 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                        >
                          <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                            Elly Amai
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                      className="relative overflow-hidden cursor-pointer group touch-manipulation"
                      style={{ aspectRatio: '336/472' }}
                      onMouseEnter={() => setHoveredId(14)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <Link to="/picamas" className="block w-full h-full">
                        <img
                          src={imgPicamas1}
                          alt="Picamas"
                          className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                        />
                      </Link>
                      {hoveredId === 14 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                        >
                          <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                            Picamas
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Column 3 - landscape */}
                  <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                      className="relative overflow-hidden cursor-pointer group touch-manipulation"
                      style={{ aspectRatio: '436/349' }}
                      onMouseEnter={() => setHoveredId(12)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <Link to="/allaboutginger" className="block w-full h-full">
                        <img
                          src={imgAllAboutGinger1}
                          alt="All About Ginger"
                          className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                        />
                      </Link>
                      {hoveredId === 12 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                        >
                          <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                            All About Ginger
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.65, ease: [0.43, 0.13, 0.23, 0.96] }}
                      className="relative overflow-hidden cursor-pointer group touch-manipulation"
                      style={{ aspectRatio: '436/349' }}
                      onMouseEnter={() => setHoveredId(15)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <Link to="/rien" className="block w-full h-full">
                        <img
                          src={imgRien1}
                          alt="RIEN"
                          className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                        />
                      </Link>
                      {hoveredId === 15 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="hidden md:flex absolute inset-0 bg-black/50 items-center justify-center pointer-events-none"
                        >
                          <p className="text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[34px] px-4 text-center leading-tight tracking-[-1%]">
                            RIEN
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}