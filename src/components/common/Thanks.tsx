import Image from "next/image";

export function Thanks() {
  return (
    <>
      <div className="thanks-wrapper flex flex-col items-center justify-center w-full bg-[url('/images/bg/footer-shape.png')] bg-[length:100%] bg-local bg-no-repeat relative">
        <div className="w-full h-full lg:w-1/2 lg:h-1/2">
          <Image
            className="w-full h-full"
            src="/images/footer_shape.png"
            width={1200}
            height={1200}
            alt="Love"
          ></Image>
        </div>
        <div
          className={
            "absolute text-6xl md:text-8xl lg:text-8xl  2xl:text-9xl top-[10%] font-semibold  italic font-[Dancing_Script]"
          }
        >
          Thank You!
        </div>
      </div>
    </>
  );
}
