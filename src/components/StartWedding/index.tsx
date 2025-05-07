import React from "react";

interface FrontCoverProps {
  femaleName: string;
  maleName: string;
  guestName: string;
  place: string;
  onClick: () => void;
}

const StartWedding = (props: FrontCoverProps) => {
  return (
    <section
      className="aycawd-fullbg"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div
            className="mt-4 p-4"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <p className="mb-2 text-center text-white text-lg">
              The Wedding Of
            </p>
            {props.place === "kdr" ? (
              <h4 className="mb-1 text-center text-white font-bold text-2xl">
                {props.maleName} & {props.femaleName}
              </h4>
            ) : (
              <h4 className="mb-1 text-center text-white font-bold text-2xl">
                {props.femaleName} & {props.maleName}
              </h4>
            )}
            {props.guestName.length !== 0 && (
              <>
                <p className="mb-1 text-center text-white text-lg">Untuk</p>
                <p className="mb-3 text-center text-white text-xl font-semibold">
                  {props.guestName}
                </p>
              </>
            )}
            <div className="flex justify-center">
              <button
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-[parisienne] hover:bg-gray-200"
                onClick={props.onClick}
              >
                Open Invitation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartWedding;
