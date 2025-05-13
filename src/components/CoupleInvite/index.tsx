import Image from "next/image";
import { CoupleModel } from "@/types/couple";
import { WeddingModel } from "@/types/wedding";
import { fullDateVN } from "@/utils/date";
import { WeddingInfo } from "@/data/websiteDataInfo";
import { SectionTitle } from "@/components/shareds/SectionTitle";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

interface CoupleInviteProps {
  coupleInfo: CoupleModel;
  weddingInfo: WeddingModel;
  scrollDownRef: any;
}

export function CoupleInvite({ coupleInfo, scrollDownRef }: CoupleInviteProps) {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <>
      <section
        id="couple"
        className="container mx-auto overflow-x-hidden"
        ref={scrollDownRef}
      >
        <div className="my-10 lg:my-32 px-4 lg:px-10 w-full xl:w-4/5 min-h-[85vh] md:min-h-0 mx-auto">
          <div className="w-full flex flex-col justify-center">
            <div className="flex flex-col items-center mb-12 md:mb-28">
              <div className={"lg:mb-10"}>
                <SectionTitle title="Xin chào!"></SectionTitle>
              </div>
              <div data-aos="zoom-in" data-aos-offset="100">
                <TypeAnimation
                  sequence={[
                    fullDateVN(WeddingInfo.weddingDate),
                    500,
                    () => setShowSecond(true), // hiển thị dòng tiếp theo sau khi gõ xong
                  ]}
                  wrapper="h3"
                  speed={50}
                  className="text-xl md:text-2xl font-[Dancing_Script] text-rose-500 text-center mb-2"
                  repeat={0}
                  cursor={false}
                />

                {showSecond && (
                  <TypeAnimation
                    sequence={[
                      "Chúng tôi trân trọng mời bạn đến chung vui trong ngày cưới của chúng tôi.",
                      800,
                    ]}
                    wrapper="p"
                    speed={50}
                    className="text-xl md:text-md text-rose-400 text-center font-[Dancing_Script]"
                    repeat={0}
                    cursor={false}
                  />
                )}
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row">
              <div className="flex flex-row-reverse items-center mb-24 md:mb-auto lg:space-x-3">
                <div
                  className="flex ml-4 "
                  data-aos="flip-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="w-40 h-40 lg:w-52 lg:h-52">
                    <Image
                      src={coupleInfo.male.avatar.src}
                      width={coupleInfo.male.avatar.with}
                      height={coupleInfo.male.avatar.height}
                      alt={coupleInfo.male.fullName}
                      className="object-cover object-center w-40 h-40 lg:w-52 lg:h-52 rounded-full"
                    />
                  </div>
                </div>
                <div
                  className="flex space-y-2 flex-col"
                  data-aos="fade-up-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                >
                  <div>
                    <h3 className="text-right text-4xl lg:text-5xl font-semibold text-pink-600 font-[Dancing_Script]">
                      {coupleInfo.male.fullName}
                    </h3>
                  </div>

                  <p className="text-right text-base text-pink-500 lg:leading-8 font-[Dancing_Script]">
                    {coupleInfo.male.description}
                  </p>
                </div>
              </div>

              <div className="absolute w-14 h-14 top-[45%] md:top-[33%] left-[42%] md:left-[45%] lg:left-[46%] 2xl:left-[46.7%] animate__animated animate__pulse animate__infinite z-30">
                <div className="relative bg-white rounded-full w-14 h-14 flex items-center justify-center animated animate__zoomIn animate__delay-3s opacity-0">
                  <div className="absolute flex items-center justify-center -left-[0.4rem] scale-[0.3] heart"></div>
                </div>
              </div>
              <div className="flex items-center lg:space-x-3">
                <div
                  className="flex mr-4"
                  data-aos="flip-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="w-40 h-40 lg:w-52 lg:h-52">
                    <Image
                      src={coupleInfo.female.avatar.src}
                      width={coupleInfo.female.avatar.with}
                      height={coupleInfo.female.avatar.height}
                      alt={coupleInfo.female.fullName}
                      className="object-cover object-center w-40 h-40 lg:w-52 lg:h-52 rounded-full"
                    />
                  </div>
                </div>
                <div
                  className="flex space-y-2 flex-col"
                  data-aos="fade-up-left"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                >
                  <div>
                    <h3 className="text-left text-4xl lg:text-5xl font-semibold text-pink-600 font-[Dancing_Script]">
                      {coupleInfo.female.fullName}
                    </h3>
                  </div>
                  <p className="text-left text-base text-pink-500 lg:leading-8 font-[Dancing_Script]">
                    {coupleInfo.female.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
