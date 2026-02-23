import { motion } from "framer-motion";
import heroImg from "@/assets/wedding-02.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImg}
          alt="Việt Hiếu & Đỗ Phương"
          className="w-full h-full object-cover object-center md:object-[center_20%]"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen w-full py-12 pb-24 px-4">
        {/* Top: Save The Date / Wedding Invitation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center pt-4"
        >
          <h2 className="font-display text-4xl md:text-5xl text-cream drop-shadow-lg">
            Save The Date
          </h2>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom: Names + Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center pb-4"
        >
          <h1 className="font-display text-5xl md:text-7xl text-cream drop-shadow-lg mb-2">
            Việt Hiếu
          </h1>
          <div className="flex items-center justify-center gap-4 my-3">
            <span className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent via-cream/60 to-transparent" />
            <span className="font-display text-2xl text-gold animate-heart-beat drop-shadow-lg">
              &
            </span>
            <span className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent via-cream/60 to-transparent" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-cream drop-shadow-lg mb-6">
            Đỗ Phương
          </h1>
          <p className="text-cream/80 font-number text-lg md:text-xl tracking-widest drop-shadow-md">
            15 · 03 · 2026
          </p>
          <p className="font-body text-sm md:text-3xl text-cream/80 italic text-center leading-relaxed">
            Tình yêu viết nên câu chuyện của chúng tôi.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
