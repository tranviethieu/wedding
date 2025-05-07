module.exports = {
  theme: {
    extend: {
      fontFamily: {
        parisienne: ["var(--font-dancing-script)"],
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": {
            transform: "scale(1)",
            fill: "#f87171", // red-400
          },
          "50%": {
            transform: "scale(1.3)",
            fill: "#ef4444", // red-500
          },
        },
      },
      animation: {
        heartbeat: "heartbeat 1s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
