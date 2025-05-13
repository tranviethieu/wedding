import Image from "next/image";
import React, { useState } from "react";
import { SectionTitle } from "@/components/shareds/SectionTitle";

export function Gallery() {
  const [galleries] = useState(Array(9).fill(0));

  return (
    <>
      <section className="container mx-auto" id="album">
        <div className="w-full mx-auto py-20 px-3">
          <div className="flex flex-col w-full mb-10 lg:mb-20">
            <div className={"flex flex-col items-center mb-6 "}>
              <h1 className="text-pink-400 font-black text-5xl sm:text-6xl md:text-7xl"></h1>
            </div>
            <SectionTitle title="Album Ảnh Cưới"></SectionTitle>
            <div className="text-center">
              <q className="italic md:text-lg lg:text-xl font-[Dancing_Script]">
                Tình yêu từ người khác mang đến cho ta sức mạnh, còn tình yêu ta
                dành cho người khác mang đến cho ta sự dũng cảm.
              </q>
            </div>
          </div>
          <div className="w-full columns-2 lg:columns-3 gap-4 lg:gap-8 space-y-4 lg:space-y-8">
            {galleries.map((_, index) => (
              <Image
                key={index}
                className={`transition-all duration-1000 ease-linear w-full h-full`}
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                data-aos-delay={100 + (index + 1)}
                src={`/images/galleries/${index + 1}.jpg`}
                width={500}
                height={500}
                alt="Love"
              ></Image>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
