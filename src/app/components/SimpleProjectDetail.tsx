import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

interface SimpleProjectDetailProps {
  title: string;
  category: string; // e.g. 'Fashion' | 'Exhibition' | 'Product' | 'Food'
  images: { src: string; alt: string }[];
}

export default function SimpleProjectDetail({ title, category, images }: SimpleProjectDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { returning: true, category } });
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
      <div className="w-full max-w-[1512px] mx-auto px-4 md:px-16 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="fixed top-4 right-4 md:top-12 md:right-16 cursor-pointer group z-50 touch-manipulation"
        >
          <div className="size-[50px] md:size-[65px] flex items-center justify-center relative">
            <div className="absolute inset-0 size-full rounded-full bg-[rgba(245,245,245,0.3)] backdrop-blur-[13.3px]" />
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

        <div className="py-10 md:pt-24 md:pb-8">
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] md:text-[48px] tracking-[-0.01em] text-black mb-8 md:mb-20">
            {title}
          </h1>

          {/* Responsive Grid - works for any number of images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden cursor-pointer group touch-manipulation"
                style={{ aspectRatio: '4/5' }}
                onClick={() => setSelectedImageIndex(index)}
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
            <div className="absolute inset-0 bg-black" />

            <button
              onClick={() => setSelectedImageIndex(null)}
              className="fixed top-6 right-6 md:top-12 md:right-16 cursor-pointer group z-[70]"
            >
              <div className="size-[65px] flex items-center justify-center relative">
                <div className="absolute inset-0 size-full rounded-full bg-[rgba(245,245,245,0.3)] backdrop-blur-[13.3px]" />
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

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-[65] cursor-pointer group"
            >
              <div className="size-[70px] flex items-center justify-center relative rounded-full bg-[#ffffff00]">
                <svg className="w-[22px] h-[38px] rotate-180 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 31 53.123">
                  <path d="M2 2L29 26.5L2 51" stroke="white" strokeWidth="4" fill="none" />
                </svg>
              </div>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[65] cursor-pointer group"
            >
              <div className="size-[70px] flex items-center justify-center relative rounded-full bg-[#ffffff00]">
                <svg className="w-[22px] h-[38px] transition-transform group-hover:scale-110" fill="none" viewBox="0 0 31 53.123">
                  <path d="M2 2L29 26.5L2 51" stroke="white" strokeWidth="4" fill="none" />
                </svg>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
