import { motion } from "framer-motion";
import groomImg from "@/assets/wedding-06.jpg";
import brideImg from "@/assets/wedding-07.jpg";

const CoupleSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container max-w-5xl mx-auto px-4 md:px-6 text-center"
      >
        <p className="font-body text-sm md:text-lg text-muted-foreground tracking-widest uppercase mb-1">
          Cô Dâu & Chú Rể
        </p>
        <h2 className="font-heading text-2xl md:text-4xl text-foreground mb-2">
          Chúng Tôi
        </h2>
        <div className="w-12 md:w-16 h-px bg-gold mx-auto mb-8 md:mb-12 opacity-50" />

        {/* Mobile: 1 hàng ngang | Desktop: 2 cột */}
        <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-16 items-start justify-center">
          {/* Bride - LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-center"
          >
            <div className="w-[10rem] h-[10rem] md:w-48 md:h-48 mx-auto mb-3 md:mb-6 rounded-full border-2 md:border-4 border-gold/30 overflow-hidden shadow-wedding">
              <img
                src={brideImg}
                alt="Cô dâu"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="font-display text-xl md:text-4xl text-burgundy mb-1">
              Đỗ Thị Phương
            </h3>
            <p className="font-body text-sm md:text-lg text-muted-foreground mb-1 md:mb-4">
              Cô Dâu
            </p>

            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
              Con gái ông <strong>Đỗ Văn C</strong> và bà{" "}
              <strong>Lê Thị D</strong>
              <br />
              Quê quán: Xã Nam Tiên Hưng
            </p>
          </motion.div>

          {/* Groom - RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-center"
          >
            <div className="w-[10rem] h-[10rem] md:w-48 md:h-48 mx-auto mb-3 md:mb-6 rounded-full border-2 md:border-4 border-gold/30 overflow-hidden shadow-wedding">
              <img
                src={groomImg}
                alt="Chú rể"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="font-display text-xl md:text-4xl text-gold mb-1">
              Trần Việt Hiếu
            </h3>
            <p className="font-body text-sm md:text-lg text-muted-foreground mb-1 md:mb-4">
              Chú Rể
            </p>

            <p className=" font-body text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
              Con trai ông <strong>Trần Văn A</strong> và bà{" "}
              <strong>Nguyễn Thị B</strong>
              <br />
              Quê quán: Xã Nam Tiên Hưng
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CoupleSection;
