import { Wish } from "@/pages/Index";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MAX = 1;

interface Props {
  wishes: Wish[];
}

export default function FloatingWishes({ wishes }: Props) {
  const [list, setList] = useState<Wish[]>([]);

  useEffect(() => {
    if (!wishes.length) return;

    const interval = setInterval(() => {
      const random = wishes[Math.floor(Math.random() * wishes.length)];

      setList((prev) => {
        const next = [...prev, { ...random, __key: Date.now() }];
        return next.slice(-MAX);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [wishes]);

  return (
    <div className="fixed bottom-2 left-4 w-[300px] z-50 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {list.map((wish) => (
          <motion.div
            key={wish.id}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: -24,
              scale: 0.95,
              filter: "blur(2px)",
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
            }}
            className="mb-2"
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
    <div className="bg-red-500/60 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
      <p className="text-sm text-white font-semibold leading-relaxed">
        {wish.name}:{" "}
        <span className="font-normal opacity-90">{wish.message}</span>
      </p>
    </div>
  );
}
