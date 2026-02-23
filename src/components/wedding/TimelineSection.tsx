import { motion } from "framer-motion";

import w02 from "@/assets/wedding-11.jpg";
import a3 from "@/assets/a3.jpg";
import a2 from "@/assets/a2.jpg";

import w09 from "@/assets/wedding-09.jpg";
const timeline = [
  {
    year: "16. 2. 2024",
    title: "Lần Đầu Gặp Gỡ",
    desc: "Chúng tôi gặp nhau lần đầu tiên tại hồ tây, và ngay lập tức cảm thấy có sự kết nối đặc biệt.",
    image: a2,
  },
  {
    year: "1. 5. 2024",
    title: "Hẹn Hò",
    desc: "Sau nhiều lần gặp gỡ, chúng tôi quyết định chính thức hẹn hò và bắt đầu hành trình yêu thương.",

    image: a3,
  },
  {
    year: "24. 11. 2025",
    title: "Cầu Hôn",
    desc: 'Trong một buổi tối lãng mạn, anh đã quỳ gối và hỏi em: "Em có muốn cùng anh đi hết cuộc đời này không?"',
    image: w02,
  },
  {
    year: "15. 3. 2026",
    title: "Ngày Cưới",
    desc: "Và chúng tôi sẽ nói lời thề nguyện, bắt đầu một chương mới của cuộc đời bên nhau.",
    image: w09,
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 bg-background relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container max-w-3xl mx-auto px-6 text-center"
      >
        <p className="font-body text-md text-muted-foreground tracking-widest uppercase mb-2">
          Câu Chuyện Tình Yêu
        </p>

        <h2 className="font-heading text-2xl md:text-4xl text-foreground mb-2">
          Hành Trình Của Chúng Tôi
        </h2>
        <div className="w-14 md:w-20 h-px bg-gold mx-auto mb-10 md:mb-14 opacity-60" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-14 last:mb-0 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`w-5/12 ${
                  i % 2 === 0 ? "text-right pr-4" : "text-left pl-4"
                }`}
              >
                <span className="font-number text-2xl font-bold text-gold">
                  {item.year}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-1">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground mt-2 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Center */}
              <div className="w-2/12 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gold border-4 border-background shadow-wedding relative z-10" />
              </div>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="w-5/12 flex justify-center"
              >
                <div className="w-38 h-38 md:w-38 md:h-38 rounded-full overflow-hidden border-4 border-gold/40 shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TimelineSection;
