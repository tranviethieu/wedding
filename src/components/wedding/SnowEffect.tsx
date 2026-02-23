const SnowEffect = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="absolute top-[-10px] text-white animate-snow"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 8 + 6}px`,
            animationDuration: `${Math.random() * 6 + 6}s`,
            animationDelay: `${Math.random() * 10}s`,
            opacity: Math.random() * 0.6 + 0.4,
          }}
        >
          <span>❄</span>
        </span>
      ))}
    </div>
  );
};

export default SnowEffect;
