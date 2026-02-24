import { Heart } from "lucide-react";
import img from "@/assets/wedding-04.jpg";

const FooterSection = () => {
  return (
    <footer
      className="relative min-h-[520px] py-12 text-secondary-foreground text-center overflow-hidden bg-center bg-cover flex flex-col"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay tối */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 container max-w-2xl mx-auto mt-auto px-6 flex flex-col h-full">
        <div>
          <h2 className="font-display text-3xl md:text-5xl text-gold-light mb-4">
            Việt Hiếu & Đỗ Phương
          </h2>

          <p className="font-body text-lg opacity-90 mb-6">
            Sự hiện diện của bạn là niềm vinh hạnh lớn lao của chúng tôi
          </p>

          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-gold-light fill-gold-light animate-heart-beat" />
            <span className="font-number text-sm tracking-widest uppercase opacity-80">
              15.03.2026
            </span>
            <Heart className="w-5 h-5 text-gold-light fill-gold-light animate-heart-beat" />
          </div>
        </div>

        {/* Đẩy dòng này xuống đáy */}
        <p className="font-body text-sm opacity-70 mt-auto">
          Made with ♥ for Việt Hiếu & Đỗ Phương's Wedding
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
