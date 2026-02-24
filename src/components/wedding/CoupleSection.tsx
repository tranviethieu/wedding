import { motion } from "framer-motion";
import groomImg from "@/assets/wedding-06.jpg";
import brideImg from "@/assets/wedding-07.jpg";

const CoupleSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container max-w-5xl mx-auto px-4 md:px-6 text-center"
      >
        <p className="font-body text-md text-muted-foreground tracking-widest uppercase mb-2">
          Cô Dâu & Chú Rể
        </p>

        <h2 className="font-heading text-2xl md:text-4xl text-foreground mb-2">
          Chúng Tôi
        </h2>

        <div className="w-14 md:w-20 h-px bg-gold mx-auto mb-10 md:mb-14 opacity-60" />

        {/* Mobile: 1 hàng ngang | Desktop: 2 cột */}
        <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-20 items-start justify-center">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-center"
          >
            <div className="w-[9.5rem] h-[9.5rem] md:w-48 md:h-48 mx-auto mb-4 md:mb-6 rounded-full border-[3px] border-gold/40 overflow-hidden shadow-wedding">
              <img
                src={brideImg}
                alt="Cô dâu"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="font-display text-2xl md:text-4xl text-burgundy mb-1 leading-tight">
              Đỗ Thị Phương
            </h3>

            <p className="font-body text-sm md:text-base tracking-widest uppercase text-muted-foreground mb-3">
              Cô Dâu
            </p>

            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">
              Con gái ông{" "}
              <strong className="text-foreground">Đỗ Văn Thơi</strong> và bà{" "}
              <strong className="text-foreground">Nguyễn Thị Quyên</strong>
              <br />
              <span className="italic opacity-80">
                Thôn Tân Tiến, Xã Nam Tiên Hưng, Tỉnh Hưng Yên
              </span>
            </p>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-center"
          >
            <div className="w-[9.5rem] h-[9.5rem] md:w-48 md:h-48 mx-auto mb-4 md:mb-6 rounded-full border-[3px] border-gold/40 overflow-hidden shadow-wedding">
              <img
                src={groomImg}
                alt="Chú rể"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="font-display text-2xl md:text-4xl text-gold mb-1 leading-tight">
              Trần Việt Hiếu
            </h3>

            <p className="font-body text-sm md:text-base tracking-widest uppercase text-muted-foreground mb-3">
              Chú Rể
            </p>

            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">
              Con trai ông{" "}
              <strong className="text-foreground">Trần Cao Bình</strong> và bà{" "}
              <strong className="text-foreground">Nguyễn Thị Thái</strong>
              <br />
              <span className="italic opacity-80">
                Thôn Vạn Thắng, Xã Nam Tiên Hưng, Tỉnh Hưng Yên
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CoupleSection;
