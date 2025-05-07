import React from "react";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FloatingToggleMusicProps {
  toggle: any;
  playing: boolean;
}

const FloatingToggleMusic = (props: FloatingToggleMusicProps) => {
  return (
    <div
      className="fixed top-4 right-4 z-50 cursor-pointer bg-white p-2 rounded-full shadow-md text-center w-8 flex"
      onClick={props?.toggle}
    >
      <FontAwesomeIcon
        icon={props?.playing ? faPause : faPlay}
        color="#414141"
      />
    </div>
  );
};

export default FloatingToggleMusic;
