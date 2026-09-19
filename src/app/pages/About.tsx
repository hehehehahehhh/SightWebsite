import { motion, AnimatePresence } from "motion/react";
import { MapPin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import ResponsiveStudioImages from "../components/ResponsiveStudioImages";
import Section from "../../imports/Section";
import Footer from "../components/Footer";
import OurClients from "../../imports/Group8";
import img222222 from "figma:asset/1c9b40716a62c49dcd52fe32ed842c114dbb8c3d.jpg";
import img3333331 from "figma:asset/0d1bec016e8dcb93016ad8d91e9e9195dca70ec8.jpg";
import imgSample22 from "figma:asset/c29fc8733cc8d2d99da6b6dfe9d12464def696e5.jpg";
import svgPathsNewArrow from "../../imports/svg-gfr1nk1pjk";
import svgPathsLeftArrow from "../../imports/svg-duxboigvnv";

const studioImages = [
  { src: img3333331, alt: "Studio Image 1" },
  { src: img222222, alt: "Studio Image 2" },
  { src: imgSample22, alt: "Studio Image 3" },
];

export default function About() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Keyboard navigation for image modal
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + studioImages.length) % studioImages.length);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % studioImages.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-[#f5f5f5]"
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-[1512px] mx-auto px-5 md:px-16">
          {/* Our Studio Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] md:text-[36px] text-[#0a0a0a] mb-6 md:mb-12 tracking-[-1%]"
          >
            Our studio
          </motion.h1>

          {/* Two Column Text Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 mb-10 md:mb-16"
          >
            <div className="space-y-5 md:space-y-6">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] md:text-[16px] text-[#404040] leading-[24px] md:leading-[26px] tracking-[-1%]">
                Sight Studio is a photography and creative space based in the Fashion District of Los Angeles. Founded by artists and photographers with academic backgrounds in fine art, we balance artistic sensitivity with commercial precision, exploring the intersection of aesthetics and visual storytelling.
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] md:text-[16px] text-[#404040] leading-[24px] md:leading-[26px] tracking-[-1%]">
                Whether in artistic projects or commercial campaigns, we approach every image with passion, rigor, and a deep respect for visual expression.
              </p>
            </div>
            <div className="space-y-5 md:space-y-6">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] md:text-[16px] text-[#404040] leading-[24px] md:leading-[26px] tracking-[-1%]">
                Our studio features a fully equipped professional shooting space, utilizing Hasselblad X2D and Fujifilm GFX medium-format digital systems alongside Profoto lighting equipment.
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] md:text-[16px] text-[#404040] leading-[24px] md:leading-[26px] tracking-[-1%]">
                This high-end setup allows us to consistently deliver campaign-level, high-quality imagery across brand promotion, product photography, spatial documentation, and art collaborations.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16"
          >
            {/* Location */}
            <div className="flex gap-3 md:gap-4">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#121212] mt-1 flex-shrink-0" />
              <div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] md:text-[14px] text-[#71717b] leading-[18px] md:leading-[20px] tracking-[-1%] mb-1">
                  Location
                </p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] md:text-[16px] text-[#343434] leading-[22px] md:leading-[24px] tracking-[-1%]">
                  1206 Maple Ave<br />Los Angeles, CA 90015
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 md:gap-4">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#121212] mt-1 flex-shrink-0" />
              <div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] md:text-[14px] text-[#71717b] leading-[18px] md:leading-[20px] tracking-[-1%] mb-1">
                  Email
                </p>
                <a 
                  href="mailto:sightphotography2025@gmail.com"
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] md:text-[16px] text-[#121212] leading-[22px] md:leading-[24px] tracking-[-1%] hover:opacity-70 transition-opacity break-all"
                >
                  sightphotography2025@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Studio Images Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 md:mb-20"
          >
            <ResponsiveStudioImages />
          </motion.div>

          {/* Our Clients Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 md:mt-24 mb-12 md:mb-16"
          >
            <Section style={{ marginTop: '-200px' }} />
          </motion.div>
        </div>
      </main>

      {/* Our Clients Section - Above Footer */}
      <div className="max-w-[1512px] mx-auto px-5 md:px-16 mb-12 md:mb-24 -mt-12 md:-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative h-auto md:h-[156px]"
        >
          <OurClients />
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Image Modal with Navigation Arrows */}
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
            <div className="absolute inset-0 bg-black/90" />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="fixed top-6 right-6 md:top-12 md:right-16 cursor-pointer group z-[70]"
            >
              <div className="size-[98px] flex items-center justify-center relative">
                {/* Backdrop circle with background blur */}
                <div className="absolute inset-0 size-full rounded-full bg-[rgba(245,245,245,0.3)] backdrop-blur-[13.3px]" />
                
                {/* X icon - white colored */}
                <div className="relative size-[32.864px] flex items-center justify-center">
                  <div className="absolute rotate-45">
                    <div className="bg-white h-[4px] w-[42.477px] transition-colors group-hover:bg-gray-300" />
                  </div>
                  <div className="absolute -scale-y-100 rotate-135">
                    <div className="bg-white h-[4px] w-[42.477px] transition-colors group-hover:bg-gray-300" />
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
                src={studioImages[selectedImageIndex].src}
                alt={studioImages[selectedImageIndex].alt}
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
              <div className="size-[98px] flex items-center justify-center relative">
                {/* Arrow icon - rotated 180deg for left */}
                <div className="relative h-[23.332px] w-[26.649px] rotate-180">
                  <svg className="block size-full transition-transform group-hover:scale-110" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3245 23.3315">
                    <path d={svgPathsLeftArrow.p187dd600} fill="white" fillOpacity="1" />
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
              <div className="size-[98px] flex items-center justify-center relative">
                {/* Arrow icon */}
                <div className="relative h-[23.332px] w-[26.649px]">
                  <svg className="block size-full transition-transform group-hover:scale-110" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3245 23.3315">
                    <path d={svgPathsNewArrow.p187dd600} fill="white" fillOpacity="1" />
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