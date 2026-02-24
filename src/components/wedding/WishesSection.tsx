import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Send, UserCheck } from "lucide-react";
import { Wish } from "@/pages/Index";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
const suggestedWishes = [
  "Chúc hai bạn trăm năm hạnh phúc! 🎉",
  "Chúc mừng hạnh phúc, sớm có tin vui nhé! ❤️",
  "Wishing you a lifetime of love and happiness! 💕",
  "Chúc anh chị luôn yêu thương và bên nhau mãi mãi! 🥂",
  "Trăm năm hạnh phúc, vạn sự như ý! 🌸",
  "Chúc đôi uyên ương sớm có thiên thần nhỏ! 👶",
];
const attendingLabels: Record<string, string> = {
  yes: "Sẽ tham dự",
  no: "Không tham dự",
  maybe: "Chưa chắc chắn",
};
const WishesSection: React.FC<{ wishes: Wish[] }> = ({ wishes }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "maybe">("yes");
  const [guests, setGuests] = useState(1);
  const [sending, setSending] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState<number | null>(
    null
  );
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSending(true);
    try {
      await addDoc(collection(db, "wishes"), {
        name: name.trim(),
        message: message.trim(),
        attending,
        role: 1,
        guests,
        createdAt: serverTimestamp(),
      });
      setName("");
      setMessage("");
      setAttending("yes");
      setGuests(1);
      setSelectedSuggestion(null);
    } catch (err) {
      console.error("Error sending wish:", err);
    }
    setSending(false);
  };
  const handleSuggestionClick = (index: number, text: string) => {
    if (selectedSuggestion === index) {
      setSelectedSuggestion(null);
      setMessage("");
    } else {
      setSelectedSuggestion(index);
      setMessage(text);
    }
  };
  return (
    <section className="py-12 md:py-20 bg-background relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container max-w-3xl mx-auto px-4 md:px-6 text-center"
      >
        <p className="font-body text-md text-muted-foreground tracking-widest uppercase mb-2">
          Sổ Lưu Bút
        </p>

        <h2 className="font-heading text-2xl md:text-4xl text-foreground mb-2">
          Gửi Lời Chúc & Xác Nhận
        </h2>
        <div className="w-20 md:w-20 h-px bg-gold mx-auto mb-10 md:mb-14 opacity-60" />

        {/* {totalAttending > 0 && (
          <div className="mb-8 inline-flex items-center gap-2 bg-cream-dark rounded-full px-5 py-2 border border-gold/20">
            <Users className="w-4 h-4 text-gold" />
            <span className="font-body text-sm text-foreground">
              <strong>{totalAttending}</strong> khách xác nhận tham dự
            </span>
          </div>
        )} */}

        <form
          onSubmit={handleSubmit}
          className="mb-8 md:mb-12 space-y-3 md:space-y-4"
        >
          <input
            type="text"
            placeholder="Tên của bạn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 md:px-5 py-2.5 md:py-3 rounded-lg border border-gold/30 bg-background font-body text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
          />
          <textarea
            placeholder="Lời chúc của bạn..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setSelectedSuggestion(null);
            }}
            rows={3}
            className="w-full px-4 md:px-5 py-2.5 md:py-3 rounded-lg border border-gold/30 bg-background font-body text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 resize-none"
          />

          {/* Suggested wishes - horizontal scroll on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center scrollbar-hide">
            {suggestedWishes.map((s, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSuggestionClick(i, s)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full border font-body text-xs transition-all ${
                  selectedSuggestion === i
                    ? "bg-gold/20 border-gold text-foreground"
                    : "border-gold/20 text-muted-foreground hover:border-gold/50 hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* RSVP Section */}
          <div className="bg-cream-dark rounded-lg p-4 md:p-5 border border-gold/10 text-left space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <UserCheck className="w-4 h-4 text-gold" />
              <span className="font-heading font-semibold text-foreground text-sm">
                Xác nhận tham dự
              </span>
            </div>

            <div className="flex gap-2">
              {(["yes", "no", "maybe"] as const).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setAttending(opt)}
                  className={`flex-1 px-2 md:px-4 py-2 rounded-full font-body text-xs md:text-sm border transition-all ${
                    attending === opt
                      ? "bg-gold/20 border-gold text-foreground"
                      : "border-gold/20 text-muted-foreground hover:border-gold/40"
                  }`}
                >
                  {attendingLabels[opt]}
                </button>
              ))}
            </div>

            {attending === "yes" && (
              <div className="flex items-center gap-3">
                <label className="font-body text-sm text-muted-foreground">
                  Số khách:
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="px-3 py-1.5 rounded-lg border border-gold/30 bg-background font-number text-foreground text-sm focus:outline-none focus:border-gold"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={sending}
            className="gradient-gold text-primary-foreground font-heading text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 rounded-full shadow-wedding inline-flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {sending ? "Đang gửi..." : "Gửi Lời Chúc"}
          </motion.button>
        </form>

        <div className="space-y-3 md:space-y-4 max-h-80 md:max-h-96 overflow-y-auto scrollbar-hide">
          {wishes?.map((wish, i) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.1, 0.5) }}
              className="bg-cream-dark rounded-lg p-4 md:p-5 text-left border border-gold/10"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-burgundy fill-burgundy" />
                  <span className="font-heading font-semibold text-foreground">
                    {wish.name}
                  </span>
                </div>
                {/* <span
                  className={`text-xs font-body px-2.5 py-0.5 rounded-full ${
                    wish.attending === "yes"
                      ? "bg-green-100 text-green-700"
                      : wish.attending === "no"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {attendingLabels[wish.attending]}
                  {wish.attending === "yes" && wish.guests > 1
                    ? ` (${wish.guests} khách)`
                    : ""}
                </span> */}
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
