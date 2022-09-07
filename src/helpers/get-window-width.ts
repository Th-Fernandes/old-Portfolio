import type { Dispatch, SetStateAction } from 'react';

export const windowWidth = {
  get() {
    return window.innerWidth;
  },

  changeHeaderRenderByResize(setState: Dispatch<SetStateAction<number>>) {
    const screenWidth = this.debounce(() => setState(this.get()));

    window.addEventListener('resize', screenWidth);
  },

  debounce(func: () => void, timeout = 300) {
    let timer: ReturnType<typeof setTimeout>;

    return (...args: []) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  },
};
