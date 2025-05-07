"use client";
import React from "react";
import dynamic from "next/dynamic";
// ✅ Tắt SSR để tránh lỗi "window is not defined"
const SnowfallComponent = dynamic(() => import("react-snowfall"), {
  ssr: false,
});
const Snowfall: React.FC = () => {
  return (
    <SnowfallComponent
      snowflakeCount={100}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 10,
      }}
      color="#ffffff"
    />
  );
};

export default Snowfall;
