"use client";
import {
  ChatBubbleLeftIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";
import { MutableRefObject, useEffect, useRef, useState } from "react";

export function FixedIcon() {
  const mp3Ref: MutableRefObject<HTMLAudioElement | null> = useRef(null);
  const [isPlayMp3, setIsPlayMp3] = useState(false);

  const playMp3 = (_isPlayMp3: boolean) => {
    setIsPlayMp3(_isPlayMp3);
    if (_isPlayMp3) {
      mp3Ref.current
        ?.play()
        .then((r) => console.log(r))
        .catch((e) => console.log(e))
        .catch((er) => console.log(er));
    } else {
      mp3Ref.current?.pause();
    }
  };

  const onPlayMp3 = () => {
    playMp3(!isPlayMp3);
  };

  useEffect(() => {
    document.querySelector("#main")?.addEventListener("click", () => {
      // playMp3(true);
    });
  }, []);
  return (
    <>
      <div className="fixed z-50 bottom-10 left-6 sm:right-6 sm:left-auto space-y-5">
        <a href="#send-wish">
          <div
            className="p-3 rounded-full z-50 bg-pink-500 hover:bg-pink-600 hover:scale-110 cursor-pointer"
            title="Gửi lời chúc"
          >
            <ChatBubbleLeftIcon className="w-5 h-5 text-white"></ChatBubbleLeftIcon>
          </div>
        </a>

        <div
          className="relative play-mp3 p-3 mt-2 rounded-full z-50 bg-pink-500 hover:bg-pink-600 hover:scale-110 cursor-pointer"
          title="Phát nhạc"
        >
          {isPlayMp3 && (
            <SpeakerWaveIcon className="play-mp3 w-5 h-5 text-white"></SpeakerWaveIcon>
          )}
          {!isPlayMp3 && (
            <SpeakerXMarkIcon className="play-mp3 w-5 h-5 text-white"></SpeakerXMarkIcon>
          )}
          <div
            onClick={() => onPlayMp3()}
            className="absolute  bg-opacity-0 z-[51] w-full top-0 left-0 rounded-full h-full"
          ></div>
        </div>
      </div>

      <audio src="/music/Xa-La.mp3" ref={mp3Ref} className="hidden"></audio>
    </>
  );
}
