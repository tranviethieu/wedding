import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative py-16 bg-burgundy text-secondary-foreground text-center overflow-hidden">
      <div className="relative z-10 container max-w-2xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl text-gold-light mb-4">
          Việt Hiếu & Đỗ Phương
        </h2>
        <p className="font-body text-lg opacity-80 mb-6">
          Sự hiện diện của bạn là niềm vinh hạnh lớn lao của chúng tôi
        </p>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-gold-light fill-gold-light animate-heart-beat" />
          <span className="font-heading text-sm tracking-widest uppercase opacity-70">
            15.03.2026
          </span>
          <Heart className="w-5 h-5 text-gold-light fill-gold-light animate-heart-beat" />
        </div>
        <p className="font-body text-sm opacity-60">
          Made with ♥ for Việt Hiếu & Đỗ Phương's Wedding
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
