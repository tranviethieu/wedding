import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-03-15T12:00:00+07:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const diff = WEDDING_DATE.getTime() - new Date().getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Ngày" },
    { value: timeLeft.hours, label: "Giờ" },
    { value: timeLeft.minutes, label: "Phút" },
    { value: timeLeft.seconds, label: "Giây" },
  ];

  return (
    <section className="py-16 bg-cream-dark relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container max-w-4xl mx-auto text-center px-6"
      >
        <p className="font-body text-lg text-muted-foreground tracking-widest uppercase mb-2">
          Đếm ngược
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-2">
          Đến Ngày Trọng Đại
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mb-8 opacity-50" />

        <div className="flex justify-center gap-4 md:gap-8">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center bg-background rounded-lg p-4 md:p-6 shadow-wedding min-w-[70px] md:min-w-[100px] border border-gold/20"
            >
              <span className="font-heading text-3xl md:text-5xl font-bold text-gold">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="font-body text-sm md:text-base text-muted-foreground mt-1">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
