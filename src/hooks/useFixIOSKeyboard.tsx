import { useEffect } from "react";

export const useFixIOSKeyboard = () => {
  useEffect(() => {
    const handleFocus = () => {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    };

    const handleBlur = () => {
      document.body.style.position = "";
      document.body.style.width = "";
    };

    window.addEventListener("focusin", handleFocus);
    window.addEventListener("focusout", handleBlur);

    return () => {
      window.removeEventListener("focusin", handleFocus);
      window.removeEventListener("focusout", handleBlur);
    };
  }, []);
};
