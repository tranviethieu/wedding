import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

const SnowfallEffect = () => {
  const [flakes, setFlakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const count = window.innerWidth < 768 ? 30 : 50;
    setFlakes(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 10,
        duration: Math.random() * 5 + 8,
        opacity: Math.random() * 0.5 + 0.3,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      {flakes.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full bg-cream"
          style={{
            left: `${f.x}%`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            animation: `snowfall ${f.duration}s linear ${f.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default SnowfallEffect;
