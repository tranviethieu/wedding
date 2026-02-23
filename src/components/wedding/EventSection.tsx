import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  CalendarDays,
  PartyPopper,
  HeartHandshake,
  Church,
} from "lucide-react";
import dividerGold from "@/assets/divider-gold.png";

const events = [
  {
    title: "Tiệc Chiêu Đãi",
    date: "Chủ nhật, ngày 15 tháng 03 năm 2025",
    time: "7:00 - 10:00",
    location: "Tư gia nhà gái (google map)",
    address:
      "Thôn Tân Tiến, Xã Hồng Giang, Huyện Đông Hưng, Tỉnh Thái Bình (Địa chỉ cũ)",
    icon: PartyPopper,
    mapImg: "/images/ggmap.png",
    mapUrl: "https://maps.app.goo.gl/msK94e796UHAMEDY6?g_st=ic",
  },
  {
    title: "Lễ Vu Quy",
    date: "Chủ nhật, ngày 15 tháng 03 năm 2025",
    time: "10:30 - 11:30",
    location: "Tư gia nhà gái (google map)",
    address:
      "Thôn Tân Tiến, Xã Hồng Giang, Huyện Đông Hưng, Tỉnh Thái Bình (Địa chỉ cũ)",
    mapUrl: "https://maps.app.goo.gl/msK94e796UHAMEDY6?g_st=ic",

    icon: HeartHandshake,
    mapImg: "/images/ggmap.png",
  },
  {
    title: "Lễ Thành Hôn",
    date: "Chủ nhật, ngày 15 tháng 03 năm 2025",
    time: "11:30 - 13:00",
    location: "Tư gia nhà trai (google map)",
    address:
      "Thôn Vạn Thắng, Xã Hoa Nam, Huyện Đông Hưng, Tỉnh Thái Bình (Địa chỉ cũ)",

    mapUrl:
      "https://www.google.com/maps/place/Nh%C3%A0+Hi%E1%BA%BFu+Ph%C6%B0%C6%A1ng/@20.5229557,106.2772166,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ef002f44d549:0x71239ffce8d80f9f!8m2!3d20.5229507!4d106.2820821!16s%2Fg%2F11yry9lv6x!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D",
    icon: Church,
    mapImg: "/images/nhatrai.png",
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
        <p className="font-body text-md text-muted-foreground tracking-widest uppercase mb-2">
          Sự Kiện Cưới
        </p>

        <h2 className="font-heading text-2xl md:text-4xl text-foreground mb-2">
          Thông Tin Lễ Cưới
        </h2>
        <div className="w-14 md:w-20 h-px bg-gold mx-auto mb-10 md:mb-14 opacity-60" />

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, i) => {
            const Icon = event.icon;

            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1], // easeOutCubic
                }}
                viewport={{ once: true, margin: "-80px" }}
                className="will-change-transform"
              >
                <div className="relative bg-background rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gold/20 transition-all hover:border-gold/50">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>

                  <h3 className="font-heading text-xl md:text-xl text-foreground mb-4">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-muted-foreground font-number text-lg md:text-base ">
                    <div className="flex items-center justify-center gap-2">
                      <CalendarDays className="w-4 h-4 text-gold" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 font-number">
                      <Clock className="w-4 h-4 text-gold" />
                      <span>{event.time}</span>
                    </div>

                    <a
                      href={event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 hover:text-gold transition group"
                    >
                      <MapPin className="w-4 h-4 text-gold group-hover:scale-110 transition" />
                      <span className="underline underline-offset-2">
                        {event.location}
                      </span>
                    </a>
                    <a
                      href={event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-3 group"
                    >
                      <img
                        src={event.mapImg}
                        alt="map"
                        loading="lazy"
                        className="w-full h-[120px] object-cover rounded-xl border border-gold/20 shadow-sm group-hover:scale-[1.02] transition"
                      />
                    </a>

                    <p className="text-sm md:text-lg font-number leading-relaxed px-4">
                      {event.address}
                    </p>
                  </div>
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
