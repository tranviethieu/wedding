import { useState, useEffect } from "react";

const preloadImage = (src: string): Promise<void> =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve(); // don't block on error
    img.src = src;
  });

export const useImagePreloader = (images: string[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise.all(images.map(preloadImage)).then(() => setLoaded(true));
  }, []);

  return loaded;
};
