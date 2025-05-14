"use client";
import { LoadingInit } from "@/components/LoadingInit";
import Menu from "@/components/Menu";
import { WeddingEvent } from "@/components/WeddingEvent";
import Snowfall from "@/components/Snowfall";
import { OurStory } from "@/components/OurStory";
import { useEffect, useRef, useState } from "react";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { CoupleInfo, WeddingInfo } from "@/data/websiteDataInfo";
import { CoupleInvite } from "@/components/CoupleInvite";
import { WebsiteInfo } from "@/components/common/WebsiteInfo";
import { ConfirmJoin } from "@/components/common/ConfirmJoin";
import { Gallery } from "@/components/common/Gallery";
import { SendWish } from "@/components/common/SendWish";
import { Thanks } from "@/components/common/Thanks";
import { FixedIcon } from "@/components/common/FixedIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { useWishesListener } from "@/lib/useWishesListener";
import { ToastContainer } from "react-toastify";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [coupleInfo] = useState(CoupleInfo);
  const [weddingInfo] = useState(WeddingInfo);
  const scrollUpRef = useRef() as any;
  const scrollDownRef = useRef() as any;
  const wishes = useWishesListener();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    AOS.init();
    // {
    //   duration: 800,
    //   once: false, // chỉ chạy 1 lần
    // }
  }, []);
  const goScrollDown = () => {
    if (scrollDownRef.current) {
      scrollDownRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
      />
      <div
        id="main"
        className="h-full w-full bg-red-50 relative overflow-x-hidden font-[family-name:var(--font-dancing-script)]"
      >
        <Snowfall />
        <LoadingInit />
        <Menu />
        <HeroSection
          coupleInfo={coupleInfo}
          weddingInfo={weddingInfo}
          scrollUpRef={scrollUpRef}
          onScrollDownClick={goScrollDown}
        />

        {!isLoading && (
          <>
            <CoupleInvite
              coupleInfo={coupleInfo}
              weddingInfo={weddingInfo}
              scrollDownRef={scrollDownRef}
            />
            <WeddingEvent />
            {/* <WebsiteInfo /> */}
            <OurStory />
            <ConfirmJoin />
            <Gallery />
            <SendWish wishes={wishes}></SendWish>
            <Thanks />
          </>
        )}
      </div>
      {!isLoading && <FixedIcon />}
    </>
  );
}
