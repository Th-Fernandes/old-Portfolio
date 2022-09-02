export const windowWidth = {
  get() {
    return window.innerWidth;
  },

  changeHeaderRenderByResize(setState:any) {
    const screenWidth = this.debounce(() => setState(window.innerWidth));
    window.addEventListener('resize', screenWidth);
  },

  debounce(func:() => void, timeout = 300) {
    let timer:ReturnType<typeof setTimeout>;

    return (...args:[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
}