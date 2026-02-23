import { motion } from "framer-motion";
import { MapPin, Clock, CalendarDays, PartyPopper, HeartHandshake, Church } from "lucide-react";
import dividerGold from "@/assets/divider-gold.png";

const events = [
  {
    title: "Tiệc Chiêu Đãi",
    date: "15/03/2025",
    time: "18:00 - 21:00",
    location: "Trung tâm Hội nghị XYZ",
    address: "Số XX, Đường YY, Quận ZZ, Hà Nội",
    icon: PartyPopper,
  },
  {
    title: "Lễ Vu Quy",
    date: "15/03/2025",
    time: "08:00 - 10:00",
    location: "Tư gia nhà gái",
    address: "Số XX, Phường YY, Quận ZZ, Hà Nội",
    icon: HeartHandshake,
  },
  {
    title: "Lễ Thành Hôn",
    date: "15/03/2025",
    time: "11:00 - 13:00",
    location: "Nhà hàng Tiệc Cưới ABC",
    address: "Số XX, Đường YY, Quận ZZ, Hà Nội",
    icon: Church,
  },
];

const EventSection = () => {
  return (
    <section className="py-16 md:py-20 bg-cream-dark relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto px-4 md:px-6 text-center"
      >
        <p className="font-body text-sm md:text-lg text-muted-foreground tracking-widest uppercase mb-1">
          Sự Kiện Cưới
        </p>
        <h2 className="font-heading text-2xl md:text-4xl text-foreground mb-2">
          Thông Tin Lễ Cưới
        </h2>
        <img src={dividerGold} alt="" className="w-32 md:w-40 mx-auto mb-10 opacity-60" />

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, i) => {
            const Icon = event.icon;

            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="relative bg-background rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gold/20 hover:border-gold/50 transition-all"
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-gold" />
                </div>

                <h3 className="font-heading text-lg md:text-xl text-foreground mb-4">
                  {event.title}
                </h3>

                <div className="space-y-2 text-muted-foreground font-body text-sm md:text-base">
                  <div className="flex items-center justify-center gap-2">
                    <CalendarDays className="w-4 h-4 text-gold" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>{event.location}</span>
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed px-4">
                    {event.address}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default EventSection;