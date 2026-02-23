import { motion } from "framer-motion";
import dividerGold from "@/assets/divider-gold.png";

const timeline = [
  { year: "2020", title: "Lần Đầu Gặp Gỡ", desc: "Chúng tôi gặp nhau lần đầu tiên tại một buổi họp mặt bạn bè, và ngay lập tức cảm thấy có sự kết nối đặc biệt." },
  { year: "2021", title: "Hẹn Hò", desc: "Sau nhiều lần gặp gỡ, chúng tôi quyết định chính thức hẹn hò và bắt đầu hành trình yêu thương." },
  { year: "2023", title: "Cầu Hôn", desc: "Trong một buổi tối lãng mạn, anh đã quỳ gối và hỏi em: \"Em có muốn cùng anh đi hết cuộc đời này không?\"" },
  { year: "2025", title: "Ngày Cưới", desc: "Và chúng tôi sẽ nói lời thề nguyện, bắt đầu một chương mới của cuộc đời bên nhau." },
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
        <p className="font-body text-lg text-muted-foreground tracking-widest uppercase mb-2">
          Câu Chuyện Tình Yêu
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-2">
          Hành Trình Của Chúng Tôi
        </h2>
        <img src={dividerGold} alt="" className="w-40 mx-auto mb-12 opacity-60" />

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
              className={`relative flex items-center mb-12 last:mb-0 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <span className="font-heading text-2xl font-bold text-gold">{item.year}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                <p className="font-body text-muted-foreground mt-2 text-sm leading-relaxed">{item.desc}</p>
              </div>

              {/* Center dot */}
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 rounded-full bg-gold border-4 border-background shadow-wedding relative z-10" />
              </div>

              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TimelineSection;
