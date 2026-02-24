import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import w01 from "@/assets/wedding-01.jpg";
import w02 from "@/assets/DSC_0541.jpg";
import w03 from "@/assets/wedding-03.jpg";
import w04 from "@/assets/wedding-05.jpg";
import w05 from "@/assets/DSC_0078.jpg";
import w06 from "@/assets/DSC_0315.jpg";
import w07 from "@/assets/DSC_9853.jpg";
import w08 from "@/assets/DSC_9986.jpg";
import w09 from "@/assets/DSC_0298.jpg";
import w100 from "@/assets/DSC_0795.png";
import w101 from "@/assets/DSC_0655.jpg";
const galleryImages = [w01, w02, w03, w04, w05, w09, w06, w07, w08, w100, w101];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, goNext, goPrev]);

  // Swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goPrev();
      else goNext();
    }
    setTouchStart(null);
  };

  return (
    <section className="py-20 bg-cream-dark relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto px-6 text-center"
      >
        <p className="font-body text-lg text-muted-foreground tracking-widest uppercase mb-2">
          Khoảnh Khắc
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-2">
          Album Cưới
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mb-12 opacity-50" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-lg shadow-wedding border border-gold/20 group cursor-pointer ${
                i === 0 ? "row-span-2" : ""
              }`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img}
                alt={`Ảnh cưới ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                style={{ minHeight: i === 0 ? "400px" : "200px" }}
              />
              <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-cream/80 hover:text-cream p-2 transition-colors"
            >
              <X size={28} />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 text-cream/60 font-body text-sm">
              {selectedIndex + 1} / {galleryImages.length}
            </div>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 md:left-4 z-10 text-cream/60 hover:text-cream p-2 transition-colors"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedIndex}
                src={galleryImages[selectedIndex]}
                alt={`Ảnh cưới ${selectedIndex + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 md:right-4 z-10 text-cream/60 hover:text-cream p-2 transition-colors"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
