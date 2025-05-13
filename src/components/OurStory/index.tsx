"use client";
import Image from "next/image";
import { useState } from "react";
import { OurStoryInfos } from "@/data/websiteDataInfo";
import { OurStoryModel } from "@/types/ourStory";

import { SectionTitle } from "@/components/shareds/SectionTitle";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { getDay, getMonth, getYear } from "@/utils/date";
import { TypeAnimation } from "react-type-animation";

export function OurStory() {
  const [stories] = useState(OurStoryInfos as OurStoryModel[]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageClassAnimated, setImageClassAnimated] = useState<string>("");

  const prev = () => {
    setCurIndex(currentIndex - 1);
  };

  const next = () => {
    setCurIndex(currentIndex + 1);
  };

  const setCurIndex = (index: number) => {
    if (index < 0) {
      index = stories.length - 1;
    }
    if (index > stories.length - 1) {
      index = 0;
    }
    setImageClassAnimated("animate__animated  animate__zoomOut");
    setTimeout(() => {
      setCurrentIndex(index);
      setImageClassAnimated("");
      setImageClassAnimated("animate__animated  animate__zoomIn");
    }, 400);
  };

  return (
    <>
      <div className="w-full overflow-x-hidden" id="our-story">
        <SectionTitle title="Chuyện tình yêu"></SectionTitle>
        <div className="w-full h-full md:h-screen relative our-story">
          <div className="flex flex-col lg:flex-row h-full lg:h-auto">
            <div className="w-full lg:w-1/2 h-[calc(100vh/2)] lg:h-screen relative">
              <div className="absolute -bottom-5 lg:-right-5 lg:bottom-auto flex justify-center w-full lg:h-full">
                <div className="w-full h-full flex flex-row lg:flex-col items-center sm:items-end justify-center space-x-8 md:space-x-16 lg:space-x-0 lg:space-y-10">
                  {stories.map((story, i) => (
                    <div
                      className="z-30 flex flex-col items-center cursor-pointer justify-center"
                      key={i}
                    >
                      <div className="w-10 h-10 rounded-full">
                        <Image
                          onClick={() => setCurrentIndex(i)}
                          className={
                            "w-10 object-cover h-10 rounded-full " +
                            (currentIndex == i ? " border-2 border-white" : "")
                          }
                          src={story.image.src}
                          width={100}
                          height={100}
                          alt="image"
                        ></Image>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="our-story__image w-full h-full flex flex-col items-center justify-center">
                <div
                  className="w-full h-full lg:w-[500px] lg:h-[500px] 2xl:w-[650px] 2xl:h-[650px] relative"
                  data-aos="zoom-in-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <Image
                    className={
                      "object-cover object-center w-full h-full  lg:rounded-full transition-all duration-700 ease-linear " +
                      imageClassAnimated
                    }
                    src={stories[currentIndex].image.src}
                    width={stories[currentIndex].image.with}
                    height={stories[currentIndex].image.height}
                    alt="image"
                  />

                  <div className="absolute z-20 bottom-0 left-0 md:left-5 lg:bottom-0 lg:left-10">
                    <div className="flex flex-col lg:flex-row relative lg:space-x-5">
                      <Image
                        className="size-10 lg:size-14 relative lg:top-0 lg:right-10"
                        src="/icons/love.png"
                        width={100}
                        height={100}
                        alt="Love"
                      ></Image>
                      <Image
                        className="size-10 lg:size-16 relative lg:top-10 lg:right-10"
                        src="/icons/love.png"
                        width={100}
                        height={100}
                        alt="Love"
                      ></Image>
                      <Image
                        className="size-10 lg:size-20 relative lg:top-20 lg:right-4"
                        src="/icons/love.png"
                        width={100}
                        height={100}
                        alt="Love"
                      ></Image>
                    </div>
                  </div>
                  <div className="absolute z-20 -top-[4%] -right-[4%] lg:top-0 lg:right-10">
                    <div className="flex relative">
                      <Image
                        className="scale-50 lg:scale-125"
                        src="/icons/rose-4.png"
                        width={100}
                        height={100}
                        alt="Love"
                      ></Image>
                    </div>
                  </div>
                </div>
                <div className="lg:hidden absolute z-10 border-opacity-50 border-pink-300 border-[3px] border-double w-[90%] h-[90%] m-10"></div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative bg-rose-100 h-full lg:h-screen flex items-center">
              <div className="w-full lg:w-2/3 mx-auto flex justify-center space-y-2 lg:space-y-10 flex-col px-6 pt-10 pb-8 lg:p-0">
                <div
                  className="flex items-end space-x-2"
                  data-aos="zoom-in-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="flex w-11 h-11 md:w-14 md:h-14 text-lg">
                    <p className="font-semibold">
                      {getDay(stories[currentIndex].date)}
                    </p>
                    <p className="w-[1px] bg-red-500 transform rotate-45"></p>
                    <p className="mt-5 font-semibold flex items-end">
                      {getMonth(stories[currentIndex].date)}
                    </p>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl">
                    {getYear(stories[currentIndex].date)}
                  </div>
                </div>

                <div className="flex flex-col space-y-2 md:space-y-10 max-sm:pt-5">
                  {stories[currentIndex].caption && (
                    <p
                      className="text-2xl sm:text-3xl md:text-6xl font-bold"
                      data-aos="zoom-in-up"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      {stories[currentIndex].caption}
                    </p>
                  )}

                  <div
                    //className="text-xl font-[Dancing_Script] leading-8 text-justify"
                    data-aos="zoom-in-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="min-h-[500px]"
                  >
                    <TypeAnimation
                      key={currentIndex}
                      sequence={[stories[currentIndex].content]}
                      wrapper="p"
                      speed={50}
                      className="text-xl font-[Dancing_Script] leading-8 text-justify"
                      cursor={false}
                      repeat={0}
                    />
                  </div>
                </div>

                <div className="max-sm:absolute max-sm:top-9 max-sm:right-3 flex space-x-2 cursor-pointer">
                  <div>
                    <ArrowLeftIcon
                      onClick={prev}
                      className="p-2 max-sm:w-11 max-sm:h-11 w-14 h-14 rounded-full border border-transparent hover:border-black transition"
                    />
                  </div>
                  <div>
                    <ArrowRightIcon
                      onClick={next}
                      className="p-2 max-sm:w-11 max-sm:h-11 w-14 h-14 rounded-full border border-transparent hover:border-black transition"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
