"use client";
import { LoadingInit } from "@/components/LoadingInit";
import Menu from "@/components/Menu";
import { WeddingEvent } from "@/components/WeddingEvent";
//import { useRouter } from "next/navigation";
import Snowfall from "@/components/Snowfall";
import { OurStory } from "@/components/OurStory";
import { useEffect, useState } from "react";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { CoupleInfo, WeddingInfo } from "@/data/websiteDataInfo";
import { CoupleInvite } from "@/components/CoupleInvite";
import { WebsiteInfo } from "@/components/common/WebsiteInfo";
import { ConfirmJoin } from "@/components/common/ConfirmJoin";
import { Gallery } from "@/components/common/Gallery";
import { SendWish } from "@/components/common/SendWish";
import { Thanks } from "@/components/common/Thanks";
import { FixedIcon } from "@/components/common/FixedIcon";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [coupleInfo] = useState(CoupleInfo);
  const [weddingInfo] = useState(WeddingInfo);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const observer = new IntersectionObserver(
      (intersections) => {
        intersections.forEach((entry) => {
          if (entry.intersectionRatio === 1) {
            entry.target.classList.toggle(
              "animate__animated",
              entry.isIntersecting
            );
            if (!entry.target.className.includes("animated__")) {
              entry.target.classList.toggle(
                "animate__fadeInDown",
                entry.isIntersecting
              );
            }

            entry.target.classList.remove("opacity-0");
            entry.target.classList.toggle("opacity-100", entry.isIntersecting);
          } else {
            // entry.target.classList.remove('animate__animated');
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "0px",
      }
    );

    setTimeout(() => {
      document.querySelectorAll(".animated").forEach((div) => {
        observer.observe(div);
      });
    }, 4000);
  }, []);
  return (
    <>
      {" "}
      <div
        id="main"
        className="h-full w-full bg-red-50 relative overflow-x-hidden font-[family-name:var(--font-geist-sans)]"
      >
        {/* ⛄ Snowfall chỉ hiển thị ở client */}
        <Snowfall />
        <LoadingInit />
        <Menu />
        <HeroSection
          coupleInfo={coupleInfo}
          weddingInfo={weddingInfo}
        ></HeroSection>
        {!isLoading && (
          <>
            <CoupleInvite
              coupleInfo={coupleInfo}
              weddingInfo={weddingInfo}
            ></CoupleInvite>
            <WeddingEvent></WeddingEvent>
            <WebsiteInfo></WebsiteInfo>
            <OurStory></OurStory>
            <ConfirmJoin></ConfirmJoin>
            <Gallery></Gallery>
            <SendWish
              wishes={[
                {
                  _id: "aa",
                  name: "aa",
                  emailOrPhone: "",
                  wish: "2",
                  dateCreated: "a",
                },
              ]}
            ></SendWish>
            <Thanks></Thanks>
          </>
        )}
      </div>
      {!isLoading && <FixedIcon></FixedIcon>}
    </>
  );
}
