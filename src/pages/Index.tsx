import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import dividerGold from "@/assets/divider-gold.png";
import heroImg from "@/assets/wedding-08.jpg";
import heart from "@/assets/heart-1.png";
import w01 from "@/assets/wedding-01.jpg";
import w02 from "@/assets/wedding-02.jpg";
import w03 from "@/assets/wedding-03.jpg";
import w04 from "@/assets/wedding-04.jpg";
import w05 from "@/assets/wedding-05.jpg";
import w06 from "@/assets/wedding-06.jpg";
import w07 from "@/assets/wedding-07.jpg";
import w09 from "@/assets/wedding-09.jpg";
//import coupleIllustration from "@/assets/couple-illustration.png";
import floralTop from "@/assets/floral-top.png";
import floralBottom from "@/assets/floral-bottom.png";
import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import EventSection from "@/components/wedding/EventSection";
import TimelineSection from "@/components/wedding/TimelineSection";
import GallerySection from "@/components/wedding/GallerySection";
import WishesSection from "@/components/wedding/WishesSection";
import FooterSection from "@/components/wedding/FooterSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";

const allImages = [
  heroImg,
  w01,
  w02,
  w03,
  w04,
  w05,
  w06,
  w07,
  w09,
  dividerGold,

  floralTop,
  floralBottom,
];

const Index = () => {
  const [showInvite, setShowInvite] = useState(false);
  const [musicReady, setMusicReady] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useImagePreloader(allImages);

  const handleOpen = () => {
    setShowInvite(true);
    setMusicReady(true);
  };

  useEffect(() => {
    if (!showInvite || !scrollRef.current) return;

    const timer = setTimeout(() => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      let scrolled = 0;
      const speed = 1;

      const autoScroll = () => {
        scrolled += speed;
        if (scrolled < totalHeight) {
          window.scrollBy(0, speed);
          requestAnimationFrame(autoScroll);
        }
      };

      const stopScroll = () => {
        scrolled = totalHeight;
      };
      window.addEventListener("wheel", stopScroll, { once: true });
      window.addEventListener("touchstart", stopScroll, { once: true });

      requestAnimationFrame(autoScroll);

      return () => {
        window.removeEventListener("wheel", stopScroll);
        window.removeEventListener("touchstart", stopScroll);
      };
    }, 1000);

    return () => clearTimeout(timer);
  }, [showInvite]);

  // Show loading screen while images preload
  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gold font-display text-3xl"
        >
          <img src={heart} alt="heart1" className="w-8 h-8" />
        </motion.div>
        <p className="text-muted-foreground font-body text-sm tracking-widest uppercase">
          Đang tải...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <motion.div
        key={showInvite ? "invite" : "opening"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {!showInvite ? (
          <OpeningScreen onOpen={handleOpen} />
        ) : (
          <div className="relative" ref={scrollRef}>
            <MusicPlayer autoPlay={musicReady} />
            <HeroSection />
            <CountdownSection />
            <CoupleSection />
            <EventSection />
            <TimelineSection />
            <GallerySection />
            <WishesSection />
            <FooterSection />
          </div>
        )}
      </motion.div>
    </div>
  );
};

const OpeningScreen = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-end md:justify-center pb-8 md:pb-0 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Wedding"
          className="w-full h-full object-cover object-center md:object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      {/* /// */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-center z-10 p-6"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-cream/80 font-body text-sm md:text-base uppercase mb-8"
        >
          Trân trọng kính mời
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-3 drop-shadow-lg">
            Việt Hiếu
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <span className="w-12 md:w-20 h-px bg-gold opacity-60" />
            <span className="font-display text-2xl md:text-3xl text-gold animate-heart-beat">
              <img src={heart} alt="heart" className="w-8 h-8" />
            </span>
            <span className="w-12 md:w-20 h-px bg-gold opacity-60" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-2 drop-shadow-lg">
            Đỗ Phương
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-cream/70 font-body text-lg md:text-xl mb-5 italic"
        >
          15 . 03 . 2026
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="border-2 border-gold text-gold font-heading text-base md:text-lg px-10 py-3.5 rounded-full backdrop-blur-sm bg-gold/10 tracking-wider hover:bg-gold hover:text-background transition-all duration-300"
        >
          Mở Thiệp Mời
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Index;
