import { useRef, useState, useEffect } from "react";
import { Music } from "lucide-react";

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
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
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
        className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-gold/90 backdrop-blur-sm shadow-wedding flex items-center justify-center hover:bg-gold transition-colors"
        aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        <div
          className={`${isPlaying ? "animate-spin" : ""}`}
          style={{ animationDuration: "3s" }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-burgundy to-burgundy/80 border-2 border-gold-light flex items-center justify-center relative">
            <div className="w-3 h-3 rounded-full bg-gold-light" />
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Music className="w-4 h-4 text-gold-light opacity-70" />
              </div>
            )}
          </div>
        </div>
      </button>
    </>
  );
};

export default MusicPlayer;
