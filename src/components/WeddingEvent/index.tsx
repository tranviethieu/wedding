import { SectionTitle } from "@/components/shareds/SectionTitle";
import Image from "next/image";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import { WeddingEventInfoModel } from "@/types/WeddingEventInfo";
import React from "react";
import dayjs from "dayjs";
import { WeddingEventInfos } from "@/data/websiteDataInfo";

interface IWeddingEventInfo {
  eventInfo: WeddingEventInfoModel;
  index: number;
}

export function WeddingEvent() {
  return (
    <>
      <div className=" bg-white w-full overflow-x-hidden" id="website-event">
        <section className="container mx-auto">
          <div className="wedding-event__wrapper w-full py-10 px-4">
            <SectionTitle
              title="Sự kiện cưới"
              quote="Tình yêu ko phải nhìn chằm chằm vào nhau, mà là cùng nhau nhìn về một hướng"
            ></SectionTitle>
            <div className="w-full mx-auto flex flex-col lg:flex-row mt-14 gap-8 ">
              <div
                className="w-full lg:w-1/2 lg:sticky top-[10%] 2xl:top-[20%] h-full flex items-center justify-center mb-8 lg:mb-auto transition-all duration-1000 ease-linear"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="we__left-image w-72 lg:w-96 h-full -rotate-6 shadow-[0_0_30px_rgba(208,1,89,0.4)] relative">
                  <div className="absolute w-[90%] -top-10 -right-10 bg-transparent">
                    <Image
                      className="w-full h-full object-cover object-top"
                      src="/images/bg/decor_f4.png"
                      alt="Love"
                      width={700}
                      height={700}
                    ></Image>
                  </div>
                  <div className="absolute -bottom-0 -left-20 w-[40%] bg-transparent">
                    <Image
                      className="w-full h-full object-cover object-top"
                      src="/images/bg/decor_l1.png"
                      alt="Love"
                      width={700}
                      height={700}
                    ></Image>
                  </div>

                  <Image
                    className="w-full h-full object-cover object-top bg-white p-4"
                    src="/images/galleries/1.jpg"
                    alt="Love"
                    width={700}
                    height={700}
                  ></Image>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col space-y-6">
                {WeddingEventInfos.filter((w) => w.active).map(
                  (eventInfo: any, index) => (
                    <WeddingEventInfo
                      eventInfo={eventInfo}
                      key={index}
                      index={index}
                    ></WeddingEventInfo>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function WeddingEventInfo({ eventInfo, index }: IWeddingEventInfo) {
  return (
    <>
      <div
        className={`w-full shadow-[0_0_30px_rgba(0,0,0,0.1)] rounded-lg lg:h-72  transition-all duration-1000 ease-linear `}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos-delay={200 * index}
      >
        <div className="font-serif uppercase text-center pt-5 text-xl">
          <h1>{eventInfo.title}</h1>
        </div>
        <div className="p-6 flex gap-4 lg:gap-8 font-medium text-xl flex-col lg:flex-row">
          <div className="w-full lg:w-1/3">
            <div className="max-w-full lg:w-48 lg:h-48">
              <Image
                className="w-full h-full object-cover object-top rounded-md"
                src={eventInfo.image.src}
                alt="Love"
                width={500}
                height={500}
              ></Image>
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col justify-between pb-2 font-[Dancing_Script]">
            <div className="w-full flex flex-col space-y-2">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-1">
                  <CalendarIcon className="w-5 h-5"></CalendarIcon>
                  <p>{dayjs(eventInfo.date).format("DD-MM-YYYY")}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <ClockIcon className="w-5 h-5"></ClockIcon>
                  <p>{eventInfo.time}</p>
                </div>
              </div>
              <div className="flex space-x-1 items-start">
                <div className="w-5 h-5 pt-1">
                  <MapPinIcon className="w-5 h-5"></MapPinIcon>
                </div>
                <p>{eventInfo.address}</p>
              </div>
            </div>
            <div className="mt-7 lg:mt-auto">
              <a
                className="py-2 px-4 bg-pink-500 outline-0 hover:bg-pink-600 text-white rounded-full"
                href={eventInfo.mapAddress}
                target="_blank"
              >
                Xem bản đồ
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
