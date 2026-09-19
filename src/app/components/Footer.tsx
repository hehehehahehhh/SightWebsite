import imgTest1 from "figma:asset/74f5e2f2b055ddde280316598edba2c462bd40ac.jpg";
import SocialIcons from "../../imports/Frame5";
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="contact" className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imgTest1} 
          alt="Zen Garden Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32 text-center">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 50,
            damping: 20
          }}
          className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-black mb-6 md:mb-8 text-[32px] md:text-[48px] tracking-[-1%]"
        >
          Let's Work Together
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 50,
            damping: 20
          }}
          className="font-['Plus_Jakarta_Sans',sans-serif] text-black/80 mb-10 md:mb-16 text-[16px] md:text-[20px] tracking-[-1%] leading-[24px] md:leading-normal"
        >
          Get in touch to discuss your next project
        </motion.p>

        {/* Contact Button */}
        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.6,
            delay: 0.4,
            type: "spring",
            stiffness: 80,
            damping: 15
          }}
          href="mailto:sightphotography2025@gmail.com"
          className="inline-block bg-black text-white px-12 md:px-16 py-4 md:py-5 rounded-full font-['Plus_Jakarta_Sans',sans-serif] md:hover:bg-black/80 transition-all duration-300 md:hover:scale-105 mb-20 md:mb-28 text-[17px] md:text-[20px] tracking-[-1%] touch-manipulation active:scale-95"
        >
          Email Us
        </motion.a>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.6,
            delay: 0.6,
            type: "spring",
            stiffness: 60,
            damping: 18
          }}
          className="flex items-center justify-center mb-8 md:mb-10 w-full"
        >
          <div className="flex items-center scale-[1.15] md:scale-100">
            <SocialIcons />
          </div>
        </motion.div>

        {/* Address */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.8,
            delay: 0.8
          }}
          className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] md:text-[14px] text-black/70 mb-4 md:mb-5 tracking-[-1%] leading-[20px]"
        >
          Visit us at 1206 Maple Ave, Los Angeles 90015
        </motion.p>

        {/* Copyright */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.8,
            delay: 0.9
          }}
          className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] md:text-[13px] text-black/60 tracking-[-1%]"
        >
          © Sight Photography 2026
        </motion.p>
      </div>
    </footer>
  );
}