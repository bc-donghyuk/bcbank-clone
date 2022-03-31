export const sizes = {
  mobile: 768,
  desktop: 1200,
};

export const isMobile = () => window.matchMedia(`screen and (max-width: ${sizes.mobile}px)`).matches;
export const isDesktop = () => window.matchMedia(`screen and (min-width: ${sizes.desktop}px)`).matches;

export const devices = {
  mobile: `(max-width: ${sizes.mobile}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
};
