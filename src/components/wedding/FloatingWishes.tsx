import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const wishes = [
  {
    name: "Tú Anh",
    text: "🎉 Mong rằng mọi người luôn rạng rỡ, đẹp như ngày hôm nay!",
  },
  { name: "Thảo", text: "🌸 Chúc hai bạn trăm năm hòa hợp, hạnh phúc!" },
  { name: "Hương", text: "💖 Mong tình yêu của hai bạn mãi vĩnh cửu!" },
  {
    name: "Tuấn Anh",
    text: "✨ Đồng tâm đồng lòng, xây đắp tổ ấm thịnh vượng!",
  },
  { name: "Thu Hà", text: "✨ Đồng tâm đồng lòng, xây đắp tổ ấm thịnh vượng!" },
];

type Wish = (typeof wishes)[0] & { id: number };

const MAX = 1;

export default function FloatingWishes() {
  const [list, setList] = useState<Wish[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = wishes[Math.floor(Math.random() * wishes.length)];
      setList((prev) => {
        const next = [...prev, { ...random, id: Date.now() }];
        return next.slice(-MAX);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-2 left-4 w-[300px] z-50 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {list.map((wish, index) => (
          <motion.div
            key={wish.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -20,
              filter: "blur(2px)",
            }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 22,
              opacity: { duration: 2, ease: "easeOut" },
              filter: { duration: 1, ease: "easeOut" },
            }}
            className="mb-2"
            style={{ transform: `translateY(${-index * 62}px)` }}
          >
            <WishItem wish={wish} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function WishItem({ wish }: { wish: Wish }) {
  return (
    <div className="bg-red-400/50 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
      <p className="text-sm text-white font-semibold">
        {wish.name}: <span className="font-normal">{wish.text}</span>
      </p>
    </div>
  );
}
