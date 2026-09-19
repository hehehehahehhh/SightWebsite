import { useState } from 'react';
import heroImage1 from 'figma:asset/044cbe593d64c964a5f270abe94f75a37bee0ff4.jpg';
import heroImage2 from 'figma:asset/4179ee4b8b34cabdbedff750dad046e82784babd.jpg';
import heroImage3 from 'figma:asset/f2016a57874c53a5f38d5f220a5094cae5d5f62c.jpg';

const heroImages = [
  heroImage1,
  heroImage2,
  heroImage3
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNext = () => {
    setCurrentImageIndex((prev) => {
      const newIndex = (prev + 1) % heroImages.length;
      console.log('Next image:', newIndex);
      return newIndex;
    });
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => {
      const newIndex = (prev - 1 + heroImages.length) % heroImages.length;
      console.log('Previous image:', newIndex);
      return newIndex;
    });
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-[#f5f5f5] text-black sticky top-0 -z-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImages[currentImageIndex]}
          alt="Hero Background"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    </div>
  );
}

// Export functions to be called from parent
export { Hero as default };