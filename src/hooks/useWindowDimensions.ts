import { Dispatch, SetStateAction } from "react";

export function useWindowDimensions() {
  return {
    getWidth() {
      return window.innerWidth;
    },
   
    changeRenderByResize(setState: Dispatch<SetStateAction<number>>) {
      function debounce(func: () => void, timeout = 300) {
        let timer: ReturnType<typeof setTimeout>;
    
        return () => {
          clearTimeout(timer);
          timer = setTimeout(func, timeout);
        };
      }

      const screenWidth = debounce(() => setState(window.innerWidth));
  
      window.addEventListener('resize', screenWidth);
    },
  
  }
}