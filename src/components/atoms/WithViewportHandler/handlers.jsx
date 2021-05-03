export const getViewPortState = config => {
  const width = window.innerWidth;
  const { mobile, tablet, desktop, desktopLarge } = (() =>
    Object.assign({}, breakpoints, config))();
  if (width >= mobile && width < tablet) {
    return 'mobile';
  }
  if (width >= tablet && width < desktop) {
    return 'tablet';
  }
  if (width >= desktop && width < desktopLarge) {
    return 'desktop';
  }
  return 'desktopLarge';
};

export const breakpoints = {
  // BREAKPOINT FOR STYLED COMPONENTS
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  desktopLarge: 1500,
};

export default {
  getViewPortState,
  breakpoints,
};

