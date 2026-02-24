import { useRef, useState, useEffect } from "react";
import music from "@/assets/audio-1.png";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer = ({ autoPlay = false }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [autoPlay]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/nhac.mp3" loop preload="auto" />

      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 w-9 h-9 rounded-full bg-gold/90 backdrop-blur-sm shadow-wedding flex items-center justify-center hover:bg-gold transition-colors"
        aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        <div className="relative w-10 h-10">
          {/* Ảnh nhạc */}
          <img
            src={music}
            alt="music"
            className={`w-full h-full rounded-full object-cover ${
              isPlaying ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "3s" }}
          />

          {/* Gạch chéo khi tắt */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-[2px] bg-white rotate-45" />
            </div>
          )}
        </div>
      </button>
    </>
  );
};

export default MusicPlayer;
