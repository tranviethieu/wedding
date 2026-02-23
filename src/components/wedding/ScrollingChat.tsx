import { useState, useEffect, useRef, useCallback } from "react";
interface ChatMessageProps {
  name: string;
  emoji: string;
  message: string;
}

const ChatMessage = ({ name, emoji, message }: ChatMessageProps) => {
  return (
    <div className="rounded-xl px-2 py-2 shadow-sm bg-chat-bubble max-w-[100%]">
      <p className="text-xs text-foreground">
        <span className="font-bold">{name}:</span> <span>{emoji}</span>{" "}
        <span className="font-medium">{message}</span>
      </p>
    </div>
  );
};

const WISHES = [
  {
    name: "Ngọc",
    emoji: "💖",
    message: "Mãi hạnh phúc, mong hai bạn luôn đẹp như ngày hôm nay!",
  },
  {
    name: "Thảo",
    emoji: "🥳",
    message: "Chúc hai bạn trăm năm hòa hợp, hạnh phúc!",
  },
  {
    name: "Hương",
    emoji: "🥰",
    message: "Mong tình yêu của hai bạn mãi mãi vĩnh cửu!",
  },
  {
    name: "Tuấn Anh",
    emoji: "✨",
    message: "Đồng tâm đồng lòng, xây đắp tổ ấm thịnh vượng!",
  },
  {
    name: "Thu Hà",
    emoji: "✨",
    message: "Đồng tâm đồng lòng, xây đắp tổ ấm thịnh vượng!",
  },
  {
    name: "Minh Đức",
    emoji: "💐",
    message: "Chúc mừng hạnh phúc! Trăm năm bên nhau nhé!",
  },
  {
    name: "Lan Phương",
    emoji: "💕",
    message: "Yêu thương mãi mãi, hạnh phúc trọn đời!",
  },
  {
    name: "Quốc Bảo",
    emoji: "🎉",
    message: "Happy Wedding! Chúc anh chị trăm năm hạnh phúc!",
  },
  {
    name: "Thanh Tâm",
    emoji: "🌸",
    message: "Chúc hai bạn sớm có thiên thần nhỏ!",
  },
  {
    name: "Hoàng Long",
    emoji: "🥂",
    message: "Nâng ly chúc mừng đôi uyên ương!",
  },
  {
    name: "Mai Chi",
    emoji: "💗",
    message: "Hôn nhân viên mãn, cuộc sống an lành!",
  },
  {
    name: "Văn Hùng",
    emoji: "🎊",
    message: "Chúc hai em mãi yêu thương nhau!",
  },
];

const ScrollingChat = () => {
  const [visibleMessages, setVisibleMessages] = useState<typeof WISHES>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  const addMessage = useCallback(() => {
    const msg = WISHES[indexRef.current % WISHES.length];
    indexRef.current++;
    setVisibleMessages((prev) => {
      const next = [...prev, msg];
      return next.length > 15 ? next.slice(next.length - 15) : next;
    });
  }, []);

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      setTimeout(() => addMessage(), i * 400);
    }
    const interval = setInterval(addMessage, 2500);
    return () => clearInterval(interval);
  }, [addMessage]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleMessages]);

  return (
    <div className="fixed bottom-0 left-0 z-50 w-[300px] h-[160px] flex flex-col">
      {/* Fade overlay at top */}
      {/* <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" /> */}

      {/* Scrolling messages area */}
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0 overflow-y-auto scrollbar-hide flex flex-col justify-end">
          <div className="flex flex-col gap-2.5 px-1 pt-1 pb-2">
            {visibleMessages.map((msg, i) => {
              const fromTop = visibleMessages.length - 1 - i;
              const opacity =
                fromTop > 7
                  ? 0
                  : fromTop > 5
                  ? 0.2
                  : fromTop > 3
                  ? 0.5
                  : fromTop > 1
                  ? 0.8
                  : 1;
              return (
                <div
                  key={`${indexRef.current - visibleMessages.length + i}`}
                  className="animate-fade-in"
                  style={{
                    opacity,
                    transition: "opacity 0.6s ease",
                  }}
                >
                  <ChatMessage
                    name={msg.name}
                    emoji={msg.emoji}
                    message={msg.message}
                  />
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="px-1 pb-1 pt-1 w-[160px] bg-transparent">
        <div className="flex items-center bg-transparent gap-2 bg-card rounded-full px-4 py-2 shadow-lg border border-border">
          <input
            type="text"
            placeholder="Gửi lời chúc..."
            readOnly
            style={{ width: 30 }}
            className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
          />
          <button className="w-4 h-4 rounded-full  flex items-center justify-center text-primary-foreground text-base hover:opacity-90 transition-opacity">
            💬
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollingChat;
