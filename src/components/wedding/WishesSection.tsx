import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Send } from "lucide-react";
import dividerGold from "@/assets/divider-gold.png";

interface Wish {
  name: string;
  message: string;
  timestamp: Date;
}

const WishesSection = () => {
  const [wishes, setWishes] = useState<Wish[]>([
    {
      name: "Nguyễn Văn An",
      message: "Chúc hai bạn trăm năm hạnh phúc, sớm có em bé! 🎉",
      timestamp: new Date(),
    },
    {
      name: "Lê Thị Mai",
      message: "Chúc mừng hạnh phúc! Mong hai bạn luôn yêu thương nhau ❤️",
      timestamp: new Date(),
    },
  ]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setWishes((prev) => [{ name, message, timestamp: new Date() }, ...prev]);
    setName("");
    setMessage("");
  };

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
          Sổ Lưu Bút
        </p>

        <h2 className="font-heading text-2xl md:text-4xl text-foreground mb-2">
          Gửi Lời Chúc
        </h2>
        <div className="w-14 md:w-20 h-px bg-gold mx-auto mb-10 md:mb-14 opacity-60" />
        <form onSubmit={handleSubmit} className="mb-12 space-y-4">
          <input
            type="text"
            placeholder="Tên của bạn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-3 rounded-lg border border-gold/30 bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
          />
          <textarea
            placeholder="Lời chúc của bạn..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-5 py-3 rounded-lg border border-gold/30 bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="gradient-gold text-primary-foreground font-heading text-base px-8 py-3 rounded-full shadow-wedding inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
            Gửi Lời Chúc
          </motion.button>
        </form>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {wishes.map((wish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-cream-dark rounded-lg p-5 text-left border border-gold/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-burgundy fill-burgundy" />
                <span className="font-heading font-semibold text-foreground">
                  {wish.name}
                </span>
              </div>
              <p className="font-body text-muted-foreground">{wish.message}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WishesSection;
